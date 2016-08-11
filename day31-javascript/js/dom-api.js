var replace_p = createNode('p','replaced paragraph.');
// body.replaceChild(replace_p, body.children[0]);
// console.log(replace_p);

var clone_replace_p = replace_p.cloneNode(); // <p>요소만 복제
var deep_clone_replace_p = replace_p.cloneNode(true); // <p>요소의 모든 것을 복제
console.log('일반복제:', clone_replace_p);
console.log('전체복제:', deep_clone_replace_p);


// preprendChild(body, deep_clone_replace_p);

// 실습. 
// 목표 : target_node.parentNode.replaceChild(replace_node, target_node)는 기존노드 없애므로, 둘의 노드를 바꾸는 함수를 만들어보자.
// 매개변수1 : 이동시키고자 하는노드
// 매개변수2 : 이동시키고자 하는 목표가 되는 노드(기존노드)

function changeNodes(moving_node, target_node) {
	// var m_node = query(moving_node);
	// var t_node = query(target_node);
	var parent = target_node.parentNode;
	console.log(parent);

	// var save_node = parent.replaceChild(moving_node, target_node);
	// console.log(save_node);
}
// changeNodes('.demo1', '.demo3');

// 코드 설계
// 이 함수는 어떤 일을 하나?
// 전달된 2개의 노드 위치를 교체한다.
// 이 함수를 왜 만들어야 하나? (feat. 신고운)
// 매개변수 1: 이동시키고자 하는 노드
// 매개변수 2: 이동시키고자 하는 목표가 되는 노드
function changePositionNodes(moving_node, target_node) {
  // moving_node의 위치를 기억하기 위한 위치 변수로 다음 노드를 참조.
  var next_node = moving_node.nextSibling;
  // moving_node의 부모 노드가 존재하는지 유무를 파악하기 위한 변수.
  var parent_node = moving_node.parentNode;
  // 교체 과정에서 사라진 노드를 변수에 기억시킴.
  var removed_node = target_node.parentNode.replaceChild(moving_node, target_node);
  // 다음 노드가 존재할 경우
  if (next_node) {
    next_node.parentNode.insertBefore(removed_node, next_node);
  }
  // 부모 노드가 존재할 경우
  else if (parent_node) {
    parent_node.appendChild(removed_node);
  }
  // 부모 노드가 존재하지 않을 경우
  else {
    return removed_node;
  }
}