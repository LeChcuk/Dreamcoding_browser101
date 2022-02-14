const gameField = document.querySelector('.game__field');
const fieldRect = gameField.getBoundingClientRect();

function initGame() {
    // 벌레와 당근을 생성한 뒤 field에 추가해줌
    console.log(fieldRect);
    addItem('carrot', 5, '/img/carrot.png');
    addItem('bug', 5, 'img/bug.png');
}

function addItem(className, count, imgPath) {}

initGame();
