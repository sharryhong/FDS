###### Front-End Develop SCHOOL

# DAY 09

### 진행 내용

- CSS 타이포그래피 속성
- CSS 배경 속성
- CSS 레이아웃 속성
- CSS 리스트 속성
- CSS 테이블 속성

### CSS 타이포그래피 속성

- psd 웹디자인할 때 Resolution(해상도) 96PPI로 하는 이유? 

 > 웹브라우저는 화면을 표시할 때 96으로 처리된다. (1인치내에 96)

- px, pt단위(인쇄단위). 16pt * (96/72) = px. 따라서 pt단위는 쓰지 않도록 한다. 

- 명도대비 접근성 

 > Large text 기준 : 24px(18pt) 이상. 18px 인데 bold면 명도대비 3:1이상 

- notoSans / adobe에선 source sans.. 본고딕.. 모두 같은 폰트. 

- line-height : 1.2 (포토샵 120%)가 기본(normal)임 

 > 1.5 ~ 2.0 정도로 쓰면 보기가 좋다. 이 때, 1.5이면 정수값으로 떨어져서 1.5를 잘 쓴다. <br>
 > line-height: px;로 쓰면 글자 커지면 원하는바가 적용안되므로 비율로 쓰자. 

#### font

- font-style: italic(기울임. 한글은 주로 이거 씀), normal, oblique(로만체를 기울임), inherit
- font-weight
- font-variant: small-caps; (영어권. 대문자로 변형시키나 소문자는 소문자 크기임)
- text-transform: uppercase; (모두 대문자, 대문자 크기로 변형)
- text-transform: lowercase; (모두 소문자로)
- text-transform: capitalize; (단어의 첫 글자만 대문자로)

- font 속기형 작성법

 > font: size/line-height family;  (필수) <br>
 > font: style weight size/line-height family;  (선택. 앞에는 순서상관없고 style, weight, font-variant등이 올 수 있다.)

```
.font-short-properties {
	font: 1.2rem/2rem Helverica, Sans-Serif;
	font: italic 1.2rem/2rem Helverica, Sans-Serif;
} 
```

- letter-spacing : 자간. psd에서 VA:-20이면 `letter-spacing: -0.02em;` 으로하면 유사하게 처리된다. 
- word-spacing : 어간(단어간격). 
- white-space: nowrap(한줄로), pre(pre요소와 비슷. 잘안씀), pre-wrap, pre-line 
- vertical-align : display:inline, table-cell에만 적용됨
- text-align
- text-decoration
- text-indent : 들여쓰기. 

#### IR기법 

```
/*
IR 기법 (이미지 대체텍스트 제공 기법) : 자주 바뀌지 않는 이미지의 경우 이미지스프라이트 기법으로 넣으면 좋은데.. 
이 때 저시력자들은 고대비(검정, 흰색만 나옴)를 켜고(IE에서 alt+shift+print screen버튼 누르면 켜짐) 사용할 수 있는데, 이 때 IR기법을 사용한 이미지는 보이지 않을 수 있다. 
나중에 javascript로 하는 좋은 방법이 있다. 
*/
.logo {
	display: block;
	width: 192px;
	height: 263px;
	background: url("../img/logo.png") no-repeat;
	text-indent: -9999px;
}
```

### CSS 레이아웃 속성

- display: none, block, inline, inline-block(inline요소지만 block처럼 padding,margin등 먹음), table-cell, ... (나머지는 잘 안씀) 

- 스크린리더기에서 못읽는 것 : display: none; , width:0, height:0 

- visiblity: visible(기본), hidden(공간유지 안보임)... 

- overflow: visible(기본), hidden(넘치는 것 감춤), auto(넘칠때만 스크롤 생김), scroll(x,y스크롤바가 항상생김) ... 

- float: left, right, none(기본값. float해줬다가 해제할 때 사용); 본 목적은 이미지와 단락 배치를 위해 만들어졌으나, 레이아웃에도 많이 사용된다.

 > 본인 위 요소에는 영향을 끼치지 않는다. 

#### base line 그리기 

- font-size: 16px, line-height: 1.5일 때 

1. 1px x 24px 맨 아래 1px x 1px짜리 색을 입힌 이미지를 만든다. 
2. edit > define pattern 패턴으로 등록한다. 
3. 문단 적용할 psd파일로 돌아와서 layer > 맨아래 아이콘 중 creat new fill~~~ > pattern 
4. 패턴이 된 base line을 grid폴더에 넣고 lock을 건다. 
5. 1px*24px로 만든 이미지 저장 : png-8 로 내보내는 것이 좋다.(색 단순하게 저장됨)
6. css에서 body background 로 불러온다. 

#### 과제 

- 갤러리 만들기 : 갤러리 배경(backgound img를 화면가득) + css로 프레임(padding, border, 그림자 등 적용) 만들어서 img바뀌어도 계속 재사용 가능하도록 만들어오기. 사진도 넣자. (float) 
 