###### Front-End Develop SCHOOL

# DAY 32 - javaScript core

##### 다른분들 질문 공유

지연씨
- 보통 변수나 함수는 상단에 위치시키자. 
- 네이밍규칙 BEM(Block Element Modifier)참조
- function()내부에서 요소를 직접 찾기보다는 this를 이용해서 찾는 것이 좋다. ex)this.parentNode
- aria의 role 부분 나중에 배우면 코드를 달리 해도 된다. 
- inline style일때만 확인이 가능하다고 생각해서 back-end에서 inline style을 덕지덕지 붙이곤 한다. <br> 
이는 잘못된 방법이다. -> 방법이 있는데 IE8이하는 표준과 다른방법으로 불러와야 하므로 helper함수를 만들어 사용하자. 
- 1회만 실행하면 될 경우도 고려하여 코딩한다. 
- dom이 만들어지지 않았을 땐 실행이 되지 않는 것도 고려한다. 지연씨 코드상에서는 for문 안에서 이벤트가 실행되게 해서 해결하였다.

정식씨
- btn.onclick = btn.onfocus = changeBg; 키보드 onfocus할 땐 changeBe함수가 한번 실행되는데, onclick할땐 두번실행된다. 왜일까?
- 클릭이벤트 발생하면 포커스이벤트도 발생하여 두번발생하는 것이다. 브라우저상의 특성이다. 
- 해결 : 이벤트 감지

```
document.onclick = function(e) { // 이벤트 속성에 연결된 함수의 경우, e대신 event등이 올 수 있다. 마지막에 리턴됨
	...
}

레거시 이벤트 함수의 경우 하나만 저장이 되므로, 나중에 배울 진보된 이벤트 함수를 사용하자. 
```

### JavaScript Core (언어. 문법)

- `<script src="file.js">`
- html, css, javaScript를 분리하여 작성하여 호출하는 것을 권장
 - 예외: daum과 같이 포탈 메인페이지의 경우 css파일을 html내부에 위치시킴으로서 html이 로딩되자마자(네트워크 안좋아도) 스타일이 입혀진다.(스타일이 벗겨지지않는다.)

- c언어와 유사하다. 

##### 명령문(Command)

- 끝에 세미콜론 `;`을 붙인다.
 - 예외 : if, for, ... , function() 등 
- 점`.` 연산자로 연결되는 구문(dot Syntax)
 - document.getElementById('idname').~~~; // 체이닝구문이라고 부른다. 
 - document.getElementByTagName('a').onclick = clickfunction; // 오류 : 리스트에는 바로 onclick등이 올 수 없다. 

- window.alert(); 
- console.log(); // 콘솔은 IE하위버전에서는 지원되지 않으므로 조심 
 - .dir / .error / 등 많다. 

- 메소드 : 객체가 갖고 있는 함수. (객체가 갖고 있는 속성 중 함수)
- 주석(comments) : // 한줄주석, /* 여러줄 주석 */ 

- 변수(Variables) : 메모리 공간. 하나의 값을 저장하는 기억장소 
 - 변수 기억장소에 담는(혹은 참조) 정보(데이터) : number, string, boolean, object, array, function 등
 - var 변수이름 = 정보유형; // ES2015에서는 var이외에도 다른 키워드도 생겨났다. ex) const DOG_AGE = 7; // 상수 
 - 숫자가 먼저 올 수 없다, 특수문자의 경우 $, _만 올 수 있다, 공백이 오면 안된다. 가능하면 대문자로 짓지말자(상수만 대문자로하기)
 - 변수 참조란? : 정보(값)이 담긴 메모리 주소를 가리키는 식별자. 변수를 지워도 정보(값)는 지워지지 않는다. 



