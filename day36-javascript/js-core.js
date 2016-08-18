// 복습

// 전역 (오염시키지 않도록 여기서 선언하지 않도록 하자.)
var sharry; // 다른 이의 작성된 코드와 충돌이 날 확률 가능성

// 코드 작성하기 위한 공간 생성 : IIFE생성
(function(global){
	'use strict';
	// var sharry; // 지역 변수 (전역과 충돌 X)
	// global.hong = sharry; // 외부에 특정 데이터 노출

	// 오늘이 무슨 요일인가
	// 주중, 주말인지 구분하여 콘솔에 "아, 출근", "아싸! 주말!"라고 출력하기

	//****** 내꺼 
	var date = ['월', '화', '수', '목', '금', '토', '일'];
	function whatDate(d) {
		if(d<0 || d>6){
			throw new Error('0~6사이 값을 입력하세요');
		}
		console.log(date[d] + "요일");
		// var week = date[d];
		if(d<5){
			console.log("아, 출근..");
		} else {
			console.log("아싸! 주말");
		}
	}

	global.Sharry = {
		'whatDate' : whatDate
	};

	//******* 쌤꺼 
	var today = (new Date()).getDay();
	today = 6; // 임의 조작 
	switch(today){
		case 0:
		case 6:
			console.log('아싸! 주말이여');
		break;

		default:
			console.log('아.. 출근!');
	}

})(this);












