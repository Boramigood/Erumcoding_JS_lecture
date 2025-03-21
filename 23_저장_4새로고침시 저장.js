const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const handler = (event) => {
  event.preventDefault(); //새로고침을 막고

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo);

  save();

  Additem(todo); //할 일을 추가하고
  input.value = ''; //쓸 칸을 비우고
};

form.addEventListener('submit', handler); //폼 제출시, 핸들러가 알아서 할거임

const Additem = (object) => {
  if (object.text !== '') {
    const li = document.createElement('li');

    const button = document.createElement('button'); //후에 button에 삭제기능을 추가해야함
    button.innerText = '삭제';

    const span = document.createElement('span'); //div,span, text는 span안에 넣는게 국룰임
    span.innerText = object.text;

    ul.appendChild(li);
    li.append(span, button);

    button.addEventListener('click', Delitem);

    li.id = object.id;
  }
};

const Delitem = (event) => {
  const target = event.target.parentElement;
  target.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(target.id));
  save();
};

const autoshow = () => {
  updatedtodos = JSON.parse(localStorage.getItem('todos')); //저장소에서 value값 가져오기

  if (updatedtodos) {
    updatedtodos.forEach((todo) => Additem(todo));
    todos = updatedtodos;
  }
};
autoshow();
