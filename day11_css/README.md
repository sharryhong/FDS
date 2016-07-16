###### Front-End Develop SCHOOL

# DAY 11

#### 복습 

- 어제 실습 쌤꺼와 비교하기 <http://demo.yamoo9.net/FDS/conference-speakers/>

> 트위터의 경우 누구의 트위터 바로가기라고 써주기(웹접근성) <br>
> Google 웹폰트 사용 시 주의점. (특수문자)

```
html {
    overflow-y: scroll; // 나중에 페이지별로 위치 바뀌지 않게 
    font-size: 10px; // 이렇게해서 모든 단위를 rem으로 하면 연산이 쉬워서 이렇게 한 것. 나중에 sass쓰면 더 쉽게 구현 가능. 
}
```

```
body {
    font: 1.6rem/1.5 "Open Sans",sans-serif;
    // font 속기법으로 쓸 때 단위쓰는 것은 IE11이상지원. 
    // rem 단위는 IE9이상 지원. 
}
```

```
<!-- | 기호는 <link> 요소의 href 속성에 바로 사용할 수 없도록 되어 있어 엔티티코드(%7C)로 변경하여 사용해야 한다. -->
<link href="https://fonts.googleapis.com/css?family=Montserrat%7COpen+Sans" rel="stylesheet">
```

-

### 진행 내용

- CSS 레이아웃 position 속성
- CSS 배경 속성
- CSS 리스트 속성
- CSS 테이블 속성

##### box-sizing: border-box

- 기본값은 box-sizing: content-box 인데, 레이아웃 잡을 때 border-box로 하고 작업하면 편하다. 

#### vertical-rhythm

- heading, p 요소들 font-size, line-height 등 
- 국내에선 잘 작업 안하지만 하면 좋겠지요~ 
- <http://type-scale.com/>
- base line을 css linear-gradient 로 그리기 

 > gradient는 %만 사용가능하므로 1px은 아니지만 가이드 선으로 사용하는데 무리가 없다. 

```
body:hover {
	background-image: linear-gradient(180deg, transparent 95%,  #7045cf 95%);
	/*0~95%는 투명, 95~100%는 색상*/
	background-size: 1px 27px;
}
```

### position

> top, right, left, bottom 을 주면 그 기준으로 위치

- static : 기본값. position을 아래 값 주었다가 초기화할 때 사용 

- relative : 상대적인 위치지정. 일반 흐름 영향 주지않고 본인만 움직임

- absolute : 절대적인(부모요소에 상대적) 위치지정. 일반 흐름을 깬다. 붕 뜸. 

 > 가장 가까운 부모 중에 position: static이 아닌 요소 

- fixed : 고정 위치 




## 기타/참고

- [CSS 레이아웃을 배웁시다](http://ko.learnlayout.com/toc.html)
- [lucy](http://lucy.29cm.co.kr/hello)
- [conference](http://themes-pixeden.com/landing/conference/home3.html#home)
- [trendhunter.com](http://www.trendhunter.com/trends/topshop-x-adidas-originals-ads)
- [nitrolicious.com](http://nitrolicious.com/2009/10/21/ppq-x-adidas-originals/)
- [42 Super Cool And Exciting Sports Related Photo Manipulations](http://www.soultravelmultimedia.com/2013/09/28/42-super-cool-and-exciting-sports-related-photo-manipulations/)

