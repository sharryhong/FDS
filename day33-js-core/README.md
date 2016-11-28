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
favorite_items['type'] = 'array'; // 연관된 배열 속성 (실제 배열내에는 없다)

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

- 문서객체모델(DOM)의 노드리스트(node List)는 배열과 흡사해보이나, 배열은 아니다 : 유사배열

- 인자가 하나인데 숫자인경우 오류!!
 - 원래는 new Array(9) 라고 하면 [9] 이렇게 들어와야 하겠지만
 - 숫자하나만 있다면 배열 요소 갯수 설정이 되어버린다. 
 - 예: var myArr = new Array(7); 라고하면 [undefined × 7] 이렇게 된다.
 - 따라서 이렇게 하지 않도록한다. 

##### 객체(Object)

- 자바스크립트 언어의 모든 것은 객체이나... undefined, null 만은 객체가 아니다.

- 부정 : '', false, 0, NaN(숫자 객체), undefined(객체아님), null(객체아님)

```
>> NaN이 객체인가 테스트하기 
NaN.toString()
"NaN"

Object.prototype.toString.call(NaN)
"[object Number]"
``` 

- 변수에 참조
 - `var myObj = new Object( );`

- 객체(Object), 프로퍼티(변수) 추가 
 - `myObj.property = data;`
 - data : 숫자,문자,불린, 배열,함수,객체 정보를넣을수있음

- 객체.프로퍼티 값으로 설정되는 함수는 메소드(Method)라고 부른다.

- 객체(Object), 프로퍼티(변수) 추가 
 - `myObj[ ‘property’ ] = data;` // 객체 속성을 반복해서 부를때 많이 사용된다.

- myObj.pro_perty 처럼 변수이름규칙을 따라야 하지만, <br>
myObj[pro-perty]처럼 변수이름규칙을 따르지 않아도 된다. 

- 객체 리터럴 표현식, 변수에 참조 `var myObj = {  }`
- 객체 리터럴 표현식, 프로퍼티 추가 
 - `{ 속성 : 값 };`
 - `{ 속성1 : 값, 속성2 : 값 }`

```
var my_student = {
    name: '짱구',
    age: 2
}

my_student.age
2
```

- 객체의 프로퍼티 이름은... 문자열, ‘String Literal’ 값을 사용할 수 있다. 예약어와 같은 문자열 사용시 오류가 나기 때문에 ‘String Literal’로 정의하는 것이 보다 좋다
 - [예약어 관련 쌤 자료](https://github.com/yamoo9/FDS/blob/master/References/A__Fundmantal/02-javascript-syntax.md)

```
var my_student = {
    name: '짱구',
    age: 2,
    'class': '사랑반'
}

my_student.class
"사랑반"
```

- 객체의 속성 제거 : `delete myObj.property;`
 - 전역에 선언된 변수는 제거할 수 없다. 

 ```
 var air = 0;

 delete air;
 false

 air
 10

 air === window.air
 true

 delete window.air;
 false
 ```

- 객체의 프로퍼티를 삭제하는 방법은 delete뿐 undefined, null 등을 대입하는 것은 삭제가 아님
 - 값만 null, underfined로 되는 것이지 변수 자체가 delete가 되는 건 아니다.


- JSON 을 사용하면 데이터를 구조화하여 재사용할 수 있다. -> 더 찾아보기


###### 많은 기능을 담는 것을 만들고 싶다 : 객체를 만들어서 사용한다는 개념으로 하면 좋다. => 객체지향 

- var banner_carousel = new Carousel(); // 내가 신이 되어 객체를 만든다. 


##### 정보분석 (comparative Data). 

- 데이터 유형 체크 1 :  `typeof`, `typeof ( )` // 함수 아니고 ()묶어줄때
 - typeof는 치명적인 설계 오류로   거의 쓸모가 없다.

```
var num, str, boo, fnc, arr, obj;

// 원시데이터유형 (복사)
num = 2016;
str = '안녕?';
boo = !0;

// 자료형 데이터 (참조)
fnc = function() {};
arr = [];
obj = {};

typeof num
"number"
typeof str
"string"
typeof boo
"boolean"
typeof fnc
"function"
typeof arr
"object"  // array라고 나와야 하는데.. 설계 오류!
typeof obj
"object"
typeof undefined
"undefined"
typeof NaN
"number"
typeof null
"object"   // null이라고 나와야 하는데.. 설계 오류!

>> 그 외 오류들 
typeof /\s/
"object"
typeof Math
"object"
typeof Date
"function"
typeof RegExp
"function"
typeof new RegExp
"object"
```

- 데이터 유형 체크 2. `instanceof`
 - 역할 : 생성자함수(객체를 생성하는자)를 통해 생성된 객체(인스턴스)인가?
 - 객체 instanceof 생성자
 - 잘 쓰진않는다. 

```
arr instanceof Array // arr변수는 Array이니? 
true
```
 - 약점 : 원시데이터유형을 리터럴방식으로 정의할 경우 올바른 대답을 해주지않는다. 

```
"MMM" instanceof String;
false
9 instanceof Number;
false
```

- 데이터 유형 체크 3. `constructor`
 - 객체인 것은 완벽하나, 객체가 아닌 null, undefined는 안된다. 에러뜸. 
 - 이유 : constructor속성은 객체만이 가지는 속성이기 때문

```
arr.constructor === Object
false
arr.constructor === Array
true
/\s+/.constructor === RegExp
true
```

- 함수로 만들어 사용하기 
```
function checkDataType(data, maker){
	return data.constructor === maker;
}

checkDataType('90',Number);
false
checkDataType(90,Number);
true
```

- 데이터 유형 체크 4. `Object.prototype.toString`
 - 프로토타입기반상속을지원하는언어, 후에보다자세히배워봅니다.
 - 원래 가지고 있는 prototype의 toString
 - call : 빌려쓸께~
 - slice(8,-1) : 8번째 부터 마지막 전꺼까지만 

```
Object.prototype.toString.call('undefined')
"[object String]"
Object.prototype.toString.call(undefined)
"[object Undefined]"
Object.prototype.toString.call(9)
"[object Number]"
Object.prototype.toString.call(/\s+/)
"[object RegExp]"
Object.prototype.toString.call(null)
"[object Null]"

"[object Null]".slice(8,-1)
"Null"
```
 
- 함수로 만들어 사용하기 
 - jQuery의 .type()와 같다.
```
function isType(data) {
	return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}
```

#### 연산자

###### +, -, *, /, ++, -

- % 나머지 연산자 응용 : 슬라이드메뉴 누르면 배경 등 바뀌게

```
var doll_msg = ['메롱1','메롱2','메롱3'];
var count = 0;
doll_msg[ count++ % doll_msg.length ]
// count++ : 처음엔 0, 그 다음에 실행시키면 1 ... 
// 0 % 3 = 0
// 1 % 3 = 1
// 2 % 3 = 2
// 이렇게 배열 legnth인 3 나머지는 항상 0, 1, 2 인 것을 이용해서 값을 구해낼 수 있다. 

for(var count = 0, msgs = doll_msg.length; count < msgs; count++) {
	console.log(doll_msg[ count % doll_msg.length ]);
}
```

- 문자열(String) 접합
 - var message=‘JUNGLE’+‘IN’;
 - ES2015에서는 ${변수명} 으로 접합이 가능하게 되었다. 단 묶을 때 esc키 아래 `키를 눌러야 한다. 예) `this is ${변수}`

- 숫자(Number) + 문자열(String) 접합 
 - var year = 2010; var current = year + ‘년’; 

- 증가연산 `x++` : 처음엔 원래값, 그 후에 +1
- 감소연산 `x--` 
- 선증가연산 `++x` : 먼저 +1
- 선감소연산 `--x`

```
var start = 0;
while(start < 20){
	console.log(start);
	start = start + 1;
}
```

```
// 문서에 a요소있을 때 실행
var i = 0;
while(document.querySelectorAll('a')[i++]){
	console.log(i+"있음");
}
```

```
// 증가(감소) 연산
var check_fact = 100;
console.log(check_fact);
console.log(check_fact++);
console.log(check_fact);
console.log(check_fact);
console.log(check_fact);
```

#### 조건문 

- if(true면){}
- 조건이 많아지면 if보다는 switch문 쓰는 것이 좋다. 
- `>`, `<`, `>=`, `<=`, `==` 비교연산 같냐, `!=` 같지않냐
- `&&`, `||`, `!` 

```
function display(value){
	value = value || 'block'; // value가 있으면 value, 없으면 block
<!-- 
	if(!value){
		value = 'block';
	} 위와 같은 뜻-->

	return value;
}

>> 결과 
display();
"block"
display('flex');
"flex"
```

- 쌤 : `this.config.aria && this.setARIA();` 앞에 것 있으면 뒤에꺼 실행
- jQuery불러올때.. 인터넷에 연결되어있을 땐 google에 있는 jquery파일 불러오고 || 인터넷에 연결되어 있지 않으면(네트워크 불안정) 로컬상의 jquery를 불러온다. 이럴 때 사용한다. 

- 동등 비교연산자 `==` 는 문제점이 많다. `===` 를 사용하자.
 - helper 함수 만들어볼까?

```
function strictEqual(data1, data2){
	return data1 === data2;
}
```

- 삼항 조건 식 - 조건 ? 참(true) : 거짓(false)
 - havePosts() ? checkPosts() : loadPosts(); // havePosts()가 있다면 checkPosts() 실행
 - if문을 쓸 수 없는 상황에서 변수.. 있냐 없냐 체크할 때 많이 사용된다.

- 다중 삼항 조건 식

```
typeof checkValue === 'string' ? 1 : 
   typeof checkValue === 'number' ? 2 : 
      typeof checkValue === 'boolean' ? 3 :
         typeof checkValue === 'undeﬁned' ? 4 : 5;
```

```
// 오늘은 무슨 요일일까?
// 0,1,2,3,4,5,6
var today = new Date().getDay(); 
// 내 컴퓨터 운영체제의 날짜. 정확하게 하려면 서버에서 오픈되어있는 api가져와서 해야함

function todayCheck(){
	var today_is = today === 0 ? '일' :
					today === 1 ? '월' :
					today === 2 ? '화' :
					today === 3 ? '수' :
					today === 4 ? '목' :
					today === 5 ? '금' :
					today === 6 ? '토' : '지구엔 없는 ';
	console.log('오늘은'+today_is+'요일입니다.');
}
```

- switch문
 - 상황(Case)에 맞게 대처(Switch)하라.
 - switch, case, default

```
switch (condition) {
	case ‘A’:
	     alert(‘a’);
	     break;
	case ‘B’:
	     alert(‘b’);
	     break;
	default:
	     alert(‘a도 b도 아니다’);
}
```

```
var today_is;
switch(today){
	case 0: 
		today_is = '일';
	break;
	case 1: 
		today_is = '월';
	break;
	case 2: 
		today_is = '화';
	break;
	case 3: 
		today_is = '수';
	break;
	case 4: 
		today_is = '목';
	break;
	case 5: 
		today_is = '금';
	break;
	case 6: 
		today_is = '토';
	break;
	default: 
		today_is = false;
}
console.log(today_is ? '오늘은' + today_is + '요일 입니다.' : '뭥미');
```
- 멈추지 않으면 쭉 내려가서 false가 반환된다. 따라서 `break`가 필요하다. 
 
- 특졍 case가 여러개 한번에 실행되고 break걸 수도 있다. 

##### 전에 html코드 javaScript로 힘들게 만든 것 쉽게 만들어보자. 

```
// 배열로 만들어서 나중에 수정하기도 쉽도록 한다.
var html_code = [
	'<div class="modal">',
		'<h2 class="modal-title">Modal Window</h2>',
		'<p class="modal-desc">Modal Window Content</p>',
		'<button class="modal-cta" type="button">send message</button>',
		'<button class="modal-close" type="button" aria-label="close modal window">x</button>',
	'</div>'
].join('');

body.innerHTML += html_code; // 현재 html코드에 html_code를 붙여라.
```

- 나중엔 JSON 데이터로 ... 


#### 그 외 참고

- [변수, 함수, 호이스팅 관련 내용 사이트](http://chanlee.github.io/2013/12/10/javascript-variable-scope-and-hoisting/)

- 돔을 깨우치다 책!!! 

- 프로토타입~*
 - new Tab() : 객체생성했어요~ 
 - 그렇다면 .prototype에 접근할 수 있다. 
 - [MDN 한글설명](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)