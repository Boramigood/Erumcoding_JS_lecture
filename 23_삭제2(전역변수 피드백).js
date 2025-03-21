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

    const button = document.createElement('button'); //후에 button에 삭제기능을 추가해야함
    button.innerText = '삭제';

    const span = document.createElement('span'); //div,span, text는 span안에 넣는게 국룰임
    span.innerText = text;

    ul.appendChild(li);
    li.append(span, button);

    button.addEventListener('click', Delitem);
  }
};

const Delitem = (event) => {
  const target = event.target.parentElement;
  target.remove();
};

/*
피드백:
Additem에 Delitem만 써놓으면, button이 전역변수가 아니라서 정의할 수 없게 됨
button.addEventListener까지는 Additem에 넣어줘야 함
*/
