###### Front-End Develop SCHOOL

# DAY 07

### 진행 내용

- CSS 선택자
- CSS 선택자 우선 순위
- CSS 박스모델
- CSS 상속
- CSS 타이포그래피 속성

-

### 1. CSS 선택자 

- 과제 : css선택자 정리 

유형 | 선택자 | 설명
--- | --- | ---
**일반 선택자** | * | 전체 선택자. 모든 요소 선택. 0점 
 | E | 요소 선택자. 0001점
 | .class-name | class선택자. 0010점 
 | #id-name | id선택자. 0100점 
 | E(P) E(C) | 자손 선택자
 | E(P)>E(C) | 자식 선택자
 | E+E | 인접형제 선택자
 | E~E | 일반형제 선택자 
 | E, E | 그룹핑 
**속성 선택자** | [attr] | 특정 조건의 속성 선택자 사용 
 | [attr="value"] | 반드시 value가 같아야 선택 
 | [attr^="value"] | 시작하는 속성 값이 일치하는 경우 선택 
 | [attr$="value"] | 끝나는 속성 값이 일치하는 경우 선택 
 | `[attr|="value"]` | value- 하이픈(-)으로 구분되어 있는 값 선택
 | [attr~="value"] | 공백으로 구분되는 단어가 일치할 때 선택 
 | [attr*="value"] | value 단어가 있으면 모두 선택
**가상 클래스** | : | 
 | :link | 기본상태
 | :hover | 커서 올라간 상태
 | :active | 커서 누르고 있는 상태
 | :visited | 방문한 상태
 | :focus | 키보드 포커싱 상태 
 | :lang(en) | 요소의 lang속성이 en일 때  
 | :target | id로 타켓 가는 것   
 | E:first-child | E요소의 부모로 부터 처음자식
 | E :first-child | E요소의 자손 중 처음자식 
 | :last-child | 부모의 마지막자식 
 | :only-child | 부모의 유일한자식 
 | :nth-child(n) | 부모의 n번째 자식 
 | :nth-last-child(n) | 부모의 마지막으로부터 n번째 자식 
 | :nth-of-type(n) | 내 타입 중 n번째 형제  
 | :nth-last-of-type(n) | 내 타입 중 마지막으로부터 n번째 형제  
 | :first-of-type | 내 타입 중 첫번째 형제 
 | :not(선택자) | (선택자)를 제외한 나머지 대상요소 선택 
**가상 요소** | :: |  
 | ::first-line | 첫 줄(브라우저 가로) 선택 
 | ::first-letter | 첫 글자 
 | ::before | 요소의 첫 자식 콘텐츠 생성 
 | ::after | 요소의 마지막 자식 콘텐츠 생성 
 | ::selection | 커서로 드래그하면 선택되는 것  

- 속성 선택자 : 최대한 간결하게 쓰자

> `[attr]` <br>
> `[attr="value"]` : 반드시 value가 같아야 선택된다.<br>
> `[attr|="value"]` : value- (하이픈(-)으로 구분되어있는 이름 찾음) <br>
> `[attr~="value"]` : 공백(앞뒤상관없이)으로 구분되는 단어가 일치할 때 선택 <br>
> `[attr*="value"]` : value단어만 있으면 다 선택

```
/*class가 있는 요소 선택*/
[class]{
	border: 1px dashed #eee;
}

/*속성 lang="en-" 인 요소 선택*/
[lang|="en"]{
	text-decoration: underline;
}

/*class="container" 앞뒤중 공백있는 요소 선택, container만 있어도 선택*/
[class~="container"]{
	background-color: #a35;
}
```

- 상태디자인(Station Design) 선택자

> 기본상태(normal)<br>
> `:hover` (:는 가상클래스 생성) 마우스 커서가 올라간 상태(hover)<br>
> `:active` 커서로 누른 상태(active)

```
/*기본상태(normal)*/
p {
	color: green;
}

/*마우스 커서가 올라간 상태(hover)*/
p:hover {
	color: #000;
}

/*커서로 누른 상태(active)*/
p:active {
	background-color: yellow;
}
```

- 하이퍼링크 (`<a href>`)

> 상태 디자인(State Design)<br>
> 가상 클래스 (유사클래스 Pseudo Class)<br>
>------------------------------------<br>
> :link 기본상태<br>
> :visited 방문한 상태<br>
> :hover 커서 올라간 상태 <br>
> :active 커서로 누르고 있는 상태<br>
> :focus 키보드 포커싱 상태 : 반드시 표시 되어야 한다. 브라우저마다 다르게 표시된다. 따라서 outline 디자인 해주면 좋다. 

```
/*기본상태 a:link가 있으나 그냥 a로 한다. */
a {
	padding-left: 0.25em;
	/*4px로 써도 되지만 em으로 하면 글자크기 키웠을 때 등 공간 유지에는 상대적인 em값이 좋다. */
	padding-right: .25em;
	/*.25 = 0.25*/
	text-decoration: none;
	color: #333;
	background-color: #fee;
}

/*방문한상태*/
a:visited {
	color: #999;
	background-color: #eee;
	background-image: url("../img/link.png");
	/*color는 적용되고, image 적용 안된다.*/
}

a:hover {
	/*display: inline-block;
	margin-top: -5px; */
	/*display: inline-block;일 땐 margin-top: - 적용 안된다(테스트해보면 됨)*/
	
	/*text-decoration: underline;*/
	/*gy등 아래로 내려가는 글자의 경우 underline을 쓰면 원하는 결과가 안나온다. */
	padding-bottom: 1px;
	border-bottom: 1px solid;
	/*이렇게 하면 원하는 밑줄 생김*/
}

a:active {
	background: #ff0;
}

a:focus {
	outline: 3px solid green;
}

/*focus된 상태에서 hover*/
a:focus:hover {
	outline-offset: 10px;
	/*outline거리를 벌려줌*/
}
```

- `:` 는 가상 클래스. `*:`와 같음. 
- `::` 는 가상 요소. 

- `:lang(es)` 스페인어. 다른 언어에 다른 스타일주기. html에 lang="es"속성이 있어야 인식됨 
- `[lang|="es"]` 이렇게 해도 되고 

- first-child, last-child, nth-child()

```
/*.rounded-box의 부모(body)로 부터 처음자식*/
.rounded-box:first-child{ 
	background: yellow;
}

/*.rounded-box의 자손중 처음자식. 별표생략가능*/
.rounded-box *:first-child{ 
	background: yellow;
}
```

- 가상(유사,의사) 요소 (Pseudo Element)<br>

> 가상클래스와의 차이 : 실제로 가상으로 요소(콘텐츠)를 만들어준다.<br>
>--------------------------------------------------------------------<br>
> ::first-line 첫줄(브라우저 가로) 실무에 많이 쓰이진 않는다. <br>
> ::first-letter 첫글자에 적용<br>
> ::before<br>
> ::after
> 가상이므로 접근성에 좋지않다. 스크린리더기에서 못읽는다. <br>
> 이미지로 처리된다. 꾸밈에만 이용하도록 한다. 

> css2.1까지는 :하나만 써도 되나(하위호환)
> css3에선 가상클래스와 구분위해 :: 두개쓴다. 

```
/*반드시 content가 있어야 한다.*/
/*.msg의 첫자식*/
.msg::before{
	content: '캬캬캬';
	color: skyblue;
	font-size: 2em;
}
/*before로 붙은건 first-child로 인식되지 않는다. */
.msg :first-child{
	font-size: 2em;
}
```

```
/*접근성 관점에서 링크의 주소를 출력하는 스타일*/
a::after{
	/*함수 : ()안에 전달하는 무엇을 통해 뭔가를 처리해서 결과를 보여준다.*/
	/*href속성을 보여주는 함수*/
	content: '(' attr(href) ')';
	color: hotpink;
}
abbr::after{
	content: '(' attr(title) ')';
}

/*print모드에서만 작동*/
@media print {
	a::after{
	content: '(' attr(href) ')';
	color: hotpink;
	}
	abbr::after{
		content: '(' attr(title) ')';
	}
}
```

- `:not(E)` 요소 제외 

```
/*parent클래스 내 모든 요소 중에 a요소, p요소 제외*/
.parent *:not(a):not(p){
	border: 1px solid #999;
}

/*이렇게는 안됨*/
/*.parent *:not(a, p){
	border: 1px solid #999;
}
*/
```

- `::selection` 커서로 드래그하면 선택될 때 

```
/*사용자가 커서로 클릭 후, 텍스트 블록을 선택할 경우 
가상으로 요소를 만들어 디자인하기 IE9이상. 그룹화 안됨*/
/*color, background-color, cursor, outline, 
text-decoration, text-shadow 등만 반영됨*/
/*caniuse.com에서 확인해보니 파이어폭스에선 -moz-붙여야한다.*/
::-moz-selection{
	background: red;
	color: #fff;
}
::selection{
	background: red;
	color: #fff;
	text-shadow: 2px 2px 10px blue;
	/*x, y, blur, color*/
}
```

- 그 외 

```
/*page의 root. html의 경우 <html>
xml의 경우 다를 수 있다. */
:root {}
:nth-child(n) 부모로 부터 몇번째
:nth-last-child(n) 부모의 마지막으로부터 몇번째
:nth-of-type(n) 유용함. 내 타입으로부터 몇번째. IE9이상
:first-of-type 내 타입 중 첫번째놈
:only-child 부모중 자식이 하나인 것 
:target 타겟 id로 가는 것 스타일주기 
/*css only tabmenu 절대 따라하지말자. 접근성에 안좋음. 그냥 이런속성 이용해서 만든것일뿐 */

```

### 2. css의 상속

- 브라우저 개발자도구에서 확인 (inherited from E라고 표시됨, 연한색은 상속안되는 속성)
- 공간(width,margin등)은 상속받지 않음
- color등은 상속받음 
- css의 우선순위에 따라 적용됨 

> `!important` -> `inline style` -> `id` -> `class` -> `e`

#### 선택자 참고 자료

- [W3C, Selectors Level 3](https://www.w3.org/TR/selectors/#selectors)
- [MDN, Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

#### 그 외 css

- `border` : 기준점이 왼쪽 상단 0,0 이다. 영역차지
- `outline` : 기준점이 중앙이다. 영역차지하지않음 

#### sublime text

- ctrl + d : 같은 단어 등 선택하기 (취소는 ctrl + k)
- install package에서 convertToUTF-8설치 
- IMESupport 설치

### IT 해외 취업 가이드 : "Where do you wanna work?"

1. [미국에서 IT전문가로 일하게 된다는 것은 취업 이상의 의미가 있다.](http://www.hanbit.co.kr/network/series/series_view.html?cms_code=CMS2884820763&hcs_idx=5)
1. [미국에서 IT 전문가로 일한다는 것(1) - 경쟁력 있는 경력 쌓기](http://www.hanbit.co.kr/network/category/category_view.html?cms_code=CMS9261785013)
1. [미국에서 IT 전문가로 일한다는 것(2) - 미국에서 IT 직종이 매력적인 이유](http://www.hanbit.co.kr/network/category/category_view.html?cms_code=CMS8350238194)

-

### 모듈러 디자인(Modular Design) === 모던 디자인

> 지난 몇 년동안, 반응형 디자인에 대한 논쟁은 미묘하게 변화했다. 페이지를 디자인하는것이 아니라, 패턴을 디자인 하는것에 집중하게 되었다.
> 작고, 재사용 가능한 요소들이 큰 시스템을 구성한다는 사실을 이해했다. 나는  내 디자인에 대한 생각이 모던 웹을 위한 매우 좋은 방식이라는 것을 알아냈다.<br>
>
> [─ 웹 앱과 웹 사이트의 다른점 5가지](http://www.hanbit.co.kr/network/category/category_view.html?cms_code=CMS3377712179)

CSS, JavaScript를 공부하면서 우리는 **모듈(Module) 구성 및 재 사용에 대해 많은 연구와 실습을 진행**해볼 것입니다.

#### 추천 사이트 

> <http://www.hanwha.co.kr> 메뉴 접근성 잘되어있다. 

> <http://csslint.net/> css 오류 잡기