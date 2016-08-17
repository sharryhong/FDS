var pa = query('.demo-container');
var el1 = query('.demo');
var el2 = query('.demo-sibling');

// for continue 문 
// 배열에 string이 아닌 bloorean, function, object 걸러내고 배열에 담기
var fruits = ['바나나', true, '딸기', false, '포도', null, '수박'];
fruits.push(function(){});
fruits.push({'name':'object'});

var real_fruits = [], 	// string만 담을 새 배열 변수
	fruit, 				// fruits배열 값 담기 
	k = 0, 				
	o = fruits.length;	// fruits배열 length만큼 반복

for ( ; k < o; k++) {
	fruit = fruits[k];
	if( isType(fruit) !== 'string' ) {	// 배열 값이 string이 아니면
		continue;						// 뒤 코드 건너뛴다. 
	}
	real_fruits.push(fruit); // 위에서 걸러낸 string들만 real_fruits 변수에 담는다. 
}

console.log(real_fruits);

//********** body노드들 중 일반 요소만 걸러내기 
var collection = document.body.childNodes;

// for(var i = collection.length-1; collection[i]; i--){
// 	let node = collection[i]; // let : ES2015. for문 내에서만 사용하는 변수선언. 호이스팅이 안된다.
// 	console.log(node);
// }
for(var el_collection=[], i=collection.length-1; collection[i]; i--) { 
	// el_collection=[] : 일반 요소만 담는 배열 
	// collection[i]가 참이면 실행된다.
	let node = collection[i];
	if(node.nodeType === 3 || node.localName === 'script') { // #text, <script> 이면 아래 코드들 건너뛰고 for문 다시 
		continue;
	}
	el_collection.push(node);
}

console.log(el_collection);

/* 실습 : node.localName === 'script'
function isElName(node, name) {
	return ????;
}
isElName(node, 'script'); 실행하면 node가 <script>이면 true 반환하는 함수 만들기 
*/

// 내꺼
// function isElName(node, name) {
// 	var nodeName = node.nodeName.toLowerCase();
// 	if ( nodeName === name ) {
// 		return !!nodeName;
// 	} 
// }

// 샘꺼 ------------------------------------------------
// 요소노드의 이름이 동일한지 체크하는 헬퍼 함수
function isElName(node, name) {
  if ( isntElNode(node) ) { errorMsg('첫번째 인자로 요소노드가 전달되어야 합니다.') }
  if ( isType(name) !== 'string' ) { errorMsg('두번째 인자로 텍스트 데이터 유형이 전달되어야 합니다.') }
  return (node.localName || node.nodeName.toLowerCase()) === name;
}