(function(global, ng){
	'use strict';

	console.log(ng.version.full);

	// controller만들기
	function tableController($scope) {
		// console.log($scope);
		
		// Model(data)
		// [지역변수] 외부에서 접근이 불가능
		// 모델 데이터는 향후 외부로 분리하여 관리한다.
		// 서비스 객체를 사용한다. 
		// $http, $ngResource.. 가 있다. 

		// 예전방식 (IE하위버전 지원)
		// $scope의 속성(변수)
		var people = [
			{
			'name'    : 'tomy',
			'age'     : 23,
			'mail'    : 'tomy@study.com',
			'birthday': '2001-09-02',
			'has-money': 5300,
			'picture' : {
			  'width': 200,
			  'height': 200,
			  'src': 'http://placehold.it/220x220/34c0ff/fff/?text=tomy'
			}
			},
			{
			'name'    : 'sunny',
			'age'     : 32,
			'mail'    : 'SUNNY@STUDY.COM',
			'birthday': '1982-02-17',
			'has-money': 10200,
			'picture' : {
			  'width': 200,
			  'height': 200,
			  'src': 'http://placehold.it/220x220/7045cf/fff/?text=sunny'
			}
			},
			{
			'name'    : 'zeus',
			'age'     : 61,
			'mail'    : 'zeus@study.com',
			'birthday': '1109-01-01',
			'has-money': 1000000,
			'picture' : {
			  'width': 200,
			  'height': 200,
			  'src': 'http://placehold.it/220x220/3a0099/fff/?text=zeus'
			}
			},
			{
			'name'    : 'Aron',
			'age'     : 18,
			'mail'    : 'aron@study.com',
			'birthday': '1998-11-21',
			'has-money': 121900,
			'picture' : {
			  'width': 200,
			  'height': 200,
			  'src': 'http://placehold.it/220x220/3a0099/fff/?text=aron'
			}
			}
		];

		var ordermap = {
			'sort'     : null,
			'name'     : true,
			'age'      : true,
			'mail'     : true,
			'birthday' : true
		};

		// 함수로 만들기
		// $scope의 메소드(함수)
		function changeOrder(prop){
			$scope.ordermap[prop] = !$scope.ordermap[prop];
			$scope.ordermap.sort = $scope.ordermap.sort === prop ? '-'+prop : prop;
		}

		// $scope 객체를 통해 해당속성에 접근이 view에서 가능
		$scope.people = people;
		$scope.ordermap = ordermap;
		$scope.changeOrder = changeOrder;
	}

	// controller를 외부에 공개
	global.tableController = tableController;

})(this, this.angular);