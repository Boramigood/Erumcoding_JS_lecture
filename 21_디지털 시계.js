const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

//새로고침 해야 업데이트 됨, ㄹㅇ시계는 아님, 1초에 한 번씩 이 작업수행으로 해결

function clock() {
  const now = new Date(); //이 부분은 JS튜토리얼 참고할 것

  hour.innerText = now.getHours();
  min.innerText = now.getMinutes();
  sec.innerText = now.getSeconds();
}
setInterval(clock, 1000); //1초마다 이 함수를 실행시킴, 새로 배운 메서드
