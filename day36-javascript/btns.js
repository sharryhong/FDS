(function(global){
	'use strict';

	// 1 .button-set을 선택
	// 2 .button-set [CONTEXT] 내부에서 .button을 모두 수집 [NODELIST]
	// 3 수집된 [NODELIST]를 순환하여 (코드의 흐름 제어) 
	// 클릭 이벤트에 함수(이벤트 핸들러)를 연결한다.
	// 4 각 버튼을 사용자가 클릭할 경우, 자신의 순환 인덳 숫자를 콘솔에 출력한다. 

	// 내꼬
	// var btn_set = query('.button-set');
	// for(var i=0, j=btn_set.length; i<j; i++){
	// 	btn_set.nodeList = btn_set[i];
	// 	console.log(btn_set.nodeList);
	// }

	// 샘꼬
	var button_set = query('.button-set');
	var buttons = makeArray(queryAll('.button', button_set));
	// for문 예시 : 메모리할 클로저가 필요하다. 
	for(var i=0, l=buttons.length; i<l; i+=1){
		buttons[i].onclick = (function(i){
			return function() {
				console.log(i);
			}
		})(i);
		// buttons[i].onclick = function(){console.log(i);}; // 5만찍힘
	}

	// 클로저를 사용하지 않고 객체에 프로퍼티 추가 방식으로 한 for문 예시
	for(var button, i=0, l=buttons.length; i<l; i+=1){
		button = buttons[i];
		button.index = i;
		button.onclick = function(){
			console.log(this.index);
		};
	}

	// forEach예시 : 매개변수, 스코프가 있다. 굳이 클로저함수가 필요없다.
	buttons.forEach(function(button, index){
		console.log(arguments); // 전달인자 찍어보기. arguments는 유사배열객체
		button.onclick = function(){
			console.log(index);
		}
	});

	// 숫자 객체 생성자를 사용하여 숫자 1~10까지 변수 num1 ~ num10에 생성하기 
	// 단, num1 ~ num10에는 숫자 값이 담겨야 한다. 
	global.num1 = (new Number(1)).valueOf(); // 생성자함수통해 valueOf구함
	global.num2 = (new Number(2)).valueOf();

	// for(var i=1, j=10; i<=j; i++){
	// 	global.(num+i) = (new Number(i)).valueOf();
	// }

	// 불리언 객체 생성자를 사용하여 불리언 true, false로 연속되는 변수 boo1~boo10생성하기
	// 단, boo1~boo10에는 불리언값이 담겨야한다. 
	global.boo1 = (new Boolean(1)).valueOf();

})(this);