const openbutton = document.querySelector('.open');
const container = document.querySelector('.container'); //modal일 때 어떨지 확인해보기 = 안됨, css보며 시행착오 + 제일 밖에 있는거 쓰기기
const closebutton = document.querySelector('.close');

openbutton.addEventListener('click', () => {
  //handler함수를 안에 넣어버려
  container.style.display = 'flex'; //style과 display순서? = display는 화면 하나인데, style은 다양함 다양한 style
  openbutton.style.display = 'none';
});

closebutton.addEventListener('click', () => {
  container.style.display = 'none';
  openbutton.style.display = 'block';
});
