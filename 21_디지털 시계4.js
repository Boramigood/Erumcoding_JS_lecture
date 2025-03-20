const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function tiktoc() {
  const now = new Date(); //이걸 함수안에 안넣으면 1분전에 본 시각을 1초마다 말하는 꼴이 됨
  hour.innerText = now.getHours();
  min.innerText = now.getMinutes();
  sec.innerText = now.getSeconds();
}

setInterval(tiktoc, 1000);
