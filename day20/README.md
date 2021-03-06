###### Front-End Develop SCHOOL

# DAY 20

-

### 반응형 웹디자인 

- 과거를 답습하는 것은 이제 그만! 기존의 방법 -> 더 좋은 방법이 있는가?!!!<br>
     -> 시스템, 체계를 갖고 수정 

- 지금까지 했던 static grid(정적인 그리드) -> fluid grid(동적 그리드)가 요구된다. 
- 워낙 새로 변하는 분야이다. 꾸준한 발전이 필요하다. 
- 스마트티비, 웹앱, 모바일, 콘솔, 반응형디자인... 

- 전형적인 직렬식 프로세스 -> 새로운 ux/ui 병렬식 프로세스 <br>
     : 스케치, 리뷰, user test, 프로토타입 & 스케치, 와이어프레임, 비주러, 프로토타입이  병렬식으로 이루어진다. 
- 오늘날 다양한 기기등장 & 스크린의 사용 <br>
     : IOT (사물인터넷) <br>
     : 반응형 디자인이 필요하게 되었다. ------> 필수~!!!<br>
     ---> 우리가 만들어야 할 서비스를 이루는 콘텐츠와 컨텍스트에 관한 이야기! <br>
     : 기획, 디자이너, 개발자가 초반부터 함께해야한다. 
- 기술의 발전은 디자인 바운더리(경계)를 변경시켰다. <br>
     : 사각형뿐 아니라 원의 등장, 큰 스크린뿐 아니라 작은 스크린(시계 등) 등장 등... 
- one content로 

- 각 기기의 다른 비율과 해상도를 먼저 이해한 뒤, 스케치, 프로토타입, 시각화, 테스트 등을 진행해야 한다. 

- 처음 반응형 웹디자인 : http://alistapart.com//article/responsive-web-design
- 디바이스마다 콘텐츠를 감추는 것 보다는 각 기기의 경험을 맞춰 최적화된 뷰를 사용자에게 제공하여 콘텐츠를 제공하는 것. <br>
     -> mobile first(필수정보)로 개발하는 것이 좋다. -> 큰 스크린에서는 선택정보 포함 <br>
     소비자의 행동패턴 파악, 전략 세움(이 과정에서 콘텐츠 구성)<br>

예) http://iropke.com/proposal/HiSeoul/ : desktop first 

- 비주얼디자인 전에 box만으로 가능한 디자인인지 먼저 해보고 하는 곳도 있다. 

* 반응형 웹디자인(유연한 레이아웃/디자인 방법론)<br>
     -> mobile first<br>
     -> progressive enhancement(점진적 기능향상. 기술적 접근성 마인드 설정)<br>
     -> adaptive web(하나의 웹 실현을 위한 큰 그림)

- 멀티 디바이스를 분석하여 중단점(Breakpoint) 설정 <br>
https://www.thinkwithgoogle.com/research-studies/the-new-multi-screen-world-study.html

- 점진적 기능향상 (progressive enhancement)<br>
     : 기술적 제약에 상관없이 사용자가 콘텐츠에 대한 접근이 가능하도록 제공하는 것. <br>
     크로스브라우징(브라우저마다 똑같이 보이는것)이 아닌 콘텐으에 기술적으로 접근이 가능하냐의 개념이다. 

- http://services.google.com/fh/files/misc/multiscreenworld_final.pdf 2012년 자료<br>
     : 65%의 사람들이 모바일을 먼저 본다. <br>
     90%사람이 pc와 모바일 등을 같이 사용한다. (멀티 스크린)<br>
     모바일사용시 검색용도60%, 인터넷, 쇼핑... 등의 용도로 사용한다. <br>
---> 전략 짜기!! 

#### 반응형 웹디자인 고려할 사항 (모바일 퍼스트 전략)
- 콘텐츠 중심
- 콘텐츠를 모호하게 하지 않는 네비게이션
- 가급적 네이티브 기능사용
- 화면에 바로 보이지 않는 콘텐츠는 Lazy Loading(스크롤 등으로 내렸을 때 보이게함), 
- Form 2.0도입 (placeholder, e-mail, number...)
- 읽기 쉬운 콘텐츠를 구성하는 타이포그래피
- NUI(Natural UI)를 고려한 설계 (실제로 사용자들이 어떻게 사용하는가 조사)
- SVG그래픽 및 아이콘 폰트 적극 활용 (아이콘 폰트를 많이 안쓸 경우는 별로.. 단, 유지보수를 위해서는 괜찮다)
- 데이터 커넥션 불안정 고려 (포털 사이트 등)<br>
     : 예를들어 DAUM의 경우 스타일시트를 html 내부에 포함. 네트워크 불안정해도 스타일 잘나오지만 약간 느릴 수 있다. 
- 성능 고려(Http 요청 회수 줄임)<br>
     : 가장 중요. splite, 파일병합 등 
- 모바일 퍼스트 디자인
- 디자인 패턴 라이브러리(UI KIT)제작
- 웹 리소스 압축 배포(gZip - backend)
- 고해상도 디스플레이 대응
- 프레임워크 도입 검토 : 일은 편해지나 용량이 커져 속도가 느려질 수 있다. 필요한 부분 직접 만드는 것이 좋다. 
- 마우스 이벤트 핸들링에서 벗어나야 함. 모바일에선 hover가 없다. touch, tab등 고려 
- 구형 IE는 우아한 기능 저하로 대처<br>
     : 크로스브라우징.. 똑같이 보여지지 않아도 된다. 콘텐츠에 접근이 가능하게만 
- 민첩한 팀웍 요구
     : 프로젝트 초기부터 협업 고려 


- 콘텐츠 전략 : 러프하게 손그림 등으로 디자인 전략을 짜본다. 모바일 퍼스트 -> 추가하면서.. 
- 콘텐츠 구성 : 구현이 가능한지 box디자인으로 해본다. 
- 유동 그리드 시스템 / 레이아웃 (Fluid grid & layout) : 함수쓰면 편하다.


- 클리핑이미지 : 스크린이 작아질때 전체 이미지가 작아지는 것이 아니라, 중요 이미지가 보이게 해야함 
 > 예를들어 backend에서 인물중심 등을 알아낼 수 있다면.. 지금은 안되는듯 

- 중단점 설정 / 미디어쿼리 


#### 반응형 웹디자인 고려 사항 
- 기술지원되는가(IE8이하는 미디어쿼리 안되는 등)
- device-apis
- performance(성능)
- 조건에 따른 로딩
- 콘텐츠
- 터치

#### 미디어쿼리

- `<link rel="stylesheet" media="(min-width:769px)"  href="css/layout_large.css">` 처럼 불러올 경우 브라우저 크기에 상관없이 다운로드 된다. 다만 스타일 적용은 안된다. 

- `@media (min-width: 700px) and (orientation: landscape) { ... }` <br>
100px 이상 & 회전방향(orientation)이 가로(landscape)일때, 세로(portrait)

- `@media (min-width: 700px), handheld and (orientation: landscape) { ... }` <br> ,를 쓰면.. or 개념이다. 

- `@media screen and (device-aspect-ratio: 16/9)` <br>
화면비율이 16:9일때 

- `@media screen and (min-resolution: 2dppx)` <br>
이미지해상도.. 2배 dppx.. 레티나

- snippet으로 레티나 디스플레이에 대응하는 코드 만들기 
 > css파일에서 retina/ 만 치면 아래처럼 코드 호출 <br>
 > emmet을 쓰고 있어서 /를 써야한다. 

```
<snippet> 
	<content><![CDATA[@media 
		(-webkit-min-device-pixel-ratio: ${1:2}),
		(min--moz-device-pixel-ratio: ${1:2}),
		(min-resoluton: ${1:2}dppx),
		(min-resoluton: 96*${1:2}$2dpi) 
	{
		$0
	}]]></content> 
	<tabTrigger>retina/</tabTrigger> 
	<scope>source.css</scope> 
	<description>Bitmap 고해상도 이미지 처리 미디어쿼리 구문</description> 
</snippet> 
```

[ 미디어쿼리 고려사항 ]

- 메뉴가 고정형일 경우 높이가 낮으면 화면이 작아지니 고려한다. 
- modal(팝업) : 높이가 낮을 경우 고려 
- 가로, 세로 모드일때 고려 
- sidebar vs header 위치 (예: min-width, min-height이면 header를 왼쪽에 위치 등)


### 참고 사이트 

- 유투브 등 코드 만들어주는 사이트 <http://embedresponsively.com/>
- 구글 레이아웃관련, 중단점 설계 참고 <https://material.google.com/layout/principles.html>