const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const handler = (event) => {
  event.preventDefault(); //새로고침을 막고
  Additem(input.value); //할 일을 추가하고
  input.value = ''; //쓸 칸을 비우고
};

form.addEventListener('submit', handler); //폼제출시, 핸들러가 알아서 할거임

const Additem = (text) => {
  if (text !== '') {
    const li = document.createElement('li');
    li.innerText = text;
    ul.appendChild(li);
  }
};

//리팩토링: 역할분화, 변수 간단하게게
