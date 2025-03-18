//가져올거 가져옴
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault(); //event시 브라우저의 기본동작(새로고침)을 막음

  if (input.value != '') {
    const li = document.createElement('li'); //가상의 li를 만듦(사실 css에 li가 있기 때문에 예측할 수 있음)
    li.innerText = input.value; //input은 내가 브라우저에서 씀(value), li,ul등은 html에서 미리 써놓음(innerText)
    ul.appendChild(li); //실제론 없는 얘니까 호적에 등록해줌
  }
  input.value = '';
});

할 것
input에 value입력하고 submit되면 ul아래로 목록이 작성되게 만들기
입력 후 input.value ''되기
빈문자열이면 등록 안되기
button 클릭시 업데이트 안되기

JS로 가져올 요소
form	//버튼대신 form가져옴, form에서 event가 submit일 때(button클릭시에도, input엔터시	  에도) submit판정 들어가서, 양방향으로 용이하게 사용할 수 있음
input	//내가 value를 입력할 곳이니
ul //ul에 li심어서 조작해야함, ul에 값 넣으면 ul만 업데이트 되는 결과를 낳음