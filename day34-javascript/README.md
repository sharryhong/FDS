###### Front-End Develop SCHOOL

# DAY 34 - javaScript

#### 반복문(Loop) 구문(Statement)

##### while문

- (조건이 참인) ~하는 동안 반복수행

```
var count = 0;
while(count++ <= 10){ // 0
    console.log(count); // 1
}

>> 결과
1,2,...,11
```

```
var count = 0;
while((count+=2) <= 10){ // 0
    console.log(count); // 1
}

>> 결과
2,4,6,8,10
```

- ES2015의 arrow function (초기값 지정할 수 있음)

```
var cleanWhiteSpace = (el=document) => { // el의 초기값 지정
    console.log(el);
};
```

- 공백제거함수 : 현재는 이렇게할 필요없다. while 이해용 코드 

```
function cleanWhiteSpace(element) {
	element = element || document;
	var cur = element.firstChild;
	while ( cur != null ) { // cur 만 써도 되
		if( cur.nodeType === 3 && ! /\S/.test(cur.nodeValue) ) { // /\S/ : 공백
		element.removeChild(cur);
	} else if(cur.nodeType === 1) {
		cleanWhiteSpace(cur); // 재귀함수
	}
	cur = cur.nextSibling;
	}
}
```

##### do while문

- 1회 우선 실행 후, (조건이 참인) ~하는 동안 반복수행

```
var boo = true, m = 10;

do {
	console.log(boo? '참' : '거짓');
	if(m-- < 0) {
		boo = !boo;
	}
} whild(boo); // 이제 boo가 참인지 거짓인지 확인
```

- error메시지 띄우는 함수

```
function errorMsg(message) {
	if ( isType(message) !== 'string') {
	// 함수 자신을 다시 호출 : 재귀함수
		errorMsg('오류 메시지는 문자 데이터 유형이어야합니다.')
	}
	throw new Error(message);
}
```

- 앞에 요소 추가하는 함수

```
function prevEl(el_node) {
	// 검증 : 유효성 검사
	if(el_node.nodeType !== 1) {
		errorMsg('전달된 인자는 요소노드여야 합니다.');
	}
}
```

- 함수는 명시적으로 어떤 값도 반환하지 않을 경우 undefined를 반환한다. 

##### for문

- 가장 많이 쓰인다.  

```
for(var i=0, boo=false; i<10; i++){
<!-- 	if(i===9){
		boo = !boo;
	} -->
	<!-- // 위 if코드를 삼항식으로 한줄로 쓰기 
	boo = i === 9 ? !boo : boo; -->
	<!-- console.log(boo ? '참' : '거짓'); -->
	<!-- // 위 코드들 병합 -->
	console.log( (i === 9 ? !boo : boo) ? '참' : '거짓' );
}
```

- continue는 조건이 참이면 건너뛸 수 있다.
- for문 continue를 사용해보는 예제 

```
// 배열에 string이 아닌 bloorean, function, object 걸러내고 배열에 담기
var fruits = ['바나나', true, '딸기', false, '포도', null, '수박'];
fruits.push(function(){});
fruits.push({'name':'object'});

var real_fruits = [], 	// string만 담을 새 배열 변수
	fruit, 				// fruits배열 값 담기 
	k = 0, 				
	o = fruits.length;	// fruits배열 length만큼 반복

for ( ; k < o; k++) {
	fruit = fruits[k];
	if( isType(fruit) !== 'string' ) {	// 배열 값이 string이 아니면
		continue;						// 뒤 코드 건너뛴다. 
	}
	real_fruits.push(fruit); // 위에서 걸러낸 string들만 real_fruits 변수에 담는다. 
}
```

- break는 조건이 참이면 for문을 더이상 실행 안한다.
- for문 break를 사용해보는 예제

```
var units = 'px em rem % vw vh vmin vmax'.split(' ');
// 가장 많이 쓰는 단위를 앞에 배치하여 반복문이 빨리 끝나도록 한다.
<!-- ["px", "em", "rem", "%", "vw", "vh", "vmin", "vmax"] -->

for(var i=0, l=units.length; i<l; i++){
    unit = units[i];
    console.log(unit);
}

// ES2015에서는 for ~ of 지원 
// nodeJS는 서버쪽이므로 크로스브라우징 등 고려하지 않고 ES2015 문법도 모두 써도 된다. 
for(let unit of units) { 
	// let : for문 내에서만 사용되는 지역변수 선언
	// 위 코드와 같은 의미임 
	console.log(unit);
}

```