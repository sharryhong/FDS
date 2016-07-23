## H's HTML/CSS 코딩 스타일 가이드라인(Guideline)


### [ 목차 ]

### 1. HTML

 1-1) DOCTYPE 선언 <br>
 1-2) `<html>` <br>
 1-3) `<head>`<br>
 1-4) HTML 기본 레이아웃

### 2. CSS

 2-1) 선택자 <br>
 2-2) 작성 순서 <br>
 2-3) Media query <br>
 2-4) 그 외

### 3. 네이밍 규칙 

 3-1) 폴더명<br>
 3-2) id, class명 


-


### 1. HTML

#### 1-1) DOCTYPE 선언

HTML5 doctype선언 형식을 따른다.<br>
doctype선언 위에 주석 포함 아무런 코드를 적지 않는다. 

```
 <!DOCTYPE html>
```
<br><br>

#### 1-2) `<html>`

기본 코드 

```
<html lang="ko-KR">
```
<br>
IE 9 이하에서 버전별로 스크립트나 스타일을 적용할 경우 

```
<!--[if IE 6]><html lang="ko-KR" class="ie6"><![endif]-->  // IE6에서만 인식
<!--[if IE 7]><html lang="ko-KR" class="ie7"><![endif]-->  // IE7에서만 인식
<!--[if IE 8]><html lang="ko-KR" class="ie8"><![endif]-->  // IE8에서만 인식
<!--[if IE 9]><html lang="ko-KR" class="ie9"><![endif]-->  // IE9에서만 인식
<!--[if !IE]><!--><html lang="ko-KR"><!--<![endif]-->      // IE10이상, 나머지 브라우저에서 인식 
```
<br><br>

#### 1-3) `<head>` 

- `<meta http-equiv="X-UA-Compatible" content="IE=Edge">` 
<br>사용자 익스플로러의 최신브라우저로 동작하도록 한다.

- `<meta charset="UTF-8">` 
<br>title보다 위에 작성한다. 

- `<title>Menu | H's Front End</title>` 
<br>각메뉴명 | 사이트 전체 제목

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` 
<br>모바일 최적화 환경 설정<br>title 아래에 작성한다. <br>initial-scale:초기 스케일, maximum-scale:최대 스케일, user-scalable=no 사용자가 스케일 조정 못함

- 폰트관련 css파일은 다른 css파일보다 위에 작성한다. 

```
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta charset="UTF-8">
	<title>Menu | H's Front End</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="프론트엔드 개발을 위한 html을 배우고 있어요."> 
	<meta name="keywords" content="프론트엔드, 개발, 스쿨, 패스트캠퍼스"> 
	<meta name="author" content="Sharry Hong"> 
	<link rel="shortcut icon" type="image/x-icon" href="img/snoopy01.png">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald">
	<link rel="stylesheet" href="../resources/spoqa.css">
	<link rel="stylesheet" href="../resources/ress.css">
	<link rel="stylesheet" href="../resources/common.css">
	<link rel="stylesheet" href="css/style.css">
</head>
```
<br><br>

#### 1-4) 기본 레이아웃

`<section>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<header>`, `<footer>`등의 시멘틱한 요소를 쓰도록 한다. 


```
<header class="page-header">
	<h1>로고</h1>
</header>
<nav class="gnb">
	<ul>
		<li>menu1</li>
		<li>menu2</li>
	</ul>
</nav>
<div class="container-main">
	<article class="page-main">
		<h2>mainpage heading</h2>
		<section class="theme-name">
			<h3>theme heading</h3>
			<article class="theme-01">
				<h4>theme-01 heading</h4>
				<p>theme-01 contents</p>
			</article>
		</section>
	</article>
	<aside class="page-aside">
	</aside>
</div>
<footer class="page-footer">
</footer>
```
<br><br><br>

### 2. CSS 

#### 2-1) 선택자

id 선택자 보다는 class 선택자로 스타일을 준다. <br>
4개 이상의 선택자를 사용하지 않도록 적절한 class를 준다. <br>
grouping 선택자의 경우 아래와 같이 한줄, 다음줄, ... 형식으로 작성한다. <br>

```
.selector,
.selector-second,
.selector-third {
}
```

<br><br>
#### 2-2) 작성 순서

1. Positioning

 ```
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 100;
 ```

2. Box model
 
 ```
display: block;
float: right;
width: 100px;
height: 100px;
 ```

3. Typographic

 ```
font: normal 13px "Helvetica Neue", sans-serif;
line-height: 1.5;
color: #333;
text-align: center;
 ```

4. Visual

 ```
background-color: #f5f5f5;
border: 1px solid #e5e5e5;
border-radius: 3px;
opacity: 1;
 ```

<br><br>
2-3) Media query 

mobile first로 작성한다. 특별한 이유 제외 <br>
Media query 코드 위치는 관련 코드 바로 하단에 작성한다. (파일을 따로 작성하지 않는다.)

```
.element { ... }

@media (min-width: 600px) {
  .element { ...}
}
```

<br><br>
#### 2-4) 그 외 

css파일에 `@import url("style.css");`를 쓰지않도록 한다.<br> html에 `<link rel="stylesheet" href="style.css">`로 쓴다. 
color hex values 값의 경우 줄여쓴다. `#ffffff'` -> `#fff`

<br><br><br>
### 3. 네이밍 규칙 

#### 3-1) 폴더명

<br><br>
#### 3-2) id, class명 