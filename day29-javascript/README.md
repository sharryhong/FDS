###### Front-End Develop SCHOOL

# DAY 29 - javaScript

#### 오늘의 시험 풀이

- `<script>` 요소에 대한 설명 중 올바른 것은
 - 스크립트 해석 및 실행이 DOM이 완성되기 전에 처리 되므로 별도의 이벤트 감지를 통해 객체에 접근해야 한다.

- 변수 선언
 - 변수에 들어갈 수 있는 특수기호는 $, _ 뿐

- 문서 객체의 이벤트 속성(ex. onclick)에 초기 설정되어 있는 값
 - null 

- 전역(window) 함수
 - alert(), prompt(), confirm(), setTimeout()

- document.compatMode 값이 표준 모드일 경우 (compat: 호환)
 - CSS1Compat

- `<html>` 요소를 선택하는 방법
 - document.documentElement, document.body.parentNode, document.head.parentNode, document.firstChild.nextSibling (document.firstChild: doctype). 표준모드이므로.. 이것도 됨

- DOM API에서 지원하는 방법이 아닌 것
 - 유효성 검사 (Validation) : html5에서 지원, 지리 (Geolocation) : html5에서 지원(BOM)

#### 다음 중 객체가 아닌 것을 모두 고르세요.
- undefined, null 

- 크롬 개발자도구에서 properties 에서 확인 가능하다. 

```
body.default-theme.des-mat
HTMLBodyElement
HTMLElement
Element
Node
EventTarget
Object
```

- Object // 생성자, Constructor인 동시에 함수이다. Object야 말로 javaScript의 모든 것의 조상이다.
- Object가 가지고 있는 것 : ex) .toString() 
- 데이터유형 : number, string, boolean, array, function, object, math, date, RegExp, ... 이것들이 객체인가 확인해보자. 
- 위에 나열된 객체 생성자로부터 태어난 객체(인스턴스)를 통해 확인(검증)

- `!!'난 string'.toString;`  // true 즉, Object라고 나온 것 
 - !! : boolean으로 바꿔주어 명시적으로 알 수 있게 해준 것 

```
!![].toString
true
!!{}.toString
true
!!(100).toString // number는 바로하면 에러.. ()는 데이터를 wrapping하여 인식할 수 있게 해준다. 
true
!!function(){}.toString
true

!!null.toString
!!undefined.toString
!!(undefined).toString
VM411:1 Uncaught TypeError: Cannot read property 'toString' of null(…)
```

-

### DOM 

[선택] 현재 선택한 대상을 변수 el

id속성으로 대상(요소노드)을 선택 document.getElementById('id_name'); <br>
요소노드의 이름으로 대상(요소노드)을 선택 document.getElementsByTagName('tag_name');<br>
class 속성으로 <br>
특정 속성으로 

[탐색] 부모노드 el.parentNode<br>
[탐색] 첫번째 자식노드 el.firstChild<br>
[탐색] 마지막 자식노드 el.lastChild<br>
[탐색] 이전 형제노드 el.previousSibling<br>
[탐색] 다음 형제노드 el.nextSibling<br>
[탐색] 자식노드들 el.childNodes

[탐색]은 하기 쉽지 않아 사용을 잘 하지 않았지만 jQuery는 탐색이 쉽게 해준다.

- 노드.children // 그 안의 요소만 가져옴. 빈칸은 textnode인데 가져오지 않으므로 편리하다. 

$0.children[0] // 첫번째자식요소 찾음<br>
$0.children[$0.children.length -1] // 마지막 자식요소 찾음<br>
$0 은 콘솔창에서 가리키는 요소 

- 노드.firstChild , childNodes[0] // 첫번째 자식노드 찾기 
- 노드.lastChild , 노드.childNodes[노드.childNodes.length - 1]
- 노드.nextSibling // 다음 형제노드 찾기
- 노드.previousSibling // 전 형제노드 찾기
- 노드.parentNode // 부모인 노드는 (거의) 요소이다.

##### 노드(node)의 유형/이름/값을 출력하는 방법

- 노드.nodeName // 요소의 이름을 대문자로 반환. 텍스트노드의 경우는 #text로 반환. 요소의 경우 DIV처럼 대문자로 반환
 - 노드.nodeName.toLowerCase(); 라고하면 소문자로 반환 
 - 노드.tagName도 쓸 수 있다. (예전방식)
- 노드.nodeType // 요소노드는 1, 텍스트노드 3, 주석노드 8
- 노드.nodeValue // 텍스트노드에만 접근 가능. 텍스트 노드의 실제 값 반환. 요소노드의 경우는 null 반환

##### 직접적인 요소를 선택할 수 있는 방법(Traversal Properties) : 중간에 Element라고 쓰면된다. <br> IE8이하는 안됨 => 크로스브라우징 helper function만들어 사용!

- 노드.firstElementChild // 첫 자식 요소 노드 찾기. 
- 노드.lastElementChild // 마지막 자식 요소 노드 찾기. 
- 노드.previousElementSibling
- 노드.nextElementSibling
- 노드.parentElement

##### DOM 접근방식

- id
- className (class는 예약어)
- title

```
<div id="parent" class="papa" data-con="true" role="tab" aria-hidden="false"> 일 때... 

var parent_el = document.getElementById('parent');
console.log('id:', parent_el.id); // 'parent' 출력
console.log('class:', parent_el.className);
console.log('title:', parent_el.title);
// title은 마우스 올렸을 때 나오는 문구. 필요할때 : a 링크를 클릭하면 새창이 뜬다.. 이럴 때처럼 예측이 가능하도록 해줄 때. --> 모바일에선 title은 적용 안되므로 접근성에 안좋을 수 있으니 조심~

// 예전방식은 위처럼 id, className, title만 되고 
// 아래처럼 role, data-*, aria-* 같은 속성은 안된다.
console.log('role:', parent_el.role); // undefiend
console.log('data-:', parent_el['data-con']); // undefiend

// 아래처럼 getAttribute로 해야한다.
console.log('role:', parent_el.getAttribute('role'));
console.log('data-con:', parent_el.getAttribute('data-con'));
console.log('aria-hidden:', parent_el.getAttribute('aria-hidden'));
```

- nodeName = tagName
- nodeType
- nodeValue // data
- hasChildNode() // 자식이 있으면 true, 자식이 없으면 false

```
var parent = document.getElementById('parent');
var parent_childs = parent.getElementsByTagName('div');

// 전역을 오염시키지 않는 방법. 이 또한 전역변수이지만..
// for문에 사용되는 변수이므로 한꺼번에 복사해도 되도록 
for(var child, i=0, j=parent_childs.length; i<j; i=i+1){
	child = parent_childs[i];
	if(!child.hasChildNodes()) {
		console.log(child);
	}
}
```

#### DOM Methods 메소드

- .getElementById('id')
- .getElementByTagName('element')
- .getElementByClassName('classname')
- .querySelector('css selector') // 막강!!! IE8이상. 원하는 대상 바로 선택. 첫번째 하나만 반환
- .querySelectorAll('css selector') // 막강!!! IE8이상. 원하는 대상 바로 선택. 전체 복수로 반환
 - .querySelector() === .querySelector()[0] 

##### 유사배열 

<https://developer.mozilla.org/en-US/docs/Web/API/NodeList>

#### node 만들기. 동적 생성!, 조작

- `document.createElement('element')` // html 요소 만들기. 실제 DOM에 붙는건 아니다.
- `document.createAttribute('attribute')`  // 안씀
- `document.createTextNode('text')` // 텍스트 노드 만들기

- `부모노드.appendChild(자식노드)` // 부모의 꽁지쪽에 붙이기
 - 모달의 경우 이렇게 붙여서 aria로 연결시키고, role="dialog"라고 붙이면 리더기도 제대로 접근하게 된다.
 - 앞에 붙이는 건 없으니, 함수로 만들어서 붙이자. 헐~
- `목표노드.부모노드.insertBefore(insert삽입할노드, target목표노드)` // 노드 ~ 앞에 삽입
- `node.removeChild(childnode)`
- `node.replaceChild(alternate, target)` // `replacedNode = parentNode.replaceChild(newChild, oldChild);`
- `node.cloneNode(boolean)` // false가 기본값 ul이면 ul만 복제. true면 ul과 자식까지 복제
- `element.innerHTML` // 위의 것들을 손쉽게 해줌 


### 프로그래밍 사고
 
[쌤 자료 링크 바로가기](https://github.com/yamoo9/FDS/blob/master/References/A__Fundmantal/00-coding.md)

이때 “수행되어져야 하는 명령”을 정의하기 위해서는 해결 과제(요구사항)를 명확히 이해한 후, 복잡함을 단순하게 분해(모듈화!)하고 자료를 정리하고 구분해야하며 순서에 맞게 행위를 배열해야 한다.

상태를 판단하는 시기와 판단하여야 하는 상태와 그 기준을 정의하여야 하며 이를 바탕으로 분해한 처리(Process)의 실행 여부를 결정한다. 예를 들어 장애물은 어떤 것(크기, 움직임…)인지 어떤 범위 내에 있는 것인지 명확히 수치화하여 정의해야 한다.

가장 유용한 대안은 사전에 정의된 문법(Syntax)을 사용하여 프로그램을 작성하면 그것을 컴퓨터가 이해할 수 있는 기계어로 변환하여 주는 일종의 번역기를 이용하는 것이다. 이 일종의 번역기를 컴파일러(compiler 이미번역된것을 브라우저가.. 속도 더 빠름)---Sass 혹은 인터프리터(interpreter 통역이필요)---javaScript 라고 한다.

자연어 문장은 프로그래밍 언어의 구문(Statement)에 해당한다. 구문은 변수와 값, 키워드, 연산자, 표현식, 주석으로 구성된다. 즉, 변수를 통해 값을 저장하고 참조하며 연산자로 값을 연산, 평가하고 조건문과 반복문에 의한 흐름제어로 데이터의 흐름을 제어하고 함수로 구문의 집합을 만들며 객체, 배열 등으로 자료를 구조화한다.

프로그래밍은 요구사항의 집합을 분석하여 적절한 자료구조와 함수의 집합으로 변환한 후 그 흐름을 제어하는 것이다.