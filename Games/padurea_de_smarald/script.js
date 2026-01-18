//Referinte catre elementele HTML
const povesteElement = document.getElementById('poveste');
const optiuniElement = document.getElementById('optiuni');



//Functie ajutatoare pentru afisarea textului si optiunilor
function afiseazaScena(text, optiuniHTML) {
    povesteElement.innerHTML = text;
    optiuniElement.innerHTML = optiuniHTML;
}

// ------------------------ SCENELE JOCULUI ------------------------------------
function startJoc() {
    const textStart = `Ești la marginea Pădurii de Smarald. Soarele abia pătrunde prin coroana deasă a copacilor. 
    În fața ta se deschid două drumuri.
    Vrei să intri pe Cărarea Scurtă, care pare mai rapidă dar e umbrită, sau pe Drumul Lung și Misterios?`;
    const optiuniStart  = `
    <button onclick = "carareaScurta()">Alege Cărarea Scurtă</button>
    <button onclick = "drumulLung()">Alege Drumul Lung</button>`;
    afiseazaScena(textStart, optiuniStart);
}

function carareaScurta() {
    const infoVeverita = ` <div class = "info-animal">
                             
                            Veverițele roșcate sunt foarte agile. Își construiesc cuiburi în copaci și își amintesc cu ușurință unde ascund proviziile (nuci, ghinde) pentru iarnă. </div>`;
    const textScena = `Ai ales Cărarea Scurtă. Mergi mai repede, dar e mai întunecat.
                        Dintr-o dată, auzi un zgomot deasupra ta. O Veveriță roșcată te privește dintr-un copac.
                        ${infoVeverita}
                        Ea scapă o alună. Vrei să o ajuți să o găsească, petrecând timp prețios, sau să îți continui drumul rapid?`;
    const optiuniScena = `<button onclick = "ajutaVeverita()"> Ajută Veverița </button>
                            <button onclick = "continuaDrumul()"> Continuă Drumul </button>`;
    afiseazaScena(textScena, optiuniScena);
   
}

function drumulLung() {
    const infoCerb = `<div class = "info-animal">
                       
                        Cerbul carpatin este cel mai mare animal sălbatic din pădurile noastre. Doar masculii au coarne, pe care le leapădă în fiecare primăvară. Cerbii sunt ierbivori și se hrănesc mai ales în zori sau la amurg. </div>`;
    const textScena = `Ai ales Drumul Lung și Misterios. Acesta șerpuiește printre arbori bătrâni.
                        În luminiș, vezi o siluetă impunătoare. Este un Cerb cu coarne mari, care se hrănește liniștit.
                        ${infoCerb}
                        Vrei să faci o poză (riscând să-l sperii cu zgomotul) sau să te ascunzi în spatele unui tufiș și să-l observi în liniște?`;
    const optiuniScena = `<button onclick = "sperieCerbul()"> Fă o poză rapid </button>
                            <button onclick = "observaCerbul()"> Observă-l în tăcere </button>`;
    afiseazaScena(textScena, optiuniScena);
    
}

// -----------------------------------FINALURILE JOCULUI ---------------------------
function ajutaVeverita() {
    const textFinal = `Căutând, găsești aluna. Veverița scoate un sunet mulțumit. Ca recompensă, îți arată o scurtătură bine ascunsă.
        <p class="final-joc">👏 Sfârșit bun! Ai ajuns în siguranță, fiind răsplătit pentru ajutorul dat unui animăluț! 👏</p>`;
    afiseazaScena(textFinal, `<button onclick="startJoc()">Joacă Din Nou</button>`);
    
}

function continuaDrumul() {
    const textFinal = `Ai decis să nu te oprești. Continuând pe Cărarea Scurtă, ajungi la un râu lat fără pod. Nu ai cum să treci.
                            <p class="final-joc">❌ Sfârșit nefavorabil. Ai rămas blocat la râu! ❌</p>`;
    afiseazaScena(textFinal, `<button onclick="startJoc()">Joacă Din Nou</button>`);
    
}

function sperieCerbul() {
    const textFinal =
        `Zgomotul camerei îl sperie pe Cerb! El fuge, iar tu te-ai îndepărtat prea mult de cărare în încercarea de a obține poza perfectă.
            <p class="final-joc">⚠️ Sfârșit periculos. Te-ai rătăcit! Data viitoare, respectă liniștea animalelor. ⚠️</p>`;
    afiseazaScena(textFinal, `<button onclick="startJoc()">Joacă Din Nou</button>`);
    
}

function observaCerbul() {
    const textFinal = `Observi Cerbul în liniște, respectându-i spațiul. După ce pleacă, zărești un indicator pe care Cerbul îl camuflase. Urmezi indicatorul.
    <p class="final-joc">✅ Sfârșit bun! Ai ajuns în siguranță, observând natura cu răbdare și respect! ✅</p>`;
    afiseazaScena(textFinal, `<button onclick="startJoc()">Joacă Din Nou</button>`);
    
}

// --------------------------------- PORNIREA JOCULUI -----------------------------------
//Aceasta linie porneste jocul imediat ce pagina se incarca
window.onload = startJoc;



