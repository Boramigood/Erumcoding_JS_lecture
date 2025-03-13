DOM= HTML문서 조작가능하게 해주는 인터페이스(head,body등의 구조를 의미)
document객체에서 제공하는 메서드를 활용하는 방식으로 (선택, 변경, 생성) 세가지 구조로 나눠서 살펴보기


1.선택: h2에서도 id,class,태그이름 등 선택할 수 있는 방법이 많음

document.getElementById

document.getElementsByClassName //s가 붙음, 배열처럼 반환됨

document.getElementsByTagName //s가 붙음, 배열처럼 반환됨


세개 구분하기 귀찮으면
document.querySelector()에 #id .class tag 써주면 됨

querySelectorAll은 => 배열처럼 반환됨




const title = document.querySelector('h2')  //h2를 title로 만든거임
title.innerText = '안녕하세요!'
title.style.color = 'blue'

왜 innerText나 style같은 걸  쓸 수 있냐
이 친구들은 HTMLELEMENT라는 객체가 가지고 있는 프로퍼티임
근데 HTML모든 요소(h2)가 HTMLELEMENT에게 상속받아 쓸 수 있는거임



2. 생성
const title = document.createElement('h1') //문서에 있는 h1요소 하나 선택한 것 처럼 취급됨(실제론 없는데)
title.innerText = "새로운 친구에요!"
title.style.color = "red" //이래도 HTML창에서 안보임, 실제문서에 추가하지 않아서임

//기존 문서요소 가져오고, 거기다가 붙혀넣기 해야함, 따라서

const title = document.createElement('h1')       //문서에 있는 h1요소 하나 선택한 것 처럼 취급됨(실제론 없는데)
const body = document.querySelector('body')
title.innerText = "새로운 친구에요!"
title.style.color = "red" 
body.appendChild(title)
