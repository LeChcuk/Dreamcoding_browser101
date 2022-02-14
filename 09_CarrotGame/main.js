const gameField = document.querySelector('.game__field');
const gameBtn = document.querySelector('.game__button');
gameBtn.addEventListener('click', (e) => {
    initGame();
});

function initGame() {
    console.log('게임 시작!');
    // Bug를 .game__field에 랜덤으로 5개 포지셔닝
    // Carrot을 .game__field에 랜덤으로 5개 포지셔닝

    makeBugAndCarrot(5);
}

function makeBugAndCarrot(num) {
    const container = document.createDocumentFragment();

    for (let i = 0; i < num; i++) {
        let bug = document.createElement('span');
        let carrot = document.createElement('span');
        // setAttribute와 classList의 차이?
        // setAttribute('class')로 여러 개를 set할 순 없는지??
        bug.classList.add('bug');
        bug.classList.add('objects');
        carrot.setAttribute('class', 'carrot');
        carrot.classList.add('objects');

        bug.style.top = Math.floor(Math.random() * (700 - 0)) + 'px';
        bug.style.left = Math.floor(Math.random() * (2400 - 0)) + 'px';
        carrot.style.top = Math.floor(Math.random() * (700 - 0)) + 'px';
        carrot.style.left = Math.floor(Math.random() * (2400 - 0)) + 'px';

        container.appendChild(bug);
        container.appendChild(carrot);
    }

    gameField.appendChild(container);
}
