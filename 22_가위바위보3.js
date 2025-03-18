const userbuttons = document.querySelectorAll('button'); //button태그를 가진 세개의버튼을 배열형태로 가져옴
const computerbuttons = ['가위', '바위', '보']; //컴퓨터 것도 만들어주기

const play = (event) => {
  //(handler함수인)play란, click이라는 event발생시
  const userchoice = event.target.innerText;
  const randomindex = Math.floor(Math.random() * 3); //문법: Math.random은 함수라서 괄호있음
  const computerchoice = computerbuttons[randomindex];
  calculate(userchoice, computerchoice);
};

userbuttons.forEach((button) => {
  button.addEventListener('click', play);
}); //셋 중 하나라도 클릭하면 play하게됨, 근데 play가 뭐야? 위로!   //문법: foreach안에는 배열요소 각각에 적용할 함수식이 들어가야함. 콜백함수 play는 괄호없음

const calculate = (a, b) => {
  //값을 비교하여 승패를 계산하기
  let message; //문법: let message

  if (a === b) {
    message = '무승부입니다!';
  } else {
    switch (a + b) {
      case '가위보':
      case '바위가위':
      case '보바위':
        message = '사용자 승리!';
        break;

      case '가위바위':
      case '바위보':
      case '보가위':
        message = '컴퓨터 승리!';
        break;
    }
  }
  show(a, b, message); //이제 결과를 보여줄 차례
};

const showcomcho = document.querySelector('.computer-choice');
const showusercho = document.querySelector('.you-choice');
const showresult = document.querySelector('.result');

const show = (x, y, z) => {
  showusercho.innerText = x;
  showcomcho.innerText = y;
  showresult.innerText = z;
};
