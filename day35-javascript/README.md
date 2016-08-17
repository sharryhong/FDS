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
 - ECMAScript 5 Edition. IE8이하 안됨

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