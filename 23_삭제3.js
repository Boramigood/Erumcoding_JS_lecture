const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const handler = (event) => {
  event.preventDefault();
  Additem(input.value);
  input.value = '';
};

form.addEventListener('submit', handler);

const Additem = (text) => {
  if (text !== '') {
    const li = document.createElement('li');
    ul.appendChild(li);

    const button = document.createElement('button');
    button.innerText = '삭제';

    const span = document.createElement('span');
    span.innerText = text; //li에 딸랑 쓰는 것보다, span국룰

    li.append(span, button);

    button.addEventListener('click', Delitem);
  }
};

const Delitem = (event) => {
  const target = event.target.parentElement;
  target.remove(); //remove는 event하위의 프로퍼티
};

//1.작업하기 쉽게 리팩토링해봐
//2.삭제기능 추가해봐(외부,내부)
