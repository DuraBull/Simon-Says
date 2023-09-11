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

//initialize boxes as an array of simon choices
let boxes = document.querySelectorAll(".box");
console.log(boxes);

var simonSequence = [];
var playerSequence = [];

//initialize randomNumber between 0 and 3 (4 possibilities)
let randomNumber = Math.floor(Math.random() * 4);

//function to return a new random number between 0 and 3
function newRandomNumber() {
    return Math.floor(Math.random() * 4);
}