###### Front-End Develop SCHOOL

# DAY 42

#### localStorage

- back단을 못하더라도.. 사용자의 웹브라우저에 data 저장하는 방법(storage)
 - 크롬 개발자도구에서 Application메뉴에서 Storage > Local Storage에 저장됨 
 - 서버는 아니지만 사용자의 컴퓨터에서 테스트하기 
 - console창에서 `localStorage` 하면 객체임을 알 수 있고 length속성을 가지고 있음을 알 수 있다. 
 - 도메인 하나당 5Mb정도 저장가능

```
localStorage.getItem('FDS);
localStorage.setItem('FDS','어렵지만 재밋다.');
localStorage.removeItem('FDS');
localStorage.clear(); // 모두 지우기 
localStorage.key(0); // 첫번째 storage

```

- localStorage 사용의 좋은 예 : 네이버 뉴스에서 드래그앤드롭으로 관심 뉴스를 위로 올릴 수 있다. 접근성을 위해 화살표로 순서 가능 (위치 기억)

#### AngularJS

- 커스텀 빌딩 : angularjs와 jquery만 합쳐도 200kb가 된다. 서로 안쓰는 기능 제거하고 쓰면 좋겠다.
- gzip으로 다운받으면 더 용량이 적은데, 서버에서 관리해야 한다. 
- 앵귤러 버전 찍어보기 : `console.log(window.angular.version.full)`

- 사용하기 
 - 방법 1. <https://angularjs.org/> IE8까지 고려 : Legacy 1.2.x 버전. IE9이상 고려 : Stable 1.5.x 버전 다운받아 사용하기 
  - `<script src="framwork/angular.min.js"></script>`
 - 방법 2. Bower에 angular설치. Bower가 관리해줌
  - 터미널에서 `npm i -g bower` 로 bower 설치
  - 여러가지 사용하고 싶다면 `

- npm -i -D angular : 개발용으로 angular설치 (backend수업때 다시 배우기) (-S는 배포용 관리)

- html문서의 `<html>`요소에 `data-ng-app` 을 붙이면 angular를 사용할 수 있는 준비과정(부트스트랩:그것도 다름)을 거친다. `ng-app`만 붙여도 되지만 이건 비표준이다. 다른곳에서 써도 되지만 일반적으로 `<html>`요소에 붙인다.
 - 부트스트랩 : 정적이었던 html문서를 angularjs, web application으로 동작할 수 있도록 만들어주는 일련의 과정

 - 1_ `ng-app`을 찾는다. `data-ng-app="module"` // 모듈로 나눠서 작업 가능 // 식별하기 위해 모듈명을 넣는다. (넣지 않아도 된다.)
 - 2_ 앵귤러에는 $injector(주입자)가 있다. 이 주입자가 $compiler와 $rootscope를 만들어낸다.
  - 앵귤러에서는 scope chaining이 일어난다. 이 것을 별도로 해주는 것이 이 scope인데.. 이 rootscope는 모든 scope의 조상이다. scope는 controller마다 하나씩 가지고 있다. 
  - controller는 쉽게 말해 함수이다. 이 함수에 injector가 주입을 시켜준다. 이 scope의 조상이 rootscope이다. 따라서 해당 scope에 내용이 없다면 거슬러 거슬러 올라간다. (javascipt와 동일)
  - 따라서 rootscope가 모든걸 최종적으로 관리한다. 
  - 당연히 하나의 애플리케이션에는 하나의 compiler, rootscope, injector만 가지고 있다. 
  - compiler가 document object mode에 rootscope를 넣어서 파싱한다. 
  - 이 단계에서 실제 사용자들이 함수를 콜링한 형태로 앵귤러 컨트롤을 만들 때 마다 scope가 생성이 된다. 이 것이 view와 연결이 된다. 
  - 이 단계를 거쳐서(앵귤러가 이렇게 부트스트랩과정을 통해 다이내믹 돔을 완성해준다.)

 - 자동으로 class="ng-scope"가 생긴다.
 - ng-app -> $injector , $compile , $rootScope 가 하나씩 생긴다. <br> $compile (DOM)($rootScope) 단계를 거쳐서 Dynamic DOM(view)가 생성된다. <https://docs.angularjs.org/guide/bootstrap>

- sublime text에서 install package에서 angularJS설치 (emmet되게함)
 - preferences > package setting > angularjs > enable data-prifix 체크

- ngModel(json파일), ngBind .. Two way data binding : 많은 two way ..는 느리게 만드는 요인이 될 수 있다. 양쪽이 서로 감시. 실시간으로 바뀜 (model과 view가 서로 바뀌면 계속 반영됨). one way는 한번만 바뀜(react는 one way만 지원)
 - 자주 바뀌면 : two way.. 자주 안바뀌는 부분은 one way
 - 기본값은 two way이다. 잘 설정해주자. 
 
- template : html, model : json파일 등 <br>
비동기통신으로 서버에서 json파일을 가져온다. -> view완성

- root scope는 모든 scope의 조상. root scope는 ng-app을 하면 암묵적으로 선언된다. 

- controaller를 여러개로 사용하면 좋다. 

#### 앵귤러를 구성하는 애플리케이션 핵심구조
- 모두 Module로 구성되어 있다. 
- routes : spa를... 
 - ui(view), logic/data(controller) 연결 : $scope 

##### Module : 역할 container

- controller
 - model(자료,json)과 view(템플릿,html)제어 
 - $scope를 통해 연결(자동으로됨)
 - view를 제어하는 두뇌역할
 - factories/services를 이용해 데이터 검색 및 보관 

- view
 - 사용자 인터페이스(ui)를 렌더링한다. 
 - html/css포함
 - controller에 연결된 $scope객체를 통해 연결된 데이터 처리 
 - view는 derective, filter포함 
 - derective를 사용해 html을 확장한다. 

- route
 - 고유한 연결 주소에 controller/view를 각각 연결
 - 서버에 요청하지 않고.. controller의 http바꿈 
 - update를 진두지휘 
 - 라우트 라파미터(전달인자)를 포함시킬 수 있다. (예: #/customers/:customerld  (page/id연결))
 - route : /customers <- (view : customers.html, controller : customersController.js)

- factories/services
 - 싱글톤 객체. 하나만 존재하는 객체 
 - RESTful서비스에 사용 
 - controller 사이(컨트롤러 간 원래는 교신이 없다) 데이터 공유에 사용 
 - 사용자 정의 로직에 사용



-

##### 그 외 
- perfactpixel plugin 크롬 : 디자인과 작업물이 픽셀 잘 맞는가 

- jQuery('body').offset() // 객체 반환
 - jQuery('body').offset().top // body요소의 top값 반환
 - jQuery('body').offset('top') // body요소의 top값 반환

- 야무쌤 자료 살펴보기 <https://github.com/yamoo9/Making-Modern-Web-Design-Work-Process>, <https://github.com/yamoo9/Making-Modern-Web-Design-Work-Process/tree/master/11-yamoo9_ProjectKit>
 - 쌤 yamoo9_ProjectKit 
  - package.json : 서버쪽 관리
  - bower.json : 프론트쪽 관리