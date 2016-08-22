

console.log(window.$ === window.jQuery);

// $ 별칭 충돌 방지하기 위한 다양한 방법
// 방법 1. $를 사용하지 않고, jQuery 키워드만 사용
jQuery('body').css('background','#3e9');

// 방법 2. $를 사용하지 않고, jQuery.noConflict()메소드 사용으로
// jQueryy를 참조하는 새로운 변수 생성. 
// $별칭 포기
// jQuery.noConflict(); 
// 이제 더이상 window.$ === window.jQuery 가 아니다.
// 만약 변수에 담는다면
var $jq = jQuery.noConflict(); 
// 이제 $jq = jQuery 이다.

// 방법 3. jQuery.noConflict(true)를 사용하여, $, window.jQuery를 모두 포기한다. 
var $$ = jQuery.noConflict(true);
// 이제 $$ = jQuery 이다.

// 방법 4. IIFE 패턴을 사용하는 방법
// 다른사람들이 $, jQuery써도 되는데, 이 함수 내에서 $ 작성하면 무조건 jQuery이다(충돌안남). 난 여기에 작성하겠다. 
(function(global, $){
  'use strict';
  // console.log(global.$ === global.jQuery);
})(this, this.jQuery);

// 이렇게 써도 이 안에서 $ 작성하면 무조건 jQuery이다(충돌안남)
jQuery(function($)) {

}

jQuery(document).ready(function($){
	
});

// --------------------------------------------------------------------------------

// 방법 5. jQuery() 팩토리 함수에 함수를 전달한 후, 인자 값을 $로 받는다.
// 무조건 이 안에 적어야만 jQuery로 인식된다. 모르는 사람이 외부에쓰면 인식못한다.
jQuery.noConflict(true)(function($) {
  // jQuery 라고 한다면 jQuery 버전이 찍힌다.
  console.log($().jquery);
});


// 만약 script 로드를 head에서 했다면 문서객체모델이 완성된 다음 코드가 실행될 수 있도록 이벤트 사용해야 한다.
// window.onload를 대체할 수 있는 window.addEventListener('DOMContentLoaded') 이벤트를 
// 추상화(원래 없던 것을 만들어 기능추가)한 jQuery(document)
// -> 이런 방법보다 body끝에서 script 쓰는 것이 가장 빠르다. 