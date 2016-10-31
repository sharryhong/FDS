###### Front-End Develop SCHOOL

# DAY 22

## SASS 

#### 설치
- <https://git-scm.com>
- git bash 터미널 방식으로 명령어를 사용하여서 Git를 컨트롤 하는 시스템
- 원래는 ruby기반이었으나 느려서 node sass로 -> 추후 gulp(자동화툴)로 

- 파일탐색기에서 해당폴더 마우스오른쪽 git bash here 클릭

```
npm install node-sass --global // 터미널에서 node sass 깔기

npm i -g node-sass (install global줄여쓴 것)
```

- sourcemapping 있어야 개발자도구에서 style.sass이런식으로 표시가 된다. <br>
`$ node-sass -w sass/ -o css/ --source-map css`  -> css폴더내에 xxx.css.map파일이 생긴다. <br>
단, sass 파일에 변화가 있어야 생긴다. 배포할땐 map파일 제외하고 올린다.

- css는 건드리지말자!!!

- `_footer.sass` _가 붙으면 병합될 파일이므로 컴파일되지 않는다. 파일들 쪼개기 <br>
하나의 style.sass 에서 `@import /part/page/footer` 이런식으로 쓴다.

- 서브라임 텍스트의 install package에서 syntax highlighting for sass 를 설치해야 에디터가 sass, scss 파일을 인지한다. (서브라임텍스트 오른쪽하단에서 sass선택)

#### 주석
- `//`는 css에 표출이 안된다. 같은 팀원끼리 공유

#### Nested (중첩 규칙)
- 들여쓰기로

#### & (부모 참조 선택자, 중첩된 구조에서 사용) 
- &:hover

#### @extend (선택자 상속) 그룹핑 개념
- @extend를 사용해 선언된 다른 규칙의 내용을 상속받는다.

```
$btn-radius: 4px
$btn-align: center
$btn-gap: .6em
$btn-bg: #fe9977

.button
    display: inline-block
    padding: $btn-gap $btn-gap
    background: $btn-bg
    text-align: $btn-align

    &:hover
        background: skyblue

.button-error
    @extend .button
    color: #fff
    border: 3px solid green

```

- 결과
```
.button, .button-error {
  display: inline-block;
  padding: 0.6em 0.6em;
  background: #fe9977;
  text-align: center; }
  .button:hover, .button-error:hover {
    background: skyblue; }

.button-error {
  color: #fff;
  border: 3px solid green; }

```

#### !optional ( @extend 오류 발생시, 오류가 발생되지 않도록 옵션 설정 )
- @extend .buttonssss !optional 처럼 쓴다.  --> .buttonssss가 있었다면 상속 잘되나, 없어도 컴파일은 된다.

#### % (대체선택자 placeholder selector) (초고수들! oocss ) 
- 모듈화에 좋다. 변수와 비슷한 개념으로 
