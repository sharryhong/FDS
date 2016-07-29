###### Front-End Develop SCHOOL

# DAY 25

### Sass 지난 시간 내용 정리

#### 1. 변수 

#### 2. 데이터 유형

- 숫자(Number) `5em, 15px, 5, ...`
- 문자(String) `Times, "Times New Roman"
- 컬러(Color) `red, #ff0, rgb(255,0,0), hsla(320, 100%, 50%, 0.5)`
- 논리(Boolean) true, false
- 리스트. 배열개념(List) `10px auto 10px`
- 맵('Map') `h1: 22px, h2: 18px, h3: 14px 1.5` 
 - 나중에 반복문으로 타이포그래피 구현시 좋다. 
 - 맵 안에 리스트가 올 수 있다. 
- 비어있다(null)

##### 2-1. 보간법(Interpolation)

- 문자열에'#{$변수}`를 접합 
- 미디어쿼리구문에 변수 처리
- 선택자 조합 
- 폰트 속기형 작성시, `/`가 나눗셈으로 처리되지 않게 하기 위함. 

#### 3. 연산자

- 할당 연산자 $variable`:` value
- 사칙 연산자 `+(문자에 사용할 경우 문자를 접합), -, *, /, %`
- 비교 연산자 `>, <, >=, <=, ==, !=`
- 기타 연산자 `and, or, not`

#### 4. 믹스인(Mixin)

- `@mixin` 지시자(Directive)를 사용하여 정의한다. (sass문법에서는 `=`으로 대체가능)
- `@include` 지시자를 사용하여 정의된 믹스인을 호출한다. (sass문법에서는 `+`으로 대체가능)
- 기본적으로 매개변수(Parameter)가 설정되어 있지않은 믹스인을 정적 믹스인이라 한다. 확장이 안된 상태)

- 함수와 비슷해보이나, 믹스인은 코드가 섞어 나온다는 차이점이 있다. 
- %(placeholder)가 더 좋은 경우 : `clearfix`처럼 정적(바뀌지않는)코드, 코드 생성이 굳이 안되도 될 때
- 전달인자(Arguments)를 설정한 믹스인을 동적 믹스인이라고 한다. (확장이 가능한 상태)
- 전달인자는 Sass의 변수와 유사하게 전달인자앞에 $를 붙여야 하며, 각 인자는 콤마(`,`)로 구분된다. 
- 전달인자의 값을 설정하는 구문이 있다면 해당 인자는 선택사항이다. ex) `$width: 100px`

- 전달인자가 다수일 경우에 이를 줄여 표현할 수 있다. ex) `$shadow...`
- 줄여서(`...`) 전달하는 인자 표현식에서 `맵(Map) 데이터 유형`을 사용할 경우, `$를 제외한 키(key)`를 전달하여 처리가능(반복문 없이)

```
@mixin colors($text, $background, $border) {
  color: $text;
  background-color: $background;
  border-color: $border;
}

$values: #ff0000, #00ff00, #0000ff;
.primary {
  @include colors($values...);
}

$value-map: (text: #00ff00, background: #0000ff, border: #ff0000);
.secondary {
  @include colors($value-map...);
}

// 결과 
.primary {
  color: #ff0000;
  background-color: #00ff00;
  border-color: #0000ff;
}

.secondary {
  color: #00ff00;
  background-color: #0000ff;
  border-color: #ff0000;
}
```

- mixin안에 다른 mixin들어갈 수 있다. 설계를 잘 해야한다. 
- mixin 내부에 `@content`를 사용하면 믹스인 호출과정에서 믹스인 내부에서 처리될 콘텐츠(코드 블록)를 전달하여 코드를 섞을 수 있다. 
 - 함수는 이 기능 없다. 믹스인이 확장성에서 더 강력하다. 

 ```
 @mixin apply-to-ie6-only {
  * html {
    @content;
  }
}
@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}
 ```

## 함수 

- @function, @return 

### 내장함수

[함수 사이트 바로가기](http://sass-lang.com/documentation/Sass/Script/Functions.html)

##### 컬러함수

- set함수 rgba($color, $alpha), rgb('$red', $green, $blue)
 - 예) rgb(0,0,0) => #000000 /  rgba(red,0.4) => rgba(255,0,0,0.4)
- get함수 red($color) green() blue() // 16진수 값을 10진수값으로 변환시켜준다. 

- mix(color, color) // 색 섞어준다. 잘 쓰진 않는다. 

- lighten($color, $amount) // $amount만큼 명도 올림
- darken($color, $amount) // 명도 낮춤
- saturate($color, $amount)  // 채도 높임
- desaturate($color, $amount) // 채도 낮춤
- grayscale($color, $amount) // 채도 없앰. 흑백모드

- complement($color) // 보색. 채도만 반전. 
- invert($color) // 반전색. 명도, 채도반전

- alpha($color)
- opacity($color, $amount)
- fade-in($color, $amount) //
- fade-out($color, $amount)
 - ex) fade-out(#333, 0.3) -> rgba(51,51,51,0.7)

##### Number Functions

- percentage($number)<br>
Converts a unitless number to a percentage.
- round($number)<br>
Rounds a number to the nearest whole number.
- ceil($number)<br>
Rounds a number up to the next whole number.
- floor($number)<br>
Rounds a number down to the previous whole number.
- abs($number)<br>
Returns the absolute value of a number.
- min($numbers…)<br>
Finds the minimum of several numbers.
- max($numbers…)<br>
Finds the maximum of several numbers.
- random([$limit])<br>
Returns a random number.

### 사용자 정의 함수 

### @if(condition) @else if, @else 조건문

### if함수 

`if(조건, 참일경우, 거짓일경우);` 3항식. 

- if3항식 자체 내에 또 넣어도 된다. 

### loop / @while, @for, @each

#### while

- @if문과 유사하지만 반복 수행한다는 차이점이 있다. 

```
@while 조건 {
  조건이 참인 경우 코드 블록문 처리(반복)
}

// @if는 1회만
```


### 그외 참조

- sass folder structure로 구글링하면 해외사람들이 어떻게 관리하고 있는지 많이 나온다. 참조.
- 읽어보자! <http://thesassway.com>
- sass test site <http://www.sassmeister.com>
- <http://sass.js.org/>