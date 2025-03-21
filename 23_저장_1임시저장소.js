const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const todos = [];

const handler = (event) => {
  event.preventDefault(); //새로고침을 막고

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo);

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
  }
};

const Delitem = (event) => {
  const target = event.target.parentElement;
  target.remove();
};

/*
목표: 새로고침해도 남아있게
1.loaclStorage에 저장되게 하기
  내가 입력한 값(input.value)을 객체(todo)로 localStorage에 저장할거임
  굳이 객체로 만드는 이유는 (내가 입력한 값 + 객체만의 고유한 id값)을 만들어서, 삭제시에 뭘 남기고, 뭘 저장할지 구분하기 위해서
  일단 객체를 저장할 배열 만들기 todos(localStorage가기 전 임시저장소) 
  handler에 const todo하는 이유? 폼 제출시에 일어나야 할 일이니까
  todo를 todos에 넣어주기
2.
*/
