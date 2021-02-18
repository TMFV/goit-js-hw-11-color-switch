const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const bodyRef = document.querySelector("body");  
const buttonsDivRef = document.querySelector("#buttons");
const startButtonRef = document.querySelector(".js-start");
const stopButtonRef = document.querySelector(".js-stop");
buttonsDivRef.addEventListener('click', buttonsFunctions);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

//Функція для зміни кольору фону
let randomColor;
function setNewColor() {
    randomColor = colors[randomIntegerFromInterval(0, 5)];
    bodyRef.removeAttribute("style");
    bodyRef.setAttribute("style", `background-color: ${randomColor}`);
};
//Початковий статус кнопок
stopButtonRef.disabled = true;

// Функція відстеження кнопок та роботи таймера інтевалу для зміни кольору фону
let colorInerval;

function buttonsFunctions(event, randomColor) { 
    if (event.target.textContent == "Start") {
        startButtonRef.disabled = true;
        stopButtonRef.disabled = false;
        colorInerval = setInterval(setNewColor, 1000);
        
    } else if (event.target.textContent == "Stop") {
        startButtonRef.disabled = false;
        stopButtonRef.disabled = true;
        clearInterval(colorInerval);
    }
};

