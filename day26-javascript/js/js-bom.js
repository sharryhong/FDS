// 변수는 var 키워드를 붙인다.
var dp = window.devicePixelRatio;

// Sass의 변수 
// $dp: value;

// 웹브라우저의 consold 패널에 log(기록)를 남긴다. 
console.log('기기의 픽셀 농도:', dp);

// 조건문
if (dp > 1) {
	console.log("고해상도 디스플레이의 픽셀 농도를 가집니다.");
} else {
	console.log("일반 디스플레이의 픽셀 농도를 가집니다.");
}
// '', "" 둘 다 가능

// Sass 조건문
// @if dp > 1 {
// 	@debug "일반 디스플레이의 픽셀 농도를 가집니다.";
// } @else {
// 	@debug "일반 디스플레이의 픽셀 농도를 가집니다.";
// }

/*
* window의 화면 가로 폭, 세로 폭 
*/
var window_w = window.innerWidth;
var window_h = window.innerHeight;

console.log('window_w: ', window_w);
console.log('window_h: ', window_h);

//

var window_scrollX = window.scrollX;
var window_scrollY = window.scrollY;

console.log('window_scrollX:', window_scrollX);
console.log('window_scrollY:', window_scrollY);

//

// var scrollY;  (= window.scrollY )
// 위처럼 이미 객체의 속성이 정해진 값을 사용자가 덮어쓰게 된다면, 
// 덮어쓴 값이 출력된다. (자바스크립트의 약점. 태생적 한계)
// 초창기 자바스크립트 환경에서는 문법이 엄격할 수 없었기 때문에 생긴 문제 
var scroll_Y;
// 변수 선언만 하는 경우, 즉 값이 대입(할당)되지 않은 경우 : undefined 값이 기본할당

//window 전역 객체의 속성 중에 scrollTop이 있다면 (브라우저마다 속성명이 다르므로)
if (window.scrollTop) { // = typeof window.scrollTop == 'undefined'
	scroll_Y = window.scrollTop; // IE 구형 브라우저에서는 표준안지키고  window.scrollTop쓴다.
	console.log('scrollTop');
} else {
	scroll_Y = window.scrollY;
	console.log('scrollY');
}
// <head>내의 <script src="js/js-bom.js"></script>에서 html해석기가 멈춤
// 따라서 문서가 완성되지 않은 시점이므로 0이 나온다. 나중에 이벤트헨들링으로 값을 가져온다.

/* 
자바스크립트 객체 
window.alert();
객체명.속성; 
() 붙은 것은 함수라는 말 
함수는 동사로 만들어져있다. 
*/

/*
window 객체의 메소드(함수)
메소드(Method)란?
객체가 소유하고 있는 함수를 가리킨다.
*/

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