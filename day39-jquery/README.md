###### Front-End Develop SCHOOL

# DAY 39

#### 복습

##### Heading 요소에 대해 내용 수정

- HTML5  문서에서 `<h1>`은 여러번 사용가능한가?
- HTML5  문서부터는 `<h1>` 요소를 기존처럼 사용할 수도 있고, sectioning content element 내부에서도 `<h1>` 사용가능하다.

##### this 컨텍스트 참조 변수

- 자바스크립트 언어는 영역(Scope)을 가진다. 
- 영역으로 구분되는 공간은 크게 전역(Global Scope)과 지역(Local Scope)이 있다. 
- 자바스크립트에서는 if, while, do ~ while, for문 같은 블록문 내부는 영역이 아니다. 
- 함수 데이터 유형의 블록문 내부에서는 공간이 형성된다. 

```
// this -> 전역 context 객체
console.log(this); // 결과 : window object 

if(true) {
  onsole.log(this); // 결과 : window object 
}

function myFn() {
  console.log(this); 
}
myFn(); 
// 결과 : window object (이유: myFn() 실행시킨 콘텍스트 객체가 암묵적으로 window객체로 설정되기 때문)
// myFn() === window.myFn();

function meFn() {
  'use strict';
  console.log(this);
}
meFn(); 
// 결과 : undefined
// 이유 : 엄격모드에서는 기존의 설계 오류를 해결하기 위해 더이상 암묵적으로 전역 콘텍스트 객체인 window에서 실행한 것처럼 처리하지 않기 때문

this.meFn(); // 결과 : window object
window.meFn(); // 결과 : window object
// 이유 : 엄격모드에서 실행 시, 명시적으로 실행 콘텍스트 객체를 설정하면 this는 명시적으로 설정된 실행 콘텍스트 객체를 가리키기 때문

document.body.onmouseenter = myFn; // 결과 : this === document.body

document.body.onclick = function() {
  myFn(); // 결과 : this === window object (myFn을 실행시키는 콘텍스트가 암묵적이므로)
}

document.onmouseenter = meFn;  // 결과 : this === document

document.onclick = function() {
  meFn(); // 결과 : undefined
}

demo.onclick = function() {
  // Function.prototype.call 메소드를 사용하여 함수를 빌려쓰기
  myFn // 결과 : this === undefined
  myFn.call(this); // 결과 : this === demo 
}
```

##### IIFE 패턴 (즉시실행함수)

- [참고 사이트](http://chanlee.github.io/2014/01/11/understand-javascript-iife/)

- 함수표현식을 사용, 사용자가 이름을 호출하는 과정을 생략하고 즉시 실행되는 함수패턴을 말한다.
- 모듈패턴에 자주 사용되며, 전역과 구분되는 지역을 형성함으로서 공개/비공개 멤버를 설정할 수 있다. 

[ 일반적인 함수 ]
- var fn = function() {}; // 함수 표현식, 함수 값(Literal)
- fn(); // 메모리 저장공간의 이름 fn을 통해 기억된 데이터(함수)를 실행

[ 즉시 실행 함수 ]
- 기본 코드

```
(function () {
    var firstName = “Richard”;
    function init () {
        doStuff (firstName);
        // code to start the application
    }

    function doStuff () {
        // Do stuff here
    }

    function doMoreStuff () {
        // Do more stuff here
    }
    // Start the application
    init ();
})();
``` 

```
// 
(function(global){
  
})(this); // 실행연산자, 내부에 인자 전달 

(function($j$){
  
})(jQeury); // 실행연산자, 내부에 인자 전달 
```

- IIEF + Closure (클로저)

```
// 클로저만 사용
var fnWrapper = function() {
  var fnInenr = function() {};
  return fnInner;
};
var fnc = fnWrapper();

// 위 함수실행 코드 필요없는 IIEF + Closure
var fnc = (function() {
  var fnInenr = function() {};
  return fnInner;
})();

// 방법 2
var fnc = (function() {
  return function() {

  };
})(); 

```

- map() 매소드 : item, index를 받아 처리하여 배열로 반환해준다. 
 - jQuery에도 있으며, 크로스브라우징 되므로 이거 쓰면 좋다.

#### jQuery 스타일링 클래스 속성제어

- .hasClass() : 해당 클래스 속성을 가지고 있는가? 반환값 : Boolean
- .addClass('클래스이름') : 해당 클래스가 없다면 추가한다. 반환값 : jquery object
- .removeClass('클래스이름') : 해당 클래스가 있다면 제거한다. 반환값 : jquery object / 인자값이 없다면 모든 클래스 속성 제거
- .toggleClass() : 해당 클래스 속성을 토글한다. (해당 클래스 속성을 소유했다면 제거, 소유하지 앟았다면 추가)
 - toggleClass('클래스이름', state) : state 조건이 참일때만 토글됨. state 생략가능