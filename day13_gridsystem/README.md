###### Front-End Develop SCHOOL

# DAY 13

### css 추가 

- background-attachment: scroll, fixed(부모 고정), local, initial, inherit;

- background-size: auto, length, cover, contain, initial, inherit;

 > 100% 100% : 가로, 세로 딱 맞게 들어참. 이미지 왜곡이 될 수 있다. <br>
 > cover : 이미지 가득 들어차는데 잘리는 부분 생김 <br>
 > contain : 이미지가 다 들어참 

### 그리드 시스템(Grid-System)

- [야무쌤의 그리드 시스템 내용 바로가기](https://github.com/yamoo9/PSD2HTML-CSS/wiki/%EC%9B%B9-%EA%B7%B8%EB%A6%AC%EB%93%9C-%EC%8B%9C%EC%8A%A4%ED%85%9C#%EA%B7%B8%EB%A6%AC%EB%93%9C-%EC%8B%9C%EC%8A%A4%ED%85%9Cgrid-system)

- 그리드 시스템을 사용하는 목적

 > "정보에 질서와 구조를 부여한다" - 베이스라인(Baseline) 기반의 타입 디자인

- baseline, units(한줄한줄), columns(units묶어), gutters(units사이 간격), margins

- 중요 포인트! 디자이너가 어떤 그리드를 줘도 작업할 수 있어야 한다. 

- 기본적으로 float을 사용하여 작성 

- Column Grid 기반으로 작성 

 > 컬럼(열) 그리드는 페이지에 여러 개의 열을 배치할 때 사용되는 그리드입니다. <br>
 > 불연속 정보 및 콘텐츠의 요구를 제시할 때 유용합니다.

#### 960 Grid System 만들기 

- 12, 16.. 컬럼 중에 12개 컬럼 만들기 

-

#### 그 외

- 웹 그리드에 대해 <https://css-tricks.com/snippets/css/complete-guide-grid/>
- 그리드 시스템 <https://pixelbuddha.net/ui-tiles/>
- 노멀라이즈 css <https://necolas.github.io/normalize.css/> : reset.css보다 현재는 이렇게 많이 쓴다. 