###### Front-End Develop School - sharryhong's 

# Day 02

###### ※ 야무쌤의 정리 <https://github.com/yamoo9/FDS/tree/master/DAY02>

### 1. node.js 설치 
<https://nodejs.org/en>

- `node.js`를 설치한 후에 설치된 버전 확인 명령어 
- window에서 cmd실행 (맥은 terminal) 

```
"node --version"  // nodejs 버전 나옴
"npm --version" 
1. "npm install --global http-server" // 서버설치 (맥은 명령어 앞에 sudo라고 붙인 후에 설치 실행)
2. cd 경로를 설정한 후 
3. "http-server -o" // 내 웹페이지 볼 수 있음 (http://127.0.0.1:8080/)
``` 

### 2. 문서의 구조화 (마크업:Markup)
- b, i 요소 : html5에서 다시 사용가능하게 되었으나 의미가 다소 바뀌었다. <http://html5doctor.com/i-b-em-strong-element/>
- strong 요소 : 강한 강조. b요소 쓰지말고 storong을 쓰자. 
- em 요소 : 강조. i요소 쓰지말고 em을 쓰자. 
- br : 단락 안에서 줄바꿈 (남용하지 말자.)
- 행간
  ```
 <!-- 디자인상에서 enter를 눌렀다는 것 -->
 <h3>Web Front-End!</h3>
 <h3>Develop!</h3>

 <!-- 디자인상에서 shift enter를 눌렀다는 것 -->
 <h3>Web Front-End! <br>Develop!</h3>
  ``` 
- h1, h2, h3, h4, h5, h6 : Heading 1 ~ 6. 
  * h1 : html5에서는 한 페이지 내에서 h1 여러번 쓰일 수 있다. 예를들어 body 의 h1, 각 section에서의 h1도 좋다. 
- div : 의미없지만 구역 등 나눌 때 씀. (division) 

- 핵을 쓰지 말자 운동~!! 
	```
	cc:ie 단축키 : <!--[if IE]><![endif]-->
	cc:noie 단축키 : <!--[if !IE]><!--><!--<![endif]-->

	각 브라우저에서 인식하도록 만들어보자. 
	<!--[if IE 6]><html lang="ko-KR" class="ie6"><![endif]-->  // IE6에서만 인식
	<!--[if IE 7]><html lang="ko-KR" class="ie7"><![endif]-->  // IE7에서만 인식
	<!--[if IE 8]><html lang="ko-KR" class="ie8"><![endif]-->  // IE8에서만 인식
	<!--[if IE 9]><html lang="ko-KR" class="ie9"><![endif]-->  // IE9에서만 인식
	<!--[if !IE]><!--><html lang="ko-KR"><!--<![endif]-->      // IE10이상, 나머지 브라우저에서 인식 
	```

- 엔티티 코드(html Entity code) : 특수문자 <http://entitycode.com/>
 * 예 : `&	&amp;  / ©	&copy;`
 * 브라우저에서 코드 꺾쇠 나오게 하기 
 ```
 h1.title{제목}|e 자동으로 인코딩되어 브라우저에서 꺾쇠 나오게 한다. 
 &lt;h1 class="title"&gt;제목&lt;/h1&gt;

 오호.. 그럼 브라우저에서 나오는 결과는? 
 <h1 class="title">제목</h1>
 ```
 * 브라우저에서 아래처럼 나오게 해보자. 
 ```
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>

어떻게 작성해야할까? 바로 이렇게!
h1+h2+h3+h4+h5+h6|e
+ : 형제 요소 만들기 
 ```
- pre요소 : pre요소 안의 내용들 그대로 나오게 한다. 
- big, small 요소 : html5에서 부활. 굳이 안써도된다. 
- sup(superscript text) : 윗첨자, sub(subscript text) : 아랫첨자 -> css에서 vertical-aline 등으로 원하는 디자인으로 조정해준다. 
- favicon(파비콘) : 브라우저 탭에 대표이미지 놓이게 하기 
	```
<!-- link:favicon + tab -->
<!-- http://www.favicon-generator.org/ 에서 파비콘 만들 수 있다.  -->
<!-- http://instantlogosearch.com/ 에서 로고 다운받을 수 있다. 32 * 32px 사이즈이면 된다. -->
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">
<!-- ie하위버전에선 png파일 안됨 -->
	```
- a 요소 : 외부 페이지 연결_하이퍼 링크, 내부 페이지 내 이동 
 * 절대경로 (서버 구동해야 제대로 보임) : 모든 페이지에 동일한 경로 지정
 ```
	<a href="/">Home</a>
	<a href="/views/about.html">About</a>
	<a href="/views/project.html">Projects</a>
	<a href="/views/service.html">Services</a>
	<a href="/views/contact.html">Contact</a>
 ```
 * 상대경로 : 페이지마다 다르게 경로 지정 
 ```
 <!-- index.html -->
	<a href="">Home</a>
	<a href="views/about.html">About</a>
	<a href="views/project.html">Projects</a>
	<a href="views/service.html">Services</a>
	<a href="views/contact.html">Contact</a>

 <!-- views폴더내의 페이지들 -->
	<a href="../">Home</a>
	<a href="about.html">About</a>
	<a href="project.html">Projects</a>
	<a href="service.html">Services</a>
	<a href="contact.html">Contact</a>
 ```
 * 내용이 많은 컨텐츠를 위한 목차, id연결 
 ```
	div*10>h2#project-$${프로젝트 주제 $$}+p*10>lorem200 
	: div 10개를 만드는데 자식으로 h2 id가 project-00~10, 형제는 p 10개 

	<a href="#project-01">프로젝트 주제 01</a> 이런식으로 바로가기 연결 
 ```
- img 요소 : 이미지. 경로(src)와 대체텍스트(alt) 반드시 포함되어야 한다.  

### 3. 스니펫(snippet) 
 : 매번쓰기 귀찮은 코드를 단축키만 누르고 tab누르면 나오게 만드는 것
 * sublime text의 tools > new snippet 에서 
 * 아래코드 : 스니펫 만드는 기본 코드  
  ```
  <snippet>
	<content><![CDATA[여기에 내용넣기]]></content>
	<tabTrigger>스니펫 이름</tabTrigger> 
	<scope>text.html</scope> 
  </snippet>
  ```
 * 아래코드 : cc4ie + tab 누르면 <content><![CDATA[ 내부에 있는 코드 자동생성 ]></content> 
  ```
  <snippet>
	<content><![CDATA[<!--[if IE 6]><html lang="ko-KR" class="ie6"><![endif]-->
	<!--[if IE 7]><html lang="ko-KR" class="ie7"><![endif]-->
	<!--[if IE 8]><html lang="ko-KR" class="ie8"><![endif]-->
	<!--[if IE 9]><html lang="ko-KR" class="ie9"><![endif]-->
	<!--[if !IE]><!--><html lang="ko-KR"><!--<![endif]-->]]></content>
		<tabTrigger>cc4ie</tabTrigger> 
		<scope>text.html</scope> 
  </snippet>
  ``` 
 * 아래코드 : 랜덤 이미지가 들어오게 하는 placeholdimg   
  ```
  <snippet>
	<content><![CDATA[<img src="http://placehold.it/${1:320}x${2:480}/${3:ddd}/${4:333}/?text=${5:alt}" alt="${5:alt}">]]></content>
	<tabTrigger>placeholdimg</tabTrigger> 
	<scope>text.html</scope> 
  </snippet>

  ${1:320} 처럼 커서가 이동하게 해서 수정이 용이하게 해준다. 
  ```

###### ※ 오늘의 sublime text 단축키 
> 로엠입숨 "lorem + tab" : english Lorem ipsum 나옴 <br>

> [한글입숨 사이트 http://hangul.thefron.me/](http://hangul.thefron.me/)

```
<!-- .page-main|c 라고 쓰면 자동생성 -->
<div class="page-main"></div>
<!-- /.page-main -->
```

```
cc:ie 단축키 : <!--[if IE]><![endif]-->
cc:noie 단축키 : <!--[if !IE]><!--><!--<![endif]-->
```

###### ※ 오늘의 필요 사이트
> 마크업 유효성 검사 <http://validator.w3.org/>

> 크롬 웹 스토어 <https://chrome.google.com/webstore/search/web%20developer> 에서 web developer 설치 <br>크롬 설정 > 확장프로그램 > web developer에서 파일 url에 대한 엑세스 허용 체크! 

> MIME에 대하여 <https://ko.wikipedia.org/wiki/MIME> 

> 서버리스 시대가 온다. 포스팅 <http://www.zdnet.co.kr/column/column_view.asp?artice_id=20160614172904>

> 무료 이미지 사이트 <https://resourcecards.com/> Unsplash : 고용량, 고화질 이미지 제공 
 - 이미지 저장시 jpg, metadata:none으로(사진정보), 아주 소중?한 사진 : embed color prifile체크하고 convert to sRGB체크 끄기. 
 - ie9~, 다른 브라우저 : adobeRGB지원. 기본은 sRGB(색 표현력이 떨어진다.)

###### ※ 오늘의 다른 필요 기능 
> 크롬 개발자도구 Network의 Preserve log를 체크하면 페이지 링크를 클릭할때마다 기록이 남게 된다. 

> 크롬 개발자도구 Network의 Disable cache를 체크하면 캐쉬를 꺼놓겠다. (나중에 제대로 표시안되는 경우가 생기면 체크해보자. 크롬 개발자도구가 켜있을 때만 실행된다.)

> 맥의 경우 포토샵보다 스케치 프로그램이 좋다. 

###### ※ 수업 후 질문 
> `<meta http-equiv="X-UA-Compatible" content="IE=edge">` 에서 X라는 것은 비표준을 뜻한다. 
