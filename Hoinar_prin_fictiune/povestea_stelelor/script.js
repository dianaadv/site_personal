 //Povestea cu muzica
      const story = {
        "start": {
          title: "Povestea Stelelor",
          text: "Sub cerul nopții, o lumină ciudată se aprinde între doi munți. O poartă rotundă de lumină pulsează ușor. Simți chemarea ei.",
          image: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd",
          music:
            "https://cdn.pixabay.com/audio/2022/03/29/audio_0f47f00414.mp3",
          background: "#000010",
          choices: [
            { text: "Te apropii de poartă", next: "approach" },
            { text: "Te ascunzi și observi de la distanță", next: "observe" },
          ],
        },
        "approach": {
          title: "Chemarea",
          text: "Când te apropii, lumina se intensifică. Simți o vibrație în piept. Poarta pare să respire.",
          image: "poarta.jpg",
          music:
            "https://cdn.pixabay.com/audio/2021/10/01/audio_4b7a1c83f4.mp3",
          background: "#001033",
          choices: [
            { text: "Pășești în poartă", next: "enter" },
            { text: "Fugi înapoi, speriat", next: "flee" },
          ],
        },
        "observe": {
          title: "Privirea din umbră",
          text: "Din întuneric vezi cum poarta se deschide brusc și o siluetă iese din ea. Pare... tu, dar din alt timp.",
          image: "poarta_deschisa.webp",
          music:
            "https://cdn.pixabay.com/audio/2022/10/10/audio_20e2517ee3.mp3",
          background: "#0d001a",
          choices: [
            { text: "Îți confrunți dublura", next: "confront" },
            { text: "Fugi fără să privești înapoi", next: "flee" },
          ],
        },
        "enter": {
          title: "Trecerea",
          text: "Totul devine alb. Când deschizi ochii, plutești printre stele. Poarta s-a închis în urma ta.",
          image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
          music:
            "https://cdn.pixabay.com/audio/2021/09/27/audio_b8f7f1ffb7.mp3",
          background: "#020019",
          choices: [
            { text: "Explorează spațiul", next: "explore" },
            { text: "Cauți o cale înapoi", next: "return" },
          ],
        },
        "confront": {
          title: "Tu... și tu",
          text: "Dublura te privește. Îti spune: <<Nu trebuie să fii aici>>. Apoi îți întinde o sferă de lumină.",
          image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
          music:
            "https://cdn.pixabay.com/audio/2022/03/17/audio_c0b2f6063e.mp3",
          background: "#16001a",
          choices: [
            { text: "Atingi sfera", next: "enter" },
            { text: "Refuzi darul", next: "flee" },
          ],
        },
        "flee": {
          title: "Sfârșit fugar",
          text: "Fugi cât te țin picioarele. Când privești înapoi, poarta s-a stins. O liniște grea se lasă peste lume.",
          image: "fuga.jpg",
          music:
            "https://cdn.pixabay.com/audio/2021/09/27/audio_03b7d8bb1b.mp3",
          background: "#1a0900",
          choices: [{ text: "Reîncepe povestea", next: "start" }],
        },
        "explore": {
          title: "Între stele",
          text: "Planete, comete, culori imposibile. Poți merge oriunde, dar nu simți nicio greutate. Poate ești doar un gând.",
          image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
          music:
            "https://cdn.pixabay.com/audio/2022/10/10/audio_29d9824c47.mp3",
          background: "#020033",
          choices: [
            { text: "Devii una cu universul", next: "ascend" },
            { text: "Strigi după ajutor", next: "return" },
          ],
        },
        "return": {
          title: "Întoarcerea imposibilă",
          text: "Poarta nu mai răspunde. Dar în depărtare, o altă lumină se aprinde...",
          image: "https://images.unsplash.com/photo-1447433819943-74a20887a81e",
          music:
            "https://cdn.pixabay.com/audio/2021/09/28/audio_2917ed5b9f.mp3",
          background: "#000019",
          choices: [{ text: "Urmezi noua lumină", next: "start" }],
        },
        "ascend": {
          title: "Finalul cosmic",
          text: "Te dizolvi în lumină. Devii parte din stele. Poarta a fost doar o iluzie a minții tale - sau poate doar începutul.",
          image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
          music:
            "https://cdn.pixabay.com/audio/2023/05/05/audio_2a3df6ed20.mp3",
          background: "#000010",
          choices: [{ text: "Reîncepe povestea", next: "start" }],
        },
      };

      const titleE1 = document.getElementById("title");
      const imageE1 = document.getElementById("image");
      const textE1 = document.getElementById("text");
      const choicesE1 = document.getElementById("choices");
      const container = document.getElementById("story-container");
      const musicE1 = document.getElementById("music");

      function showScene(sceneKey) {
        const scene = story[sceneKey];
        if (!scene) return;

        document.body.style.background = scene.background || "#000";
        titleE1.textContent = scene.title;
        textE1.textContent = scene.text;
        imageE1.src = scene.image;
        musicE1.src = scene.music;
        musicE1.volume = 0.6;

        //Fade transition
        container.classList.remove("fade");
        void container.offsetWidth;
        container.classList.add("fade");

        //Buttons
        choicesE1.innerHTML = "";
        scene.choices.forEach((choice) => {
          const btn = document.createElement("button");
          btn.textContent = choice.text;
          btn.onclick = () => showScene(choice.next);
          choicesE1.appendChild(btn);
        });
      }

      showScene("start");