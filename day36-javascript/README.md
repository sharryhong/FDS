###### Front-End Develop SCHOOL

# DAY 36 - javaScript

#### 복습

- Hoist
- callback pattern
- closure
- loop + closure
- IIFE -> Module pattern (Client-Side, Front-End)

```
// 전역 (오염시키지 않도록 여기서 선언하지 않도록 하자.)
var sharry; // 다른 이의 작성된 코드와 충돌이 날 확률 가능성

// 코드 작성하기 위한 공간 생성 : IIFE생성
(function(global){
	'use strict';
	var sharry; // 지역 변수 (전역과 충돌 X)

	global.hong = sharry; // 외부에 특정 데이터 노출
})(this);
```

#### 객체 

- null, undefined빼곤 다 객체! 
- 즉, 프로퍼티(속성)을 가지고 있다. 
- 속성 중 함수형태는 메소드라고 부른다. 

- 객체가 소유하고 있는 `변수를 속성` (명사형태)이라 부르고, `함수를 메소드` (동사형태)라 부른다. 

- Object = Properites + Methods

- 그런데 배열객체를 사용하려할때 왜? new문을 사용해서 객체를 변수에 참고하는거지?? 
 - 객체는 실체화하지 않으면 사용할 수 없기 때문이다. 
 - 설계도면같은 객체 -> new 키워드 만나면 -> 실체화된 객체(객체 조각:인스턴스)를 만들 수 있다. 
 - 자바스크립트는 다른언어의 클래스(객체생성)가 없는 대신.. 다른 방법으로 만드는 것

```
//생성자 역할을 수행하는 함수
// 이름 짓는 관례상 첫글자가 대문자로 작성된다. 
function Coffee(name){
	this.name = name;
}

// ES2015 클래스 개념 도입. '바벨'이라는 컴파일러 쓰면 ES2015써서 코드 구현해도 된다. 
class Coffee {
	constructor(){}
	drink(){}
	...
}

var latte = new Coffee('라떼');
var americano = new Coffee('아메리카노');
// new와 함께 함수가 같이 사용됐네 -> 함수내에서 return 객체를 생성해서 반환한다. 

latte
// 결과
Coffee {name: "라떼"}

// 생성자 객체 물어볼 때 .constructor
latte.constructor
// 결과
Coffee(name){
	this.name = name;
}

```

- 객체 리터럴방식을 사용하면 new쓰지 않고 만들 수 있다. 

##### 네이티브 객체(Native Objects)
 - number, string, boolean, array, function, object 

- number 객체의 프로퍼티, 메소드
 - var new_number = new Number(2016);
 - constructor(이 객체의 모체. 객체라면 다 있다), prototype(원형객체에 접근)
 - toString() : 원형객체가 가지고 있다, valueOf()
 - Object.prototype (조상객체) > Number.prototype (숫자의 원형객체)
 - `__proto__` = `.constructor.prototype` // 모든브라우저가 그런건 아니다. 크롬은 제공 
 - 함수를 만들면.. 함수.prototype로 접근 가능한 객체가 만들어진다. 

- string 객체의 생성자 함수
 - var new_str = new String('');

- 배열 합체
 - 배열.concat(추가할배열) => 원하는 결과 나옴
 - 배열.push(추가할배열) => 마지막에 배열 자체가 추가됨