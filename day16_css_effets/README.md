###### Front-End Develop SCHOOL

# DAY 16

### CSS3 버튼 이펙트

1. 기본 스타일

 ```
.button {
  border: none;
  border-bottom: 2px solid #939393;
  background: #ececec;
  color: #222;
  font-size: 1rem;
  padding: 0.65em 0.85em;
  cursor: pointer;
}

/*그림자로 입체 버튼 만들기*/
.button.button-3d {
  border-bottom: none;
  box-shadow: 
    1px 1px 1px #939393,
    2px 2px 1px #939393,
    3px 3px 1px #939393,
    4px 4px 1px #939393,
    5px 5px 1px #939393;
}

/*button round Module*/
.button-round { border-radius: 3px; }
.button-rounder { border-radius: 6px; }
.button-roundest { border-radius: 12px; }

.button-round[class*="grow-"]::before { border-radius: 3px; }
.button-rounder[class*="grow-"]::before { border-radius: 6px; }
.button-roundest[class*="grow-"]::before { border-radius: 12px; }
 ```

1. 슬라이드(← → ↑ ↓) 이펙트
  - `.slide-from-left`
  - `.slide-from-right`
  - `.slide-from-top`
  - `.slide-from-bottom`

  ```
/*button slide-from- Module*/
button[class*="slide-"],
button[class*="grow-"] {
  z-index: 1; /*text는 요소가 아니기 때문에 z-index가 먹지 않는다.*/
  position: relative;
  border: 5px solid #4a43af;
  background: #4a43af;
  color: #fff;
  overflow: hidden;
}

button[class*="slide-"]::after {
  z-index: -1; /*button의 text를 보이게 하기 위함*/
  position: absolute;
  content: '';
  background: #ba2686;
  transition: all 0.6s;
}

button[class*="slide-"]:hover::after,
button[class*="slide-"]:focus::after {  
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /*top: 0; left: 0; right: 0; bottom: 0; 이면 width, height 꽉차요~*/
}

button.slide-from-left::after {
  top: 0;
  left: -100%;
  right: 100%;
  bottom: 0;
}

button.slide-from-right::after {
  top: 0;
  left: 100%;
  right: 0;
  bottom: 0;
}

button.slide-from-top::after {
  top: -100%;
  left: 0;
  right: 0;
  bottom: 100%;
}

button.slide-from-bottom::after {
  top: 100%;
  left: 0;
  right: 0;
  bottom: -100%;
}
```

1. 그로우(Grow) 이펙트
  - `.grow-box`
  - `.grow-ellipsis`
  - `.grow-circle`
  - `.grow-skew-45deg`
  - `.grow-skew--45deg`
  - `.grow-spin-cw`
  - `.grow-spin-ccw`

  ```
/* button.grow-* */
button[class*="grow-"] {
  overflow: hidden;
  position: relative;
  z-index: 1;
  border: 4px solid #46d1aa;
  padding: 0.725em 0.9em;
  background: #46d1aa;
  color: #0d392d;
}

button[class*="grow-"]::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #4ff5c0;
  transition: all 0.3s;
}

button.button-round[class*="grow-"]::before {
  border-radius: 1.5px;
}

button.button-rounder[class*="grow-"]::before {
  border-radius: 3px;
}

button.button-roundest[class*="grow-"]::before {
  border-radius: 6px;
}

button.grow-rectangle::before {
  transform: scale(0);
}

button.grow-rectangle:hover::before,
button.grow-rectangle:focus::before {
  transform: scale(1);
  transform-origin: 
}

button.grow-ellipse::before {
  border-radius: 50%;
  transform: scale(0);
}

button.grow-ellipse:hover::before,
button.grow-ellipse:focus::before {
  transform: scale(1.6);
}

button.grow-circle::before {
  border-radius: 50%;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: -50px 0 0 -50px;
  transform: scale(0);
}

button.grow-circle:hover::before,
button.grow-circle:focus::before {
  transform: scale(1.6);
}

button.grow-skew::before {
  left: 50%;
  right: 50%;
  transform: skewX(45deg);
}
button.grow-skew:hover::before,
button.grow-skew:focus::before {
  left: -20%;
  right: -20%;
}

button.grow-skew-45::before {
  left: 20%;
  right: 80%;
  transform: skewX(-45deg);
}
button.grow-skew-45:hover::before,
button.grow-skew-45:focus::before {
  left: -20%;
  right: -20%;
}

button.grow-spin::before {
  transform: rotate(-180deg) scale(0);
}
button.grow-spin:hover::before,
button.grow-spin:focus::before {
  transform: rotate(0deg) scale(1);
}

button.grow-spin-ccw::before {
  transform: rotate(180deg) scale(0);
}
button.grow-spin-ccw:hover::before,
button.grow-spin-ccw:focus::before {
  transform: rotate(0deg) scale(1);
}
```

- 포토샵(transform)과 똑같은 구조이므로 참고! 
- 기준점 바꾸기 : transform-origin: center center; 기본값 

> ##### cw? ccw?
> __cw__ - clockwise(시계방향)
> __ccw__ - counter-clockwise(반시계방향)

#### animation 사용법 : 다음시간 

```
@keyframes 애니메이션이름 {
	from { /*css속성*/ }
	to { /*css속성*/ }
}

@keyframes 애니메이션이름 {
	0% { /*css속성*/ }
	10% { /*css속성*/ }
	...
	100% { /*css속성*/ }
}
```

```
@keyframes holdOn {
  0% {
    transform: translateX(-130px) rotate(20deg);
  }
  50% {
    transform: translateX(-130px) rotate(80deg);
  }
  100% {
    transform: translateX(-130px) rotate(20deg);
  }
}

.snoopy {
  position: relative;
  left: 50%;
  margin-left: -203px;
  z-index: 1000;
  transform-origin: center 80%;
  transform: scale(0.5);
  animation: holdOn 4s infinite cubic-bezier(0.68, 0.18, 0.13, 0.73);
}
```

- 애니메이션 자신없을 때 여기 참고 -> <https://daneden.github.io/animate.css/> -> 내가 만들어도 된다.

#### fluid(flexable)

- background-clip: content-box; 배경색 기본위치를 content영역으로 잡기 
- background-origin: 배경이미지 기본위치는 border부터인데 padding, content등으로 바꿔줄 수 있다. 

-

### 그 외

- sublime text 에서 'autoprefixer' 설치 : 웹표준과 아닌 것들 자동 붙여줌 / codepen사이트에서도 설정하면 사용가능
