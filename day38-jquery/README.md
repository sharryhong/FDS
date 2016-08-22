###### Front-End Develop SCHOOL

# DAY 38

- 체이닝

```
'text'.toUpperCase()
-> "TEXT"
'text'.toUpperCase().split('')
-> ["T", "E", "X", "T"]
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
 - fn은 프로토타입
 - init 매서드 

- jQuery.prototype.jQuery -> 버전 출력 


##### 참고 

- aria <https://www.w3.org/TR/wai-aria-practices>