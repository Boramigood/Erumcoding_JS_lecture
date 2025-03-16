const buttons = document.querySelectorAll('button'); //button태그를 모두 가져옴, [가위,바위,보보]배열형태로

//컴퓨터가 낼 것을 정하기
const result = ['가위', '바위', '보'];

const play = (event) => {
  const user = event.target.innerText; //[가위,바위,보]중 하나가 user가 됨
  const randomindex = Math.floor(Math.random() * 3); //난수범위지정, 0~3으로 하겠다는 소리, math.floor로 소수점 버림
  const computer = result[randomindex]; //[가위,바위,보]중 하나가 computer가 됨
  game(user, computer); //
};

buttons.forEach((button) => {
  button.addEventListener('click', play);
}); //handler함수 대신 화살표로 직접쓰기, event.target.innertext는 이벤트가 발생한 타겟에, 이너텍스트값을 출력(각 메서드 안에 있었다고 생각하면 됨)

const game = (user, computer) => {
  let message;

  if (user === computer) {
    message = '무승부!';
  } else {
    // 가위보, 바위가위, 보바위 user win
    // 가위바위, 바위보, 보가위 computer win
    switch (user + computer) {
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

  show(user, computer, message);
};

//컴퓨터 선택, 당신 선택에 값이 입력되고, 가위바위보 자리에 결과뜨게 만들기
const computerchoice = document.querySelector('.computer-choice');
const userchoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');

const show = (user, computer, result) => {
  computerchoice.innerText = computer;
  userchoice.innerText = user;
  winner.innerText = result;
};
