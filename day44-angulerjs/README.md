###### Front-End Develop SCHOOL

# DAY 44 AngularJS

- $scope는 변수. $는 jquery와 전혀 상관이 없다. 

p.70
- config 
- route : 항로 설정
- provider

- directive : 직접 만들 수도 있다. 요소로.. 
 - `<carousel><carousel>` // 비표준. `<div data-ng-tab></div>` // 표준

- factory/service : 일종의 클로저 같이 객체나 함수를 반환시킨다. 예를들어 소숫점 4자리까지 절삭하는 함수를 만들어서 factory/service 객체로 만들어서 사용한다. 

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


##### chrome 확장 프로그램 

- ng-inspector for angular 
- angularjs graph