'use strict';

import * as sound from './sound.js';

const GAME_DURATION_SEC = 20;

export default class Game {
    constructor() {
        this.started = false;
        this.score = 0;
        this.timerIndicator = document.querySelector('.game__timer');
        this.gameBtn = document.querySelector('.game__button');
        this.gameScore = document.querySelector('.game__score');
        this.gameBtn.addEventListener('click', (event) => {
            if (this.started) this.stopGame();
            else this.startGame();
        });
    }

    setClickListener() {}

    startGame() {
        this.started = true;
        this.initGame();
        this.showStopButton();
        this.showTimerAndScore();
        this.startGameTimer();
        sound.playBackground();
    }

    stopGame() {
        this.started = false;
        stopGameTimer();
        this.hideGameButton();
        gameFinishBanner.showWithText('REPLAY❓');
        sound.playAlert();
        sound.stopBackground();
    }

    initGame() {
        this.score = 0;
        this.gameScore.innerText = CARROT_COUNT;
        gameField.init();
    }

    showStopButton() {
        this.icon = this.gameBtn.querySelector('.fas');
        this.icon.classList.add('fa-stop');
        this.icon.classList.remove('fa-play');
        this.gameBtn.style.visibility = 'visible';
    }

    showTimerAndScore() {
        this.timerIndicator.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    }

    startGameTimer() {
        this.remainingTimeSec = GAME_DURATION_SEC;
        updateTimerText(remainingTimeSec);
        timer = setInterval(() => {
            if (remainingTimeSec <= 0) {
                clearInterval(timer);
                finishGame(score === CARROT_COUNT);
                return;
            }
            updateTimerText(--remainingTimeSec);
        }, 1000);
    }

    updateTimerText(time) {
        this.minutes = Math.floor(time / 60);
        this.seconds = time % 60;
        this.timerIndicator.innerHTML = `${minutes}:${seconds}`;
    }

    hideGameButton() {
        this.gameBtn.style.visibility = 'hidden';
    }

    finishGame(win) {
        started = false;
        hideGameButton();
        if (win) {
            sound.playWin();
        } else {
            sound.playBug();
        }
        stopGameTimer();
        sound.stopBackground();
        gameFinishBanner.showWithText(win ? 'YOU WON 🎉' : 'YOU LOST 💩');
    }
}
