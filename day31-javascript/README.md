###### Front-End Develop SCHOOL

# DAY 31 - javaScript

#### 네이티브와 라이브러리/프레임워크 속도차이 

[속도차이 분석 사이트 링크](http://www.stefankrause.net/js-frameworks-benchmark2/webdriver-java/table.html?utm_source=javascriptweekly&utm_medium=email)

- angular2.0, react의 경우는 조금은 빠르나 직접 자바스크립트로 작성한 네이티브가 가장 빠르다. 

#### DOM API

- `target_node.parentNode.replaceChild(replace_node, target_node)` 
 - 노드 교체. 위치를 교체하는 것이 아니라, 이전 노드를 삭제 한다.  
 - 이전 노드를 삭제하지만 결과 값으로 반환된다. 

```
var replace_p = createNode('p','replaced paragraph.');
body.replaceChild(replace_p, body.children[0])
```
 - var replace_p = createNode('p','replaced paragraph.'); 처럼 변수에 담지 않고 createNode('p','replaced paragraph.'); 만 했다면, 바로 사라진다. (자바스크립트의 garbage colector가 변수 등에 있지 않은 애들은 메모리에서 지워버린다.)

- node.cloneNode() 
 - 노드 복제
 node.cloneNode(true) 라고 해야 요소안의 텍스트 노드 등도 같이 복제한다. 

```
var clone_replace_p = replace_p.cloneNode(); // <p>요소만 복제
var deep_clone_replace_p = replace_p.cloneNode(true); // <p>요소의 모든 것을 복제
```

- node.isEqualNode()
- node.contains(other_node) // DOM Lv4, IE 호환가능



