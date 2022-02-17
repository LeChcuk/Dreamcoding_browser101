// 1) color - blue/yellow/pink
// 2) 종류 - T-shirt/pants/skirts (t,s,p)
// 3) man, female
// 4) large or small

const bodyMain = document.querySelector('.body__main');
const filterDiv = document.querySelector('.body__filterBtnsDiv');
const bodyLogo = document.querySelector('.body__logo');

const tshirftsFilter = document.querySelector('.body__shirts');
const pantsFilter = document.querySelector('.body__pants');
const skirtsFilter = document.querySelector('.body__skirts');
const blueFilter = document.querySelector('.body__blue');
const yellowFilter = document.querySelector('.body__yellow');
const pinkFilter = document.querySelector('.body__pink');

let imgs;

bodyLogo.addEventListener('click', () => {
    bodyMain.innerHTML = '';
    makeCards(15);
});

filterDiv.addEventListener('click', ({ target }) => {
    if (target.matches('.body__shirts')) filteringCards('_t');
    else if (target.matches('.body__pants')) filteringCards('_p');
    else if (target.matches('.body__skirts')) filteringCards('_s');
    else if (target.matches('.body__blue')) filteringCards('blue');
    else if (target.matches('.body__yellow')) filteringCards('yellow');
    else filteringCards('pink');
});

function filteringCards(str) {
    imgs.forEach((img) => {
        img.parentElement.style.display = 'flex';
        if (!img.getAttribute('src').includes(str)) img.parentElement.style.display = 'none';
    });
}

function makeCards(num) {
    const container = document.createDocumentFragment();
    let cardDiv, cardImg, cardText;

    for (let i = 0; i < num; i++) {
        cardDiv = document.createElement('div');
        cardImg = document.createElement('img');
        cardText = document.createElement('p');

        cardDiv.setAttribute('class', 'main__card');
        cardImg.setAttribute('src', `./img/${makeRandomImg(3)}`); // 랜덤으로 지정
        cardImg.setAttribute('class', 'main__imgInfo');
        cardText.setAttribute('class', 'main__textInfo');

        // 랜덤으로 cardText innerHTMl 내용 지정
        // (${female or male}, ${large or small} size)
        cardText.textContent = makeRandomText();

        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardText);
        container.appendChild(cardDiv);
    }

    bodyMain.appendChild(container);
    imgs = document.querySelectorAll('.main__card img');
}

function makeRandomImg() {
    let color, wear;

    switch (getRandom(3)) {
        case 0:
            color = 'blue';
            break;
        case 1:
            color = 'yellow';
            break;
        case 2:
            color = 'pink';
            break;
        default:
            throw new Error('what?!');
    }

    switch (getRandom(3)) {
        case 0:
            wear = 'p';
            break;
        case 1:
            wear = 's';
            break;
        case 2:
            wear = 't';
            break;
        default:
            throw new Error('what?!');
    }

    return `${color}_${wear}.png`;
}

function makeRandomText() {
    let sex = getRandom(2) === 0 ? 'man' : 'female';
    let size = getRandom(2) === 0 ? 'large' : 'small';

    return `${sex}, ${size} size`;
}

function getRandom(num) {
    return Math.floor(Math.random() * (num - 0));
}
