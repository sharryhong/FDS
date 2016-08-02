###### Front-End Develop SCHOOL

# DAY 26 - javaScript (ECMAScript(ES) 에크마스크립트)

핵심 core배움. DOM등은 따로 배워야 함

- History : 넷스케이프는 비전문가도 사용가능, 자바와 비슷하고 웹브라우저(Front단)에서 해석가능한 가벼운 언어를 원했다. 그 전에는 html정도 뿐. 

 - 브랜든 아이크 : 자바스크립트의 아버지 <https://brendaneich.com>
 - 팀 브런스넌 : 웹의 아버지

- 1994년. 개발 초기 코드 네임은 MOCHA(모카) -> 넷스케이프에 탑재할 공식이름 LiveScript (이때부터 프론트단 뿐 아니라 백단에서도 지원되게 하려고 했다.)
 -> 넷스케이프에 탑재한 최종이름은 javaScript : 자바 언어의 인기에 편승하고자 마케팅 관련에서 이름을 변경. 결과적으로 혼란을 야기하게 됨. 하지만 성공은 함.
- 1996년. IE3.0에서 도입하나, JScript로 이름 바꿈
- 2000년. ECMA3버전. 현재 많이 쓰는 버전. 
- 2005년. ECMA4. 너무 새로운 문법으로 등장. XML에 호환되게. 이 시대때는 HTML을 버리고 XML을 사용하려고 했던 시기. 너무 급진적 개혁으로 실패. 
- 2007년 크롬의 발생 -> 2009년 NodeJS로 드디어 front, back단 모두 하나의 언어인 javaScript로 구현가능해졌다. 
- 2015년. ECMA6. 
 - Sass->css 프리프로세서 : 컴파일로 css로 바꿔주는 것처럼.. TypeScript, CoffeeScript는 javaScript의 ... 이다(용어까먹...)
- 현재 : 더욱 강력한 버전의 문법이 등장하고 있다. (점진적인 개선)

- javaScript는 interpreter(JS 해석 엔진) 필요. -> 크롬 엔진은 아주 혁신적이도록 빠르다. <br>
 그럼에도 불구하고 java처럼 컴파일 언어보다는 빠르지 않다. 
 -> Front side이야기. server side는 아니다. 

#### 코어(ECMAScript) : 언어로서(server)
#### 문서 객체 모델(DOM) : front 가장 중요한 개념
#### 브라우저 객체 모델(BOM) : web brower구성하는 요소들 

- DOM 개념으로.. jQuery : 쉽다. but 속도가 느리다. 
- DOM을 잘하려면 core는 기본으로 해야한다. 

#### 브라우저 객체 모델(BOM) : 증요도 높지않음

##### Window 객체 

- Window 전역객체 (윈도우창 구성) : server side에는 없다.
 - history(이번보기 다음보기 등), navigator(위치정보 담음), location(주소창부분), screen(보는 부분), document(DOM 중요!), frames(iframe만 쓰고. 중요치 않다.)

 > 크로스브라우징이 어렵다. 브라우저별로 문법이 다르기 때문이다. <br>
 > IE9부터는 표준을 지켜서 괜찮으나... IE8은 고려해야 한다. 

- window.devicePixelRatio : 기기의 픽셀 농도
- window.innerWidth : window의 화면 가로 폭
- window.innerHeight : window의 화면 세로 폭

- window.scrollX = window.pageXOffset; : 가로 스크롤바 위치
- window.scrollY = window.pageYOffset : 세로 스크롤바 위치 (나중에 스크롤 moving사용시 씀)
 
 > 크롬은 둘다 사용. 브라우저별로 다른 문법 사용  

- window.alert("Dialog 창 띄우기"); 
- window.prompt('당신의 이름은?', '예) 홍길동');

```
window.alert("Dialog 창 띄우기"); 
// 오늘날은 alear창 별로 쓰지 않고 console로 쓴다. 

var is_youngman = window.confirm("당신은 청년입니까?"); 
// Yes, No 값을 받을 수 있다.
console.log('is_youngman', is_youngman);

if (is_youngman == true) { // 그냥 if (is_youngman) 라고 써도 된다.
  console.log("좋것구만");
} else {
  console.log("그럼 넌 누구냐");
}

// 사용자의 입력 값을 받아왔다면, 이를 기억해두기 위해 변수가 필요하다.
var user_name = window.prompt('당신의 이름은?', '예) 홍길동');
// 입력창 
// 실무에서 안씀

window.alert(user_name+'님 반갑습니다.');
```

- window.open('http://www.naver.com'); // 들어가자마자 새창 뜸. 요샌 안씀

- window.resizeTo(500,500); // 절대값.  // 중요하지 않음. 크롬안됨
- window.resizeBy(500,500); // 현재크기의 상대적 값 // 중요하지 않음. 크롬안됨
- window.moveTo(100,100); // 브라우저 위치. 절대값 // 중요하지 않음. 크롬안됨
- window.moveBy(100,100); // 브라우저 위치. 상대값 // 중요하지 않음. 크롬안됨
- window.scrollTo(0,1000); // x축 0, y축 1000px 절대적 위치이동
- window.scrollBy(0,100); // x축 0, y축 1000px 상대적 위치이동

- window.setInterval(할일(함수), 시간(밀리초)); // 주기마다 계속 반복
- window.setTimeout(할일(함수), 시간(밀리초)); // 시간 후에 1회만 
- window.clearInterval() // 멈춤. 변수에 setInterval되는 것을 담아놨다가 ()안에 넣기

- window.requestAnimationFrame(); // setInterval의 단점을 보완. IE10부터. 

- 콘솔창에 window. 이라고 치면 window객체에 내장되어있는 속성들이 쭉 나온다.<br>
- window. 은 생략가능!

##### Location (주소창) 객체들

- location.href; // 주소 "http://caniuse.com/#search=requestAnimationFrame"
- location.protocol; // "http:"
- location.domain;
- location.host; // "caniuse.com"
- location.hostname; // "caniuse.com"
- location.port;
- location.hash; // 해당페이지의 목적지(id)

##### History 객체들

- history.back() // 한칸 뒤로가기 
- history.forward() // 한칸 앞페이지 가기
- history.go(-2) // 2칸 뒤로가기 등 제어가능

#### Screen 객체들

- 정확하게 말하자면 내 노트북의 모니터 screen 정보를 말하는 것이다. 
- 통계할 때 빼곤 잘 쓰지 않는다. 
- screen.width // 스크린 width
- screen.height // 스크린 height
- screen.availHeight // 실제 사용가능한 height
- screen.orientation // 중요! 모바일 등 제어 <br>
ScreenOrientation {angle: 0, type: "landscape-primary", onchange: null} // 기울기, 가로모드, onchange되면.. 설정가능

```
screen.orientation.onchange = fnction() {
  if ( screen.orientation.type == 'landscape-primary') {
  ... 
  }
}
```

#### Navigator 객체들

- 브라우저의 정보 
- 중요!! 

- navigator.userAgent // 사용자의 브라우저 식발자 감지하여 거기에 맞는 디자인 가능 <br> // 크롬 개발자도구의 모바일 버전으로 테스트가 가능하다. <br>
"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36" 

- navigator.appCodeName <br>
"Mozilla"

- navigator.userAgent.indexOf('Chrome') > -1; // Chrome이라는게 있냐? 즉, 크롬이니?. 해당 문구가 없다면 -1이 나오기 때문 <br>
true

- navigator.vendor // 크롬 웹브라우저의 경우 "Google Inc."
- navigator.cookieEnabled // 쿠키를 쓸 수 있나? true. 현재 모든 브라우저는 쿠키 쓸 수 있다. 
- !!window.localStorage // 새로운 기술. 
- navigator.onLine // 온라인인가? true // 온라인일 때 다운받게 하기 등 가능 
- navigator.language // 주 언어 "ko"

#### Document 객체 / 가장 중요!! 문서 객체 제어

- document.title // title
- document.doctype // <!DOCTYPE html>
- document.compatMode // "CSS1Compat" 표준모드. "BackcCompat" 비표준모드

- 돔스크립트(DOM Script) - 자바스크립트를 사용한 문서 동적 제어

```
// 웹 표준 호환 모드라면 standard_mode에 true값이 참조(Reference)된다.
var standard_mode = document.compatMode == 'CSS1Compat';
// 문서에서 root element인 <html> 요소를 찾아서 변수 html에 참조된다.
var html = document.documentElement;
// 웹 표준 호환 모드라면 첫번째 코드 블록문이 실행
if ( standard_mode ) {
  // 변수 html에 참조된 문서 객체 <html>요소에 class 속성 값을 'standard'로 설정한다. 
  html.setAttribute('class', 'standard');
} else {
  html.setAttribute('class', 'nostandard');
}
```

- document.activeElement; // focus된.. 활성화된 엘리먼트를 알 수 있다. 접근성에서 중요! 
- document.write('<link rel="stylesheet" href="css/style.css">'); // html코드에 추가됨. 이젠 이렇게 잘 쓰지 않는다. 

#### 그 외

- .toLowerCase() // 모두 소문자로 만듬

#### 참고 사이트
- [MDN javaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)