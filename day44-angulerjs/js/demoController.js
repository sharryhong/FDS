(function(global, angular){
  'use strict';

  angular.module('ngApp').controller('demoCtrl', function() {
    // 비공개 멤버
    var headline = 'this App maked Angular';
    // 공개
    this.headline = headline;
  });

})(this, this.angular);