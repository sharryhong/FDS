###### Front-End Develop SCHOOL

# DAY 12

#### 타이포그래피 다시 공부! 바로 여기! <https://github.com/yamoo9/FDS/blob/master/DAY12/README.md>

- 타입 스케일 배율(Type Scale Ratio) : 쌤은 `1.250 — Major Third` 많이 쓰나, 각자 방식을 다르게 적용해 보자. 

- 베이스 라인(Baseline) : 행(row)사이 간격. 

- 버터컬 리듬(Vertical Rhythm)

 - 아래는 em단위 쓸 때 -> sass로 함수화 시키면 된다. or rem쓰면 간편 

 - 행간 설정 공식(line-height)

 > step 1) 행 개수(글자 몇 칸 쓰냐) = ceil( 글자 크기 비율(font-size) ÷ 기본 행간 비율(base-line-height) ) ※ ceil()은 올림 함수 <br>
 > step 2) 행간 비율(line-height) = 행의 개수 × ( 기본 행간 비율(base-line-height) ÷ 글자 크기 비율(font-size) )

 - 마진 설정 공식(margin-bottom) 

 > 기본 행간 비율(1.5) ÷ 글자 크기 비율(1.24)

-

#### position 정리

- static (Default)

- relative (self) : 일반 흐름을(normal flow) 깨지않는다. 

- absolute (offsetparent:자식요소 포함하는 가장 가까운 부모요소 중에 포지션속성이 static이 아닌 부모요소)

 > display: block으로 변경된다. <br>
 > 일반흐름에서 벗어난다. (float와 유사해보임)<br>
 > absolute 적용된 요소의 부모에 relative를 설정하는 이유 : relative는 일반흐름을 깨지않아서<br>
 > float와의 차이점 : float의 경우는 부모요소가 float된 요소를 감싸게 하는 방법이 있지만 absolute는 별도로 height를 제공해야 한다.

- fixed (위치설정 기준 : 브라우저 screen)

 > display: block으로 변경된다. <br>
 > 고정 형태로 위치가 설정됨. 화면 스크롤과 상관없이 항상 그 자리 유지

- z-index 속성의 경우는 반드시 position속성(static제외)과 함께 사용된다. 

 > z-index 속성 값은 양의 정수, 0, 음의 정수 사용가능. 단 설정시 10또는 100단위로 설정하는 것이 유지보수 관점에서 권장된다. 


#### radial-gradient

```
radial-gradient([<shape> at <position>], <color-stop> [<location>], <color-stop>);

------------------------------------------------------------------------
  <shape>
  그라데이션 모양
  circle (정원) 또는 ellipse (타원) 중 하나.
  기본값 ellipse
  ------------------------------------------------------------------------
  <position>
  그라데이션이 그려지는 시작 위치.
  기본값 center
  ------------------------------------------------------------------------
  <extent-keyword>
  그라데이션이 그려지는 모양을 설정하는 형상 키워드.
    closest-side
    그라데이션 모양은 중심에서 가장 가까운 그라데이션 박스 모서리에 (circle의 경우) 또는
    중심에서 가장 가까운 수직과 수평의 가장자리에 (ellipse의 경우) 내접합니다.
    closest-corner
    그라데이션 모양은 중심에서 가장 가까운 그래디언트 상자의 정점에 접하고 있습니다.
    farthest-side
    형상이 그 중심에서 가장 먼 쪽 (또는 세로와 가로의 가장자리)에 접하는 것을 제외하고
    closest-side와 같습니다.
    farthest-corner
    그라데이션 모양은 중심에서 가장 먼 그래디언트 상자의 정점에 접하고 있습니다.
  
```

#### transform

- 속도가 월등히 좋으므로 모바일작업시 꼭 이렇게 하자. 
- top, left등으로 주면 속도도 느리고, 부모의 값만큼 옮겨가지만, `transform: translate(-50%, -50%);`의 경우 

#### 멀티 background : css3 기능

- background: 맨 위 배경, 그 다음 배경, 그 다음 배경... 쌓이게 됨

```
background: 
		linear-gradient(45deg, transparent 50%, hsla(0,50%,0%,0.3) 51%, transparent 52%),
		linear-gradient(-45deg, transparent 50%, hsla(0,50%,0%,0.3) 51%, transparent 52%),
		radial-gradient(circle at center 20%, transparent, black),
		url("../img/halfton.png"), 
		url("../img/rain-city.jpg") center no-repeat;
background-size: 
	30px 30px,
	30px 30px,
	100%,
	40px auto, 
	cover;
```

-

#### 크롬의 workspace

1. 크롬 개발자도구의 Sources에서 마우스 오른쪽.. 선택 
2. 바로 수정하고자하는 폴더 선택 후 마우스 오른쪽, add folder to workspace
3. 개발자도구에서 작업하면 바로 반영된다. css의 경우 +버튼 꾹 누르면 고를 수 있다.

#### font awesome

- aria-hidden="true" 를 쓰는 이유 : 안쓰면 특수문자를 인식하므로 읽지말라는 의미\


#### 그 외 

 - <http://www.gridlover.net/try> : 타이포그래피 자동 계산해주는 사이트 
 - <https://www.supremo.tv/typeterms/> : baseline등 영문의 타이포 구성을 쉽게 알 수 있는 사이트 
 - <http://type.method.ac/> : 커닝에 대해 알아볼 수 있는 사이트 