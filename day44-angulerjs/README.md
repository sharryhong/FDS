###### Front-End Develop SCHOOL

# DAY 44 AngularJS

- $scope는 변수. $는 jquery와 전혀 상관이 없다. 

p.70
- config 
- route : 항로 설정
- provider

- directive : 직접 만들 수도 있다. 요소로.. 
 - `<carousel><carousel>` // 비표준. `<div data-ng-tab></div>` // 표준

##### factory/service 
- controller들을 연결시켜줌 controller간 데이터 공유(서비스 객체에 model을 두고, 각 controller 중 하나가 변경되면 model을 변경시켜 controller간 데이터가 공유되게 한다.)
일종의 클로저 같이 객체나 함수를 반환시킨다. 예를들어 소숫점 4자리까지 절삭하는 함수를 만들어서 factory/service 객체로 만들어서 사용한다. 
- factory를 여러개 묶어서 service. 
- angular2에선 바뀔 예정
- 예) $http

- 내장 service
 - $http, $timeout(=settimeout), $rootScope, $location(window.location), $log(기록시켜주는 역할)




p.71

```
// AngularJS - 모듈 정의
var setMyApp = angular.module('myApp', []); 
// []는 외부의 라이브러리 등을 불러오는 것. 비어 있어도됨 

// 정의된 angular 모듈을 가져올 때
var getMyApp = angular.module('myApp');
```

##### angular-v1.3.x.html vs angular-v1.3.x-as.html
- $scope사용 vs as 문법 사용 
- as 문법 사용시 : 객체가 생성된다. 
- 관련 사이트 <http://haruair.com/blog/3186>


- 관리를 위해 파일들 나눠서 관리하고, 성능을 위해 압축을 한다. 
- 이 때, 압축을 하면 $scope등도 이름이 바뀌어버려서 작동하지 않게된다.
- 방법 1 : [] 안에 명시된 문자는 줄여쓰지 않는다. 

```
var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope', function($scope) {...}]);
```

- 방법 2 : 압축과정에서 주입된 $inject.. $scope 이름 변경되지 않도록함
 - 이 방법 사용시 안에 들어가는 것 순서 바뀌면 안됨 

```
myController.$inject = ['$scope'];
```

###### chrome 확장 프로그램 
- ng-inspector for angular 
- angularjs graph

- YUI Compressor : 코드압축
 - 설치 후 tools > build system > yui compressor > build (ctrl+b)

###### <https://docs.angularjs.org/tutorial> 따라해보자.
- 11 - Custom Filters

```
angular.
  module('core').
  filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });


// 사용
{{expression | checkmark}}
```

