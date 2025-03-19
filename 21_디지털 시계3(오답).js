const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

let now = new Date(); //빈 인자는 현재를 가져옴

function clock() {
  hour.innerText = now.getHours();
  min.innerText = now.getMinutes();
  sec.innerText = now.getSeconds();
}

setInterval(clock, 1000);
