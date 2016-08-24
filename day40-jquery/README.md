###### Front-End Develop SCHOOL

# DAY 40

##### Filterling 필터링 : 찾은 것에서 걸러냄

- .filter(selector | element | function | Selection(jQuery Object)) : not()과 반대. 선택한 것 가져와라. 가장 강력. 

- .eq(index | ) : 수집된 대상 가져오기. filter()기본으로 쓴다.

```
var $gnb = $('.gnb');
var $gnb_list = $gnb.find('li');

var $gnb_list_1st = $gnb_list.eq(0); // 첫번째
var $gnb_list_2st = $gnb_list.eq(1); // 두번째
var $gnb_list_last = $gnb_list.eq(-1); // 마지막
var $gnb_list_last_2nd = $gnb_list.eq(-2); // 마지막에서 두번째
```

- .not(selector | element | function) : 선택한 것을 제외한 것 가져와라

```
// class가 없는 li에 addClass
  $gnb_list.not('[class]').addClass('have-not-class-attribute');
```

- is(selector | element | function | Selection(jQuery Object)) : 반환값 true / false. 조건문에 쓴다.

- each(function(index, element) 콜백함수) : 대상들 내부 요소노드에 접근하여 개별적으로 다른일을 제어할 수 있다. 마치 for문과 비슷하다.
 - 메소드 체이닝 가능 
 - 하는 일이 많아서 for문보다 느리다.

```
$('li').each(
  function(index) {
    $(this).html(index + ':' + $(this).html());
    // 기본 html코드($(this).html()) 앞에 index붙여라.
  }
);
```

- .slice(start, [end]) : 배열 위한 필터함수

```
var arr = [2,4,66,83];
arr.slice(2); // 2부터 
[66, 83]
arr.slice(1,3); // 1부터 자르지만 3-1까지 담는다.
[4, 66]
arr.slice(-1); // 마지막애만 담는다.
[83]
```

##### Finding 수집된 애들(부모) 안에서 찾는다.(자식,자손)

- .find(selector) 함수

```
$('li').filter(':last') // li인데 마지막자식

$('li').find(':last') // li 자식, 자손 중 마지막자식
```

- .find() : 자손
- .next() : 선택자넣으면.. 선택자가 있으면 true
- .nextAll() : 선택자넣으면.. 그 선택자 모두 
- .prev()
- .prevAll()
- .parent() : 바로 부모만. ()안에 값이 있다면 부모와 같아야만 불라와진다.(일종의 조건문)
- .parents() : 조상까지 <html>까지 
- .parentsUntil() : 조상 중 ()안의 값 전까지
- .children() : 자식
- .prevAll()
- .prevUntil()
- .nextAll()
- .nextUntil() : ()안에 전달받은 값을 통해 일치하는 요소 전까지. ()빈칸 = nextAll()
- .siblings() : 중요!! ()안에 전달받은 값을 통해 일치하는 형제요소들 앞, 뒤 모두 찾아 jQuery객체로 반환(return)한다. 본인은 제외
- .contents() : 모든 노드를 수집한다.(빈공간은 text로, 주석도)
- .closest() : 유용! ()안에 전달된 값을 통해 일치하는 가장 가까운 부모 요소
 - .parents('.abc')[0] 과 같다.

`$('p').nextUntil('ul')`: h2요소 이후의 요소중 ul요소 이전까지의 요소들 (형제들만)

###### 체이닝

- 많이해도 성능상 큰 문제는 없지만, 읽기 힘드므로 중간에 변수로 저장하면 좋다. 

##### 추가 

- add() 
 - element 추가
 - 내부에 코드 추가 가능 
 - 먼저 .clone()하고 .add()하면 실제 동적 추가 

- addBack() : 찾은 것 + 전에 수집된 것까지 모두 설정 

- end() : 찾은 것 전꺼만 설정

##### 조작 Manipulation (문서 조작)

- jQuery() 팩토리함수의 능력은 생각보다 더 강력하다. 
 - `$('<div>')` -> `<div></div>`생성
- text()
- html() : ()는 get, (넣으면) set
- attr() 
 - attr('class') : getter
 - attr('class','name') : setter
- removeAttr() : 인자 안쓰면 아무것도 제거 안된다.
- prop() : form에서 쓴다. property. 사용자가 동적으로 값 설정하면 property이다.
 - 예) 사용자가 input text에 직접 값을 입력하였다.
 - $('form').find('input').prop('value') // 사용자가 input text에 입력한 값 가져오기
 - $('form').find('input').attr('value') // undefined
 - $('form').find('input').prop('value', 'abc') // prop해야 value바뀐다.
- removeProp()
- val() : form에서 쓴다. value 값 관련
 - $('form').find('input').val('abc') = $('form').find('input').prop('value', 'abc')


```
$('.gnb').html(function(index, oldHTML){
  return '<article>' + oldHTML + '</article>';
});

>> 결과 : 유사배열 반환
[<nav class="gnb">
  <article>
    <h2>GNB</h2>
    <ul>
      <li class="first"><a href="">link content 1</a><a href="">link content 1</a><p>링크 뒤에 나오는 단락</p></li>
      <li class="second"><a href="">link content 2</a></li>
      <li><a href="">link content 3</a></li>
      <li><a href="">link content 4</a></li>
      <li class="last-2nd"><a href="">link content 5</a></li>
      <li class="last"><a href="">link content 6</a></li>
    </ul>
  <div class="custom-division" id="hi-seoul" title="hey jude">Hey Div El</div>
  </article>
</nav>]
```

##### 삽입 Insert. jQuery 요소 내부 앞, 뒤에 삽입 

- prependTo('부모') : 부모의 앞에 붙여라
- appendTo('부모') : 부모의 뒤에 붙여라
- 부모.prepend('target') : 부모의 앞에 붙여라
- 부모.append('target') : 부모의 뒤에 붙여라

```
$('.gnb').prepend('<div class="prepend">Prepend Child Content</div>');
// 위와 결과 같다.
$('<div class="prepend02">Prepend Child Content02</div>').prependTo('.gnb');

- before() : a.before(b) : a앞에 b를 삽입해라. 위치이동
- after() : a.after(b) ; a뒤에 b를 삽입해라.
- insertBefore() : b.insertBefore(a) : a앞에 b를 삽입하라. 
- insertAfter() : b.insertAfter(a) : a뒤에 b를 삽입해라.

##### 요소 둘러싸기 Insert Wrap 

- wrap() : a.wrap(b) : a를 b로 감싸라. 개별적 wrapping
- unwrap() : 해당 요소에 wrap된 것 없앤다.
- wrapAll() : 모든 요소를 감싸는 wrapping

```
$.each([1,2,3,4,5].reverse(), function(index, item) { 
  $('<div>', {'class': 'hesus' + item}).text('hesus'+item).prependTo('body');
});

$('[class*="hesus"]').wrapAll('<aside class="wrapAllHesus">');
```

##### radioClass plugin 만들기

1. 목표 : radioClass plugin 만들기
  
  - Tab Menu 등에 사용

2. if(!$.fn.radioClass) // radioClass없으면 $.fn(prototype)에 추가하기

- 메소드 체이닝하려면 jquery object가 있어야 한다. 
 - return this; 꼭 필요! return이 없으면 undefined로 jquery 메소드 체이닝을 할 수 없다.

3. 만들고나서 코드 리펙토링. 사용자가 어떤 행동을 할지 생각.

4. Documentation 작성

##### memory plugin 만들기

1. 목표 : 

- $.data(); // 데이터 저장. 유틸리티 메소드(static) 
 - click할때 한번만 a요소를 jquery객체로 만들기에 사용하자.