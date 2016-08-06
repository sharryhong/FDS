###### Front-End Develop SCHOOL

# DAY 28 - javaScript

### 문서 객체 모델(DOM) : front 가장 중요한 개념

##### DOM Level 0 (레거시 돔)

- 초기 문서객체모델. 지금도 많이 쓴다. 웹 문서의 특정요소에 접근, 해당 요소의 속성을 교체할 수 있는 API제공했으나, 매우 제한적인 접근(하이퍼링크, 이미지, 폼 필드 요소에 국한)

```
<form action="#" method="GET" name="primary_form">
	<p>
		<!-- 접근성 위해 label반드시 필요한데 placeholder로 대체는 안된다. -->
		<label for="c_id">ID</label> 
		<input type="text" name="c_id" id="c_id" placeholder="id">
		<!-- name이 있어야 좋은 이유
		1. name="c_id"이 없으면 submit전송이 안된다.  
		2. document.primary_form 이라고 하면 바로 찾을 수 있다. 요새는 이렇게 찾진않는다. -->
	</p>
	<button type="submit">전송</button>
</form>

// DOM Lv.0 방식
var forms = document.forms;
console.log(forms); // 결과 : [form, form]

// window 콘솔창에서 하위메뉴 열때 : alt + 화살표 누르면 됨

// form name에서 -, _을 쓸 때 비교 
// 1. forms.primary_form 라고 하면 옆과 같이 잘 나오는데, // <form action=​"#" method=​"GET" name=​"primary_form">​…​</form>​
// 2. forms['secondary-form'] -를 쓰면 꼭 이 방법으로밖에 안나온다. 
```

##### (과도기)중급 DOM 

- 1997년. css와 이 당시의 DOM이 현대 웹 디자인의 시초. 
- IE와 넷스케이프가 서로 다른 이름을 채택. 
 - ex) document.all, document.layer.. 같은 뜻이지만 다른 브라우저에서 채택. 현재는 document.all만 쓴다. 
 - 이런 것을 걸러내기 위한 코드들이 아직도 쓰이고 있는데.. 없애자. 

##### DOM Lv.1

- 1998년 w3c는 DOM표준화작업에 착수 <https://www.w3.org/TR/REC-DOM-Level-1/>

```
// DOM Lv.1 방식 
// 요소명과 id정도로만 접근했다. 그래서 class를 쓰지말라고 했었다.

var root_element = document.documentElement; // html문서에서만 가능. xml에서는 안됨
//root_element = document.getElementsByTagName('html')[0] // xml에서는 이렇게만 가능. xml, html 둘다 가능
console.log(root_element);

var head = document.head; // html 에서만 사용 가능
var body = document.body; // html 에서만 사용 가능

var inputs = document.getElementsByTagName('input');
console.log(inputs);
var buttons = document.getElementsByTagName('button');
console.log(buttons);

// ID속성을 통한 접근 방법(interface: selecting)
var c_id = document.getElementById('c_id');
var c_mail = document.getElementById('c_mail');
console.log('c_id:', c_id);
console.log('c_mail:', c_mail);
```

##### DOM Lv.2

- <https://www.w3.org/TR/DOM-Level-2-Core/core.html>
- ms는 독자노선. 
- 현재 사용되는 진보된 DOM Event Model을 최초로 제시. 2000년 발표 이후 널리 보급된 모델 
- 나만의 custom이벤트도 만들 수 있게 되었다. 

##### DOM Lv.3

##### DOM Lv.4

- 현재

- 

#### DOM 용어

- 객체가 소유한 프로퍼티(속성).. 명사형태
- 객체가 소유한다 : 매소드. 함수.. 동사형태

- Node Interface : 노드에 접근할 수 있도록 해준다. 

- documnet : Browser 객체모델 중 하나
- document에서 `<body>`를 찾고 싶다 : document.getElementsByTagName('body')[0] or document.body
- document.getElementsByClassName은 IE8이하에서 지원이 되지 않는다. (jQuery1은 IE8이하도 지원되지만 느리다.)
- .childNodes : 모든 자식 찾기

#### 참고 사이트 

- MDN DOM <https://developer.mozilla.org/fr/docs/DOM_Levels>