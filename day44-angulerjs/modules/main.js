(function(global, angular, $){
  'use strict';

  var app = angular.module('fdsApp', []);

  app.controller('fdsMemberListController', ['$http', function($http){

    // 컨트롤 객체 참조 변수 설정
    var ctrl = this;
    // 참조된 컨트롤 객체의 속성 members 설정(초기 값)
    ctrl.members = [];

    // 비동기 통신 수행
    $http({
      'method': 'GET',
      'url': '/db/onepiece.json'
    }).then(successAjaxCall, errorAjaxCall);

    function successAjaxCall(response) {
      ctrl.members = response.data;
      console.log('비동기 통신에 성공!')
    }

    function errorAjaxCall(response) {
      console.log('비동기 통신에 실패 ;(')
    }

  }]);

})(this, this.angular, this.jQuery);