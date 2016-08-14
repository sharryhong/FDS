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