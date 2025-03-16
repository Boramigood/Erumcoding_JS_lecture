const openButton = document.querySelector('.open'); //클릭할 버튼
const container = document.querySelector('.container'); //띄울 모달창

openButton.addEventListener('click', () => {
  container.style.display = 'flex';
  openButton.style.display = 'none';
});

//왜 flex에서 배운 것 처럼 바로 display 아닌?

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  container.style.display = 'none';
  openButton.style.display = 'block';
});
