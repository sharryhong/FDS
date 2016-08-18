// .demo-navi 선택
// 내부에서 a요소 모두 수집
// 수집된 a요소를 사용자가 클릭하면
// 클릭된 a요소의 수집될 당시의
// 인덱스 넘버를 콘솔에 기록하기 

// var navi = query('.demo-navi');
// var navi_a = queryAll('.demo-navi a');
// console.log(navi_a.length);
// for(var i=0; i<navi_a.length; i++){
// 	var navi_a_list = navi_a[i];
// 	console.log(navi_a_list);
// }

// navi_a_list.onclick = function() {
// 	console.log();
// }

var demo_nav = query('.demo-navi');
var demo_nav_links = queryAll('a', demo_nav);
var i=0, l=demo_nav_links.length;

function showMeIndexWrapper(index){
	function showMeIndex(){
		console.log('my index number is', index);
	}
	return showMeIndex;
}

// 반복문 돌 때마다 함수가 메모리되어 실행
for(; i<l; i++){
	// 클로저 사용 예시
	// 원래는 showMeIndexWrapper(i) 한번 실행되면 사라진다.
	// 여기서 클로저를 사용했기 때문에 return showMeIndex가 메모리에 담긴다.(index)
	demo_nav_links[i].onclick = showMeIndexWrapper(i);

	// 만약에 클로저를 사용하지 않았을 경우
	// onclick하기 전에 i가 이미 4가 되어있다. 따라서 이 경우는 무조건 4가 나온다.
	// demo_nav_links[i].onclick = function() {
	// 	console.log(i);
	// }
}

// 위처럼 클로저함수를 만드는 것보다 '즉시 실행패턴' 사용
// 모던 자바스크립트 패턴 중 이패턴이 가장 많이 사용되는 패턴
// 외부와 구분되는 함수 만듬. 모듈패턴. 전역이 오염되지 않는다. (캠슐화)
// IIFE 패턴 (즉시 실행되는 함수)
// 일반적인 함수의 호출과정과 달리 이름이 없는 함수를 즉시 호출하는 것을 말한다. 
// (function(){}); 혹은 // 다른 방법들도 있으나 이 방법 권장. 
// (function(){})(); 

// 예 : 
// (function(global, $){
// 	'use strict';
// 	// 외부와 단절된 코드 공간
// })(this, this.jQuery);

// // 
// for(; i<l; i++){
// 	demo_nav_links[i].onclick = (function(index){
// 		return function(){
// 			console.log(index);
// 		};
// 	}(i)); // 즉시실행함수이므로, for문 i=0일때부터 바로 실행된다.
// }