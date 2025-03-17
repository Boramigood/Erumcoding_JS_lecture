const userbuttons = document.querySelectorAll('button'); //[가위,바위,보]버튼 가져옴
const computerbuttons = ['가위', '바위', '보']; //컴퓨터가 클릭한 가상의 버튼

const play = (event) => {
  const userbuttonresult = event.target.innerText; //click이라는 event의 target이 된 버튼의 내용 ex)가위
  const computerbuttonresult = computerbuttons[Math.floor(Math.random() * 3)]; //ex)보
  calculate(userbuttonresult, computerbuttonresult); //하나씩 내기까지가 play임, 그 후에 승패를 위하여 계산해야함(calculate)
};

userbuttons.forEach((button) => {
  button.addEventListener('click', play); //각 버튼을 클릭시, play되도록 함(play는 내가 낸 값과, 컴퓨터가 랜덤으로 낸 값을 하나씩 냄)
});

const calculate = (userbuttonresult, computerbuttonresult) => {
  //승부판독중
  let message;
  if (userbuttonresult === computerbuttonresult) {
    message = '무승부입니다!';
  } else {
    switch (userbuttonresult + computerbuttonresult) {
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
  show(userbuttonresult, computerbuttonresult, message); //판독했으면 이제 보여줘야함(show)
};

const computerbalnk = document.querySelector('.computer-choice');
const userblank = document.querySelector('.you-choice');
const winnerblank = document.querySelector('.result');

const show = (a, b, c) => {
  userblank.innerText = a;
  computerbalnk.innerText = b;
  winnerblank.innerText = c;
};

만들 것: 버튼 클릭시, 나와 컴퓨터가 무엇을 냈는지 보여주고
그것을 비교하여 승패를 보여준다


1.버튼설정
버튼이 뭔데? =셋 중 하나 고를 수 있는 선택지, 버튼 가져오기
컴퓨터도 가위,바위,보 셋 중 하나의 값을 가져야 함

2.셋 중 하나 내기(play)

3.승패 계산하기(calculate)

4.결과 보여주기(show)
