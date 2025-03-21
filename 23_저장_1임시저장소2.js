const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const todos = [];

const Delitem = (event) => {
  const target = event.target.parentElement;
  target.remove();
};

const handler = (event) => {
  event.preventDefault(); //새로고침 안되게

  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);

  console.log(todos);

  Additem(todo); //내가 입력한 글씨를 아래에 추가해줘
  input.value = ''; //내가 쓰는 창 비워지게
};

form.addEventListener('submit', handler); //form에 submit event만 설정해줘, 기능은 handler가 처리하게 냅둬

const Additem = (todo) => {
  if (todo.text !== '') {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    span.innerText = todo.text;
    button.innerText = '삭제';
    button.addEventListener('click', Delitem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
  }
};

//임시저장소 운용해봐(localStorage가기전에, todos에 저장해놓기)
