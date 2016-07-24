###### Front-End Develop SCHOOL

# DAY 21

[야무쌤 github 꼭 읽기!](https://github.com/yamoo9/FDS/blob/master/DAY21/README.md) 

### 모바일 최적화

- `handheldfriendly`, `mobileoptimized` 속성 값은 오래된 모바일 기기 화면에 최적활 할 때 사용. (스마트 폰 환경에서는 불 필요)
- `viewport` 속성 값은 스마트 폰 화면에 최적화할 때 사용.
    - `width=device-width` 설정은 기기(Device)의 화면 가로 폭에 최적화된 뷰를 제공.
    - `initial-scale=1` 설정은 기본 화면 비율 크기를 배율 x1로 설정.

```html
<meta name="handheldfriendly" content="true">
<meta name="mobileoptimized" content="240">
<meta name="viewport" content="width=device-width,initial-scale=1">
```

> ※ 최신 iOS 버전의 사파리에서는 화면에 맞게 수축(Shrink)하는 설정 여부가 추가됨.<br> &nbsp;&nbsp;
`shrink-to-fit=no` 설정은 화면 크기에 맞게 화면 요소들이 축소되는 것을 방지함.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

-

### [참고: CSS Device Adapt](https://drafts.csswg.org/css-device-adapt/#translate-meta-to-at-viewport)

`@viewport` 규칙은 `<meta name="viewport">` 코드(비표준)를 대체하는 표준이 될 코드이지만, 모든 웹 브라우저가 지원하는 것은 아님.

```css
@-webkit-viewport { width: device-width; zoom: 1; }
@-moz-viewport    { width: device-width; zoom: 1; }
@-ms-viewport     { width: device-width; zoom: 1; }
@-o-viewport      { width: device-width; zoom: 1; }
@viewport         { width: device-width; zoom: 1; }
```

위 `@viewport` 규칙은 아래 `<meta name="viewport">` 코드와 동일한 역할을 수행.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

-

### 기타 설정

- `box-sizing: border-box;` 설정은 `width`, `height` 영역을 `border`영역까지 확대시켜 디자인을 용이하게 설정.
- `text-size-adjust: 100%;` 작은 화면(모바일)에 웹 사이트를 최적화하하는 과정에서 텍스트 크기를 임의로 변경(팽창)하지 않도록 설정.

```css
html {
    /* 박스 크기 설정 */
    box-sizing: border-box;
    /* 텍스트 크기 조정 설정 */
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
}

*, *::before, *::after {
    /* 박스 크기 설정 상속 */
    box-sizing: inherit;
}
```

-

#### 브라우저 일반화

웹 브라우저마다 기본 스타일 설정이 달라 이를 일반화(Normalization)할 필요가 있음.

[Normalize.css](http://necolas.github.io/normalize.css/)

#### [CSS 공통 모듈 생성기](http://url.yamoo9.net/common)

프로젝트에 사용될 공통 스타일 모듈을 손쉽게 생성할 수 있는 도구(using Sass)

---

### Sub Pixel Problems In CSS

- 반응형을 위해 %로 width를 잡을 경우 브라우저마다 버그가 있을 수 있다. <br> 
이를 잡기 위해 아래와 같은 Isolate float 테크닉을 쓰기도 한다. 

---

### Isolate Float 테크닉

- 장점 1 : Sub Pixel Problems을 잡아준다. 
- 장점 2 : 순서를 쉽게 설정할 수 있다. 
- 장점 3 : position은 부모가 높이를 못 잡지만 이건 가능. 

#### 테크닉 원리

__isolate 테크닉에 요구되는 사항__<br>
※ 테크닉 사용시 혼란이 올 수 있으니, 음수 마진 값 설정에 대한 이해가 요구됨.

- 개별 레이아웃 요소는 `margin-left` 값을 통해 정확한 위치를 설정.
- 개별 레이아웃 요소는 `margin-right: -100%;`를 사용하여 뒤에 오는 요소를 끌어(pull) 당긴다.

-

###### STEP 1

__3 컬럼 레이아웃__을 디자인한다고 가정.

![isolate-설명-01](https://github.com/yamoo9-Lab/sass-workflow/raw/2015.11/Class%20[2015.11]/DATA/DAY15/images/isolate/isolate-explain-1.png)

-

###### STEP 2

아이템1에 `margin-left: 0;`을 설정하여 왼쪽 끝 시작 점에 맞춤. 이어서 `margin-right: -100%;` 값을 설정하여 아이템2를 시작점으로 끌어옴.

![isolate-설명-02](https://github.com/yamoo9-Lab/sass-workflow/raw/2015.11/Class%20[2015.11]/DATA/DAY15/images/isolate/isolate-explain-2.png)

![isolate-설명-03](https://github.com/yamoo9-Lab/sass-workflow/raw/2015.11/Class%20[2015.11]/DATA/DAY15/images/isolate/isolate-explain-3.png)

-

###### STEP 3

아이템2 요소에 `margin-left` 속성 값을 퍼센트(%)로 설정하여 3번째 컬럼의 위치( 컬럼x2 + 거터x2 )로 이동시킴.

![isolate-설명-04](https://github.com/yamoo9-Lab/sass-workflow/raw/2015.11/Class%20[2015.11]/DATA/DAY15/images/isolate/isolate-explain-4.png)

이어서 아이템2 요소에 `margin-right: -100%`를 설정하여 아이템3 요소를 끌어 당김.

![isolate-설명-05](https://github.com/yamoo9-Lab/sass-workflow/raw/2015.11/Class%20[2015.11]/DATA/DAY15/images/isolate/isolate-explain-5.png)

그러면 아이템3 요소는 시작점으로 이동하게 됨.

![isolate-설명-06](https://github.com/yamoo9-Lab/sass-workflow/raw/2015.11/Class%20[2015.11]/DATA/DAY15/images/isolate/isolate-explain-6.png)

-

###### STEP 4

아이템3 요소에 `margin-left` 속성 값을 퍼센트(%)로 설정하여 5번째 컬럼의 위치( 컬럼x4 + 거터x4 )로 이동시킴.

![isolate-설명-07](https://github.com/yamoo9-Lab/sass-workflow/raw/2015.11/Class%20[2015.11]/DATA/DAY15/images/isolate/isolate-explain-7.png)

※ 이와 같은 패턴으로 각각의 레이아웃 요소에 정확한 레이아웃을 설정하면 Sub Pixel 문제에서 벗어날 수 있음. 이와 같은 레이아웃 방법을 Isolate 레이아웃이라고 함.

-

###### STEP 5

만약 아이템3 요소를 다음 행(Row)의 시작점에 위치하여 레이아웃을 설정하고자 한다면, 먼저 `clear: left` 속성을 설정하여 Clear 영향권에서 벗어남.

![isolate-설명-08](https://github.com/yamoo9-Lab/sass-workflow/raw/2015.11/Class%20[2015.11]/DATA/DAY15/images/isolate/isolate-explain-8.png)

그리고 `margin-left: 0`을 설정하여 시작점으로 이동시킴.

![isolate-설명-09](https://github.com/yamoo9-Lab/sass-workflow/raw/2015.11/Class%20[2015.11]/DATA/DAY15/images/isolate/isolate-explain-9.png)

-

#### 참고

[Responsive Design’s Dirty Little Secret](https://www.palantir.net/blog/responsive-design-s-dirty-little-secret)

---

### CSS3 [Flexbox](https://www.w3.org/TR/css-flexbox-1/)

- IE에서는 웹표준 적용 안됨
- 모바일 시대가 도래하면서 flexable한 box의 필요성 대두 
- 지금 사용하는 방법은 구현의 어려움이 많다. 

- 요소에 display: flex;를 주면  자식들이 flex items가 된다. 


### Flexbox 구조

- 플렉스 컨테이너(`Flex Container`)
- 플렉스 아이템(`Flex Items`)
- 메인 엑시스(`Main Axis`, 축)
  - 메인 스타트(`Main Start`)
  - 메인 엔드(`Main End`)
  - 메인 사이즈(`Main Size`)
- 크로스 엑시스(`Cross Axis`, 축)
  - 크로스 스타트(`Cross Start`)
  - 크로스 엔드(`Cross Start`)
  - 크로스 사이즈(`Cross Size`)

![flex-direction-terms.svg](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

-

#### Flex Container `display`

- display: flex
- display: inline-flex : float처럼 컨텐츠 만큼만 width를 갖는다. inline속성을 갖는다.

#### Flex Flow Direction `flex-direction`

- flex-direction: row : 기본값. 좌 -> 우
- flex-direction: row-reverse : 우 -> 좌
- flex-direction: column : 세로 위 -> 아래
- flex-direction: column-reverse : 세로 아래 -> 위

#### Flex Line Wrapping `flex-wrap`

- flex-wrap: nowrap : 기본값. flex items들의 총 width가 부모보다 크면 삐져나간다. 그런데 flex items들의 width는 px로 지정했더라도 컨텐츠 width만큼 줄게된다. 
- flex-wrap: wrap : 이렇게하면 flex box내에서 줄바꿈이 된다. 
- flex-wrap: wrap-reverse


#### Shortcode `flex-flow`

```css
flex-flow: direction wrap;
```

-

#### Flex Items Order `order`

- 0
- 1+
- -1

#### Flex Items Grow Factor `flex-grow`

- 0
- 1+

#### Flex Items shrink Factor `flex-shrink`

- 0
- 1+

#### Flex Items Basis Factor `flex-basis`

- width 속성 설정과 유사 `auto`, `px`, `em`, `rem`, `%`

#### Shortcode `flex`

```css
flex: grow shrink basis;
flex: 0;
flex: 1; : 속기형. grow shrink basis를 모두 적용하겠다. 명확하게 속기형보다는 다 쓰자. 
flex: initial;
flex: none;
```

-

#### Alignment

- justify-content
  - flex-start
  - center
  - felx-end
  - space-between
  - space-around
- align-items
  - flex-start
  - center
  - felx-end
  - baseline
  - stretch
- align-self
  - flex-start
  - center
  - felx-end
  - baseline
  - stretch
- align-content
  - flex-start
  - center
  - flex-end
  - space-between
  - space-around

---

### 기타/참고

- [Flexbox Video Tutorial by yamoo9](https://www.youtube.com/watch?v=f_c_8LmGQ-4)
- 우왕 좋다~ [CSS Tricks, A Guide To Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 기존의 것을 flexbox로 어떻게 해결하지? [solved-by-flexbox](http://philipwalton.github.io/solved-by-flexbox/)

 > 사이트에 나와있는 예제를 실제로 해보자. 

- [flexboxgrid](http://flexboxgrid.com/)
- [bootstrap4](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/)

 > less를 버리고 sass를 썼다. <br>
 > flexbox support

- [5 Useful CSS Tricks for Responsive Design](http://webdesignerwall.com/tutorials/5-useful-css-tricks-for-responsive-design)

 > 유용향 css 트릭 모음 






