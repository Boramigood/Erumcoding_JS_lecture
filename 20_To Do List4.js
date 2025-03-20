const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (input.value !== '') {
    li = document.createElement('li'); //const안써도 돌아감??
    li.innerText = input.value; //innerText!(가상이라고 해도 li자체는 <li></li>임)
    ul.appendChild(li); //appenChild는 ''없음

    input.value = '';
  }
});
