const userbuttons = document.querySelectorAll('button');
const computerbuttons = ['가위', '바위', '보'];

const play = (event) => {
  const userchoice = event.target.innerText;
  const randomindex = Math.floor(Math.random() * 3);
  const computerchoice = computerbuttons[randomindex];

  calculate(userchoice, computerchoice); //calculate는 인자의 승패를 계산하는 함수
};

userbuttons.forEach((Button) => {
  Button.addEventListener('click', play); //foreach문법 검색폼 미쳤고
});

const calculate = (a, b) => {
  let message;

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
  show(a, b, message);
};

const usershow = document.querySelector('.you-choice');
const comshow = document.querySelector('.computer-choice');
const resultshow = document.querySelector('.result');

const show = (apple, banana, orange) => {
  usershow.innerText = apple;
  comshow.innerText = banana;
  resultshow.innerText = orange;
};

/*
프로젝트: 가위바위보 게임 만들기

개요:
1. 낼 것을 정합니다[가위,바위,보]
2. 둘의 조합을 결정합니다(play)
	click event가 발생한 button의 innerText
3. 계산합니다(calculate)
4. 보여줍니다(show)

가져올 것:
button

.result
.computer-choice
.you-choice*
*/
