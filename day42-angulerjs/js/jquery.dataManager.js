// 미션 (로컬스토리지를 쓰기 쉽게 추상화 하기)
// 가공된 형태의 사용자 정의 객체 만들기
// 정의할 사용자 정의 객체는 로컬스토리지 제어에 유용한 메소드를 포함 
// 데이터 가져오기/저장하기/지우기/모두지우기 제공 (메소드)
// -> 만들어서 jquery속성에 할당해서 jquery에 추가하여 사용하기 

(function(global, $){
	'use strict';

	// jQuery 네임스페이스 객체(함수)
	// 함수 객체의 속성으로 dataManger 객체를 설정
	// jQuery 유틸리티 메소드라 명한다.
	// $.dataManager = { // jQuery에 연결
	
	// jQuery에 묶지 않고 사용
	var dataManager = {
		// 'support': function([feature]) { 로컬스토리지 또는 JSON 지원하는지 유무를 객체로 반환. feature가 제공되면 true/false로 반환 }
		'support': (function(){ // IIFE패턴 응용
			var json = !!global.JSON; 
			var localstorage = !!global.localstorage;
			return function(feature) {
				if(!feature) { // feature(기능)가 없을 때
					// feature란 json과 localstorage가 있는가 체크
					return {
						'json': json,
						'localstorage': localstorage // 마지막에 ,해도 되고, 안써도 된다. 다른 언어에서 ,하면 오류발생할 수 있다.
					};
				} 
				// feature가 있을 때
				feature = feature.toLowerCase();
				if(feature === 'json') { return json; } // if문이 한줄일 때는 {} 생략 가능하다. 
				if(feature === 'localstorage') { return localstorage; }
			}
		})(),

		// 'get': function(key) { return 로컬스토리지로부터데이터를 반환(문자->객체) },
	'get': function(key) {
		if (!key || $.type(key) !== 'string' || !this.support().json || this.support('localstorage')) {}
		return global.JSON.parse( global.localStorage.getItem(key) );
	},
	// 'set': function(key, value) { 전달된 value를 문자화 해서 로컬스토리지 객체의 key 값으로 저장 },
	'set': function(key, value) {
		if ( !key || !value || $.type(key) !== 'string' || !this.support().json || this.support('localstorage') ) {}
			global.localStorage.setItem(  key, global.JSON.stringify(value));
	},
	// 'del': function(key) { key에 해당하는 데이터를 로컬스토리지로부터 제거한다. },
	'del': function(key) { global.localStorage.removeItem(key); },
	// 'clear': function() { 로컬스토리지 데이터가 존재할 경우, 모든 데이터를 제거한다. }
	'clear': function() { global.localStorage.clear(); }
	};

	$.dataManager = dataManager;


// })(this, (this.sharry = this.sharry || {}) );
})(this, this.jQuery);