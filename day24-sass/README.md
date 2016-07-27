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

- Interpolation: #{} 인터폴레이션방법을 쓰면 손쉽게 사용가능하다. 

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

- 비교연산 Relational operators (<, >, <=, >=)

>> 디버깅해보기 : sass파일내에  `@debug 1<4`라고 하면 터미널에서 DEBUG: true 라고 나온다.

- 문자 접합

>> cursor: n + -resize; // n-resize 

### 그외 참조

- sass folder structure로 구글링하면 해외사람들이 어떻게 관리하고 있는지 많이 나온다. 참조.
- 읽어보자! <http://thesassway.com>