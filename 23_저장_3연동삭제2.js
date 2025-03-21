const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

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

    const button = document.createElement('button');
    button.innerText = '삭제';

    const span = document.createElement('span');
    span.innerText = object.text;

    ul.appendChild(li);
    li.append(span, button);

    li.id = object.id; //(삭제할때 구분하려고)만들때부터 낙인을 찍어

    button.addEventListener('click', Delitem);
  }
};

const Delitem = (event) => {
  const target = event.target.parentElement;
  target.remove();

  todos = todos.filter((todo) => todo.id !== parseInt(target.id)); //target이 된 놈과 다른 얘들만, 따로 모아서 임시저장소에 넣어
  save(); //그걸 다시 저장소에 넣어
};
//여기까지 했으면 두가지 오류 찾기(const todos로 변경, target.id자료형 변경)

//연동삭제해봐 = 화면에서 삭제할때, 저장소에서도 삭제하게 해봐
//화면에서 삭제하면 li가 삭제되는거임
