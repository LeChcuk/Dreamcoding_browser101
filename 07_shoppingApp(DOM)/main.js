const inputBox = document.querySelector('.listWindow__textInput input');
inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // 리스트 추가 함수
        console.log('hi');
    }
});

const addBtn = document.querySelector('.listWindow__footer .footer__circle');
addBtn.addEventListener('click', () => {
    console.log('clicked');
});
