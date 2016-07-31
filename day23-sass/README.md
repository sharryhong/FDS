###### Front-End Develop SCHOOL

# DAY 23

### @import 호출

- 레퍼런스 꼭 보기 <http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import>

- css뿐만 아니라 *.scss, *.sass파일을 @import문을 사용하여 호출할 수 있다. 

 > @import "common.scss"; <br>
 > @import "common";

- _colors.scss. 는 _colors.css 파일을 생성하지 않는다. 

 > @import "colors"; 처럼 _ 과 .css를 쓰지 않아도 된다. 

- scss는 @import가 꼭 상단에 와야 하지만 sass는 상관없다. 

- Nested @import : 잘쓰진 않는다. 
 - Nested @import와 @extend의 차이점! 

 > @extend .btn과의 차이점은.. @extend는 선택자만 위로 올라가고(그룹화) <br>
 > Nested @import

 ```
[ _box.sass파일 ]
.box
	border: 1px solid #333
	padding: 10px

.box-small
	padding: 5px

[ nested-import.sass파일 ]
@import box

.demo
	@import box
	font: 1em Arial,sans-serif


.demo-extend
	@extend .box-small

[ nested-import.css파일 ]

.box {
  border: 1px solid #333;
  padding: 10px; }

.box-small, .demo-extend {
  padding: 5px; }

.demo {
  font: 1em Arial,sans-serif; }
  .demo .box {
    border: 1px solid #333;
    padding: 10px; }
  .demo .box-small, .demo .demo-extend {
    padding: 5px; }

 ```

### Sass Script Part

#### 변수 (Variables) $, !default

- 변수이름 작성 규칙
 - 변수 이름 사이에 공백을 사용하지 않는다.
 - 변수 이름의 음절 사이에 _ , - 등을 사용한다. _ , - 구별을 하지 않는다.
 - 만약 프로그래밍에 익숙해서 camelCase방식이 인숙하다면 사용가능. 다만, camelCase방식은 함수 이름에 사용되므로 권장하지는 않는다. 

- !global 전역변수처럼 사용가능하게 함 (새로 생김)

```
#main {
  $width: 5em !global;
  width: $width;
}

#sidebar {
  width: $width;
}
```

- !default 기본값 
 - null값 제외하곤 다른 값이 우선시된다.

```
$set-width: 900px;
$set-width: 1000px !default
의 경우 900px로 됨
```

### Sass Data Type (데이터 유형)
- null 비어있음
- number 숫자
 - 1.2, 3, 14px
- string 문자 / color (#, rgba, ...)
 - "../img/icon.jpg", 'Time, serif', #333
- boolean
- [] list (배열)
- map (객체) 



### 그외 참조

- sass folder structure로 구글링하면 해외사람들이 어떻게 관리하고 있는지 많이 나온다. 참조.
- 읽어보자! <http://thesassway.com>