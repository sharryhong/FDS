###### Front-End Develop SCHOOL

# DAY 06

### 진행 내용

- CSS 선택자
- CSS 박스모델
- CSS 타이포그래피
- CSS 초기화 

-

### 1. CSS 선택자 

- 요소 선택자 [ 요소명(E) ] 점수 0001
- 전체 선택자 [ * ] 0점 
- 클래스 선택자 [ . ] 0010점
- 아이디 선택자 [ # ] 0100점
- 자손 선택자 [ E E (띄어쓰기) ] 
- 자식 선택자 [ 부모E > 자식E ] 
- 인접형제 선택자 [ E + E ] 
- 일반형제 선택자 [ E ~ E ]
- 속성 선택자 [ [E], [E="value"] ]
- 그룹핑 [ E, E, E ] 작성하고 공통적인 것을 묶자

- 클래스 선택자
> E.classname : 좋은 방식은 아님. 특정한 상황에는 쓴다. <br>
> .classname : 일반적인 사용방법, 코드 재사용 목적<br>
> .classname1.classname2 : 멀티클래스. 교집합. 두클래스가 모두 있을 때만 스타일 적용. 하나의 요소에 적용. 순서상관없음(IE6제외)<br>
> .classname1 .classname2 : 앞클래스 자손 중 뒷클래스에 적용 

- 아이디 선택자 
> `#idname` : id는 어차피 한페이지 내 하나뿐 이므로 앞에 요소안쓰는게 좋다. 

- 자식 선택자 [ 부모E > 자식E ] 
> IE8부터. IE7에선 버그약간있음(html내에서 `<style>`내에  `>` 쓰는 경우 닫는 태그로 인식함)

- 인접형제 선택자 [ E + E ] 
> 바로 다음 형제만 선택됨<br>
> 절대적으로 틀(프레임)이 무너지지 않아야 한다. (마크업이 반드시 그렇게 되어 있어야한다. 나중에 수정하면 안됨)

- 일반형제 선택자 [ E ~ E ]
> `h4 ~ ul { color: green; }` : h4요소 형제 중 ul요소 모두 적용 

- 속성 선택자 [E], [E="value"]

```
/*id 속성을 지닌 요소에 적용 : 실무에선 안쓴다.*/
[id] { border: 2px dotted blue; }

/*class속성을 지닌 요소에 적용*/
[class] { outline: 3px solid rgba(255,255,0,0.5); }
``` 

 > 특수한 상황인 것을 찾을 때 잘 쓴다. 

 ```
[class="snack"] : classname이 반드시 snack이어야 한다. 
[class="snack seeu"] : classname이 반드시 snack seeu이어야 한다.

[class^="snack"] : classname에 snack으로 시작하는 클래스

a[href][title][data-href] : 셋다 가지고 있을 때 

a[href$=".docx"] : 끝나는 값이 .docx이면 워드 아이콘주기.. 이렇게 활용하면 좋다.
 ```


##### CSS 초기화 

- 브라우저마다 기본값이 다르다. 초기화 필요!

```
* {	margin: 0; }
/* 이렇게 쓰지 않도록 하자. -> 속도 부하가 생길 수 있다. */
/*각 섹션을 초기화 하는 것이 좋다.*/

body, .classname * {
	margin: 0;
}
/*이런식으로 요소 + 그룹핑 + 아이디 + 전체선택자 */
```

```
.reset-list ul, 
.reset-list ol{ /*가이드로 설명 필요*/
	/*기본적인 리스트 스타일 초기화*/
	list-style-type: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
	/*li요소의 list-style-type의 경우 ul로부터 상속받으므로 ul에서만 초기화하면 된다.*/
}
```

- 중요!! 예전처럼 ul, ol등에 직접 reset을 하는 것은 나중에 더 유지보수가 힘들어질 수가 있다. <br>
위처럼 (노멀라이저) 모듈화하여 체계적으로 관리하자~!!

### 그 외

- html문서를 만들면 브라우저에서 해석을 한다. 모두 객체로 만든다. -> DOM
- box model : content box -> padding box -> border box -> margin box -> offset box
- `<p>`, `<address>`등 내에는 블록이 오면 안된다. 블록요소 중에 블록요소가 오면 안되는 요소. 
- `heading`요소 내에는 블록요소 올 수 있으나 대체로 div는 안쓰고 span을 쓴다. 
- 대체로 영문은 11~12px, 한글은 13~14px을 쓴다. 
- 기본 브라우저 폰트 크기는 16px이나 button등의 폰트 크기는 11px이다. 
- 클래스 네이밍할때 줄여쓰더라도 누구라도 알아 볼 수 있도록 명확하게 쓴다. 
- 블록요소는 부모 너비만큼 차지
- `<img src="img/icons-psd.png" alt>file-psd</a>`의 경우 내용에 설명이 있으므로 alt값 없어도 되나, alt는 반드시 써야한다. IE8이상부터는 alt="" 대신 alt만 써도 된다. 

```
@charset "utf-8";
/*꼭 써야하는건 아니지만 한글이 깨져보일 경우 꼭 쓰자.*/

/*! selectors.css sharryhong, 2016 */
/*나중에 압축할 때 주석은 지우지만 저작권 정보가 들어있는 이 부분만 남긴다.*/
```

##### sublime text 

- 코드 자동정리 패키지 : sublime text에서 package control > install package > html-css-js prettify 설치 <br> tools > html-css-js prettify > prettify code (ctrl+shift+h)
- 자동 계산 : ctrl+shift+y

```
font-size: 20px;
고정 값(기기에 따라 다르다.) px을 상대 값(em : equal M)으로 변경하고자 한다면?
font-size: 20/16em;
```

##### "코딩을 배우는 건 쉽지 않다"

> <https://github.com/yamoo9/fds/blob/master/DAY06/README.md>

- 스스로가 강사가 되어보자. 가르치고, 문제도 내면서 스스로 많이 익히게 된다. 
- 힘들어서 포기하고 싶다면.. 10번만 반복해봐라. PLEASE~! 그래도 안된다면? 웃으며 과감히 포기하라. 

##### 추천

- 대한항공 사이트 : area기법을 사용. 

