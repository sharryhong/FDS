###### Front-End Develop SCHOOL

# DAY 30 - javaScript

- typeof 의 치명적인 약점 (쓰지 않는 것이 좋다.)
 - typeof [] 는 array인데 object라고 알려준다. 
 - typeof null은 null인데 object라고 알려준다. 

#### node 만들기. 동적 생성!, 조작

- .onclick은 초기부터 있던것으로서 하나당 하나 값만 받을 수 있다. 
- btn.onclick = function() {...} // 이벤트 생성
- btn.onclick = null; // 이벤트 삭제

- `node.removeChild(childnode)`