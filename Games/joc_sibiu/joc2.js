const storyTextElement = document.getElementById('story-text');
const choicesContainerElement = document.getElementById('choices-container');

//Obiectul "story" va conține toate segmentele povestirii și alegerile
const story = {
    start: {
        text: "Sibiul te întâmpină într-o după-amiază. Te asuprește. Te gândești unde te-ai îndepărtat. Ce faci?",
        choices: [
            { text: "Cazi și spui \"sunt bine\". ", next: "podulMinciunilor" },
            { text: "Te vaiți?", next: "ochiSibiu" },
            {text:"Te gândești la minciuni, una după alta, și se vrea otrăvuri. Ce s-ar mai netezi în sul de simț, spre pământ?", next: "minciuniInterne" }
        ],
        image: 'ceata_sibiu.jpg' //O imagine relevantă pentru acest nod
    },

    podulMinciunilor: {
        text: "Auzi legende despre Podul Minciunilor. Stai pe el, singur(ă), și simți vântul aspru. Îți dorești să crezi că totul e doar o poveste, dar în adâncul tău, știi că e mai mult de atât. Îți spui că ești bine, dar podul pare să îți râdă în față.",
        choices: [
            { text: "Recunoști că nu ești bine.", next: "introspecție" },
            { text: "Încerc să ignor, să mă prefac că sunt puternic(ă).", next: "iluzie" }
        ],
        image: 'podul_minciunilor.jpg'
    },

    ochiSibiu: {
        text: "Acoperișurile vechi cu \"ochi\" par să te urmărească. Fiecare geam pare o privire curioasă, dar lipsită de judecată. Te simți expus(ă), dar și eliberat(ă) sub privirile lor tăcute. Ce cauți cu adevărat aici?",
        choices: [
            { text: "Adevărul despre mine.", next: "introspecție" },
             { text: "O distragere de la mine.", next: "iluzie" }
        ],
        image: 'acoperisuri_sibiu.avif'
    },

    minciuniInterne: {
        text: "Gânduri întunecate despre propriile tale minciuni îți învălmășesc mintea. Minciuni spuse altora, dar mai ales ție însuți. Sentimentul de gol e copleșitor. Ce faci cu această conștientizare?",
        choices: [
            { text: "O accept și mă confrunt cu ea.", next: "introspecție" },
            { text: "O resping, e prea dureros.", next: "iluzie" }
        ],
        image: 'ganduri_intunecate.jpg' //O imagine abstractă sau o stradă întunecată
    },

    introspectie: {
    text: "Ai ales să privești înăuntru. Durerea este reală, dar odată cu ea vine și o formă ciudată de liniște. Sibiul te-a forțat să te așezi lângă tine, să bei o cafea amară și să recunoști tot ce purtai. Poate nu ai găsit un răspuns, dar ai găsit o formă de acceptare. Aceasta este o formă de eliberare melancolică.",
        choices: [
            { text: "Sfârșitul (Acceptare)" }
    ],
            image:'cafea_sibiu.jpg' //O cafea într-un cadru sibian
},
         
iluzie: {
    text: "Ai încercat să fugi, să te prefaci, să ignori. Dar Sibiul nu-ți permite asta. Fiecare pas pe străzile vechi te aduce înapoi la golul interior. Fugi mai departe, dar spre ce? Rămâi blocat(ă) într-o iluzie, iar melancolia se adâncește fără nicio speranță de rezolvare.",
        choices: [
            { text: "Sfârșitul (Reîncepe)" }
    ],
            image: 'ceata_sibiu.jpg' //O imagine cu ceață sau un drum fără sfârșit
},
         //Poți adăuga mai multe noduri și ramificații aici
};

let currentStoryNode = 'start'; //Nodul de la care începe jocul

function startGame() {
    currentStoryNode = 'start';
    displayNode(currentStoryNode);
}

function displayNode(nodeId) {
    const node = story[nodeId];
    if (!node) {
        storyTextElement.innerHTML = "<p class='end-game'>Ați ajuns la un sfârșit neașteptat. Reîncepeți?</p>";
        choicesContainerElement.innerHTML = `<button class="choice-button" onclick="startGame()">Reîncepe jocul</button> `;

        document.querySelector('.background-image').style.backgroundImage = `url('sibiu_background.jpg')`; //Revine la imaginea inițială
        return;
    }

    storyTextElement.innerHTML = `<p>${node.text}</p>`;
    choicesContainerElement.innerHTML = ''; //Golește alegerile anterioare

    //Actualizează imaginea de fundal, dacă există o imagine specifică pentru nod
    if (node.image) {
        document.querySelector('.background-image').style.backgroundImage = `url('${node.image}')`;
    }

    node.choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add('choice-button');
        button.innerText = choice.text;
        button.onclick = () => choose(choice.next);

        choicesContainerElement.appendChild(button);
    });

    //Dacă este un nod final, adaugă un buton de restart
    if (node.choices.leght === 1 && node.choices[0].text.includes("Sfârșitul")) {
        const restartButton = document.createElement('button');

        restartButton.classList.add('choice-button');
        restartButton.innerText = "Reîncepe jocul";
        restartButton.onclick = startGame;

        choicesContainerElement.appendChild(restartButton);
        //Scoate butonul "Sfârșitul" dacă este deja ultimul nod
        if
            (node.choices[0].text.includes("(Acceptare)") ||
            node.choices[0].text.includes("(Reîncepe)")) {
            choicesContainerElement.querySelector('.choice-button').remove(); //Elimină butonul "Sfârșitul"
            }
    }
}

function choose(nextChoice) {
    if (nextChoice) {
        currentStoryNode = nextChoice;
        displayNode(currentStoryNode);
    } else {
        //Dacă nu există o alegere ulterioară, este un sfârșit
        storyTextElement.innerHTML = "<p class='end-game'>Ați ajuns la un sfârșit. Reîncepeți?</p>";
        choicesContainerElement.innerHTML = `<button class="choice-button" onclick="startGame()">Reîncepe jocul</button> `;
    }
}

//Inițializează jocul la încărcarea paginii
startGame();

