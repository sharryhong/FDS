###### Front-End Develop SCHOOL

# Team Activity 

### [소리바다](http://corp.soribada.com/) 사이트 html 구조 

- [호민 팀장님 리뷰 로그 바로가기](https://github.com/dumplehomin/team_activity_homin/tree/master/0629)

#### navigation

- 페이지상 1depth만 나와있고 오른쪽 상단 햄버그? 버튼 누르면 전체 navigation이 나온다. 이를 어찌 마크업 할 것인가?! 

> 실제로 css작업해봐야 알 것 같으나, 따로 분리해서 구조화 해야할 것 같다. 

#### 슬라이드 컨테이너

- 1,2,3,4... 클릭시 콘텐츠가 나오는 구조. 

> 탭 개념으로 이해하면 될 것 같다. <br>
> 내가 사용한 `<a>`요소 보다는 `<button>`요소가 맞을 것 같다. <br>
> 버튼의 경우 디자인이 같으므로 같은 class를 써서 모듈화 한다. <br>
> 웹접근성을 위해 버튼 부분이 마크업 상단에 위치하면 어떨까? <br>
> 웹접근성을 위해 버튼에 설명을 쓰고 class로 안보이게 처리해보고자 한다. 

#### section, article 요소 

- 시멘틱한 마크업을 위해 사용해보았는데 제대로 사용한 것인가. 

#### header, footer 요소

- header, footer, nav 요소를 어떻게 써야 좋을까~

> 현재 방식은 body의 header, footer라는 의미로 사용하고 있으나, header요소 안에 nav(섹션)가 오면 의미론적 접근으로 좋지 않다. 어찌해야 할까? <br>
> 여러 방법이 있겠는데, 우선은 그냥 둠 












