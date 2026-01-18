const message = [
    "Reflectează la un moment în care ai fost mai puternic decât credeai.",
    "Ce lecție importantă ți-a oferit acest an?",
    "Mulțumește-ți pentru că nu ai renunțat.",
    "Care a fost un pas mic, dar important?",
    "Ce ai face diferit dacă ai avea mai multă încredere?",
    "Cine ți-a fost alături când ți-a fost greu?",
    "Ce obiceiuri ai vrea să lași în urmă?",
    "Ce vis vrei să duci mai departe?",
    "Care a fost cel mai liniștit moment al tău?",
    "Ce ai învățat despre tine anul acesta?",
    "Ce merită sărbătorit, chiar dacă pare mic?",
    "Intră în noul an cu blândețe și curaj."
];

const calendar = document.getElementById("calendar");
const messageBox = document.getElementById("message");
const today = new Date().getDate();
const openedDays = JSON.parse(localStorage.getItem("openedDa-ys")) || [];

//Dark mode persistence
if (localStorage.getItem("darkMode") === "true") { document.body.classList.add("dark"); }

message.forEach((msg, index) => {
    const dayNumber = index + 1;
    const day = document.createElement("div");
    day.textContent = dayNumber;

    if (dayNumber > today) {
        day.className = "day locked";
    } else if (openedDays.includes(dayNumber)) { day.className = "day opened"; }
    else { day.className = "day"; }

    day.addEventListener("click", () => {
        if (day.classList.contains("locked") || day.classList.contains("opened")) return;
        
        day.classList.add("opened");
        openedDays.push(dayNumber);
        localStorage.setItem("openedDays", JSON.stringify(openedDays));

        messageBox.style.display = "block";
        messageBox.innerHTML = `<strong>Ziua${dayNumber}</strong><br><br>${msg}`;
    });

    calendar.appendChild(day);
});

function toggleDarkMode() {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode",
        document.body.classList.contains("dark"));
}