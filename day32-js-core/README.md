###### Front-End Develop SCHOOL

# DAY 32 - javaScript core

##### 다른분들 질문 공유

지연씨
- 보통 변수나 함수는 상단에 위치시키자. 
- 네이밍규칙 BEM(Block Element Modifier)참조
- function()내부에서 요소를 직접 찾기보다는 this를 이용해서 찾는 것이 좋다. ex)this.parentNode
- aria의 role 부분 나중에 배우면 코드를 달리 해도 된다. 
- inline style일때만 확인이 가능하다고 생각해서 back-end에서 inline style을 덕지덕지 붙이곤 한다. <br> 
이는 잘못된 방법이다. -> 방법이 있는데 IE8이하는 표준과 다른방법으로 불러와야 하므로 helper함수를 만들어 사용하자. 
- 1회만 실행하면 될 경우도 고려하여 코딩한다. 
- dom이 만들어지지 않았을 땐 실행이 되지 않는 것도 고려한다. 지연씨 코드상에서는 for문 안에서 이벤트가 실행되게 해서 해결하였다.

정식씨
- btn.onclick = btn.onfocus = changeBg; 키보드 onfocus할 땐 changeBe함수가 한번 실행되는데, onclick할땐 두번실행된다. 왜일까?
- 클릭이벤트 발생하면 포커스이벤트도 발생하여 두번발생하는 것이다. 브라우저상의 특성이다. 
- 해결 : 이벤트 감지

```
document.onclick = function(e) { // 이벤트 속성에 연결된 함수의 경우, e대신 event등이 올 수 있다. 마지막에 리턴됨
	...
}

레거시 이벤트 함수의 경우 하나만 저장이 되므로, 나중에 배울 진보된 이벤트 함수를 사용하자. 
```

### JavaScript Core (언어. 문법)

- `<script src="file.js">`
- html, css, javaScript를 분리하여 작성하여 호출하는 것을 권장
 - 예외: daum과 같이 포탈 메인페이지의 경우 css파일을 html내부에 위치시킴으로서 html이 로딩되자마자(네트워크 안좋아도) 스타일이 입혀진다.(스타일이 벗겨지지않는다.)

- c언어와 유사하다. 

#### 명령문(Command)

- 끝에 세미콜론 `;`을 붙인다.
 - 예외 : if, for, ... , function() 등 
- 점`.` 연산자로 연결되는 구문(dot Syntax)
 - document.getElementById('idname').~~~; // 체이닝구문이라고 부른다. 
 - document.getElementByTagName('a').onclick = clickfunction; // 오류 : 리스트에는 바로 onclick등이 올 수 없다. 

- window.alert(); 
- console.log(); // 콘솔은 IE하위버전에서는 지원되지 않으므로 조심 
 - .dir / .error / 등 많다. 

- 메소드 : 객체가 갖고 있는 함수. (객체가 갖고 있는 속성 중 함수)
- 주석(comments) : // 한줄주석, /* 여러줄 주석 */ 

##### 변수(Variables) : 메모리 공간. 하나의 값을 저장하는 기억장소 

- 변수 기억장소에 담는(혹은 참조) 정보(데이터) : number, string, boolean, object, array, function 등
- var 변수이름 = 정보유형; // ES2015에서는 var이외에도 다른 키워드도 생겨났다. ex) const DOG_AGE = 7; // 상수 
- 숫자가 먼저 올 수 없다, 특수문자의 경우 $, _만 올 수 있다, 공백이 오면 안된다. 가능하면 대문자로 짓지말자(상수만 대문자로하기)
- 변수 참조란? : 정보(값)이 담긴 메모리 주소를 가리키는 식별자. 변수를 지워도 정보(값)는 지워지지 않는다. 

- 변수에 문서객체 담기 
- var contents_paras = document.getElementById('contents');
- 변수에 문서객체 노드의 값 
- 참조되는 경우 : 자료형데이터유형 (객체, 배열, 함수)
- 복사되는 경우 : 원시데이터유형 (숫자, 문자, 논리, undefined, null)

- 상수(constant) : 설정한 값으로 유지되고 변하지 않는 값
 - const 상수이름 = 정보유형; 
 - 관례상 대문자로 작성한다. 
 - 아직 지원되지 않는 브라우저도 있다. 

#### 정보유형(Data Type)

- Number : 자바스크립트 언어의 숫자는 다른 언어와 달리 간단하게 처리된다. 숫자는 숫자다. (다른 언어는 정수 등등 구분) 
 - 정수, 소수, 실수, 음수 ... 
 - 8진수(0~7), 10진수, 16진수(0~f)로 표현

- String : `""`, `''` 둘다 써도 되는데 html상 속성으로 `""`를 쓰므로 `''`로 쓰면 더 좋겠다. 
 - 내부의 중복된 따옴표 표현 : `\`사용하여 문제 해결

- Boolean(논리형. 참, 거짓) : true(0이 아닌것), false(0)
 - `Boolean(0)` 은 false 
 - false : false, 0, '', null, undefined 

- undifined, null : nothing
- 값이 할당(대입)되지 않았을 때 : undefined
- 비어있다 : null 
 - 모든 이벤트는 기본적으로 아무것도 연결되어 있지 않다. 기본값 null 
 - 이벤트에 연결된 function을 제거하고 싶을 때 document.onclick = null; // 레거시 

###### 형변환(change type) : 자바스크립트 언어는 자동으로 데이터 유형이 변경된다(type casting). 약점. 

- 형 변환하기 : number to string
 - `''` | `+ ''` | `String()` | `.toString()`

```
방법 1. '9'			// 결과 '9'
방법 2. 9 + '' 		// 결과 '9'

방법 3. 
var num = 9;
String(num);		// 결과 '9'

방법 4. 
(9).toString() 		// 결과 '9'. 숫자, 함수, 객체 리터럴(그 자체의 값)는 ()로 감싸야한다.
```

- 문자인데 숫자형 문자(예: '9')를 숫자로 변환시키기 
- 단위 붙은 숫자형 문자는 안된다. 단위를 없애고 해야한다. 

```
방법 1. 사칙연산 중 -, *, / 사용
var like_num_str = '2016';
like_num_str
"2016"
like_num_str - 0
2016
like_num_str * 1
2016
like_num_str / 1
2016
like_num_str + 1 // 얘만 문자접합
"20161"

방법 2. +를 앞에 붙인다.
+like_num_str
2016

방법 3. Number()
Number(like_num_str)
2016

방법 4. parseInt() // 정수로 반환한다. , parseFloat() // 실수 숫자 다 살려 반환
var font_size = "16.555px"
font_size
"16.555px"
parseInt(font_size, 10); // 10진수로 (defaulting the value to 10)
16
parseFloat(font_size, 10); // IE8이하 하위버전에선 안됨
16.555

// IE8이하 하위버전 가능
// .split('px') : px을 기준으로 양쪽을 분리해서 배열로 저장시켜준다. 
font_size.split('px')
["16.555", ""]
font_size.split('px')[0]
"16.555"
font_size.split('px')[0] * 1
16.555
```

- 형 변환하기 : 데이터를 Boolean로 

```
Boolean(null)
false
Boolean(undefined)
false
!!null // 위 방식이 명시적이지만 이 방법이 더 간단하므로 많이쓴다.
false
```

- undefined, null을 형변환하기 
 - !!(false) $ !(true)
 - null + 숫자 = 숫자 
 - Number(null) = 0
 - undefined + 숫자 = NaN (not a number)

- Nan : not a number
- isNaN() : 숫자가 아니죠?  ==> 좀 이해가 안가는 부분이 많다. 차라리 함수로 만들어서 사용
 - isNaN(9) = false
- !isNaN() : 숫자냐?
 - !isNaN(9) = true

```
function isNumber(data) {
	return typeof data === 'number';
}
```

- 지금까지 배운 것으로 <http://spoqa.github.io/spoqa-han-sans/> 만들 수 있다. 

###### style font-size 가져오기 
 - 비표준 MS IE8이하 방식 : $0.currentStyle.fontSize
 - 표준 W3C방식(IE9+) : window.getComputedStyle(대상, 가상요소).스타일속성
  - 예) window.getComputedStyle($0, null).fontSize // 가상요소에 null, false, 빈문자 등 넣으면된다)
  - 크로스브라우징 helper function으로 만들어 사용하면 좋겠죠~ 


#### 그 외

- .replace('a','b'); // a를 b로 바꾼다.

```
'box-sizing'.replace(/-/, '');
라고 하면 -를 없애줘서 boxsizing이 된다. 
/-./ : -다음에 한글자 없애기 (정규표현식. 나중에 배움)
/-./g : 다 찾기

```