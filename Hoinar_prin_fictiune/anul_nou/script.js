const chapters = [
    {
        title: "Începutul Anului",
        content: "În zorii unei dimineți de 1 Ianuarie, satul părea adormit sub o pătură groasă de zăpadă. Crengile copacilor se îndoiau sub greutatea fulgilor de nea, iar pe străzile înguste și luminate doar de felinarele străvechi, se auzea tăcerea specifică unei dimineți de iarnă, atunci când lumea încă se mai bucură de visul nopții."
    },

    {
        title: "Cei trei mușchetari",
        content: "Într-un colț al satului, într-o casă modestă cu pereți albi și o fereastră mare, Lunaris, Fiorina și Eldrin, trei copii veseli, se pregăteau pentru cea mai frumoasă tradiție: Sorcova. De când erau mici, în fiecare 1 Ianuarie, se adunau laolaltă cu toți copiii din sat pentru a merge de la o casă la alta, aducând bucurie și noroc pentru anul ce începea. 'Astăzi vom cânta Sorcova pentru toți! Pentru că anul acesta, mama spunea că va fi mai bun, cu mai multe zâmbete și mai multe bucurii!', spuse Lunaris în timp ce își punea o eșarfă roșie și își împodobea coșulețul cu flori de hârtie. Eldrin rîse și zise: 'Dacă Sorcova poate aduce fericire, atunci să o cântăm cât de tare putem! Să fim cei mai veseli copii din sat!'"
    },
    {
        title: "Sorcova Vesela",
        content: " Și așa, cu inima plină de nerăbdare, cei trei porniră la drum. Mărșăluiau pe trotuarele înghețate, iar fiecare casă pe care o întâlneau devenea un loc magic unde speranțele și dorințele pentru un an mai bun prindeau viață. ”Sorcova vesela, să trăiți, să înfloriți, ca un măr, ca un păr, ca un fir de trandafir...” - cântau copiii cu toată puterea lor, iar ecoul vesel al colindului se răspândea peste sat. La fiecare ușă deschisă, zâmbetele bătrânilor și ale celor tineri se lăsau văzute ca un dar de Crăciun mai întârziat, dar la fel de prețios."
    },
    {
        title: "La Casa Bunicului Minion",
        content: "La casa bunicului Minion, Lunaris, Fiorina și Eldrin își opriră călătoria pentru un moment de pauză. Bunicul îi întâmpină cu un zâmbet cald, cu ochii strălucind de amintiri din propria copilărie, când și el mergea cu Sorcova. ”Cât de frumos cântați! Îmi aduceți aminte de vremurile când eram și eu mic, iar fiecare vis era la fel de curat și plin de speranță ca acum, în prima zi a anului.” ”Să aveți un an minunat, bunicule!” - zise Fiorina, în timp ce îi întindea o floare de hârtie, simbol al iubirii și respectului.” ”Și vouă! Să creșteți mari și sănătoși și să aveți mereu curajul să sperați!”, răspunse bunicul, iar privirea lui parcă se pierdea în zăpada ce cădea lin din cer."
    },
    {
        title: "Finalul Tradiției",
        content: "Copiii plecară mai departe, iar casa următoare le deschise ușa cu aceeași căldură. Așa se întâmpla în fiecare an: tradiția Sorcovei lega oamenii printr-o dorință comună de bine, iar anii ce treceau păreau mai ușori atunci când oamenii își ofereau, printr-un simplu colind, un strop de fericire. Pe măsură ce soarele se ridica pe cer, copiii ajunseră acasă obosiți, dar plini de bucurie. Aveau un sentiment cald în suflet, căci știau că acea tradiție simplă și frumoasă adusese mai mult decât zâmbete - adusese un strop de magie. ”A fost cel mai frumos început de an, Eldrin! Poate că anul acesta, toți copiii din sat vor avea noroc, pentru că noi am cântat Sorcova din tot sufletul”, spuse Lunaris, așezându-se lângă fereastra care dădea spre drumul înghețat. ”Și cine știe”, răspunse Eldrin, ”poate că și noi vom avea parte de o primăvară cu flori mai multe și o vară cu rîsete fără sfârșit.” Și astfel, cu fiecare pas făcut de acei copii, tradiția Sorcovei continua să țese legături între oameni, să ofere speranță și să aducă lumină în fiecare colț al satului, iar anul care începea devenea, cu adevărat, mai frumos."
    },
];

let currentChapterIndex = 0;

const storyTitle = document.getElementById('story-title');
const storyContent = document.getElementById('story-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function renderChapter() {
    storyTitle.textContent = chapters[currentChapterIndex].title;
    storyContent.textContent = chapters[currentChapterIndex].content;
    
    if (currentChapterIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline-block';
    }

    if (currentChapterIndex === chapters.length - 1) {
        nextBtn.textContent = 'Sfârșitul Poveștii';
        nextBtn.disabled = true;
    } else {
        nextBtn.textContent = 'Capitolul Următor';
        nextBtn.disabled = false;
    }
}

function nextChapter() {
    if (currentChapterIndex < chapters.length - 1) {
        currentChapterIndex++;
        renderChapter();
    }
}

function prevChapter() {
    if (currentChapterIndex > 0) {
        currentChapterIndex--;
        renderChapter();
    }
}



// Inițializează povestea la încărcarea paginii
document.addEventListener('DOMContentLoaded', renderChapter);
