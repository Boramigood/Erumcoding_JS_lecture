const openbutton = document.querySelector('.open'); //class니까 .붙히기기
const container = document.querySelector('.container');
const closebutton = document.querySelector('.close');

openbutton.addEventListener('click', () => {
  container.style.display = 'flex'; //style에 display가 있는거임
  openbutton.style.display = 'none';
});

closebutton.addEventListener('click', () => {
  container.style.display = 'none';
  openbutton.style.display = 'block';
});
