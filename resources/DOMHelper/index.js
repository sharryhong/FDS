/*! DOMHelper.js @SharryHong's, 2016 */

/**
 * prependChild(부모노드, 자식노드)
 * 부모노드의 첫번째 자식노드로 삽입하는 함수
 * appendChild()는 존재하는 함수이다.
 * ---------------------------------------------
 * @작성자  SharryHong
 * @버전    0.0.1
 * @param  {ELEMENT_NODE}  parent_node  부모노드
 * @param  {ELEMENT_NODE}  child_node   자식노드
 * @return {undefined}
 */

function prependChild(parent_node, child_node) {
	parent_node.insertBefore(child_node, parent_node.firstChild);
}

/**
 * insertAfter(목표노드, 삽입노드)
 * 목표노드 뒤에 삽입노드를 추가하는 함수 (형제노드 만들기)
 * ---------------------------------------------
 * @작성자  SharryHong
 * @버전    0.0.1
 * @param  {ELEMENT_NODE}  target_node  목표노드
 * @param  {ELEMENT_NODE}  insert_node  삽입노드
 * @return {undefined}
 */

function insertAfter(target_node, insert_node) {
	var parent_node = target_node.parentNode;
	var next_node = target_node.nextSibling;
	if (next_node) {
		parent_node.insertBefore(insert_node, next_node);
	} else {
		parent_node.appendChild(insert_node);
	}
}

/////////////////////////////////////////////////
// querySelector('css selector')를 간단하게 쓰는 함수 구현
function queryAll(selector_str, context) { //context는 안넣어도되게 뒤에 넣자
	// 유효성 검사
	// 문자 데이터인지 확인 
	if (typeof selector_str !== 'string') {
		throw new Error('전달인자는 문자열만 가능합니다.');
		// console.error('전달인자는 문자열만 가능합니다.'); 
		// 이 방법은 IE하위버전 호환 안된다. 
		// 코드를 멈춰야 하는 경우 throw new Error()사용. new생략 가능
	}

	// context 인자 값을 사용자가 전달하였는가?
	// 사용자가 context 값을 전달하지 않았을 경우는 undefined이다. 
	if (!context) { // context가 없다면. context undefined: false. 
		context = document; // context가 없으면 document
	}

	return document.querySelectorAll(selector_str);
}

function query(selector_str, context) {
	return queryAll(selector_str, context)[0];
}

// 문서 객체(요소노드)를 제거하는 헬퍼함수
function removeNode(node) {
	return node.parentNode.removeChild(node);
}

// createElement(), createTextNode()
// 2가지 일을 동시에 수행하는 헬퍼함수 
// 요소를 생성한 다음 내부에 텍스트를 자식 노드로 삽입
function createNode(el_name, text) {
	var el_node = document.createElement(el_name);
	// if(text) {
	if(typeof text !== 'undefined' && typeof text === 'string') {
		var text_node = document.createTextNode(text);
		el_node.appendChild(text_node);
	}
	return el_node;
	// return element.appendChild(text); // 안되!
}
// createNode('div', 'hellow world');

//******* computed상의 style값 가져오기 
// 호출 방식 : getStyle(query('.page-header'),'fontSize');

function getStyle(el, property, pseudo) {
	var value;
	// 유효성 검사
	if(el.nodeType !== 1) {
		console.error('첫번째 인자인 el은 요소여야합니다.');
	}
	if(typeof property !== 'string') {
		console.error('두번째 인자인 property는 문자열이어야 합니다.');
	}
	if(typeof pseudo !== 'string' && pseudo) { // pseudo가 있는데 string이 아니면
		console.error('세번째 인자인 pseudo는 문자열이어야 합니다.');
	}
	if(window.getComputedStyle){
		// 표준 W3C방식(IE9+)
		value = window.getComputedStyle(el,pseudo)[property];
	} else {
		// 비표준 MS IE8이하
		value = el.currentStyle[property];
	}
	return value;
}

/* 결과 
getStyle(query('.page-header'),'color','::after')
"rgb(255, 0, 0)"
*/

// 만약에 인자값으로 '' 를 안하면 변수이다. 

/* [property] : 객체 속성 확인 표기방법. property는 변수이다. 
property = 'fontSize';
객체[property]; 라고 하면 fontSize의 값을 전달받는다.
*/

/************* 
실제 css style속성처럼 속성인자 입력해도 카멜케이스방식으로 변경하기 
(예: font-size -> fontSize) 
*/
function camelCase(css_prop){
	return css_prop.replace(/-./g, function($1){ // $1 : -s
		return $1.replace('-','').toUpperCase();
	});
}

// border-left-top -> borderLeftTop
// $1 : -l , bordrLeft-top 
// 정규표현식에 있는 함수 : 더이상 바꿀 것이 없을 때까지 실행된다. 
// 첫번째 $1, 두번째 $2... 인데, ... 


// 숫자인지 확인하기 
function isNumber(data) {
	return typeof data === 'number';
}

// JavaScript의 모든 데이터 유형을 올바르게 감지할 수 있는 함수
function isType(data) {
	return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}


// error메시지 띄우는 함수
function errorMsg(message) {
	if ( isType(message) !== 'string') {
	// 함수 자신을 다시 호출 : 재귀함수
	errorMsg('오류 메시지는 문자 데이터 유형이어야합니다.')
	}
	throw new Error(message);
}

// 이전 노드 찾기 // 최신브라우저는 $0.previousElementSibling;
// function prevEl(node) {
// 	// 검증 : 유효성 검사
// 	if(node.nodeType !== 1) {
// 		errorMsg('전달된 인자는 요소노드여야 합니다.');
// 	}
// 	do {
// 		node = node.previousSibling;
// 	} while(node && node.nodeType !== 1); // nodeType이 요소노드(1)이면 끝남
// 	return node;
// }

// 노드인지 아닌지 테스트하는 함수. 노드이면 true, 아니면 false반환
function isElNode(node) {
	return node.nodeType === 1;
}
function isntElNode(node) {
	return !isElNode(node);
}

function prevEl(node) {
	if(isntElNode(node)) {
		errorMsg('전달된 인자는 요소노드여야 합니다.');
	}
	// IE 9+, 신형 웹 브라우저
	if(node.previousElementSibling) {
		return node.previousElementSibling;
	}
	// 구형 IE 6~8
	else {
		do { node = node.previousSibling; }
		// while(node && node.nodeType !== 1); // nodeType이 요소노드(1)이면 끝남
		while(node && isntElNode(node));
		return node;
	}
}

// 다음 노드 찾기 
function nextEl(node) {
	// if(isntElNode(node)) {
	// 	errorMsg('전달된 인자는 요소노드여야 합니다.');
	// } // 빈 텍스트 노드 등이 전달되어도 되도록 하자. 
	do {
		node = node.nextSibling;
	} while(node && isntElNode(node));
	return node;
}

// 첫번째 자식요소 노드를 찾는 헬퍼 함수
function firstEl(node) {
	if(isntElNode(node)) {
		errorMsg('전달된 인자는 요소노드여야 합니다.');
	}
	if(!node.firstElementChild) { // IE9+
		return node.firstElementChild;
	} else {
		// IE 6~8
		// node 찾고자 하는 자식 노드의 부모이다. 
		// 제일 먼저 부모노드인 node의 첫번째 자식노드를 찾는다. 
		node = node.firstChild;
		console.log(node);
		// 
		// 삼항식에서 더 많이 나오는 것을 앞에다 둔다. 

		do { node = node.nextSibling; }
		while( node && isntElNode(node));
		return node;
	}
}

// 더 쉽게 짜보자.
function _firstEl(node) {
	return node.children[0];
}

function _lastEl(node) {
	var children = node.children;
	return children[children.length -1];
}

// 마지막 자식요소 노드를 찾는 헬퍼 함수
function lastEl(node) {
	if(isntElNode(node)) {
		errorMsg('전달된 인자는 요소노드여야 합니다.');
	}
	if(!node.lastElementChild) { // IE9+
		return node.lastElementChild;
	} else {
		// IE 6~8
		// node 찾고자 하는 자식 노드의 부모이다. 
		// 제일 먼저 부모노드인 node의 첫번째 자식노드를 찾는다. 
		node = node.lastChild;
		console.log(node);
		// 
		// 삼항식에서 더 많이 나오는 것을 앞에다 둔다. 

		do { node = node.previousSibling; }
		while( node && isntElNode(node));
		return node;
	}
}

// ------------------------------------------------
// 요소노드의 이름이 동일한지 체크하는 헬퍼 함수
function isElName(node, name) {
  if ( isntElNode(node) ) { errorMsg('첫번째 인자로 요소노드가 전달되어야 합니다.') }
  if ( isType(name) !== 'string' ) { errorMsg('두번째 인자로 텍스트 데이터 유형이 전달되어야 합니다.') }
  return (node.localName || node.nodeName.toLowerCase()) === name;
}

// 유사배열을 배열화. 배열의 능력을 쓰기 위해
function makeArray(data) {
	// 전달된 객체는 배열 또는 유사 배열인가? 
	var check_data = isType(data), 
		result_arr = [], // 배열 만들어 새로 담을 배열 변수
		len = data.length;
	// 실제 배열인 경우 그냥 리턴
	if(isType(data) === 'array') {
		return data;
	}
	// 유사 배열인 경우
	if(len && check_data !== 'string') {
		while(len--){ // --len인 경우 원하는 결과를 얻을 수 없으므로 주의
			result_arr.push(data[len]);
		}
	}
	return result_arr.reverse(); 
	// 위는 값이 반대로 들어가므로. reverse()도 배열에 쓸 수 있는 함수. 
}

// 다른 방법으로 유사배열을 배열화
// 문제 : Array.from 한번만 부르면 될걸 계속 부르게된다. ?
function convertArray(data){
	if(Array.from){ // 지원되는 브라우저에서 자동 배열화
		return Array.from(data); 
	} else {
		return Array.prototype.slice.call(data);
	}
}

// 1. 정식으로 클로저를 사용하는 방법으로 문제 해결
// 이 방법에서 convertArray_wrapper()에서 
//                                                                                                                                                         if, else는 한번만 실행되고(Array.from지원하는 브라우저니? 질문하기)
// 내부함수인 closureFn()만 수행하게 된다. 
// 이 방법은 호출을 해야하므로 그리 좋은 방법은 아니다.
function convertArray_wrapper() {
	var closureFn;
	// 내부에서 클로저 함수를 반환. 중요!! 
	// function _fn(data) {
	// 	return data;
	// }
	// return _fn;
	if(Array.from) {
		closureFn = function(data) {
			return Array.from(data);
		};
	} else {
		closureFn = function(data) {
			return Array.prototype.slice.call(data);
		}
	}
	return closureFn;
}

// 함수 실행할 때 한번 실행되어 Array.from이 있는 브라우저, 
// 아닌 브라우저에 따라 그것 한번만 실행된다. 
var convertArray = convertArray_wrapper(); 
// convertArray(data); 처럼 실행시킨다. 


// 2. 약식(호출과정없이. IIFE패턴)을 사용하여 클로저를 처리하는 문제 해결방법
// 좀 더 좋은 방법. 호출이 없다. 
var convertArray = (function(){
	if(Array.from) {
		return function(data) {
			return Array.from(data);
		}
	} else {
		return function(data) {
			return Array.prototype.slice.call(data);
		}
	}
})();
// 스스로 실행되어 Array.from이 지원되는 브라우저인지 확인이 이미 끝났다. 