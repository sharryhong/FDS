var main_img = query('.main-con img');
console.log(main_img);
var main_img_src = main_img.getAttribute('src');
console.log(main_img_src);

var btn01 = query('.indicator li:nth-child(1) button');
var btn02 = query('.indicator li:nth-child(2) button');
var btn03 = query('.indicator li:nth-child(3) button');

var img_array = ['img/img01.jpg', 'img/img02.jpg', 'img/img03.jpg'];

function changeImg(n) {
	return main_img.setAttribute('src', img_array[n]);
}

btn01.onclick = function() {
	changeImg(0);
}

btn02.onclick = function() {
	changeImg(1);
}

btn03.onclick = function() {
	changeImg(2);
}

// var context = 
