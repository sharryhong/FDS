###### Front-End Develop SCHOOL

# DAY 15

#### 보충!

- a:hover::after (0)
- a::after:hover (x)

### Grid System 

- class를 잘 써서 모듈화 해서 설계하자. -> 유지보수 차원에서도 좋고~

- push, pull Module

> position: relative을 이용하여 left, right해줌 <br>
> 

- prefix, suffix Module 

> margin(배경안먹음) or padding(배경먹음)을 이용 <br>
> 다른 요소들과 함께 이동

#### 포토샵에서 toggle grid layer 스크립트로 단축키 제어 (이건 야무쌤 제공)

1. C:\Program Files\Adobe\Adobe Photoshop CC 2015.5\Presets\Scripts 에 스크립트 파일 넣기 
2. 포토샵에서 edit > keyboardshortcut에서 단축키 등록 : file > script에서 선택 <br> 내꺼 ctrl+shift+alt + G 

-

### CSS3 하이퍼링크(`<a href>`) 이펙트 스타일링

> CSS3-links-effects.html, ../resources/link-effets.css 파일 참고

1. 기본 스타일

 ```
 /*a의 기본 밑줄선이 딱 달라붙어서 조금 떨어지게 함*/
 a {
	text-decoration: none;
	padding-bottom: 2px; /*하위브라우저*/
	padding-bottom: 0.125rem;
	border-bottom: 1px solid; /*하위브라우저*/
	border-bottom-width: 0.0625rem solid; 
}
 ```

1. 배경 색상 페이드(Fade In/Out)
  - `.fade-bg` 

  ```
.fade-bg {
	display: inline-block;
	vertical-align: bottom;
	padding: 0.25rem 0.375rem;
	transition: all 0.25s;
}

.fade-bg:hover,
.fade-bg:focus {
	background: #65b1e3;
	color: #fff;
}
  ```

1. 전 방위 슬라이드(← → ↑ ↓)
  - `.slide-from-left`
  - `.slide-from-right`
  - `.slide-from-top`
  - `.slide-from-bottom`

  ```
  a[class*="slide-"] {
	position: relative;
	overflow: hidden;
	display: inline-block;
	padding-bottom: 0;
	vertical-align: bottom;
	padding: 0.06em 0.12em;
}

a[class*="slide-"]::after {
	position: absolute;
	width: 100%;
	padding: 0.06em 0.12em;
	content: attr(data-linktext);
	background: #33a1e3;
	color: #fff;
	transition: all 0.5s;
}

a.slide-from-left::after { left: -100%; }
a.slide-from-left:hover::after,
a.slide-from-left:focus::after { left: 0; }

a.slide-from-right::after { right: -100px; }
a.slide-from-right:hover::after,
a.slide-from-right:focus::after { right: 0; }

a.slide-from-top::after { top: -30px; left: 0; }
a.slide-from-top:hover::after,
a.slide-from-top:focus::after { top: 0px; }

a.slide-from-bottom::after { bottom: -30px; left: 0; }
a.slide-from-bottom:hover::after,
a.slide-from-bottom:focus::after { bottom: 0px; }
   ```

1. 언더라인 페이드
  - `.fade-underline`

  ```
.fade-underline {
border-bottom: 2px solid transparent;
transition: color 0.25s ease, border-bottom-color 0.25s linear 0.3s;
/*0.2s 빠르네, 0.4s , 0.6s 보통, 1s 느리네..
linear : 선형(등속.가속없음)
0.3s : 지연*/
}

.fade-underline:hover,
.fade-underline:focus {
	color: #c90039;
	border-bottom-color: currentColor;
}
/*transition을 주려면 border: none을 주면 안된다. border는 있는 상태에서! */
  ```

1. 언더라인 슬라이드(← → ↔)
  - `.underline-from-left`
  - `.underline-from-right`
  - `.underline-from-center`

  ```
a[class*="underline-"] {
	position: relative;
	/*background-image: linear-gradient(to bottom);*/
	/*deg대신 to bottom, to right.. 이렇게 써도 된다. */
	border-bottom: none;
}

a[class*="underline-"]::before {
	content: '';
	position: absolute;
	top: 100%;
	border-bottom: 2px solid currentColor;
	transition: all 0.25s;
}

a.underline-from-left::before {
	left: 0;
	right: 100%;
}

a.underline-from-left:hover::before,
a.underline-from-left:focus::before {
	left: 0;
	right: 0%;
	/*left: 0; right: 0%; = width: 100% */
}

a.underline-from-right::before {
	left: 100%;
	right: 0;
}

a.underline-from-right:hover::before,
a.underline-from-right:focus::before {
	left: 0;
	right: 0;
	/*left: 0; right: 0%; = width: 100% */
}

a.underline-from-center::before {
	left: 50%;
	right: 50%;
}

a.underline-from-center:hover::before,
a.underline-from-center:focus::before {
	left: 0;
	right: 0;
	/*left: 0; right: 0%; = width: 100% */
}
  ```


#### transition과 animation

- transition: property(ex. color, background, font-size..., all) duration(ex. 100ms, 0.2s) timing-function delay;

- timing-function (크롬 개발자도구에서 지원) <http://easings.net/>
 - easein : easy붙은 것이 느린 것. 느리다가 점점 빨라짐 
 - easeout : 빠르다가 점점 느려짐 
 - easein-out-back.. 등등 

- delay : 일정시간동안 지연되었다가 실행됨 

```
장면전환 A장면 -> B장면, B -> A 
animation과 다르다. 별도의 사용자 인터렉션 없이 처음부터 움직임을 제어하려면 animation
keyframe 기반으로 애니메이션 제어하려면 animation
```

```
transition: color 0.25s ease, border-bottom-color 0.25s linear 0.3s;
	/*0.2s 빠르네, 0.4s , 0.6s 보통, 1s 느리네..
	linear : 선형(등속.가속없음)
	0.3s : 지연*/
```

#### currentColor

> IE9이상. color값 적용됨. inherit의 경우는 부모의 값 상속 됨 <br>
> 배경 등 모든 색상에 적용됨 

```
color: #c90039;
border-bottom-color: currentColor;
```