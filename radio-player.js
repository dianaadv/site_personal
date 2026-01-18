//1. Obținem referința la elementele HTML
      const playerRadio = document.getElementById('player-radio');
      const butonRadio = document.getElementById('live-radio');

      //2. Adaugam un "ascultator de evenimente" pe butonul de radio
butonRadio.addEventListener('change', function () {
    if (this.checked) {
        //Butonul este BIFAT (ON)
        playerRadio
            .play()
            .then(() => {
                console.log("Redarea a inceput!");
            })
            .catch(error => {
                //Adesea, play() e blocat de browser.
                //Poti afisa un mesaj aici (ex: "Apasa inca o data pentru a porni")

                console.error("Redarea a fost blocata de browser:", error);
            });
    } else {
        //Butonul este DEZBIFAT (OFF)
        playerRadio.pause();
    }
});