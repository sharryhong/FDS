// 표현식 (함수 값(리터럴)을 변수에 할당하는 방법)
function scopeFn() {

}

// 선언식 (함수 이름으로 정의하는 방법)
var scopeFnExpression = function() {
	// 외부와 단절된 독립된 공간 형성
	if(movielist) {
		console.log('if 내부: ', movielist);
	}
	console.log('함수 내부: ', movielist);
}

// 함수 실행
// 함수를 실행시킨 컨텍스트 객체 === window 객체
scopeFnExpression(movielist); 