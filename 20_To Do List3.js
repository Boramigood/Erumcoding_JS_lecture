const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', () => {
  event.preventDefault(); //submit이벤트 발생시, 새로고침 막기(브라우저의 기본기능)

  if (input.value != '') {
    const li = document.createElement('li'); //간단하게 <li></li>를 만든거임
    li.innerText = input.value;
    ul.appendChild(li); //const li한 그 li

    input.value = '';
  }
});

할 일 만들기

가져올 것:
form(button click시 + input 엔터시 모두 커버가 되기 때문)
ul(ul에 직접 넣지 않고, 가상의 li활용으로 ul이 확장되게 만들거임)
input(.value를 활용, 이건 내가 쓴거라 value를 가짐)

form에서 submit이라는 event발생시,
ul안의 가상의 li에	//먼저 만들어
input.value를 할당하기



+브라우저의 기본기능인 submit시 새로고침을 막기
''이 아닐때만 작동하기
input.value 비우기