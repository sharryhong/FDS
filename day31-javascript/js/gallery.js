/**********************************
* 라이언 갤러리 @ Hong HS. 2016. 08
* html에서 button을 추가 하여도 작동하도록 만들기 
*/

// 바뀌어야 하는 img요소 담는 변수 만들기
var main_img = query('.gallery img');

// buttons 변수 : 각 button 요소를 담고 있는 배열. 아래 for문에서 만듭니다. 
var buttons = [];

// button요소가 몇개인가 알기 위해
// btn_length에는 [<button>, <button>, ...] 유사배열이 생성됩니다. 
var btn_length = queryAll('.indicator button');
console.log(btn_length.length);

// this란 각 버튼 buttons[i] (context)을 말하며, 
// 각 버튼 buttons[i]의 객체 프로퍼티 img_src 값을, main_img변수의 src속성 값으로 넣어줍니다. 
var changeImg = function() {
	main_img.setAttribute('src', this.img_src);
};

// j = btn_length.length // button요소의 갯수만큼 for문을 돌립니다.
for(var i = 0, j = btn_length.length; i < j; i++){
	// buttons변수에 각 button 요소 담기(배열)
	buttons[i] = query('.indicator li:nth-child('+(i+1)+') button');
	// buttons변수 각 배열값에 img_src 객체 프로퍼티 만들기. 값은 src 주소 
	buttons[i].img_src = "img/img"+(i+1)+".gif";
	console.log(buttons[i].img_src); // 테스트용
	// 각 버튼을 클릭하면 changeImg 함수 실행하기 
	buttons[i].onclick = changeImg;
}

/********** 단계
1. 중복되는 코드여도 우선 구현되도록 코딩하였습니다. 
예) var btn01 = query('.indicator li:nth-child(1) button');
var img_array = ['img/img01.jpg', 'img/img02.jpg', 'img/img03.jpg'];
function changeImg(n) {
	return main_img.setAttribute('src', img_array[n]);
}
btn01.onclick = function() {
	changeImg(0);
}

2. 중복되는 코드를 없애기 위한 작업으로 for문을 작성하면서 함수, 배열, 객체 등에 대한 공부를 더 해야겠다는 걸 깨달았습니다. 

3. 처음 작성하였던 매개변수가 있는 함수로는 for문 내에서 buttons[i].onclick = 함수실행; 구현이 쉽지 않았습니다. 
그래서 자바스크립트 함수, 객체 등에 대해 더 공부한 후(책) 
각 buttons[i]의 객체 인스턴스를 추가하여 인스턴스 값을 던져주어야겠다고 생각했습니다. 
=> 여기까지가 현재 코드

4. sass로 갤러리다운 스타일을 추가하고, 코드 리펙토링 계속 하기로 합니다. :) 
*/