(function(global, $){
	'use strict';

	function init() {
		// console.log($('.addClass_look'));
		// var $add_look = $('.addClass_look');
		// var $remove_look = $('.removeClass_look');
		// var $toggle_look = $('.toggleClass_look');
		// var $demo_box = $('.demo-box');
		// // console.log($add_look);
		// $add_look.on('click', function(){
		// 	$demo_box.addClass('add');
		// 	// console.log($demo_box);
		// });


		// 이벤트 위임 (부모에만 이벤트걸면 자식도 됨)
		// 하나하나걸면.. 나중에 문제 생길 수 있다. 이벤트는 처음만 실행되므로
		// javaScript가 더 빠르니까 jquery대신 사용한다. 
		// 조건 많아지면 if보다 switch가 좋다. 
		var $demo_box = $('.demo-box');
		// $('.button-controls') 내부의 'button'에 이벤트 위임
		$('.button-controls').on('click','button', {'$index' : 0} ,function(event){
			switch(this.getAttribute('class')){
				case 'addClass_look':
					$demo_box.addClass('look');
				break;
				case 'removeClass_look':
					$demo_box.removeClass('look');
				break;
				case 'toggleClass_look':
					// $demo_box.toggleClass('look');
					$demo_box.toggleClass('look', (event.data.$index += 3) % 6 === 0);
				break;
			}
		});
		// 이벤트 캡쳐링(event capturing)
		// 이벤트 버블링과 반대되는 개념으로서,
		// 이벤트가 상위노드에서 하위노드로 전파되어 실행된다.
		// (※ 캡쳐링의 경우는 IE9 이전 버전에서는 지원하지 않는다.)
	};

	// 문서 객체 모델이 준비가 되면 init 함수 실행
	$(init);

})(this, this.jQuery);