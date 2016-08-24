###### Front-End Develop SCHOOL

# DAY 38

- 체이닝

```
'text'.toUpperCase()
-> "TEXT"
'text'.toUpperCase().split('')
-> ["T", "E", "X", "T"]
```

```
  $('.page-gnb').eq(0)
  .on('mouseenter', function(){
    var $this = $(this);
    if($this.hasClass('secondary')){
      $this.css('font-size','+=10');
    }
    $this.addClass('primary');
  })
  .on('mouseleave', function(){
    var $this = $(this);
    $this.removeClass('primary');
    $this.addClass('secondary');
  });
```

##### jQuery 변수 
- `var $container = $('.container'); 처럼 제이쿼리 객체 담은 변수임을 명시적으로 표시. 해도 되고 안해도 되지만.. 

- `var con_count = $('.container.length'); 처럼 반환값이 제이쿼리 객체가 아닌 숫자인 경우 $를 안쓴다. 

##### 감지 라이브러리

###### 모더나이저 <https://modernizr.com/> : 해당 기능이 지원되는지(웹사이트에서 기능체크 후 다운로드) 감지해주는 라이브러리. 윈도우, 크롬, 버전 등 모두 감지해줌. 
 - 체크하고 build누른다. 
 - 꼭 header에서 불러온다. 
 - `<html lang="ko-KR" class="no-js">` 처럼 class="no-js" 꼭 쓴다.
 - 다 받으려면 CDN으로 
 - 우아한 기능 저하 (새로운 기능 쓰고, 안되는 브라우저에서 다른 스타일 제공)
 - 크로스 브라우징을 목적으로 사용자 환경을 감지한 후 대체 방식 제공

 ```
/*css 포지션 스티키를 지원하는 브라우저(파이어폭스, 사파리)*/
.csspositionsticky body{
	background: blue;
}
/*css 포지션 스티키를 지원하지 않는 브라우저*/
.no-csspositionsticky body{
	background: red;
}
 ```

 ```
Modernizr

if(!Modernizr.cssanimations){
  // 자바스크립트 애니메이션 대체
  // setInterval, setTimeout보다는 requestAnimationFrame을 사용하는 것이 좋다. 
}
 ```

###### 디텍타이저 Detectize <http://baris.aydinoglu.info/Detectizr/>
 - device, device model, screen size, operating system, operating system version, browser, browser version, browser engine, browser plugins 감지
 - 꼭 모더나이저가 있어야 한다. 

#### jQuery 

- 공부 링크 <https://learn.jquery.com/using-jquery-core/>, <http://api.jquery.com/category/core/>

- 다른 라이브러리와 충돌나지 않게 하기

- $는 jQuery함수이다. // typeof jQuery => function 
- $() 함수 실행 결과는 객체가 반환된다. // typeof jQuery() => Object
 - r.fn.init{} 
 - r은 
 - fn은 프로토타입 jQuery.fn === jQuery.prototype // true
 - init 매서드 

- jQuery.prototype.jquery -> 버전 출력

- $('button').outerWidth() -> width값 가져옴

- 돔 선택, 조작만 하겠다 : Sizzle 시즐엔진만 써도 된다. query()가 나오기 전. 
- jquery에서 안쓸 것들 빼서 용량을 줄일 수 있다. <http://projects.jga.me/jquery-builder/>

- css타입(type) 선택자 
 - `$('div').addClass('name');`
 - $('html a:not(:first-child') // a 요소중에 첫번째 자식이 아닌 것

##### jQuery Filter 필터. 중요! (씨즐엔진에 있음)

- <http://codylindley.com/jqueryselectors/> 테스트

- css 선택자가 아닌 것 중 선택할 수 있게 한다.
- 내가 수집해온 것 중에 고르기
- $('a').toggleClass('selected'); // 토글클래스 : addClass, removeClass 반복
- $('a:last').toggleClass('selected'); // 토글클래스로 찾은 것 순서 중(수집한 것 중) 마지막 꺼 
- $('a').eq(0) = $('a:first')
- $('a[href!="#"]).toggleClass('selected'); // 값이 아닌것
- $('a:nth-child(odd)') // css 홀수 (css는 1부터 시작하므로)  
- $('a:odd') // javascript 짝수 (javascript는 0부터 시작)
- $('a').eq(0), $('a:eq(0)') : 같은 결과? 앞에꺼로 쓰자. 
- $('a:lt(5)') : eq(0) ~ (4) 까지 수집
- $('a:gt(5)') : eq(5) ~ 부터 수집
- $('article :header') : header만 수집 (h1~h6)
- $('a:contains("repellat")') : 안의 내용을 가지고 있는 것 찾기

```
$('a:contains("repellat")')
결과 : [<a href>​repellat​</a>​]
```

- has
- $('nav:parent') : 자식을 갖고 있는 부모로서의 nav 찾기 
- $('a:empty') : 비어있다.
- $('span:hidden') : display:none, hidden, height: 0, width: 0 등
- $(':animated').addClass... : 애니메이션 중일 때
- $('#forms :text').addClass... : input type중 text만 

- $('div:flex') 는 아직 없다. 하지만 javascript의 프로토타입을 이해하면 만들 수 있다. 껄껄 

##### jQuery 스타일링. 중요!!!

- $('a').css('color'); // key만 가져오면 값 가져옴 (get 함수)
- $('a').css('color','#333'); // 값 설정 (set 함수)
 - inline 스타일. 간단하게 주는 건 상관없지만.. 
 - addClass등으로 스타일 주는 것이 좋다. 
- map (css 객체)

```
$('button').css({
	'background': '#ff3345',
	'color': '#333',
	'letter-spacing': '0.4em'
});
```

- 그 외 jQuery.fn.css() 사용법 (제이쿼리 프로토타입 css)
 - [CALLBACK] $().css(key, function(index, value){ return }) // index를 안써도 value쓰기 위해서 써야 한다. 
 - [CALLBACK] $().css(key, function(){ }) // argument[1] 은 value 
 - 이 방법은 주로 플러그인 개발할 때 사용

- .addClass : class 추가
- .remeveClass : class 제거
- .toggleClass : class가 있다면 제거, 없으면 추가
- .hasClass : class가 있다면

```
// 자주쓰는 jQuery 코드 
// $('.page-header') : 선택 
// .on('click', function(){}); : 이벤트시
// var $this = $(this); 선택한 돔 객체 
$('.page-header').on('click', function() {
var $this = $(this);
// $this.addClass('primary');
$this.toggleClass('primary');
});
```

-

##### 참고 

- aria <https://www.w3.org/TR/wai-aria-practices>
- jQuery공부 <http://try.jquery.com/>