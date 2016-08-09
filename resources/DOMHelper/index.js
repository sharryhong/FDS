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