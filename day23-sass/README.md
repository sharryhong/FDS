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


### 그외 참조

- sass folder structure로 구글링하면 해외사람들이 어떻게 관리하고 있는지 많이 나온다. 참조.