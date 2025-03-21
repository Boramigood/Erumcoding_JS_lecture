const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const todos = [];

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const handler = (event) => {
  event.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo); //임시저장소에 올리기

  Additem(todo);
  save(); //저장소에 올리기
  input.value = '';
};

form.addEventListener('submit', handler);

const Additem = (object) => {
  if (object.text !== '') {
    const li = document.createElement('li');

    const button = document.createElement('button');
    button.innerText = '삭제';

    const span = document.createElement('span');
    span.innerText = object.text;

    ul.appendChild(li);
    li.append(span, button);

    button.addEventListener('click', Delitem);
  }
};

const Delitem = (event) => {
  const target = event.target.parentElement;
  target.remove();
};

//저장소를 운용해봐 = todos에 있는 얘들을, localStorage에 올려봐
