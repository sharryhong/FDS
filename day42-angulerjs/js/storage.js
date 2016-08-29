(function(global, storage, $){
	'use strict';

	// root요소인 <html>을 참조하는 jQuery 객체 생성
	var $html = $('html');

	// 사용자의 웹브라우저가 localstorage를 지원하는가
	if(storage) {
		$html.addClass('localstorage');
		// <html lang="ko-KR" class="localstorage">
	} else {
		$html.addClass('no-localstorage');
	}

	// 지원이 안된다면 사용자에게 웹브라우저 업데이트 권고
	if($html.hasClass('no-localstorage')) {
		console.info('로컬스토리지가 지원되는 최신 브라우저로 업데이트 하세요.');
		return; // 함수 종료
	}

	// 사용자의 웹브라우저에 데이터를 저장/가져오기/지우기 등을 수행할 수 있다. 

	// 데이터 가져오기 
	var FDS = storage.getItem('FDS');
	FDS ? console.log('FDS 값 : ', FDS) : console.log('FDS는 존재하지 않습니다.');

	// 데이터 저장하기 (내 브라우저에만)
	if(!FDS) { // FDS값이 없을 때만 데이터 저장
		storage.setItem('FDS', 'Front-End Develop School, Fast Compus');
	}

	// 데이터 1개 지우기
	if(FDS) { // FDS값이 있을 때만 데이터 삭제
		storage.removeItem('FDS');
	}

	 // key 데이터가 1개 이상 있다면 모든 데이터 지우기 
	 storage.length > 0 && storage.clear();

	 // JSON 데이터
	 // javascript object -> json text -> javascript object
	 // Model Data 
	 var sharry = { // 객체를 바로 저장할 수는 없고 문자화 시켜야 한다. 
	 	'name': '홍이',
	 	'job': 'FED',
	 	'age': '15',
	 	'gender': '여',
	 	'email': 'sharry@gmail.com',
	 	'favorites': ['여행','먹는것','영화']
	 };

	 // 로컬스토리지에 sharry 저장
	 // storage.setItem('sharry', sharry);
	// 테스트: 	 localStorage.getItem('sharry');
	// 결과 : 	"[object Object]" 객체 정보가 저장되어 있는게 아니라 객체임을 나타낼 뿐 

	// 객체 -> 문자 상대로 저장
	var str_sharry = JSON.stringify(sharry);
	storage.setItem('sharry', str_sharry);

	// 문자 -> 객체 (필요한 시점에서.. 가져올때)
	var getted_sharry = storage.getItem('sharry');
	getted_sharry = JSON.parse(getted_sharry); // object
	console.log(getted_sharry);

	// 전역에 공개
	global.sharry = sharry;

	// =====================================================
	// 미션 (로컬스토리지를 쓰기 쉽게 추상화 하기)
	// 가공된 형태의 사용자 정의 객체 만들기
	// 정의할 사용자 정의 객체는 로컬스토리지 제어에 유용한 메소드를 포함 
	// 데이터 가져오기/저장하기/지우기/모두지우기 제공 (메소드)

	storage.st({
		'get' : function(name) {
			storage.getItem(name);
		},
		'set' : function(name, data) {
			storage.setItem(name, data);
		},
		'remove' : function(name) {
			storage.removeItem(name);
		}
		'removeAll' : function() {
			storage.clear();
		}
	});

	// =====================================================
	// 쌤 
	// hong.dataManager.js 에 적음


})(this, this.localStorage, this.jQuery);