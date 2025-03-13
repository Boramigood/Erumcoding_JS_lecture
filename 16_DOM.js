const title = document.createElement('h1'); //h1이 없는데 title을 const해버림
title.innerText = '새로운 친구에요!';
title.style.color = 'red';

//이 메서드들은 HTMLELEMENT가 가지고 있는 프로퍼티
//HTML 모든 요소들이(h2도) HTMLELEMENT를 상속받고 있음
//따라서 모든 요소들이 메서드 사용가능

//h1은 실제 문서에 추가 안하고, 생성만 해서 안보임
//기존 문서요소 가져와서, 그 문서에 붙혀주는 과정 필요.

const body = document.querySelector('body');
body.appendChild(title); //body에게 title을 양육부담 지움
//실제로 F12누를시 보임
