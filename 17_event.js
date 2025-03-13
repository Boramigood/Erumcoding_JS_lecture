const button = document.querySelector('button');
const removebutton = document.querySelector('.remove');

function handler(event) {
  console.log('이용준 병신'); //이벤트 발생시, 로그 남겨라
}

button.addEventListener('click', handler); //버튼클릭시, 핸들러(이벤트 발생시, 로그 남겨라)

function removehandler(event) {
  button.removeEventListener('click', handler); //이벤트 발생시, 버튼lister를 무효화해라
}

removebutton.addEventListener('click', removehandler); //remove버튼 클릭시, remove핸들러(이벤트 발생시, 버튼listener를 무효화해라)
