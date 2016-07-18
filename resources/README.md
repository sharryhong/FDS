## H's HTML/CSS 코딩 스타일 가이드라인(Guideline)


### [ 목차 ]

### 1. HTML 문법

 1) DOCTYPE 선언 <br>
 2) `<html>` <br>
 3) `<head>`

### 2. 기본 레이아웃


-

### 1. HTML 문법

1) DOCTYPE 선언

- HTML5 doctype선언 형식을 따른다.
- doctype선언 위에 주석 포함 아무런 코드를 적지 않는다. 

```
 <!DOCTYPE html>
```

2) `<html>`

- 기본 코드 

```
<html lang="ko-KR">
```

- IE 9 이하에서 버전별로 스크립트나 스타일을 적용할 경우 

```
<!--[if IE 6]><html lang="ko-KR" class="ie6"><![endif]-->  // IE6에서만 인식
<!--[if IE 7]><html lang="ko-KR" class="ie7"><![endif]-->  // IE7에서만 인식
<!--[if IE 8]><html lang="ko-KR" class="ie8"><![endif]-->  // IE8에서만 인식
<!--[if IE 9]><html lang="ko-KR" class="ie9"><![endif]-->  // IE9에서만 인식
<!--[if !IE]><!--><html lang="ko-KR"><!--<![endif]-->      // IE10이상, 나머지 브라우저에서 인식 
```

3) `<head>` 

- `<meta http-equiv="X-UA-Compatible" content="IE=Edge">` 
<br>사용자 익스플로러의 최신브라우저로 동작하도록 한다.
- `<meta charset="UTF-8">` 
<br>title보다 위에 작성한다. 
- `<title>Menu | H's Front End</title>` 
<br>각메뉴명 | 사이트 전체 제목
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` 
<br>title 아래에 작성한다. 

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
