const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const handler = (event) => {
  event.preventDefault(); //새로고침 안되게
  Additem(input.value); //내가 입력한 글씨를 아래에 추가해줘
  input.value = ''; //내가 쓰는 창 비워지게
};

form.addEventListener('submit', handler); //form에 submit event만 설정해줘, 기능은 handler가 처리하게 냅둬

const Additem = (text) => {
  if (text !== '') {
    const li = document.createElement('li');
    li.innerText = text;
    ul.appendChild(li);
  }
};

/*함수 하나로 다 쓰지 말고, 기능에 따른 리팩토링 해보자(유지보수가 쉬워지게)*/
