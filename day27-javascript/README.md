###### Front-End Develop SCHOOL

# DAY 27 - javaScript

#### 문서 객체 모델(DOM) : front 가장 중요한 개념

- Document(문서) Object(객체. 요소) Model(요소들간의 관계도) Interface
- DOM Legacy(Lv.0) LV 1~4까지 있는데 현재 1, 2 정도까지 씀. Lv.4에서는 css선택자로 선택할 수 있게 되었다. 아직 안쓰지만..  

- 자바스크립트는 DOM을 핸들링(Handling)할 수 있는 언어. 클라이언트사이드, 현재는 서버사이드로도. 
 
- 대상 선택!!! : DOM의 능력 중 하나. 

- 노드 트리(Node Tree)
 - `<html>`은 'root node' : 노드트리의 시작
 - node : 연결망의 특정 지점 
 - 문서(document) : 노드의 집합 
 - 공백, 각 요소, 속성등 모두 다 노드이다. 
 - ex) style="background-color:#333" 이 전체는 속성노드인데 backgroudn... 이건 그냥 값이다. 노드 아님

- 요소노드(element node) 
 - 요소노드 테스트 : type checking 
1:요소노드, 2:속성노드, 3. 텍스트노드 ... 
document.ELEMENT_NODE
1
document.COMMENT_NODE
8 // 주석 


- document.body.firstChild // #text (<body>바로 자식은 빈공간이다.)
- document.bocy.firstChild.nodeType // 3
- document.body.firstChild.nextSlibing // 인접형제 <div>...<div> 

- document.getElementById() // element하나. id.
- document.getElementsByTagName() // elements. tagname.

##### Event, Event Handler 

- Event Handler : 함수인데 이벤트와 연결된것
- 바인더 : 함수를 연결한다. 

- onclick = function() {}
- ondbclick = function() {} // 더블클릭 : 거의 안쓴다. click과 동시 수행됨 
- onmouseover = function() {} // 계속 발생되므로 onmouseenter를 쓰도록 한다.
- onmouseout = function() {} // 계속 발생되므로 onmouseleave를 쓰도록 한다.
- onmouseenter = function() {}
- onmouseleave = function() {}

##### DOM Level 0 (레거시 돔)

- 초기 문서객체모델. 지금도 많이 쓴다. 웹 문서의 특정요소에 접근, 해당 요소의 속성을 교체할 수 있는 API제공했으나, 매우 제한적인 접근(하이퍼링크, 이미지, 폼 필드 요소에 국한)