var movielist = [];
movielist.push('터널');
movielist.push('덕혜옹주');
movielist.push('부산행');
movielist.push('서울역');

// for문 사용시
for(var i=0, l=movielist.length; i<l; i++){
	console.log('for문 :', movielist[i]);
}

// for - of문 사용시
for(var movie of movielist) {
	console.log('for of문 :', movie);
}

// for - in문 사용시 (잘 사용하지 않는다.)
for(var index in movielist){
	if(movielist.hasOwnProperty(index)){
		console.log('for in문 :', movielist[index]);
	}
}

// 배열 객체(Array)의 메소드: .forEach() // 아주 유용하다!!
// 원래는 유사배열은 안되야 하는데, 크롬만 된다. 
var test = movielist.forEach(function(item, index, arr){ 
// 원소, 인덱스, 배열자체 순서로 가져온다. 다 안써도 된다. 이름자체는 중요하지 않다.
// 나중엔 우리가 인자값 전달, 순서도 정할 수 있다. 
	console.log('item: ', item);
	console.log('index: ', index);
	console.log('arr: ', arr);

	return 'item' +  index + ':' + item; // forEach()문은 return을 반환할 수 없다. 
});

// console.log('forEach :', movielist);
console.log('forEach :', test); // return이 안되므로 undefined 


// 배열 객체(Array)의 메소드: .map() // 아주 유용하다!!
var new_movielist = movielist.map(function(item, index, arr){
	console.log('item' +  index + ':', item);
	if(index === movielist.length -1){ // 한번만 출력
		console.log('arr :', arr);
	}

	return item + '은' + index + '번째 원소입니다.';
});

console.log('forEach :', new_movielist);

// forEach()문은 array자체가 변경되지 않는다. 반환 값이 없다. (undefined). 셋팅할때사용. ES5
// map()문은 return하면 array가 바뀔 수 있다. 반환 값은 수정된 배열을 반환한다. ES6

//****************** function 
// 표현식 (함수 값(리터럴)을 변수에 할당하는 방법)
function scopeFn() {

}

// 선언식 (함수 이름으로 정의하는 방법)
var scopeFnExpression = function() {
	// "use strict"; // 엄격모드 실행. 변수명 등 중복되면 에러남
	// 외부와 단절된 독립된 공간 형성
	if(movielist) {
		console.log('if 내부: ', movielist);
		// ES2015에 표준으로 추가된 let키워드를 사용한 변수는 호이스트 되지 않는다. 
		// let movielist = null;
		// var 키워드로 정의된 변수는 호이스트되어 함수 영역의 최상단으로 끌어올려진다.
		var movielist = ['영화', '보고싶다'];
		// var movielist만 함수 상단으로 올라가 movielist는 undefined이다.
		// 지금 이상태에서는 if문 자체가 실행이 안된다. 
	}
	console.log('함수 내부: ', movielist);
}

// 함수 실행
// 함수를 실행시킨 컨텍스트 객체 === window 객체
scopeFnExpression(movielist); // 전역 movielist
// scopeFnExpression(); // 전역 movielist

console.log('함수 외부: ', movielist);

// 일반함수 (글로벌 스코프에 정의된 함수)
function showMe() {
	console.log(this);
	return this; // window
}

showMe() === window;

// 객체의 속성에 함수를 할당 (메소드가 됨)
var fds = {
	'callMe' : showMe
};

fds.callMe() === fds;

// 엄격모드 
function strictFn() {
	'use strict';
	var hi_msg = 'hello';
	console.log(this, hi_msg); 
	// 결과 : undefined "hello"
	// 엄격모드에서는 this가 더이상 window 전역객체가 아니다. 
}

strictFn(); // this === undefined

window.strictFn(); // this === window 객체

document.onclick = strictFn; // this === window.document 객체 

//=================================================
// 자바스크립트 함수는 일급 객체 

// callback 대신 cb라고 쓰기도 한다. 
// var fn = function(cb) { 
// 	if(typeof cb === 'fucntion') {
// 		// cb();
// 		window.setTimeout(cb, 2000); // 2초 후에 콜백 (콜백함수 실행)
// 	} else {
// 		throw new Error('전달인자는 함수 데이터 유형이어야 합니다.');
// 	}
// }

// 함수를 인자로 전달하기 
// fn(function(){
// 	console.log('전달된 함수가 실행되었다.');
// });

function countDown(num){
	// var _target_number_ = target_number--;
	// console.log(_target_number_);
	// function countDown();
}

// 결과 
countDown(10); // 10
countDown(); // 9
countDown(); // 8
countDown(); // 7