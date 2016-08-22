/*! jqueyr.offcanvas-button.js © yamoo9.net, 2016 */
(function(global, $){
  'use strict';

  // 초기화
  function init() {
 
    var $offcanvas_wrapper = $('.offcanvas-menu-wrapper');
    // 바로 찾지 않고 부모 통해서 찾는 이유? 쌤의 습관으로 나중에 부모를 쓸 경우가 많기 때문이다.
    var $toggle_btn = $offcanvas_wrapper.find('.toggle-menu-button');
    // $offcanvas_wrapper 내에서 '.toggle-menu-button'을 찾아라. 
    // var $toggle_btn = $('.toggle-menu-button', $offcanvas_wrapper);

    $toggle_btn.on('click', toggleOffCanvasMenu); // 클릭하면 함수호출

  }

  // 이벤트 핸들러(함수)
  function toggleOffCanvasMenu() {
    var $this = $(this);
    var $wrapper = $this.parent();
    console.log($wrapper, $wrapper[0]);
    // $wrapper : jQuery 인스턴스 객체
    // $wrapper[0] : dom 객체 
    $wrapper.animate({
    	'left': 0
    });
  }
  
  $(init); // $(document).ready(init);

})(this, this.jQuery);