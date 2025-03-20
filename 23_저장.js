const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos)); //todos라는 키로, 위의 배열 todos값을 넣어줄거임
};

const Delitem = (event) => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id !== parseInt(target.id)); //삭제한 얘 빼고 todos에 재저장
  save();

  target.remove();
};

const Additem = (object) => {
  if (object.text !== '') {
    const li = document.createElement('li');

    const button = document.createElement('button');
    button.innerText = '삭제';

    const span = document.createElement('span'); //국룰사항
    span.innerText = object.text;

    ul.appendChild(li);
    li.append(span, button);

    button.addEventListener('click', Delitem);

    li.id = object.id; //아마 여기서 할당할때 li.id(=target.id)가 문자열로 저장되었을듯
  }
};

const handler = (event) => {
  event.preventDefault(); //새로고침 안되게

  const todo = {
    id: Date.now(), //고유값 가지게하여 식별하기 위해서
    text: input.value, //내가 입력한 값이 저장됨 +
  };
  todos.push(todo); //따로 배열에 저장됨
  Additem(todo); //내가 입력한 글씨를 아래에 추가해줘
  save(); //저장소에 저장해줘

  input.value = ''; //내가 쓰는 창 비워지게
};

form.addEventListener('submit', handler); //제 위의 핸들러님께 전권위임

const ifloadautofill = () => {
  const loadtodos = JSON.parse(localStorage.getItem('todos'));
  if (loadtodos) {
    loadtodos.forEach((object) => Additem(object));

    todos = loadtodos;
  }
};
ifloadautofill();

/*
할 일 만들기 for real
0.리팩토링
1.삭제(저장된 데이터 업데이트)
2.저장(새로고침해도 남아있게끔)		> 2를 더 세분화해도 괜찮을 듯

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
1.
삭제하려면 삭제버튼이 있어야함
새로운 아이템 만들때, 삭제버튼도 같이 생기게

text는 span안에 들어가는게 국룰임(span에 css로 접근)	//div,span맞음


원래 li.innerText = text였는데,

span.innerText를 text로 하기
(span은 div인데 inline인거)

대신 span,button을 li의 자손으로 만들기
//ul에 여러개의 li를 담음
//각각의 li에 button과 span(text가 innerText인)을 담음

삭제 버튼에 삭제기능도 담아야함
click event시, Delitem되게(li을 삭제하는 것)
버튼에서 li까지 어떻게 가냐, event.target.parentElement
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

2.
새로고침시 남아있게

브라우저상 저장소 '웹 스토리지'(로컬,세션)	//F12_응용프로그램
localStorage.setItem(키,값)
localStorage.getItem(키)
이 저장소를 이용하여 저장되게 만들기

전체 아이템들을 저장할 배열 만들기(todos)
배열 안에는 id,text키를 가진 객체(todo)를 넣을거임
todo의 키가 아닌 값으로 input.value 들어가기 때문에
Additem인자를 input.value => todo로 변경(객체로 포장).

새로운 객체(todo)가 추가될때마다, localStorage에 저장된 정보도 업데이트 되게 save함수
임의의 키값으로, 새로운 아이템 추가된 배열(todos)를 저장하게
그리고 그걸 큰 흐름을 담당하는 handler에 넣어
근데 key는 나오고 value는 안나옴, localStorage에서 JS객체를 다룰 수 없어서
그럼 save함수에서 todos를 배열 말고 텍스트로 저장해(JSON.stringify)



이제 화면에서 li가 지워지면, todos배열도 업데이트가 되어서, 또 다시 save되게하기
삭제될 객체가 어떤건지 정확히 구분하려면, 객체들을 식별할 수 있는 값이 필요한데
그걸 객체의 id값이 해줄거임
li.id = object.id하면 됨
그러면
Delitem에서 지우려는 li의 id값을, target.id로 가져올 수 있음

todos배열에서, 해당 id값을 가지는 요소를 찾아서 삭제하고
그 요소가 삭제된 새로운 배열을 다시 저장하게끔 만들어주기 = 삭제기능 완성

filter사용해서, todos에서 todo.id가 (삭제하려는)target.id와 같지 않은 친구들만
다시 todos에 넣기

여기서 에러가 뜰거임
1. todos에 새로운 값 할당하려면 let todos를 했어야 함 > 변경
2. todo.id(숫자)와 target.id(문자열)값의 형식이 다름 > parseInt로 해결
	>
    li.id = object.id;  //아마 여기서 할당할때 li.id(=target.id)가 문자열로 저장되었을듯

새로고침을 할 때, localStorage에 해당 정보가 있다면, 알아서 써놓게(ifloadautofill)
이걸 객체로 보고싶은데, 문자열로 만들어놔서 못봄, 다시 객체로 전환(JSON.parse)

이제 가져온 배열에 foreach문 적용해서, 각각 Additem되게 만들기
그래서 localStorage에 있던 얘들이 자동으로 화면에 추가되게끔
*/
