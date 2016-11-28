// 자료형 데이터 유형은 데이터가 참조가 된다.

// --------------------------------------
// 변수에 복사/참조되는 값의 유형을 확인하기 위해 실습

// 문서에서 .brand 요소를 찾아 변수 brand에 참조(reference)
var brand = query('.brand');
// string literal data (primitive data)
// 변수 brand_txt에 복사(cody)된 값은 문자 유형의 데어터이다. 
var brand_txt = brand.firstChild.nodeValue;

