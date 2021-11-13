// 엔터 입력 시 목록 추가
const inputBox = document.querySelector('.listWindow__textInput input');
inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // 리스트 추가 함수
        addList();
    }
});

// + 버튼 클릭 시 목록 추가
const addBtn = document.querySelector('.listWindow__footer .footer__circle');
addBtn.addEventListener('click', () => {
    addList();
});

// 리스트 추가 함수
const contentList = document.querySelector('.listWindow__content');
function addList() {
    if (inputBox.value === '') return;

    const container = document.createDocumentFragment();

    const liEle = document.createElement('li');
    liEle.setAttribute('class', 'item__row');
    container.appendChild(liEle);

    const blockEle = document.createElement('div');
    blockEle.setAttribute('class', 'item');
    liEle.appendChild(blockEle);

    const txtEle = document.createElement('span');
    blockEle.appendChild(txtEle);

    const txtNode = document.createTextNode(inputBox.value);
    txtEle.appendChild(txtNode);

    const iconEle = document.createElement('i');
    iconEle.setAttribute('class', 'fas fa-trash');
    blockEle.appendChild(iconEle);
    iconEle.addEventListener('click', () => {
        contentList.removeChild(liEle);
    });

    const dividerEle = document.createElement('div');
    dividerEle.setAttribute('class', 'divider');
    liEle.appendChild(dividerEle);

    contentList.appendChild(container);

    inputBox.value = '';
    inputBox.focus();
}

// DELETE
// 목록 내 휴지통 버튼 클릭 시 제거
const delBtn = document.querySelectorAll('.listWindow__content i');
delBtn.forEach((n) => {
    n.addEventListener('click', () => {
        console.log(n);
        contentList.removeChild(n.parentNode.parentNode);
    });
});
