const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];

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
    ul.appendChild(li);

    const button = document.createElement('button');
    button.innerText = '삭제';

    const span = document.createElement('span');
    span.innerText = object.text;

    li.append(span, button);

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

/*
리팩토링: 함수기능분화
삭제기능추가: 삭제버튼 + 삭제기능, 아이템 만들때 추가하기

<저장기능추가>: localStorage 이용으로 저장,삭제기능, 거기서 뭘 삭제하려는지, 뭘 저장하려는지 알려면 고유값필요 => 객체로 만들어 id를 주자
임시저장소 운용: todos배열은 localStorage가기 전단계, input.value를 객채로 포장해도 Additem 잘굴러가고, 임시저장소도 잘 운용됨
저장소 운용: todos를 localstorage에 옮기자, save
연동삭제: 화면li 삭제시, localStorage도 삭제되게
새로고침시 저장: localStorage를 화면에 autoshow되게
*/
