//00에 현재 시간을 넣고싶은 거니까 일단 요소를 가져와
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock() {
  const now = new Date(); //현재 시간을 넣어야하니까 현재 가져와(현재 시간을 1초마다 가져와야하기 때문에 계속 현재를 가져와야 함)
  hour.innerText = now.getHours(); //현재에서 시간을 가져온걸, hour클래스 가지는 곳의 innerText에 넣어
  min.innerText = now.getMinutes();
  sec.innerText = now.getSeconds();
}

//근데 이걸 매초 반복해야해, 새로배운 메서드(1000밀리세컨드=1초)
setInterval(clock, 1000);

//const를 습관화하자, 변수가 아니면 let을 쓰는 걸로
