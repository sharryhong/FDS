(function(global, angular, $){
  'use strict';

  var app = angular.module('ngApp');

  function getRandomCount(els) {
    if ( !els.length || els.length === 0 ) { return 0; }
    return Math.floor( Math.random() * els.length );
  }

  app.controller('tabController', ['$scope', function($scope){

    var $tabmenu = $('.tab-menu');
    var $tabmenu_btns = $tabmenu.find('button');

    // 초기 활성화된 탭
    $scope.selected_tab = getRandomCount($tabmenu_btns);
    $scope.setRandom = function() {
      this.selected_tab = getRandomCount($tabmenu_btns);
    };

  }]);

})(this, this.angular, this.jQuery);