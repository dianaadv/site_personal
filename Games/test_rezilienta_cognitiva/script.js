//Datele principale ale jocului
      const words = ["ROȘU", "ALBASTRU", "VERDE", "GALBEN"];
      const colors = ["red", "blue", "green", "gold"]; //gold in loc de yellow pentru contrast

      //Elemente DOM
      const wordDisplay = document.getElementById("word-display");
      const scoreDisplay = document.getElementById("score-display");
      const timerDisplay = document.getElementById("timer-display");
      const resultMessage = document.getElementById("result-message");
      const btnStart = document.getElementById("btn-start");
      const colorButtons = document.querySelectorAll(".color-btn");

      //Variabile de stare
      let score = 0;
      let timeLeft = 60; //Timpul de joc in secunde
      let timerInterval;
      let currentColor = ""; //Culoarea corecta a vopselei (raspunsul)
      let gameRunning = false;

      //----------------------------------------------------------------------------------------------------------
      // 1. FUNCȚII UTILITARE
      // ---------------------------------------------------------------------------------------------------------

      /**Alege un element aleatoriu dintr-un array*/
      function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      /**Genereaza o noua sarcina Stroop*/
      function generateTask() {
        //1. Alege cuvantul de afisat (textul)
        const wordText = getRandomElement(words);

        //2. Alege culoarea CSS (culoarea vopselei = RASPUNSUL CORECT)
        currentColor = getRandomElement(colors);

        //Asigura o sansa de 20% ca cuvantul si culoarea sa se potriveasca (Caz Simplu)
        let textColor = currentColor;
        if (Math.random() > 0.8) {
          //80% din timp alege o culoare diferita pentru a crea conflict
          let conflictColors = colors.filter((c) => c !== currentColor);
          textColor = getRandomElement(conflictColors);
        }

        //Afiseaza in DOM
        wordDisplay.textContent = wordText;
        wordDisplay.style.color = textColor;
      }

      /**Gestioneaza reactia la apasarea butonului*/
      function handleButtonClick(event) {
        if (!gameRunning) return;

        const selectedColor = event.target.getAttribute("data-color");
        let isCorrect = selectedColor === currentColor;

        updateScore(isCorrect);
        giveFeedback(isCorrect);

        //Genereaza urmatoarea sarcina imediat
        generateTask();
      }

      /**Actualizeaza scorul si afiseaza*/
      function updateScore(isCorrect) {
        if (isCorrect) {
          score += 1;
        } else {
          score = Math.max(0, score - 1); //Scade puncte, dar nu sub zero
        }
        scoreDisplay.textContent = `Scor: $ {score}`;
      }

      /**Ofera feedback vizual scurt*/
      function giveFeedback(isCorrect) {
        const feedbackClass = isCorrect ? "correct" : "wrong";

        wordDisplay.classList.add(feedbackClass);

        //Elimina clasa dupa un timp scurt pentru urmatorul test
        setTimeout(() => {
          wordDisplay.classList.remove(feedbackClass);
        }, 100);
      }

      //------------------------------------------------------------------------
      //2. LOGICA JOCULUI
      //------------------------------------------------------------------------

      /**Porneste Jocul*/
      function startGame() {
        if (gameRunning) return;

        //Resetare
        score = 0;
        timeLeft = 60;
        gameRunning = true;

        //UI Update
        btnStart.classList.add("hidden");
        colorButtons.forEach((btn) => (btn.style.display = "inline-block"));

        resultMessage.classList.add("hidden");
        scoreDisplay.textContent = "Scor: 0";
        wordDisplay.style.color = "#333";
        wordDisplay.textContent = "ATENȚIE";

        //Porneste cronometrul si prima sarcina
        setTimeout(() => {
          generateTask();
          startTimer();
        }, 1000); //Da timp jucatorului sa se pregateasca
      }

      /**Gestioneaza cronometrul*/
      function startTimer() {
        timerInterval = setInterval(() => {
          timeLeft--;
          timerDisplay.textContent = `Timp: ${timeLeft}s`;

          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
          }
        }, 1000);
      }

      /**Finalizeaza Jocul*/
      function endGame() {
        gameRunning = false;
        colorButtons.forEach((btn) => (btn.style.display = "none"));
        btnStart.classList.remove("hidden");

        wordDisplay.textContent = `Joc Terminat!`;
        wordDisplay.style.color = "#2c3e50";

        displayResult();
      }

      /**Afiseaza analiza psihologica si optiunea de share*/
      function displayResult() {
        resultMessage.classList.remove("hidden");
        let analysis;
        let className;

        if (score >= 50) {
          analysis = `🧠 **Nivel EXCEPTIONAL!** Ai o Rezilienta Cognitiva de Atlet Mental. Procesare ultrarapida!`;
          className = "correct";
        } else if (score >= 35) {
          analysis = `🚀 **Nivel Avansat!** Esti deasupra mediei. Mintea ta se adapteaza rapid la conflict.`;
          className = "correct";
        } else if (score >= 20) {
          analysis = `👍 **Nivel Mediu.** Un rezultat bun! Incearca sa ignori complet textul data viitoare.`;
          className = "wrong";
        } else {
          analysis = `🐢 **Ai fost distras! **Efectul Stroop te-a prins. Practica iti va imbunatati concentrarea.`;
          className = "wrong";
        }

        resultMessage.innerHTML = `**Scorul tau final: ${score}**<br>${analysis}`;
        resultMessage.style.backgroundColor =
          className === "correct" ? "#d4edda" : "#f8d7da";
        resultMessage.style.color =
          className === "correct" ? "#155724" : "#721c24";

        //Adauga buton de share care genereaza continutul pentru social media
        resultMessage.innerHTML += `<br><button onclick="shareResult(${score})" style="margin-top: 10px; padding: 10px; background-color: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">Distribuie Scorul!>`;
      }

      /**Functie simpla de share (simulare)*/
      function shareResult(finalScore) {
        const shareText = `Tocmai am obtinut un scor de ${finalScore} la Testul de Rezilienta Cognitiva! Cat de repede poti ignora conflictul mental? Joaca si tu!
        #JocPsihologic #Cognitie`;
        //In productie, ai folosi API-uri de share sau un simplu copy-to-clipboard.
        alert("Copiaza textul pentru a-l distribui:\n\n" + shareText);
      }

      // ---------------------------------------------------------------
      // 3. INITIALIZARE
      // -------------------------------------------------------
      //Ataseaza handler-ul de evenimente la butoanele de culoare
      colorButtons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
      });

      //Seteaza starea initiala (ascunde butoanele de raspuns la inceput)
      colorButtons.forEach(btn => btn.style.display = "none");