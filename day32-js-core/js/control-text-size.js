// 문서에서 선택한 요소노드(객체) 참조
var page_header = query('.page-header');
var increase_btn = query('.btn-increase-text');
var decrease_btn = query('.btn-decrease-text');

// 검증 : 문서에서 선택한 요소노드(객체) 참조 확인 
console.log('page_header:', page_header);
console.log('increase_btn:', increase_btn);
console.log('decrease_btn:', decrease_btn);

// page_header 요소 객체의 글자 크기 초기화
// page_header.style.fontSize = '16px';

// 버튼에 이벤트 핸들링(핸들러 - 바인딩) (함수 연결)
// increase_btn.onclick = function() {
// 	// page_header의 글자 크기를 키운다. 
// 	var current_size = parseInt(page_header.style.fontSize, 10); 
// 	// var fontZ = fz.split('px')[0] * 1;
// 	page_header.style.fontSize = current_size + 5 + 'px';
// 	console.log(page_header.style.fontSize);
// };

// decrease_btn.onclick = function() {
// 	// page_header의 글자 크기를 줄인다. 
// 	var current_size = parseInt(page_header.style.fontSize, 10);
// 	page_header.style.fontSize = current_size + -5 + 'px';
// 	console.log(page_header.style.fontSize);
// };

//***** 위는 중복되므로 함수로 만들어보자. 
var change_text = 7; 
var limit_up = 40;
var limit_down = 10;

// 글자 크기 변경 함수
function changeTextSize() {
  // console.log('context:', this.firstChild.nodeValue);
  var operator = this.firstChild.nodeValue;
  var _current_text;
  // page_header의 글자 크기를 키운다.
  // 글자 크기를 연산이 가능하도록 변경
  // var current_size = parseInt(page_header.style.fontSize); 인라인스타일때만됨
  var current_size = parseInt(getStyle(page_header, 'font-size'));

  if (operator === '+') {
    _current_text = current_size + change_text;
  } else {
    _current_text = current_size - change_text;
  }
  // 글자 크기를 변경(키움)하여 해당 요소에 설정
  if ( _current_text > limit_up || _current_text < limit_down) {
    _current_text = current_size;
  }
  // if(_current_text > limit_up){
  // 	_current_text = limit_up;
  // } else if(_current_text < limit_down){
  // 	_current_text = limit_down;
  // }

  page_header.style.fontSize = _current_text + 'px';
  console.log(page_header.style.fontSize);
};

increase_btn.onclick = changeTextSize;
decrease_btn.onclick = changeTextSize;



/* 보충수업. 코드 리펙토링

var buttons = queryAll('button'); // 유사배열
var button;
var l = buttons.legnth;

for(var i=0; i<l; i++){
	// 반복문 사용해서 유사배열에 있는 것들 하나씩 꺼내어 이벤트를 준다.
	button = buttons.item(i);
}
*/