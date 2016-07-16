###### Front-End Develop SCHOOL

# DAY 10

### 지난 수업 내용 복습

-

### 진행 내용

- CSS 배경 속성
- CSS 레이아웃 속성
- CSS 리스트 속성
- CSS 테이블 속성

-

#### Float 속성 정리

 > float은 <img>요소를 좌/우로 부유시켜 텍스트가 이미지를 둘러싸도록 설정하기 위해 고안된 기술이나 오늘날 그리드 시스템(멀티 컬럼 레이아웃)에 활용된다. 

 > float하면 자동으로 display: block;이 된다. 

 > img의 알 수 없는 공간의 경우 float하면 없어진다. 

 > html모든 요소는 float 속성 기본 값이 none으로 설정되어 있다. <br>
 > 이를 사용자가 필요에 따라 float 방향을 left, right로 설정할 수 있다. <br> 
 > 이에 따라 float이 적용된 요소에 뒤에 구조화된 마크업 요소는 float의 영향을 받는다. 

- float: left된 img 옆의 단락을 이미지를 둘러싸지 않고 오른쪽에만 위치하도록 하기 

```
.case-padding p{
	padding-left: 310px; 
	/*단락부분을 오른쪽에 나오게 하기. 이런 방법은 유지보수가 어렵다.
	실제 단락은 오른쪽에 간게 아니다. 이미지가 있는 왼쪽부터 있는 것! 오잉?! 	*/
}

.case-overflow p {
	overflow: hidden;
	/*단락요소에 overflow: hidden;을 주면??
	문제가 해결이 된다. 오잉!?
	단, img요소 뒤에 한 요소에만 적용이 된다.*/ 
}

/*재사용성을 위해 부모(.case-over-div)의 자식 img의 인접 형제에 주기*/
.case-over-div img + * { 
	overflow: hidden;
}

/*혹은 img에 직접 class를 줘서 제어*/
```

#### clear : both  [Float된 요소 다음요소들에 float영향 받지 않게 하기]

- clear : left, right, both(우리나라에서 잘 사용), none(반응형할 때 데스크탑first로 할때 정도 사용. 잘 사용하지 않는다.)

- Float이 적용된 요소를 감싸는 부모 요소 높이 설정 방법

 - 방법 1. 부모 요소도 띄우면(float) 자식 높이 인식 <br> -> 쓰지 않도록 한다. 전체 중앙정렬도 안되고 아래 요소들에게도 영향을 끼치므로 
 - 방법 2. float된 하위요소에 무의미한 요소를 직접하나 추가하여 clear: both를 한다. <br> -> 절대 쓰지 않는다. 

  ```
  <div class="clear"></div>

  .clear {clear: both;}
  ```
 - 방법 3. float된 하위요소를 감싸는 요소에 overflow: hidden이나 auto를 준다. <br> -> 간단해서 많이 쓰이는 방법이지만 단점이 있다. <br> position등과 함께 사용시 문제가 생긴다. 

 - 방법 4. .clearfix 방법 2를 의미적으로 사용할 수 있도록 응용한 방법 <br> -> 가장 좋은 방법. 

 ```
 /*clearfix 처음에 했던 방법*/
/*.clearfix::after {
	display: block;
	content: 'pseudo element';
	clear: both;
	visibility: hidden;
	height: 0;
}*/

/*content에 내용이 없으면 아래 두 줄 필요없음. 요샌 이렇게만 씀. IE 8이상.*/
.clearfix::after {
	display: block;
	content: '';
	clear: both;
}
/*이 방법은 오페라에서 안먹음*/

/*이 방법은 오페라에서도 됨*/
.micro-clearfix::before,
.micro-clearfix::after {
	display: table;
	content: '';
}
.micro-clearfix::after {
	clear: both;
}
 ```

> 결론 : 우리나라에서는 오페라를 거의 안쓰므로 아래처럼 쓴다. 

 ```
.clearfix::after {
	display: block;
	content: '';
	clear: both;
}
 ```




### 기타/참고

- [CSS 레이아웃을 배웁시다](http://ko.learnlayout.com/toc.html)
- [All About Floats](https://css-tricks.com/all-about-floats/)
- [CSS: Clearing Floats with Overflow](http://webdesignerwall.com/tutorials/css-clearing-floats-with-overflow) [#](http://firejune.com/1653/Float+%EC%86%8D%EC%84%B1%EC%9D%98+%EB%86%92%EC%9D%B4+%EB%AC%B8%EC%A0%9C%EB%A5%BC+Overflow%EB%A1%9C+%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94+%EB%B0%A9%EB%B2%95)
- [lucy](http://lucy.29cm.co.kr/hello)
- [conference](http://themes-pixeden.com/landing/conference/home3.html#home)



