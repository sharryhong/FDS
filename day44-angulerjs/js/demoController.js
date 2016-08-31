(function(global, angular){
  'use strict';
  
  // 함수 분리 
  // 지역함수이므로 외부에서 절대 접근 불가
  function demoCtrl($scope) {
    // 비공개 멤버
    var headline = 'this App maked Angular';
    // 공개
    this.headline = headline;
  }

  // 함수 분리 전
  angular.module('ngApp').controller('demoController', demoCtrl);

})(this, this.angular);