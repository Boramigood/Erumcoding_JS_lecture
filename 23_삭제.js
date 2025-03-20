const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const handler = (event) => {
  event.preventDefault(); //새로고침 안되게
  Additem(input.value); //내가 입력한 글씨를 아래에 추가해줘
  input.value = ''; //내가 쓰는 창 비워지게
};

form.addEventListener('submit', handler);

const Additem = (text) => {
  if (text !== '') {
    const li = document.createElement('li');

    const button = document.createElement('button');
    button.innerText = '삭제';

    const span = document.createElement('span'); //국룰사항
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

//삭제버튼을 만들고 싶어
//삭제기능도 만들고 싶어
