(function(global, $){
	'use strict';

	var $body = $('body');

	// 스타일 제어
	// .css() 사용방법
	// 방법 1) 속성 값을 가져오기 
	var body_margin = $body.css('margin');
	console.log(body_margin);  // 브라우저에서 px로 단위전환됨

	// 방법 2) 속성 값을 설정하기
	// $body.css('margin-left', '2rem');
	// $body.css('margin-right', '2rem');
	// 위와 동일 체이닝으로 쓰기
	$body
		.css('margin-left', '2rem')
		.css('margin-right', '2rem');

	body_margin = $body.css('margin');
	console.log(body_margin); // 브라우저에서 px로 단위전환됨

	// 방법 3) CSS 맵(객체)를 전달하여 설정하기
	var css_map = {
		'background' : '#2a070a',
		'color' : '#cd6668',
		'font-size' : '+=22'
	};
	$body.css(css_map);
	var body_font_size = $body.css('font-size');
	console.log(body_font_size); // 16px + 22 = 38px

	// 방법 4) 각 속성에 콜백함수 설정
	var fn_map = {
		'width' : function(index, value){
			// return value/3 + 20;
			return global.parseFloat(value,10)/3 + 20;
		},
		'height' : function(index, value){
			if(value < 300) {
				return '100vh';
			} else {
				return value * 2;
			}
		}
	};
	$body.css(fn_map);
	console.log('width : ', $body.css('width'));
	console.log('height : ', $body.css('height'));

});

// <h1> 요소 내부의 텍스트 글자를 쪼개서
// 각각의 글자를 <span> 요소로 감싸도록 구성한다.
// 각각의 <span> 요소에 마우스 엔터 이벤트를 설정하여
// 글자의 색상을 변경한다.
(function(global, $){
	'use strict';

	var $h1 = $('.container h1');
	var h1_text = $h1.text(); // text요소 담기
	// console.log(h1_text); 
	// 문자 -> 배열화
	h1_text = h1_text.split(''); // 쪼개서 배열에 담기
	console.log(h1_text); // ['j','Q',...,'d']
	// jQuery.map() 유틸리티 메소드(Static Method, Class Method)
	h1_text = $.map(h1_text, function(item, index) {
	if($.trim(item)) {
		// console.log('<span>'+item+'</span>');
		return '<span>'+item+'</span>';
	} else {
		return item;
	}
	});
	h1_text = h1_text.join('');
	$h1.html(h1_text); // set
	console.log($h1.html()); // get

	var $letters = $('span', $h1); // $h1에서 span을 찾아와라
	// var $letters = $h1.find('span'); // 위와 같은 결과
	// $letters가 배열. jquery내부에 each문이 자동으로 해줌
	// 이 방법은 쉬우나 성능엔 좋지 않은 방법
	// 이벤트발생시마다 this 문서 객체를 jquery() 팩토리 함수로 감싸 jquery객체를 생성해야하기 때문
	// $letters.on('mouseenter', function(){
	// 	$(this).css('background', '#ff0');
	// });

	// // 이렇게 함수 분리해서 코딩 가능
	// $letters.on('mouseenter', letterOver);
	// function letterOver() {
	// 	$(this).css('background', '#ff0');
	// }

	

	// 불필요한 처리를 하지 않는 코드를 작성하도록 
	// 코드 리뷰 -> 코드 리펙토링 
	// jquery의 each문 내에서의 this는 각각의 item이다. 
	// $letters.each(function(index, item){ // $letters는 제이쿼리 객체이기 때문에 each메소드를 쓸 수 있다.
	// 	// var $this = $(this); // 팩토리함수는 큰 일을 한다. 계속 객체 생성. $(this) = $(item)
	// 	var $this = $letters.eq(index); // 팩토리함수를 쓰지않은 방법. 한번 캐쉬한 것들 재사용. 성능에 더 좋다.
	// 	$this.on('mouseenter', function(){ // 클로저 개념과 비슷하다. 
	// 		$this.css('color', '#52c88c');
	// 	});
	// });
	// javascript ES문법의 foreach()는 배열, 유사배열만 가능하나,
	// jquery의 each()는 jquery 객체엔 모두 적용가능하다. 

	// 함수 분리하면 원래는 mouseenter 함수 내의 $this는 인식 못하지만
	// $.proxy(letterOvers, $this) 를 사용하면 $this가 letterOvers함수의 this와 같아 가능해진다.
	$letters.each(function(index, item) {
		// var $this = $(item);
		var $this = $letters.eq(index);
		// $this.on('mouseenter', letterOvers);
		// .one() : 한번만
		$this.one('mouseenter', $.proxy(letterOvers, $this));
		$this.one('mouseenter', $.proxy(playEffectSound, $this));
	});
	
	function letterOvers() {
	// console.log('this:', this);
	// $(this).css('color', '#52c88c');
	// console.log('$this:', $this);
	this.css({
		'transform': 'scale(1.5)',
		'margin': '0 0 0 10px'
		});
	}

	// html5 audio 객체 생성
	// var effect_sound = $('<audio>');
	// effect_sound.attr({
	// 	'src' : '../resources/media/tic.mp3'
	// });

	// 위와 같은 코드
	var effect_sound = $('<audio>', {
		'src' : '../resources/media/tic.mp3'
	})[0];

	function audioStop(audio) {
		audio.pause();
		audio.currentTime = 0;
	}

	function playEffectSound() {
		// HTML5 Audio 실행
		// 음원리 플레이중이라면 멈춤
		audioStop(effect_sound);
		effect_sound.play();
	}

	


})(this, this.jQuery);