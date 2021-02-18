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

let randomColor;

//Функція для зміни кольору фону
function setNewColor() {
    randomColor = colors[randomIntegerFromInterval(0, 5)];
    console.log(randomColor);
    bodyRef.removeAttribute("style");
    bodyRef.setAttribute("style", `background-color: ${randomColor}`);
};

let colorInerval;

//Початковий статус кнопок
stopButtonRef.disabled = true;

function buttonsFunctions(event, randomColor) { 
    if (event.target.textContent == "Start") {
        console.log('start random');
        startButtonRef.disabled = true;
        stopButtonRef.disabled = false;
        colorInerval = setInterval(setNewColor, 1000);
        
    } else if (event.target.textContent == "Stop") {
        console.log('stop random')
        startButtonRef.disabled = false;
        stopButtonRef.disabled = true;
        clearInterval(colorInerval);
    }

};

