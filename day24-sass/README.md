###### Front-End Develop SCHOOL

# DAY 24

### Sass Data Type (데이터 유형)
- null 비어있음
- number 숫자
 - 1.2, 3, 14px
- string 문자 / color (#, rgba, ...)
 - "../img/icon.jpg", 'Time, serif', #333
- boolean
- [] list (배열)
- map (객체) 

#### 연산 (Operations)

+ - * / %(modulo 나머지) <br>
비교연산 Relational operators (<, >, <=, >=) <br>
equality operators (==, !=) 

> 10px/5px 연산안됨 10px/5 연산됨 

- Interpolation(인터폴레이션. 보간법): #{} 인터폴레이션방법을 쓰면 손쉽게 사용가능하다. 

```
$language: kr

// 인터폴레이션 => 문자를 처리하기 위해 접합시키는 방법
// 문자열 내에 변수만 넣으면 처리가 안되고 이 방법으로 넣어야 된다. 
@import url("http://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-#{$language}.css")

font: #{$base-font-size}/#{$base-line-height}
// 인터폴레이션 방법을 쓰면 잘되는데, 쓰지않으면 /가 연산자로 인식된다.
```

```
// 어떤 클래스명을 쓸 것인지 정해지지 않은 상황에서도 가능하다. 
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}

// compiled to:
p.foo {
  border-color: blue; }
```

```
// 인터폴레이션 => 문자를 처리하기 위해 접합시키는 방법
@import url("http://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-#{$spoqa-language}.css")

@import url("https://fonts.googleapis.com/css?family=#{$noto-sans}:#{$normal-weight},#{$bold-weight}")
@import url("https://fonts.googleapis.com/css?family=#{$roboto}")
@import url("https://fonts.googleapis.com/css?family=#{$oswald}:#{$normal-weight},#{$bold-weight},#{$light-weight}")

body 
  // font-size: $base-font-size
  // font-family: "Spoqa Han Sans"
  // line-height: $base-line-height
  font: #{$base-font-size}/#{$base-line-height}
  // 인터폴레이션 방법을 쓰면 잘되는데, 인터폴레이션을 쓰지않으면 /가 연산자로 인식된다.

// @debug 디렉티브(지시자)를 사용하면 명령창에 디버그 결과를 출력한다. 
@debug 1<4 // 터미널에서 DEBUG: true 라고 나온다.
@debug type-of(red) // DEBUG: color
@debug type-of(Noto Sans) // list (배열)
@debug type-of("Noto Sans") // string

// interpolation보간법 #{}
$selector: sharryhong
$pseudo-name: after

// 선택자영역에 사용하기
#area .#{$selector}
  margin: 
    left: 20%
    right: 20%
  // 가상선택자에 사용하기 
  &::#{$pseudo-name}
    // content: 'um'
    content: $selector

//미디어쿼리에 사용하기
$media-md: "screen and (min-width: 760px)"
$media-lg: "screen and (min-width: 1220px)"
$media-print: "not screen and (min-width: 21cm)"

.#{$selector}
  @media #{$media-md}
    display: flex
  @media #{$media-lg}
    display: block
  //일반적으로 !important를 쓰진않지만, 인쇄시 설정 등을 위해 써도 무방하다.
  @media #{$media-print}
    background: #fff !important
    color: #000 !important
```

#### list : 집합. 배열 개념. list 대표 함수들 (나머지는 [sass-lang.com](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)읽자!)

- length() 함수를 사용하여 몇개인지 알 수 있다. 

> length('10px', '#333', 'solid') // 3개

- nth($list, $n) // 배열, 몇번째꺼 (sass는 1부터. 자바스크립트 등 대부분은 0부터)

#### Mixins @mixin(정의), @include(호출), =(sass에선 @mixin대신 사용가능), +(sass에선 @include 대신 사용가능)

- 믹스인(Mixin) 정의 : 코드를 섞다. 
- javascript의 함수와 흡사하다. 

- 기본 규칙 

```
@mixin 믹스인이름($매개변수) {
    섞고자하는 코드들 
}
```

- % placeholder와의 차이점? 
 - % placeholder는 코드덩어리는 하나고 그룹으로 묶인다(성능엔 좋음). mixin은 안묶여서 코드양이 많아진다.
 - %, @extend를 많이 사용하면 css코드를 볼 때 해석하기 어려울 수도있다. 
 - 확장성은 mixin이 좋다. 또다른 mixin안에 + 가능
 - %는 지정한 것만 기능하지만 mixin은 인자를 사용함으로서 더욱 확장성이 생긴다.

- 그럼 언제 mixin을 쓰면 좋을까?
 - 인자, 매개변수를 써서 확장성 응용 

- 그럼 언제 %, placeholder를 쓰면 좋을까?
 - 뭔가를 초기화시키는 등 바뀔일이 없을때. 예를들어 common파일 내 코드들 

- 인자(변수전달)
 - 매개변수자리에 값설정 가능하다(default) -> 자바스크립트 ES6에서도 가능해졌다.

- 매개변수에 default값 사용가능. 호출할때 인자값 안쓸 때 적용됨 

```
// 문법
// @mixin(정의), @include(호출)
// %(정의), @extend %(호출)

@mixin box-sizing($type: border-box)
  box-sizing: $type

%box-sizing
  box-sizing: border-box

// 기본값 null로 주면 인자값없으면 아무것도 안나옴
// mixin정의시 매개변수 많아지면 보기 힘들 수 있다. 
// scss에서는 
// @mixin size(
//  $width: null, 
//  $height: null
// )
// 이렇게 쓸 수 있다.
@mixin size($width: null, $height: null)
  width: $width
  height: $height

header
  @extend %box-sizing
  @include box-sizing
  @include size(100px, 50px)

footer
  @extend %box-sizing
  @include box-sizing(content-box)
  +size(400px) //width: 400px; 만 나옴

.page-main
  @extend %box-sizing
  +size($height: 30px) //이렇게 매개변수 중 하나만 골라서 사용가능 

h2
  @extend %box-sizing

>> 결과 << 
header, footer, .page-main, h2 {
  box-sizing: border-box;
}

header {
  box-sizing: border-box;
  width: 100px;
  height: 50px;
}

footer {
  box-sizing: content-box;
  width: 400px;
}

.page-main {
  height: 30px;
}
```

- 프로젝트 진행할 때마다 mixin등을 써서 본인의 라이브러리처럼 만들어 재사용해보자. 

#### 

- 변수범위(scope)와 @content
 - 미디어쿼리도 잘 사용해보자. 
 - 예: +mq(800px 1200px color portrait)

```
@mixin colors(..)
  @content // 여기에 { 안의 내용이 들어온다. } 따라서 확장이 가능. 미디어쿼리 사용시 많이 쓴다.

.selector
  @include { 여기서 설정한 것이 }

```

#### 그 외 

> 디버깅해보기 : sass파일내에  `@debug 1<4`라고 하면 터미널에서 DEBUG: true 라고 나온다.

- 문자 접합

> cursor: n + -resize; // n-resize 

### 그외 참조

- sass folder structure로 구글링하면 해외사람들이 어떻게 관리하고 있는지 많이 나온다. 참조.
- 읽어보자! <http://thesassway.com>