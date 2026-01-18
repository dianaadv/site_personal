const questions = [
        {
          text: "Cum ai descrie anul care a trecut?",
          answers: [
            { text: "Plin de provocări", score: 2 },
            { text: "Echilibrat", score: 3 },
            { text: "Surprinzător de bun", score: 4 }
          ]
        },
        {
          text: "Ce ai învățat cel mai mult anul acesta?",
          answers: [
            { text: "Răbdarea", score: 2 },
            { text: "Să am mai multă încredere în mine", score: 4 },
            { text: "Să cer ajutor când am nevoie", score: 3 }
          ]
        },
        {
          text: "Ce îți dorești pentru anul viitor?",
          answers: [
            { text: "Mai multă liniște", score: 3 },
            { text: "Curaj să încep ceva nou", score: 4 },
            { text: "Echilibru și claritate", score: 3 }
          ]
        }
      ];

      let currentQuestion = 0;
      let score = 0;

      const gameDiv = document.getElementById("game");
      const resultDiv = document.getElementById("result");

      function showQuestion() {
        const q = questions[currentQuestion];
        gameDiv.innerHTML = `
        <div class="question">
            <h2>${q.text}</h2>${q.answers.map(a=>`<button onclick="answer(${a.score})">${a.text}</button>`).join("")}
            </div>`;
      }

      function answer(points) {
        score+=points;
        currentQuestion++;

        if (currentQuestion<questions.length) {
          showQuestion();
        } else {
          showResult();
        }
      }

      function showResult() {
        let message="";
        if (score <= 7) {
          message: "Anul acesta te-a învățat să fii mai blând cu tine. Anul viitor este despre creștere, pas cu pas.";
        } else if (score <= 9) {
          message =
            "Ai construit mult, chiar dacă nu totul a fost vizibil. Continuă - ești pe drumul bun.";
        } else {
          message =
            "Ai transformat experiențele în lecții. Anul care vine este pregătit pentru tine.";
        }

        gameDiv.innerHTML = "";
        resultDiv.innerHTML = `<p><strong>${message}</strong><br><br>✨ La mulți ani și un nou început frumos!</p>`;
      }

      showQuestion();