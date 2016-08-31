(function(global, angular, jq){
  'use strict';

  function otherCtrl($scope) {
    // 컨트롤러 참조 변수
    var that = this; // this를 참조시키지 않으면 의도치 않은 결과가 나오기도 한다. 
    // 함수를 누가 실행시킬지 모르기 때문이다. 
    that.init_value = null;
    that.trigger    = trigger;
    function trigger() {
      console.log(that);
      if ( jq.type(that.init_value) === 'null' ) {
        that.init_value = 'otherController';
      } else {
        that.init_value = 'not initialization.';
      }
    }

  }

  angular.module('ngApp').controller('otherController', otherCtrl);

})(this, this.angular, this.jQuery);