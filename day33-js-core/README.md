###### Front-End Develop SCHOOL

# DAY 33 - javaScript core

### 1. 자바스크립트 데이터 유형
#### 1.1 원시형 데이터 (숫자, 문자, 논리, null, undefined)
#### 1.2 자료형 데이터 (함수, 배열, 객체)

- 리터럴(literal) : 값 자체가 리터럴이다. 

- 키워드로 시작하는 if(){}, for(){}, function myFn(){} 등은 뒤에 세미콜론 오지 않는다. 

##### 함수형 (Function)

- 설정하는 set 함수
 - return이 있어도 되고 없어도 된다(만드는 사람 마음)
 - return이 있으면 체이닝이 됨

- 함수명에는 카멜케이스 방식으로 습관을 갖자. 네이밍 가이드 필요.

###### 방법 

- 1. 함수 선언문(function declaration) : {}뒤에 세미콜론 오지 않는다. 
 - `function 함수이름(){}`
 - 호이스트개념으로 인해서 어느 위치에도 와도 된다. (좋지않은 습관)

- 2. 함수 표현식(function expression) : {}뒤에 세미콜론 적는다.
 - `var 변수(함수이름) = function(){};`
 - 익명함수
 - 함수 리터럴표현식
 - 상단에 위치시켜야 한다. 
 - 예) obj.onclick = function(){}; 

- 3. 함수 생성자 함수를 사용하여 함수를 생성하는 방법 
 - 안쓴다.
 - 직접 객체 만들때만 사용하자.
 - var myFn = new Function(); // 함수가 함수를 낳는다. 
 - new Function(함수구문);
 - 생성자 함수 new 키워드.. 를 통해 다른 언어의 클래스 개념을 만들 수 있다. 


```
obj.onclick = myFn; // obj.onclick은 myFn을 참조하고 있다.
function myFn(){}
// 시뮬레이션 : $0.onclick();만 해도 실행할 수 있다.
// $0.onclick = null; 하면 함수 연결을 끊는다. 
```


```
// 함수선언
var logIdentity = new Function('console.log("this is function object.")');
// 함수호출
logIdentity();
// 결과
this is function object.
```

##### 배열 (Array)

- 변수와의 차이점 : 하나의 변수에는 하나의 데이터 값만 담을 수 있다. 

- 배열 
 - 자료형
 - 집합(데이터들을 묶을 수 있다)
 - 여러개의 변수를 만들지 않고도 하나의 변수에 배열데이터를 참조함으로서 다수의 데이터를 관리할 수 있다. 

- 배열 만들기

```
1. 리터럴 방식 : 배열 생성 시, 생성자를 사용하기 보다는 리터럴을 사용하는 것이 간단명료하기에 권장된다.
var favorite_items = ['커피','깐풍기','밥'];

2. 
var favorite_items = new Array('커피','깐풍기','밥'); // 좋은 방법은 아니다.

3. 
var favorite_items = new Array();
favorite_items[0] = '커피';
favorite_items[1] = '깐풍기';
favorite_items[2] = '밥';

console.dir(favorite_items);
>> 결과 
Array[3]
0
:
"커피"
1
:
"깐풍기"
2
:
"밥"
length
:
3

>> 이 배열(객체)에 속성, 값을 추가해보자. 
favorite_items['type'] = 'array';

console.dir(favorite_items);
>> 결과
Array[3]
0
:
"커피"
1
:
"깐풍기"
2
:
"밥"
length
:
3
type
:
"array"


```

- 자바스크립트의 배열은 사실 객체이다. 
- 배열 내에 함수가 있을 경우, temp[2](); 라고하면 temp배열의 3번째에 있는 함수가 실행된다.
- 배열 내에 배열이 있을 경우, temp[3][3](); 라고하면 temp배열의 4번째에 있는 배열의 3번째 있는 함수 실행 

###### 많은 기능을 담는 것을 만들고 싶다 : 객체를 만들어서 사용한다는 개념으로 하면 좋다. => 객체지향 

- var banner_carousel = new Carousel(); // 내가 신이 되어 객체를 만든다. 


#### 그 외 참고

- [변수, 함수, 호이스팅 관련 내용 사이트](http://chanlee.github.io/2013/12/10/javascript-variable-scope-and-hoisting/)

- 돔을 깨우치다 책!!! 