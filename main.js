let order = [];
let clickedOrder = [];
let score = 0;

// 0 - blue                1 - red              2 - green           3 - yellow


const blue = document.querySelector('.color__blue');
const red = document.querySelector('.color__red');
const green = document.querySelector('.color__green');
const yellow = document.querySelector('.color__yellow');


let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected')
    });
}

let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        alert("Score is ${score}\n Next level!");
        nextLevel();
    }
}


let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

// 0 - blue                1 - red              2 - green           3 - yellow

let createColorElement = (color) => {
    if(color == 0) {
        return blue;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return green;
    } else if (color == 3) {
        return yellow;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();   
}

let gameOver = () => {
    alert('Score is ${score}\n You lost! Click ok to continue ');
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Starting game')
    score = 0;
    nextLevel();
}

green.onclick = () => click(2);
red.onclick = () => click(1);
yellow.onclick = () => click(3);
blue.onclick = () => click(0)

playGame();