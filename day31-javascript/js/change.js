/*******************************
* 라이언 갤러리   
*/

// 바뀌어야 하는 이미지 
var main_img = query('.main-con img');
var main_img_src = main_img.getAttribute('src');
var img_array = ['img/img01.jpg', 'img/img02.jpg', 'img/img03.jpg'];

var buttons = [];

function changeImg() {
	main_img.setAttribute('src', this.img_src);
	console.log('click');
}

for(var i = 0, j = img_array.length; i < j; i++){
	buttons[i] = query('.indicator li:nth-child('+(i+1)+') button');
	buttons[i].img_src = img_array[i];
	console.log(buttons[i].img_src);
	buttons[i].onclick = changeImg;
}

