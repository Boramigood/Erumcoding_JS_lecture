const openButton = document.querySelector('.open');
const container = document.querySelector('.container'); //누르면, 창 띄어야 하니까, 누를버튼,나올창 가져오기

openButton.addEventListener('click', () => {
  //handler함수를 따로 작성하지 않고, 화살표로 바로 작성, 이 자체로 이벤트 설정
  openButton.style.display = 'none';
  container.style.display = 'flex';
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  openButton.style.display = 'block';
  container.style.display = 'none';
});

//JS에서는 style.display로 메서드에 접근해야함, 뒤에 오는 속성값은 ''안에
