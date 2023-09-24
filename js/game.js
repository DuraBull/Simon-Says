//initialize sounds
let redSound = new Audio("../sounds/red.mp3");
let blueSound = new Audio("../sounds/blue.mp3");
let greenSound = new Audio("../sounds/green.mp3");
let yellowSound = new Audio("../sounds/yellow.mp3");
let wrongSound = new Audio("../sounds/wrong.mp3");

//initialize game states
let currentState = 'new';
let states = ['new', 'simon', 'player', 'end'];

//initialize message
let message = document.querySelector(".message");
console.log(message.innerText);

let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = buttonColors[nextSequence()];
var simonSequence = [];

simonSequence.push(randomChosenColor);
console.log(simonSequence);
showSimon();

var playerSequence = [];

//function to return a new random number between 0 and 3
function nextSequence() {
    return Math.floor(Math.random() * 4);
}

function showSimon() {
    for (let i = 0; i < simonSequence.length; i++) {
        switch(simonSequence[i]) {
            case "red":
                redSound.play();
                break;
            case "blue":
                blueSound.play();
                break;
            case "green":
                greenSound.play();
                break;
            case "yellow":
                yellowSound.play();
                break;
        }

    }
}