###### Front-End Develop SCHOOL

# DAY 35 - javaScript

#### 반복문

1.1 while
 - 조건이 거짓일 경우 실행하지 않는다. 

1.2 do ~ while
 - 조건이 거짓이어도 한번 실행된다. 

2.1 for
 - length가 있어야 한다. 

2.2 for ~ in	[Object]
 - length가 없는 객체선택
 - 
2.3 forEach		[Array]
 - ECMAScript 5 Edition. IE8이하 안됨(nodeJS에서 )
 - [관련 사이트 바로가기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```
var movielist = [];
movielist.push('터널');
movielist.push('덕혜옹주');
movielist.push('부산행');
movielist.push('서울역');

// for문 사용시
for(var i=0, l=movielist.length; i<1; i++){
	console.log(movielist[i]);
}
```

2.4 for ~ of	[Array]
 - 배열의 원소에 접근
 - ECMAScript 2015

```
for(var item of [3, true, null, '', {}]){
	console.log(item);
}
```

string.charAt(0) // string의 첫번째 글자 나옴

#### 함수 (왕중요!!!)

##### 특징

- 상위영역(scope)과 구분되는 별도의 독립적인 영역을 생성한다.
- 함수 내부에 'var' 키워드, 'function' 키워드로 정의된 데이터 값을 외부영역에서 접근이 불가능하다. 
- 함수 내부는 독립된 공간이기에 내부에 'var' 키워드, 'function' 키워드로 정의된 데이터는 호이스트(Hoist) 된다.

- 호이스트 : 영역 최상단으로 끌어올려진다. 
- 'funtion'으로 정의된 함수는 몸체가 전부 끌어올려진다. 
- 'var' 키워드로 정의된 변수는 변수 이름만 끌어 올려질 뿐, 할당되는 데이터는 원래 정의된 곳에서 이루어진다. 

- return
 - 함수는 바로 종료된다. 
 - 결과 반환 (get 함수에 반드시 필요하다.)

 ###### this

 - context reference
 - 전역 콘텍스트에서 this는 window를 가리킴 : 웹브라우저에 한해서. nodeJS에서는 global

 ```
 function showMe() { console.log(this); }
 showMe === window.showMe; // true
 ```

- 엄격모드 `'use strict'` 느슨한 JS를 보다 엄격하게 관리!!
 - ES2015부터는 무조건 엄격모드가 된다.
 - 변수 선언 시, var를 사용하지 않으면 오류!
 - [msdn 사이트 설명 바로가기](https://msdn.microsoft.com/ko-kr/library/br230269(v=vs.94).aspx)

```
function() {
	“use strict”;
	this // undefined // this는 window를 가리키지 않습니다.
}
```

 - 엄격모드가 아닌 자바스크립트에서는 전역에서 함수호출할 경우, 그 함수의 context를 암묵적으로 전역객체인 window를 가리켰다. (문제 발생)
 - 반명 엄격모드에서 명시적으로 특정객체가 함수를 호출하게 되면 this context 참조 변수는 해당 객체를 참조한다.

- 생성자함수 만들어.. 나중에 실행할 때 new를 안쓰면 원하는 바대로 안되고(return이 없는 함수였다.) window.el..처럼 될 수있다. 왜냐.. this가 window. 
 - 이럴 때 this가 제대로 값을 반영할 수 있도록 “use strict”;를 써서 new를 안쓰면 오류가 발생하도록 한다.


#### 클로저 (Closure) 유용!!!

- 함수는 일급객체(First Class Object)
 - 함수 내부에 함수를 인자로 전달할 수 있습니다.

- 반환함수 (return function)
 - 함수 내부에서 함수를 결과 값으로 반환할 수 있습니다.

- 클로저 (Closure)
 - 함수에서 반환된 함수를 실행하면 생성됩니다.

- 정리.. 클로저 함수란?
 - 자바스크립트 함수는 일급 객체의 요건을 모두 충족한다. 
 - 인자로서 전달도 가능하며 값으로서 반환 또한 가능하다. 
 - 함수가 실행되어 내부에 존대하는 함수를 외부로 반환할 경우 클로저가 생성되며, 반환된 함수는 클로저 영역을 참조할 수 있다. 이때 반환된 함수를 클로저 함수라 명한다. 
 - 원래 함수는 실행 후 사라져야 하지만, 클로저함수는 메모리에 남는다.. 시공간 초월.. 
 - 클로저는 자신을 탄생시킨 부모 함수의스코프에
접근이 가능합니다.
일반적으로 함수가 종료되면 함수의 스코프는 사라지지만..
함수가 종료되면서 탄생시킨 클로저에서는 부모 함수의
스코프 영역을 저장합니다.
이 점은 클로저의 장점이 되기도 하지만, 단점도 될 수 있기
때문에 사용에 주의하여야 합니다.

- 함수 내부에 있는 함수를 return innerFn;함으로서 탈출시킴. 함수가 사라지지않고 메모리되어 계속 써먹을 수 있다. 

- console.dir(x); 하면 속성 알 수 있다. 
 - 단, 브라우저별로 지원되는 속성이 다르므로 헬퍼함수 만들어야 한다. 이렇게 되어있는 것이 jQeury

- 참조형 데이터(배열, 객체, 함수)만 클로저함수 가능 

- $는 라이브러리를 말하는 별칭?