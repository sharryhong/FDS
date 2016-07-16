###### Front-End Develop SCHOOL

# DAY 19

### 레티나 디스플레이 등 대응 이미지 2x, 3x등 저장 

#### cs버전의 경우 액션으로 저장해서 사용 

1. 이미지 레이어 선택한 상태에서 액션 시작버튼 누름 
1. 레이어 마우스 오른쪽 > Duplicate layer > Document : New
1. image메뉴 > trim : transparent pixels
1. 액션패널 오른쪽 상단 클릭 > insert menu item에서 save for web
1. close

> 작업은 1배로 작업하고 이미지만 2, 3배가 필요하다면 가장 큰 사이즈(3배)로 불러온 뒤 smart object화 시킨다. 

#### cc버전의 경우 아주 쉽다!

1. 이미지 레이어 이름을 icon.png, 200% icon-2x.png 처럼 저장한다. 
1. 포토샵의 file > generate > image assets (속성에서 plug-in > generate 사용하기 체크되어 있어야 한다.)

> icon.png8 : pnb8비트(gif와 같이 256색). 쓰지 않으면 png 24bit <br>
> icon.jpg10 : 10퀄리티로 저장

#### 이미지 포맷 

- gif : 256색 표현. 배경 투명. 애니메이션 가능 
- jpg : 사진. 다양한 색 표현. 압축률 훌륭. 투명하지 않음 
- png : 배경 투명. 다양한 색 표현. jpg보다 용량 크다. 
- svg : IE9이상지원. 복잡하지 않은 그래픽. 백터. 확대해도 깨지지 않는다. 코드로 구성되어 있다. 

svg 저장시 

- png express에서 저장가능 

image splite

- 수직보다 수평이 더 빠르다. 

#### figure, figcaption 요소 

- html5 요소 
- img요소를 묶어 설명하기 위한 요소 

```
<div>
  <img src="img/icon.png" alt="icon">
  <p>아이콘설명</p>
</div>

보다는 이렇게 하면 시멘틱 

<figure>
  <img src="img/icon.png" alt="icon">
  <figcaption>아이콘설명</figcaption>
</figure>
```

### 참고 

- image splite 만들고 코드 나오는 사이트 <http://spritepad.wearekiss.com/>
- image splite 파일 있을 때 코드 나오는 사이트 <http://www.spritecow.com/>