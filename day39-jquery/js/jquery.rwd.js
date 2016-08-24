(function(global, $){
	'use strict';

	// *** jqeury에 없는 메소드 추가해보기 (라이브러리 생성하여 기능추가)
	if(!$.keys) { // 만약 keys 메소드가 없다면 (ES5엔 이미 추가되어있다.)
		$.keys = function(obj) { // 정적메소드(static method) : 직접메소드추가
			if($.type(obj) !== 'object') { // 객체여야한다.
				throw new Error('객체를 전달해야 합니다.')
			}
			var keys = []; // 담을 배열 
			for(var prop in obj) { // 객체 속성을 배열로 담기
				if(obj.hasOwnProperty(prop)){
					keys.push(prop);
				}
			}
			return keys;
		}
	}
})(this, this.jQuery);

(function(global, $){
	'use strict';

	// Step 1.
	// 페이지가 로드될 때 다음의 기기인지 확인한다. 
	// 아래 조건을 확인하여 <html>요소 또는 <body>요소에 class 속성 값으로 추가한다.
	// Mobile : 0 ~ 767
	// Tablet : 768 ~ 1024
	// Desktop : 1025 ~ 1366
	// Wide-Screen : 1367 ~

	var $html = $('html');
	var screen_width = $html.width();
	console.log($html.width());
	// if()

	// Step 2. 
	// 창 크기를 조정하면 Step 1에서 수행했던 결과를 다시 실행하여 class 속성 처리를 변경한다. 
	// load, resize event사용 

})(this, this.jQuery);