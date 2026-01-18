//Selecteaza TOATE elementele cu clasa 'buton-abilitate'
const butoane = document.querySelectorAll('.buton-abilitate');

//Itereaza peste fiecare buton gasit
butoane.forEach(buton => {
    buton.addEventListener('click', function () {
        //Ia ID-ul elementului tinta din atributul data-target
        const targetId = this.getAttribute('data-target');
        //Gaseste elementul detaliu corespunzator
        const detaliu = document.getElementById(targetId);
        //Toggle (schimba) stilul/clasa elementului detaliu
        if (detaliu.style.display === 'block') {
            detaliu.style.display = 'none';
        } else {
            detaliu.style.display = 'block';
        }
    });
});
