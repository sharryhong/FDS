###### Front-End Develop SCHOOL

# DAY 05

### 진행 내용

- 1. HTML 스크립트, 오브젝트
- 2. HTML 기타 요소
- 3. HTML 프레임
- 4. HTML5 표준
- 5. CSS 기초 

-

### 1. HTML 스크립트, 오브젝트

- 자바스크립트 위치 비교 : 01-script-object.html 참고

> head에 사용시

```
<link rel="stylesheet" href="css/style.css">
<script src="js/app.js"></script>
<!-- css는 병렬식으로 다운받으나, javascript는 직렬식으로 다운받는다.  -->
<!-- 즉, script를 만나면 해석하는 동안 html해석을 하지 않는다. 
	 따라서 스타일을 먼저 쓰도록한다.  -->
<!-- 스크립트를 html내에 직접 코딩해도 되지만 코드를 분리하여(새 파일로) 재사용하는 것이 좋다.) -->
```

> body에 사용시 

```
<body>
	<div class="page-header" lang="en">
	<!-- lang="en" : 이 페이지의 주언어가 한글인데 이 부분은 영어영역임을 나타냄  -->
		<script>
			window.alert('inner first .page-header area');
		</script>
		<h1 class="headline">Loading JS</h1>
		<script>
			window.alert('second .page-header area');
		</script>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, nam?</p>
		<script>
			window.alert('third .page-header area');
		</script>
	</div>
<script>
	document.write('<pre>모든 &lt;문서&gt;의 내용을 로드 완료</pre>');
</script>
<!-- 이 페이지 로딩 순서 : html시작, css다운, js/app.js다운, alert('inner first... , h1 , alert('second... , p , alert('third... , 마지막 script 로딩 -->
<!-- 따라서 중간중간 script를 쓰면 좋지 않다.  -->
</body>
```

- object 요소 : 어떤 파일들 불러오고, 대응하지 않는 브라우저에서는 대체 내용을 제공함 

 > 요새는 잘 쓰지 않는다.<br>
 > Flash, images, audio, videos, java applets, activeX 등 삽입시 사용<br>
 > `<object type="객체유형" data="경로">대체내용제공</object>`

 > Flash삽입시 object, embed : 요새는 잘 안씀

### 2. HTML 기타 요소

- `<blockquote>` : 긴 인용
- `<q>` : 짧은 인용. 잘 사용하지 않고 ' '나 " "를 그냥 쓰는 경우가 많다. 

- `<abbr title="eXtensible Markup Language">xml</abbr>` : 축약어 -> html5 표준. IE6에 적용 안됨 
- `<acronym>` : 축약어 -> 비표준. IE에서 만든 요소

- `<address>` : 이메일 주소 등 웹 상에서 연결될 경로. 잘 안씀. 내부에 블록 요소 오면 안됨 

```
<address>
	Phone : <a href="tel:010-1111-2222">010-1111-2222</a>
	EMail : <a href="mailto:email@gmail.com">email@gmail.com</a>
</address>
```

- `<ins>` : insert text. 불필요한 단어나 문장대신 넣는 단어나 문장 (밑줄 생김). 안쓰고 css를 쓰는 경우가 많다. 
- `<del>` : delete text. 지울 단어나 문장 (파선 생김). 안쓰고 css를 쓰는 경우가 많다. 

 > `<p>오늘 비가 <del>내릴 것</del> <ins>오지 않을 것</ins> 같다.</p>`

- `<pre>`
- `<code>`
- `<kbd>` : keyboard text

 > `<p>복사할땐 <kbd>Ctrl+C</kbd>을 사용한다.</p>`

- `<dfn>`

### 3. HTML 프레임 : 잘 사용안함 

- 접근성을 해침. iframe정도만 살아남음 

- `<iframe>` : inline frame. 페이지에 다른 페이지 삽입
 > 과거에는 Ajax가 없었기 때문에 많이 사용하였다. 

```
<!-- <body>대신 아래 코드로  -->
<frameset cols="25%, 50%, 25%">
	<frame name="page-left" src="frames/left.html">
	<frame name="page-sidebar" src="frames/main.html">
	<frame name="page-right" src="frames/right.html">
	<noframes>
		<body>
			<!-- 프레임셋 미지원시, 대체내용작성 -->
		</body>
	</noframes>
</frameset>

<!-- frames/main.html -->
<iframe 
	src="http://fastcampus.co.kr" 
	longdesc="http://fastcampus.co.kr"
	width="100%"
	height="400" 
>
	<!-- iframe 지원되지 않는 경우 -->
	<a href="http://fastcampus.co.kr" target="_blank">패스트캠퍼스</a>
</iframe>
```

```
<iframe src="" width="" height="" frameborder="0" scrolling="yes"></iframe>
```

### 4. HTML5 표준 | HTML5 = HTML(new Elements) + JavaScript API

> HTML(new Elements) : 시멘틱한 마크업 
> JavaScript API : 사용자 위치정보 활용 등 
> 플러그인에 의존하지 않아도 된다. 
> 상위, 하위 호환 가능  

- `<a>` 내부에 블록 요소가 와도 된다. 
- DTD 간결 
- MIME type기본 지원
- h1요소의 경우 한페이지에 하나만 쓰도록 하자. 현재 warnning이라고 뜬다. 
- 새로운 요소 : 섹션요소(section, article, aside, nav, main), header, footer, video, audio, source(video, audio의 하위요소), embed, time(날짜 정보), command, datalist(도움말), datails, summary, figure(이미지, 도표, 차트 등 감싸는 요소), figcaption(figure 설명), output, progress, canvas, keygen, mark, meter, ruby, rt, rp
- body요소도 섹션요소이다. 모든 섹션요소에는 heading요소가 들어가야 웹접근성에 좋다. 
- header, footer꼭 안써도 되고, 각 섹션내에 등장해도 된다. 

```
<!-- html4 or xhtml markup -->
<div id="header"></div>
<div id="gnb"></div>
<div id="main"></div>
<div id="sidebar"></div>
<div id="footer"></div>

<!-- html5 markup -->
<header class="page-header"></header>
<nav></nav>
<!-- 네비게이션. 한 페이지내 여러개 가능 -->
<section>
	<article></article>
</section>
<!-- <section> : 관련있는 콘텐츠를 그룹으로 묶는 용도.  -->
<!-- <article> : 독립. 글, 기사와 같은 특정한 독립된 컨텐츠 -->
<!-- <section>요소 대신 <main></main> 써도 됨 -->
<!-- <section>, <article> 문서에서 여러번 사용가능 -->
<!-- 섹션 요소들에는 heading을 꼭쓰자. h1은 쓰지 않도록 하자. -->
<!-- <main>은 문서에서 한번만 사용가능 -->
<aside></aside>
<!-- 주요 내용과 관련있는 사이드 내용 -->
<footer></footer>

<!-- header와 footer는 section안에 올 수 있기 때문에 식별자(id, class)를 준다. -->
<!-- 각 section내에 header와 footer가 올 수 있다. -->
<!-- id는 가급적 쓰지않도록 한다. : id의 우선권이 높아  -->
<!-- id : 고유한 이름 -->
<!-- class : 중복이름 가능. 스타일 모듈 만들어 공동 사용 -->
```

- 새로운 폼 요소 (input type) : email, url(주소입력), number(숫자 증감), search(검색), range(슬라이드바), data pickers(캘린더), color, datalist, keygen, output

#### 블록 요소와 인라인 요소의 차이점

- 블록 요소의 특징 
 - 부모요소 영역만큼 width가 커진다. (기본값 : auto)
 - 요소의 height는 부모와 상관없이 요소가 포함하는 자식 요소들의 크기에 좌우됨
 - 별도로 가로, 세로 크기 설정 가능
 - 내부에 인라인 요소를 감쌀 수 있다. 

- 인라인 요소의 특징 
 - 자신을 포함한 부모요소영역과 상관없이 자신이 포함하는 자식요소 또는 텍스트만큼 가로, 세로 크기를 가진다. 
 - 별도로 가로, 세로 크기 설정 불가능
 - margin, padding 속성의 top, bottom 설정이 불가능하다. 
 - 내부에 블록 요소를 감쌀 수 없다. (단! 예외 : `<a>`요소는 블록요소를 감쌀 수 있다.)
 - 단, `<a>`요소 내부에 클릭되는 요소가 오면 안된다. 

- `<img>`, `<input>` : inline-block. width, height, margin-top등 적용된다.

### 5. CSS 기초

- 문법 : 선택자{ 속성: 값; }
- 단위 : em(알파벳 M의 경우 가로세로가 똑같은 정사각형이다.) 1em = 16px(기본 브라우저 기본 폰트 사이트 )
- font-size: 기본 400, bold 700

- 선택자(selector)
 - * : 모든요소
 - 요소(element) : `h1`
 - 자손 : 한칸띄기 `a img`
 - class : .
 - id : #

- 우선순위
 - * : 0점 (거의 초기요소 세팅할때 사용)
 - 요소(element) : 1점 (예: h1{ })
 - class : 10점
 - id : 100점 
 - inline: 1000점 (html요소에 직접 기입) : 쓰지말자. 

- 공통스타일, 개별스타일로 나눠 작업하자.

```
@charset "utf-8";
/*html파일에 명시되어있지만 css에도 써줘야한다. 안써도 잘되는 브라우저들이 있지만 기본적으로 써야한다. */
/*최상단에 써야한다.*/

/*스타일 모듈 파일 로드*/
/*html 에서 불러오는 것이 낫다.(병렬식) (나중에 모두 병합 한 후 하나의 파일로 불러오자. 추후 배움) */
/*css에서 불러오면 병렬식(동기에 다운받음)이 아닌 직렬식(하나 다 받으면 다음파일 받음)으로 불러와서 느리다.*/
@import url("grid.css"); /* 방법 1 */
@import "common.css"; /* 방법 2 */
```

### 그 외

- html구조화 생각하기! : 의미를 생각하자~! 

> 질문 : 년도별 우표를 구조화? <br>
> 답변 : 순서있는 년도별 목록? -> ol <br>

> 질문 : 오렌지 쥬스가 뭐죠?<br>
> 답변 : 설명이 필요하겠네요 -> dl, dt, dd 등 <br>

> 질문 : 동전을 재질별로 구분?<br>
> 답변 : 각 분류별로 표로 나열하면 보기 좋을 것 같아요. -> table

> 윤석찬씨 블로그 <http://channy.creation.net/blog>

- emmet 단축키 찾기 <http://docs.emmet.io/cheat-sheet/>
- html, css등 지원여부 <http://caniuse.com/>
- 브라우저별 표준 지원여부, 표준 지원 점수 <http://html5test.com/>
- html에 관한 공부 <http://w3c.github.io/html/> , <http://diveintohtml5.info/>
- 제레미키스의 책 : HTML5 웹디자이너를 위한
- 하나의 html구조로 css를 이용하여 다르게 디자인 : <http://www.csszengarden.com/>