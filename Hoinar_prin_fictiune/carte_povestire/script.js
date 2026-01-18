// 1. Selecteaza toate paginile cartii
const pages = document.querySelectorAll('.page');

//Variabila pentru a urmari pagina curenta
let currentPageIndex = 0;

// 2. Adauga un "ascultator" de evenimente pe intreaga carte (sau pe o zona definita)
const bookElement = document.querySelector('.book');

bookElement.addEventListener('click', () => {
    //Verifica daca mai sunt pagini de rasfoit
    if (currentPageIndex < pages.length) {
        
        // 3. Rasfoieste pagina curenta (aplica clasa CSS 'flipped')

        pages[currentPageIndex].classList.add('flipped');

        // 4. Trece la urmatoarea pagina
        currentPageIndex++;

        // 5. Optional: Adu in fata urmatoarea pagina vizibila (doar pentru un aspect mai fin)
        // Setam z-index-ul pentru pagina urmatoare
        if (pages[currentPageIndex]) {
            pages[currentPageIndex].style.zIndex = pages.length - currentPageIndex;
        }
    } else {
        //Optional: Resetarea cartii dupa ce s-a ajuns la ultima pagina
        alert("Ai ajuns la sfârșitul cărții! Răsfoirea va fi resetată.");
       

        //Scoate clasa 'flipped' de pe toate paginile
        pages.forEach((page) => {

            page.classList.remove('flipped');
        });

        //Reseteaza indexul la coperta
        currentPageIndex = 0;

        //Reseteaza z-index-ul initial (pentru paginile care nu sunt vizibile)
        pages.forEach((page, index, cover) => {
            //O logica simpla pentru a reseta z-index-ul,

            //de exemplu, in ordinea lor initiala
            page.style.zIndex = pages.length - index;
        });
    }
});

//Optional: Seteaza z-index-ul initial pentru a asigura ordinea corecta de stivuire
pages.forEach((page, index) => {
    //Z-index-ul cel mai mare pentru prima pagina
    page.style.zIndex = pages.length - index;
});