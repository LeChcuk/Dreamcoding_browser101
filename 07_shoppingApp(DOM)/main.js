// 엔터 입력 시 목록 추가
const inputBox = document.querySelector('.listWindow__textInput input');
inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // 리스트 추가 함수
        console.log('Enterd');
        addList();
    }
});

// + 버튼 클릭 시 목록 추가
const addBtn = document.querySelector('.listWindow__footer .footer__circle');
addBtn.addEventListener('click', () => {
    console.log('clicked');
    addList();
});

// 리스트 추가 함숨
function addList() {
    const blockEle = document.createelement('div');
    const txtEle = document.createElement('span');
}

// DELETE
// 목록 내 휴지통 버튼 클릭 시 제거
