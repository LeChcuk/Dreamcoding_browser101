'use strict';

const CARROT_SIZE = 80;
const gameField = document.querySelector('.game__field');
const fieldRect = gameField.getBoundingClientRect();
const startBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const popup = document.querySelector('.pop-up');
const popupMsg = document.querySelector('.pop-up__message');
const refreshBtn = document.querySelector('.pop-up__refresh');
let timeoutId;
let startFlag = 0;

startBtn.addEventListener('click', () => {
    if (!startFlag) {
        initGame();
    } else if (startFlag) {
        startFlag = 0;
        clearInterval(timeoutId);
        gameTimer.textContent = '00:00';
        popup.classList.remove('pop-up--hide');
        startBtn.classList.add('game__button--hide');
    }
});
refreshBtn.addEventListener('click', () => {
    gameField.textContent = ''; // 모든 벌레와 당근들 제거하기
    startBtn.classList.remove('game__button--hide');
    popup.classList.add('pop-up--hide');
    initGame();
});

function initGame() {
    startFlag = 1;
    // 벌레와 당근을 생성한 뒤 field에 추가해줌
    console.log(fieldRect);
    addItem('carrot', 5, 'img/carrot.png');
    addItem('bug', 5, 'img/bug.png');

    // play - stop 아이콘 전환
    startBtn.firstElementChild.classList.remove('fa-play');
    startBtn.firstElementChild.classList.add('fa-stop');

    // show up timer and score
    gameTimer.classList.remove('game__timer--hide');
    gameScore.classList.remove('game__score--hide');

    // set Timer's clock
    let cnt = 5;
    gameTimer.textContent = `00:0${cnt--}`;
    timeoutId = setInterval(() => {
        gameTimer.textContent = `00:0${cnt}`;
        if (cnt-- === 0) {
            clearInterval(timeoutId);
            startBtn.classList.add('game__button--hide');
            popup.classList.remove('pop-up--hide');
            popupMsg.textContent = 'YOU LOST🤦‍♂️';
            startFlag = 0;
        }
    }, 1000);

    // set Scroe
    gameScore.textContent = 5;
}

function addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;

    for (let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        gameField.appendChild(item);
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
