(function(global, $){
	'use strict';

	var $gnb = $('.gnb');
	var $gnb_list = $gnb.find('li');

	var $gnb_list_1st = $gnb_list.eq(0); // 첫번째
	var $gnb_list_2st = $gnb_list.eq(1); // 두번째
	var $gnb_list_last = $gnb_list.eq(-1); // 마지막
	var $gnb_list_last_2nd = $gnb_list.eq(-2); // 마지막에서 두번째

	console.log('$gnb_last_1st', $gnb_list_1st);
	console.log('$gnb_last_2st', $gnb_list_2st);
	console.log('$gnb_last_last', $gnb_list_last);
	console.log('$gnb_last_last_2nd', $gnb_list_last_2nd);

	// class가 없는 li에 addClass
	$gnb_list.not('[class]').addClass('have-not-class-attribute');

	// function 
	$gnb_list.not(function(index, element){
		// console.log(arguments); // 우선 매개변수 쓰지않고 인자값 뭐가 들어오나 테스트하기 (index, element)임을 알 수 있다.

		// 홀수 제외한 짝수 <li> 필터링
		// if(index % 2 === 0) { // 짝수면
		// 	console.log(index);
		// }
		return index % 2 === 0; // return된 애들만 필터링. not() : 즉, 홀수 아닌애들 통과 
	}).addClass('even');

	$gnb_list.not(':even').addClass('even'); // 부정

	// filter(selector)
	$gnb_list.filter('.last').addClass('last_list'); // 긍정
	// $gnb_list.filter('.first').remove(); // 찾아서 제거하라. 

	// filter(function)
	$gnb_list.filter(function(index, element){
		console.log(index, element);
	});

	
	$gnb_list
		.add('nav, a')
		.addClass('nav-component')
		.filter(function(index, element){
			// console.log(index, element);
			var node_name = element.nodeName.toLowerCase();
			// a, nav 요소만 골라
			return node_name === 'a' || node_name === 'nav';
		})
		.css({
			'display' : 'inline-block',
			'padding' : '1em'
		});
		// .css({ // 콜백함수이므로 반복(each)이 되어 수행된다. 제이쿼리가 해준다.
		// 	'width': function(index, current_value) {
		// 		var $current_list = $gnb_list.eq(index);
		// 		if($current_list.is('.last'){ // li중에 .last
		// 			return '4rem';
		// 		})
		// 	}
		// .eq(-1).css('width','4rem'); // 위와 같은애
		// .last().css('width','4rem'); // 위와 같은애
		// });

		$gnb_list.each(function(index, element){
			// $(element) === $(this)
			// 명시적으로 $(element) 쓰는 것이 더 좋을 듯 
			var origin_html_code = element.innerHTML;
			console.log(origin_html_code);
			// DOM Script : 훨씬 빠르다.
			element.innerHTML = origin_html_code + '<span>' + index + '</span>';
			// jQuery
			// $(element).html( $(element).html() + $('<span>').text(index) );
		});

		var $gnb_first = $gnb.find(':first'); // h2
		console.log($gnb_first.next()); // ul
		console.log($gnb_first.next().children(':last')); // li중 마지막
		console.log($gnb_first.next().children(':last').prevAll('.first')); // li중 처음
		console.log($gnb_first.next().children(':last').prevAll('.first').parents('.gnb')); // 부모 중 class = gnb


})(this, this.jQuery);