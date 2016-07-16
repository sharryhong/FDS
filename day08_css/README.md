###### Front-End Develop SCHOOL

# DAY 08

### 진행 내용

- CSS 박스모델
- CSS 상속
- CSS 타이포그래피 속성
- CSS 배경 속성
- CSS 레이아웃 속성

### CSS 박스모델

> content -> padding -> border -> margin : 주변에 영향을 준다. <br>
> outline : 주변에 영향을 주지 않는다. 주로 시각적으로 변화상태를 알려줄 때 사용한다. focus, mouseover등 

- content : 내용. 
- padding : 내부여백. 색이 먹는다. 양수값만 가진다. 
- border : top, bottom, left, right 색상 다르게 적용가능하며, 대각선영역으로 적용되어 삼각형 등을 그릴 수 있다. 
- margin : 외부여백. 1) 투명, 색이 안먹는다. 눈에 보이지 않는다. 2) 다른것은 양수만 가질 수 있으나 마진만 음수값 가질 수 있다. 
 
 > margin-bottom과 아래 요소 margin-top은 큰 값으로 margin이 margin collapsing되나, margin-left, right은 collapsing되지 않는다. 


#### em과 rem 

- em은 해당요소의 font-size상속받아 원하는 결과가 안나올 수도 있다. 
- rem은 브라우저 font-size를 상속받는다. 

> rem(root em)단위는 IE9부터 가능. IE9부터 고려한다면 필수!<br>
> root = html 의 폰트사이즈 바꿔주면 자동으로 변경된다. <br>
> 유지보수, 설계상 아주 좋다. px은 아주 안좋음. 


#### 미디어쿼리 

> @media 조건1 and 조건2 <br>
> 모바일 first로 하는 것이 좋다. 모바일 시장성이 크므로<br>
> 그리고 필요한 내용만 넣고(모바일) 더하는 것(큰화면)이 더 편하다.

```
/*미디어*/
@media screen {
	/*모든 스크린에서 됨*/
	/*ie8이하에서도 되는데 미디어쿼리가 안먹을 경우 의도한 바가 다를수 있어서 
	아래처럼 only로 쓰는 경우가 많다.*/
}
@media only screen {
	/*ie8이하는 안됨*/
}

/*미디어쿼리*/
/*아래 px단위보다는 em단위로 쓰는 것이 좋다.*/
/*기준값이 항상 16px이다. 600/16으로 하면됨*/
@media only screen and (max-width: 600px) {
	body::before {
		content: "스크린 폭이 600px보다 작다."
	}
	body { background: #000; }
}
@media only screen and (min-width: 601px) and (max-width: 1000px) {
	body::before {
		content: "스크린 폭이 601px ~ 1000px."
	}
	body { background: #999; }
}
@media only screen and (min-width: 1001px) {
	body::before {
		content: "스크린 폭이 1001px보다 크다."
	}
	body { background: #ffe; }
}
```

### Fonts, Text property 

- 포토샵에서 Charactor : Fonts (글자 하나하나) / paragraph : Text (글 덩어리) 에 해당한다. 
- 서체 색상 : 선택자{ color: value; } 

 > value : keyword(blue, red...), hex-code(#ff33ea), RGB(rgb(255,0,0)), 알파조정(rgba(200,0,0,0.5)) <br>
 > 컬러 시스템 : RGB 가산혼합 

- 서채 : 선택자{ font-family: value; }

 > `.nanum {font-family: "Nanum Gothic", 나눔고딕, 돋움, Dotum, Sans-Serif;}` <br>
 > 맨 앞 폰트부터 적용. 없으면 다음 폰트 적용. 시스템폰트 사용시 깜박임 현상 나타날 수 있다 -> 자바스크립트에서 한번만 깜박이게(한번만 다운받게) 할 수 있다.(나중에 배움) <br>
 > 확인 : 크롬 개발자도구 > computed > filter : font-family > Rendered Fonts 에서 어느 폰트를 사용하는지 나온다.<br>

 > 웹폰트. 한중일폰트를 위해 애플, 구글이 노력 중 : notoSans(본고딕) <br>
 > 본고딕과 자주 사용하는 폰트 혼용해서 만든 스포카 한 산스 : <http://spoqa.github.io/spoqa-han-sans/> <br>
 > <http://spoqa.github.io/> 읽어보자.


#### CSS 그 외

- `width: value;` , `height: value;`

> width를 주면 box size가 content에만(구형브라우저에서는 다를수있다.) <br>
> 나중에는 box size를 border까지 주고 작업하면 편하다 <br>
> width: inherit, auto보다는 100%를 많이 쓴다. 기본은 auto

- inherit언제쓰나?

> 대체로 font-size는 body꺼 상속받으나, input요소는 상속안받음. 이럴때 쓰면 적용됨 

- `max-width`, `min-width` : 중요~! 반응형 웹 등 

- `margin: 0 auto;`에 대한 고찰

```
.page {
	background: yellow;
	/*width: 50%;*/
	/*width: 50vw;*/
	/*vw : viewport width
	width: 50%;와 동일*/
	width: 70%;
	height: 100vh;
	/*vh : viewport height 브라우저 보이는 높이*/
	margin-left: auto;
	margin-right: auto;
	/*자동으로 여백의 반씩 이동해줘서 중앙으로 이동*/
}
```

- vw, vh

> 1vw = 1% of viewport width <br>
> 1vh = 1% of viewport height<br>
> 1vmin = 1vw or 1vh, whichever is smaller<br>
> 1vmax = 1vw or 1vh, whichever is larger<br>
> <https://css-tricks.com/viewport-sized-typography/> 읽어보자.

- 세로 가운데 정렬 

> line-height 을 height만큼 주면 된다. line-height은 font-size를 제외한 나머지 공간에서 위 아래로 양분하여 가운데 정렬하게 한다. 한줄일때만 잘되고, 여러줄이면 사용못함<br>
> 하지만 flex box를 배우면 쉽게 가운데 정렬된다. 가장 좋은 문제 해결방법. but 언제나 그렇듯 하위브라우저에서 안됨<br>
> `img`를 블록이 감싼경우 알수없는 공간이 생긴다. 이럴 때는 img에 vertical-align을 줘야한다. <br>
> `display: table-cell;` : vertical-align: middle; 잘 적용되나, block이 옆으로 붙는다.

- `vertical-align` : display:inline, display:table-cell에만 적용됨
여기서 display: inline;으로 하면 width, height등 적용 안됨 

- `margin` 속기 

> margin: top right bottom left;<br>
> margin: top right bottom; 생략부분은 right과 같은 값 <br>
> margin: top right;<br>
> margin: top;

- 부모, 자식 요소 간 margin등의 관계

> 핵심 1. Q_ 부모에 padding나 border가 없을 때, 자식이 margin-top이 있다면?<br>
> A_ 자식의 margin-top이 부모의 바깥으로 나간다. <br>
> 핵심 2. Q_ 부모에 padding나 border가 있을 때, 자식이 margin-top이 있다면?<br>
> A_ 자식의 margin-top은 부모 내부에서 적용된다. 

- `border`

> border-top-style: solid dashed dotted ... 모양;<br>
> border-top-width: 두께; <br>
> border-top-color: 색상;<br>

 > 자주쓰는 속기형 작성법 패턴 1.<br>
 > border-top: 5px solid #333;<br>
 > border-right: red 10px inset;<br>

 > border 속기형 작성법 패턴 2. <br>
 > border: 2px dashed red;

```
/*
1. border 속경으로 쓰고
2. border세부적으로 디자인해주면 다양한 디자인 적용가능 */

border: 10px solid;
/*border color 지정 안하면 color값 상속받음*/
border-bottom-width: 20px;
border-bottom-color: transparent;
/*투명하거나 다른 색상으로 지정해주면 삼각형처럼 된다.*/
border-right-color: orange;
```

-

#### sublime text

- REM PX 설치. 단축키 ctrl + shift + r (px to rem), ctrl + shift + x (rem to px)
- hex to hsl color converter 설치 : #ffffff -> HSL로 변경 

#### 그 외 

- <http://caniuse.com/>에서 일부 브라우저에서 지원안할 경우?

> 하단 Resources 에서 Polyfill 에서 자바스크립트로 제어할 수 있는 코드들이 있다.

- <https://css-tricks.com> : 새로운 기술 항상 써봄 

- Sass 테스트 사이트 <http://www.sassmeister.com/>

-

### 수행 과제

- [06/30] CSS Selector 분류 표 작성(Markdown 사용)해서 GitHub 저장소에 등록. ※ W3C, Selectors Level 3 참고. <https://www.w3.org/TR/css3-selectors/>
- [06/30] 팀 엑티비티 코드 리뷰 로그(Code Review Log), 리팩토링 결과 정리하여 GitHub 저장소에 등록.
- [06/30] 배운 내용을 토대로 시험 문제 20문항 출제. (주관식 최대 5개)
- [06/30] PSD, Sketch 를 사용하여 웹 서비스 와이어프레임 제작.