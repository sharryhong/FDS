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