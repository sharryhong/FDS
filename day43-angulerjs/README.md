###### Front-End Develop SCHOOL

# DAY 43 AngularJS

- $가 붙은 것은 service이다. 
- service는 싱글톤객체이다. 

- directive : ng- 가 붙은 것
- expression : {{ }}

- 레퍼런스 보기~!! <https://docs.angularjs.org/api>

- 모듈을 조립하는 방식으로 개발한다. 
 - 레고 조각 제공

#### View : Directives / Expressions / Filter

- Data Binding : 조작(control) 중심(:제이쿼리) vs 데이터(model) 중심(:앵귤러)

##### Directive : 지시자. HTML을 확장한다. 
- 역할 : 
 - 문서객체모델 조작(DOM Manipulation) : jQuery가 잘한다. 함께 쓰자.
 - 데이터 연결(Data Binding)
 - 컨트롤러/모듈(Controller/Modules)
 - 뷰 로딩(View Loading)
 - 스타일링(CSS)
 - 이벤트(Event)

- 문서객체모델(DOM)조작 지시자들 :
 - ngShow // true..
 - ngHide
 - ngView
 - ngRepeat // for문 처럼 처리 

- 모듈/컨트롤러 지시자들 :
 - ngApp
 - ngController // 하나의 view에 하나의 controller가 붙게된다. 

- 데이터 바인딩 지시자들 :
 - ngInit // 초기화 부분. 잘 안쓴다. 
 - ngModel // input 등 form에 관련된 요소들.. 벨리에이션을 쉽게 해준다.
 - ngBind

- 이벤트 지시자들 : 
 - ngClick
 - ngMouseenter
 - ngKeydown

- 지시자 정의 : 웹표준 준수 `data-*`

##### Expressions 표현식

#### Filter : sorting(정렬), formatting(형식에 맞춰 변경), filtering data(데이터 필터)

- 파이프(`|`) 붙인다.

- currency : 통화형태로 바꿈. `$`붙임
- number
- filter
- date

```
<div data-ng-bind="person.birthday | date"></div> 
결과 : Jan 3, 2000

<div data-ng-bind="person.birthday | date:'yyyy년 MM월 dd일'"></div>
결과 : 2000년 01월 03일
```

- json

```
<pre>
  <code>
    <!-- json 데이터 방식으로 보이게 하여 debuging시 편하게 볼 때 쓴다. -->
    {{people | json}}
  </code>
</pre>
```

- uppercase : 대문자로 처리
- lowercase : 소문자로 처리
- orderBy
