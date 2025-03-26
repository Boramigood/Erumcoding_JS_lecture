const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
let todos = [];

const Delbutton = document.querySelector('#tanos');
/*
 */

Delbutton.addEventListener('click', () => {
  ul.replaceChildren(); //li를 삭제함
  localStorage.clear();
  todos = [];
  save();
});

const handler = (event) => {
  event.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  save();
  Additem(todo);
  input.value = '';
};

form.addEventListener('submit', handler);

const Additem = (object) => {
  if (object.text !== '') {
    const li = document.createElement('li');
    ul.prepend(li); //이걸 바꿔보자(일부 기능이 마비될 수 있음)

    const button = document.createElement('button');
    button.innerText = '삭제';

    const span = document.createElement('span');
    span.innerText = object.text;

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    li.append(span, checkbox, button);

    button.addEventListener('click', Delitem);

    li.id = object.id;
  }
};

const Delitem = (event) => {
  const target = event.target.parentElement;

  target.remove();
  todos = todos.filter((todo) => todo.id !== JSON.parse(target.id));
  save();
};

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const autoshow = () => {
  const savefiledownloadedtodos = JSON.parse(localStorage.getItem('todos'));

  if (savefiledownloadedtodos) {
    savefiledownloadedtodos.forEach((todo) => {
      Additem(todo);
    });
    todos = savefiledownloadedtodos;
  }
};

autoshow();
