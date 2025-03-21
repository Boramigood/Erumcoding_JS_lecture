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
    li.innerText = text;
    ul.appendChild(li);
  }
};

//작업하기 쉽게 리팩토링해봐
