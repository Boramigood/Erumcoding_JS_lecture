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

  Additem(todo);
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

    li.id = object.id;
  }
};

const Delitem = (event) => {
  const target = event.target.parentElement;

  todos = todos.filter((todo) => todo.id !== parseInt(target.id));
  save(); //

  target.remove();
};

const autoshow = () => {
  savedownloadedtodos = JSON.parse(localStorage.getItem('todos'));
  if (savedownloadedtodos) {
    //'todos'키값의 value값이 아예 없으면, 빈문forEach라 에러나는거 방지(아무것도 안하고 새로고침시)
    savedownloadedtodos.forEach((todo) => Additem(todo));
    todos = savedownloadedtodos; //역순으로 저장소 > 화면 > 임시저장소에 저장해주기, Delitem은 임시저장소에서 필터거치는데, 임시저장소에 암것도 없으면 다 날아감
  }
};

autoshow();

//autoshow 해봐 = 새로고침시 저장소에 있는데 화면에 없잖아, 화면에 나타내봐
