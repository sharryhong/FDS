/*! @SharryHong's, 2016-08 */

// 실제 문서에 추가 되지는 않는다. 
var maked_div = document.createElement('div');
var maked_ul = document.createElement('ul');

// console.log('div:', maked_div); // div: <div></div>
// console.log('ul:', maked_ul); 	// ul: <ul></ul>

// <div>this is div.</div>
// 이 방식은 만들어준 것일뿐, 합체가 안되었다! -> 잘 안쓴다. 
// 나중에 좋은 방법을 배운다. 
var maked_div_text = document.createTextNode('this is div.');

var maked_ul_list = document.createElement('li');
var maked_li_text = document.createTextNode('list item');

// console.log('div:', maked_div_text);
// console.log('ul > li:', maked_ul_list);
// console.log('ul > li_text:', maked_li_text);

// 합체!!!!!!!
maked_div.appendChild(maked_div_text);
// console.log(maked_div);

// 동적으로 생성한 <div>요소를 문서의 특정한 목적지에 추가(삽입)
var target_place = document.querySelector('#parent > .child:last-child');

target_place.appendChild(maked_div);

// 미션!! 동적으로 생성된 <ul><li>List item</li></ul>을
// 문서의 특정 요소 내부 마지막 자식으로 추가(삽입)하기 

maked_ul.appendChild(maked_ul_list);
maked_ul_list.appendChild(maked_li_text);
// console.log(maked_ul);

// var target_li = document.querySelector('#parent > .child:last-child');
// 목적지에 해당하는 요소를 직접 생성한 다음에 붙여보자.
var target_container = document.createElement('div');
// 그냥 <div></div>가 아닌 <div id="target-con"></div>로 만들어보자.
target_container.setAttribute('id', 'target-con');
document.body.appendChild(target_container);

target_container.appendChild(maked_ul);

//
// var target = document.body.firstChild;
// 항상 목표노드.부모노드.. 이렇게 해야한다.
// target.parentNode.insertBefore(target_container, target);

// 위의 insertBefore를 응용하여 prependChild()함수를 만들어보자.
function prependChild(con, selector) {
	var tar = document.querySelector(selector);
	tar.parentNode.insertBefore(con, tar);
	console.log(tar);

}
prependChild(target_container, '#parent');

