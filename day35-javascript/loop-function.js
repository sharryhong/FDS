var movielist = [];
movielist.push('터널');
movielist.push('덕혜옹주');
movielist.push('부산행');
movielist.push('서울역');

// for문 사용시
for(var i=0, l=movielist.length; i<l; i++){
	console.log('for문 :', movielist[i]);
}

// for - of문 사용시
for(var movie of movielist) {
	console.log('for of문 :', movie);
}

// for - in문 사용시 (잘 사용하지 않는다.)
for(var index in movielist){
	if(movielist.hasOwnProperty(index)){
		console.log('for in문 :', movielist[index]);
	}
}

// 배열 객체(Array)의 메소드: .forEach() // 아주 유용하다!!
// 원래는 유사배열은 안되야 하는데, 크롬만 된다. 
var test = movielist.forEach(function(item, index, arr){ 
// 원소, 인덱스, 배열자체 순서로 가져온다. 다 안써도 된다. 이름자체는 중요하지 않다.
// 나중엔 우리가 인자값 전달, 순서도 정할 수 있다. 
	console.log('item: ', item);
	console.log('index: ', index);
	console.log('arr: ', arr);

	return 'item' +  index + ':' + item; // forEach()문은 return을 반환할 수 없다. 
});

// console.log('forEach :', movielist);
console.log('forEach :', test); // return이 안되므로 undefined 


// 배열 객체(Array)의 메소드: .map() // 아주 유용하다!!
var new_movielist = movielist.map(function(item, index, arr){
	console.log('item' +  index + ':', item);
	if(index === movielist.length -1){ // 한번만 출력
		console.log('arr :', arr);
	}

	return item + '은' + index + '번째 원소입니다.';
});

console.log('forEach :', new_movielist);

// forEach()문은 array자체가 변경되지 않는다. 반환 값이 없다. (undefined). 셋팅할때 
// map()문은 return하면 array가 바뀔 수 있다. 반환 값은 수정된 배열을 반환한다.