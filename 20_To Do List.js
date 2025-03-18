const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault(); //event시 새로고침을 막음

  if (input.value != '') {
    const li = document.createElement('li'); //li태그 가진거 만들어(실제론 없음) => 있는 ul을 그대로 쓰면, ul값만 업데이트됨(할 일 1개이상 못만듦듦)
    li.innerText = input.value; //내가 입력한 걸, li값으로 넣어
    ul.appendChild(li); //근데 li는 실제론 없는거니까, ul의 자식으로 만들어

    input.value = ''; //내가 입력하는 칸 비우기
  }
});

//if문은 공백이 아닐때만 추가되게

html을 보면서 가져올 것
=
input에 입력하고
form가져옴, event를 click이 아닌 submit으로 할거기 때문
	event인 submit은 form 내부의 (input위젯에서 엔터시, submit button click시)모두 발생
ul에 li를 생성해서, 내가 입력한 값을 넣으면 됨(inner.value)