// html에 직접 추가 하지 않고 javaScript를 이용하여 동적추가하기
// 이 방법은 공부일뿐 실무에서 쓰진 않는다. 

// 노드 생성
var make_div = document.createElement('div');
var make_h2 = document.createElement('h2');
var make_p = document.createElement('p');
var make_button01 = document.createElement('button');
var make_button02 = document.createElement('button');

var make_h2_text = document.createTextNode('Modal Window');
var make_p_text = document.createTextNode('Modal Window Content');
var make_button01_text = document.createTextNode('send message');
var make_button02_text = document.createTextNode('x');

// 노드 속성 설정
make_div.setAttribute('class', 'modal');
make_h2.setAttribute('class', 'modal-title');
make_p.setAttribute('class', 'modal-desc');
make_button01.setAttribute('class', 'modal-cta');
make_button01.setAttribute('type', 'button');
make_button02.setAttribute('class', 'modal-close');
make_button02.setAttribute('type', 'button');
make_button02.setAttribute('aria-label', 'close modal window');

// 생성된 노드 병합
make_h2.appendChild(make_h2_text);
make_p.appendChild(make_p_text);
make_button01.appendChild(make_button01_text);
make_button02.appendChild(make_button02_text);

// 생성된 모든 노드 병합
make_div.appendChild(make_h2);
make_div.appendChild(make_p);
make_div.appendChild(make_button01);
make_div.appendChild(make_button02);
console.log(make_div);

// document.querySelector('body').appendChild(make_div);
var body = document.body;
body.appendChild(make_div);

// <body> 바로 뒤에 붙게, 즉 지금까지만 하면 <script>가 더 먼저 온다. 수정하기
// 방법 1. 표준 DOM API 방법인 insertBefore() 메소드 활용
// 방법 2. 사용자정의(custom) 헬퍼 함수 prependChild() 활용

// 목표노드의 부모노드.insertBefore(insert삽입할노드, target목표노드)
// parentNode.insertBefore(newNode, referenceNode);

var script_in_body = body.querySelector('script');
var script_parent = script_in_body.parentNode;
// 방법 1
// script_parent.insertBefore(make_div, script_in_body);

// 방법 2 : 부모노드에 만든 자식노드 삽입하는 함수 만들기
// appendChild()는 이미 있는데 얜 없으므로 만들자 
function prependChild(parent_node, child_node) {
	parent_node.insertBefore(child_node, parent_node.firstChild);
}
// prependChild(body, make_div);

// 실습 : 특정노드 뒤에 삽입(형제 요소)하는 헬퍼 함수 작성
// insertBefore는 형제 요소를 만드는데 target목표노드의 앞에 붙인다. 
// insertAfter는 형제 요소를 만드는데 target목표노드의 뒤에 붙인다. 

function insertAfter(target_node, insert_node) {
	var parent_node = target_node.parentNode;
	var next_node = target_node.nextSibling;
	// 만약 next_node가 존재한다면
	if (next_node) {
		parent_node.insertBefore(insert_node, next_node);
	} else {
		parent_node.appendChild(insert_node);
	}
}
// insertAfter(make_button01, make_h2);


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

function queryItem(selector_str, index, context) {
	if(!index) { index = 0; } // index값 없으면 0 전달
	return queryAll(selector_str, context)[index];
}

var test1 = queryAll('div'); // ''를 안쓰면 변수명이다. 
console.log(test1);

var test2 = query('button');
console.log(test2);

var test_node = document.querySelector('.make');
console.log(test_node);

// queryAll()와 query()함수의 기능을 합쳐놓은 함수를 만들어보자. 
// 내가 한거
function $qu(selector_str, all, context) {
	if(all == 'all') {
		return queryAll(selector_str, context);
	} else {
		return query(selector_str, context)
	}
}

function $q(selector_str, hook, context) {
	var method;
	if(hook){ // hook이 있다면
		method = 'query';
	} else {
		method = 'queryAll';
	}
	return window[method](selector_str, context);
}


// `node.removeChild(childnode)` 를 사용하여 dom을 없애는 버튼 만들기 
make_button02.onclick = function() {
	make_div.parentNode.removeChild(make_div);
}

// make버튼을 누르면 다시 dom생기게 하기
query('.make-btn').onclick = function() {
	prependChild(body, make_div);
}