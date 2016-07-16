###### Front-End Develop SCHOOL

# DAY 04

### 진행 내용

- [디자이너 관점에서 살펴 본 웹 디자인의 역사](a-brief-history-of-web-design-for-designer.md)
- [웹 환경에 대하여](about-web-environment.md)
- [도전 워드프레스 블로그 만들기 (만화)](http://www.digitallife-lab.com/#!webtoon-wordpress/mkorq)
- HTML 폼 디자인
- HTML 스크립트, 오브젝트
- HTML 기타
- HTML5 표준
- PSD 디자인 시안에서 구조 뽑아내기

### HTML 폼

`<form action="#" method="GET" name="register_form">`

#### 전송 방식 `GET` vs `POST`

조건 | GET | POST
---|---|---
보안 | POST에 비해 덜 보안적 | GET에 비해 보안적
데이터 제한 | 제한적, url 허용 길이만큼 | 제한 없음
데이터 타입 제한 | 오직 아스키 문자만 해당 | 제한 없음, 바이너리 역시 사용가능
뒤로가기, 재전송 | 사용자가 입력한 내용 다시 작성 | 사용자에게 지워짐을 경고 함
인코딩 | `application-x-www-form-urlencoded` | `multipart/form-data`, `application-x-www-form-urlencoded`

- `<label>`요소는 form요소에만 연결 

#### input type="submit" 과 button type="submit"

```
<input type="submit" value="전송"> 
<!-- 차이 : 뒤에 컨텐츠가 없다. Role : textbox. -->
<!-- value="표시". button 컨텐츠처럼 표시됨 -->

<button type="submit">button submit</button> 
<!-- 차이 : button은 스크린리더기에서 버튼이라고 읽어준다. Role : botton -->
<!-- button type = submit, reset, button -->
<!-- input, button 둘다 의미 submit이 된다. -->
<!-- 많은 사람들이 a요소로 버튼을 만들지만, 접근성엔 좋지 않다. a요소는 role이 link이다.  -->
```

#### input type = text / submit / button / radio / checkbox / hidden(숨겨진 데이터 정보) / image / file 등 

- 디폴트 : text

```
<label for="user_id">ID : </label>
<input type="text" id="user_id" name="id" placeholder="아이디입력">
```
> name값이 있어야 method="GET" 했을 때 값이 보인다. 
> placeholder="아이디입력" : 입력창에 가이드 제시

```
<label for="org">활성화 안되는 입력창</label>
<input type="text" id="org" disabled value="입력하지마">
```
> disabled : 입력 안되는 창 

- type = radio : 라디오 버튼 

```
<!-- label 명시적 방법 -->
<div>
	<input type="radio" name="ragister-gender" id="gender-male" value="1"><label for="gender-male">Male</label>
	<input type="radio" name="ragister-gender" id="gender-female" value="2"><label for="gender-female">Female</label>
	<!-- name이 같으면 같은 radio 그룹  -->
</div>

<!-- label 암묵적 방법. 아래와 같이 코드가 짧아지며 id를 안써도 된다. -->
<div>
	<label><input type="radio" name="ragister-gender2" value="1">Male</label>
	<label><input type="radio" name="ragister-gender2" value="2" checked="checked">Female</label>
</div>
```
> value : 전송되는 값 <br>
> checked="checked"(xhtml) 혹은 checked(html5에선 둘다 허용) : 체크되어 있게 세팅 

- type = checkbox : 체크박스 

```
<div>
	<h3>Hobby</h3>
	<ul>
		<li>
			<label><input type="checkbox" name="register-hobby" value="book">독서</input></label>
		</li>
		<li>
			<label><input type="checkbox" name="register-hobby" value="sleep" checked="checked">잠자기</input></label>
		</li>
		<li>
			<label><input type="checkbox" name="register-hobby" value="movie">영화감</input></label>
		</li>
	</ul>
</div>
```

- type = reset : 입력된 것들 초기화 

```
<input type="reset">
<button type="reset">초기화</button>
```

- type = file : 파일선택 (브라우저마다 역시나 디자인 다름)

```
<label for="register-upload">File</label>
<input type="file" id="register-upload" name="register-upload" multiple>
```
> multiple : 파일 여러개 선택 


- textarea

```
<textarea name="txt" id="txt" cols="30" rows="10"></textarea>
<!-- cols="30" rows="10" : css로 가로 넓이 제어하기 보다는 html에서 textarea에 써준다.  -->
<!-- css로 창 크기변경 하는 것을 제어할 수 있다.  -->
```

- select : 콤보박스 

```
<div>
	<h3>Your Job</h3>
	<select name="registar-job">
		<option value="">Select Your Job</option>
		<option value="developer" selected>developer</option>
		<option value="student">student</option>
		<option value="teacher">teacher</option>
	</select>
	<!-- selected : 처음에 선택되어짐 -->
	<!-- value="" : 값이 없음, 첫줄의 경우 가이드 역할 -->
</div>
```

```
<select name="registar-job">
	<option value="">Select Your Job</option>
	<optgroup label="school">
		<option value="student">student</option>
		<option value="teacher">teacher</option>
	</optgroup>
	<optgroup label="web">
		<option value="designer">designer</option>
		<option value="developer" selected>developer</option>
	</optgroup>
</select>
```
> optgroup : 묶어줄 수 있는데, 브라우저별 디자인 제어가 어려워 잘 쓰진 않는다. 

- fieldset : 특정 필드를 묶어 구조화 시킬 수 있다.

```
<fieldset>
	<legend>필수입력</legend>
	<div>
		<label for="user_id">ID : </label>
		<input type="text" id="user_id" name="id" placeholder="아이디입력">
	</div>
	<div>
		<label for="user_pw">PW :</label>
		<input type="password" id="user_pw" name="pw" placeholder="email@email.com">
	</div>
</fieldset>
```
> 디자인 적용 어려워! 잘 안쓴다. area를 써서 의미 부여해서 쓰도록 하자. 

### 그 외 

- `contenteditable="true"` :사용자가 수정할 수 있게 
> `<p contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, blanditiis!</p>`

- script : html문서 내부에 스크립트(javascript) 문서를 작성할 수 있다. 
> head, body 아무 곳에나 올 수 있지만, `</body>` 바로 위가 최상이다. 

 - 경우 1. head내에 작성 

```
<!-- html 문서 내부에 javascript를 바로 사용할 때  -->
<!-- 예전엔 <script type="text/javascript"></script> 라고 적었으나 지금은 type안써도 된다.  -->
<script>
	// 문서의 제목
	document.title='동적으로 런타임 중에 문서의 제목을 변경';

	// 사용자에게 정보 요구 (입력창)
	window.prompt('네 정체는?', '사람'); // 예시 '사람'

	// 사용자에게 정보 보여줌 
	window.alert('난 곰돌이');
</script>
```

 - 경우 2. body내에 작성 

```
 <body>
	<script>
		document.write('<h1>자바스크립트요~</h1>')
	</script>

</body>
```

 - 하지만 위처럼 html파일내에 바로 적지말고 자바스크립트는 js파일에 적도록 한다. 

 > 03-script.html 참조 <br>
 `<script src="js/in-head-js.js"></script>`

- noscript : 자바스크립트가 지원되지 않는 환경 (요새는 거의 대부분이 지원이 됨)

```
<!-- <head> 내에서 -->
<!-- 자바스크립트가 지원되지 않는 환경에서의 css를 따로 적어줄 수 있다.  -->
<noscript>
	<link rel="stylesheet" href="css/no-js.css">
</noscript>
```
	
```
<!-- <body> 내에서 -->
<noscript>
	<p>자바스크립트가 지원되지 않는 환경</p>
</noscript>
<!-- 스크립트가 지원되는 환경에서는 안보인다. -->
```

### 참고/기타

- [이메일 클라이언트 CSS 지원 가이드](http://cafe.naver.com/webstandardproject.cafe?iframe_url=/ArticleRead.nhn%3Fclubid=18695505%26page=1%26inCafeSearch=true%26searchBy=1%26query=%C0%CC%B8%DE%C0%CF%26includeAll=%26exclude=%26include=%26exact=%26searchdate=all%26media=0%26sortBy=date%26articleid=451%26referrerAllArticles=true)
- [처음 시작하는 이들을 위한 이메일 디자인 베스트 예제 & 리소스 20](http://cafe.naver.com/webstandardproject.cafe?iframe_url=/ArticleRead.nhn%3Fclubid=18695505%26page=1%26inCafeSearch=true%26searchBy=1%26query=%C0%CC%B8%DE%C0%CF%26includeAll=%26exclude=%26include=%26exact=%26searchdate=all%26media=0%26sortBy=date%26articleid=345%26referrerAllArticles=true)
- chrome://flags/ 에서 개발자도구실험 사용 클릭!-> 크롬 개발자도구 setting에서 Experiments 에서 첫번째 Accessibility Inspection 켜기 

### 스터디 5조 

- 폼요소를 여러개 사용시에 문제가 생기나요? submit에는 문제가 없나요? -> 팀장님 질문 및 검색결과 
> 관련 질문 링크 <http://okky.kr/article/267278> <br>
> 예상답변 : 폼요소를 여러개 사용해도 되지만 submit요소를 사용시 한페이지내의 내용이 다 제출됩니다. 따라서 다른 요소들로 사용합니다. -> 맞는지 쌤께 확인하기 

- 폼에 관한 포스팅 <http://noogi.byus.net/noogi/study/html/ch9.htm>