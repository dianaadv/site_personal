function calculateResult() {
    //Definirea scorurilor inițiale
    let scores = {
        A: 0, //Grație
        B: 0, //Liniște
        C: 0 //Atenție
    };

    //Colectarea răspunsurilor la întrebări
    const questions = ['q1', 'q2', 'q3'];
    let allAnswered = true;

    questions.forEach(qName => {
        const selected = document.querySelector(`input[name="${qName}"]:checked`);
        if(selected) {
            scores[selected.value]++;
        } else {
            allAnswered = false; //Dacă o întrebare nu are răspuns
        }
    });

    const resultDiv = document.getElementById( 'result' );
    
    if (!allAnswered) {
        resultDiv.innerHTML = 'Te rog, răspunde la toate cele 3 întrebări pentru a-ți găsi Căprioara!';
        return;
    }

    //Găsirea scorului maxim
    let maxScore = 0;
    let maxType = '';

    for (const key in scores) {
        if (scores[key] > maxScore) {
            maxScore = scores[key];
            maxType = key;
        } else if (scores[key] === maxScore) {
            //Caz de egalitate (de ex., 1A, 1B, 1C), alege A sau B
            maxType = maxType || key;
        }
    }

    //Definirea rezultatelor (poți dezvolta descrierile!)
    let result = '';
    let imageSrc = '';

    switch (maxType) {
        case 'A':
            result = "🦌 **Căprioara Grațioasă!** Superputerea ta este blândețea și te miști prin viață cu o eleganță naturală. Ești mereu în căutarea frumosului și a armoniei vizuale.";
            break;
        case 'B':
            result = "🧘‍♀️ **Căprioara Tăcută!** Superputerea ta este liniștea interioară și meditația. Știi să te oprești, să respiri și să găsești calmul în haos. Ești un ghid al păcii.";
            break;
        case 'C':
            result = "🔭 **Căprioara vigilentă!** Superputerea ta este atenția la detaliu și prezența deplină. Nu-ți scapă nimic și ești extrem de conștient(ă) de mediul tău. Precizia este atuul tău.";
            break;
        default:
            result = "Rezultatul nu a putut fi calculat corect.";
    }
    resultDiv.innerHTML = result;
}
