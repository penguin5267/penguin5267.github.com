var scrolltopCenter;

$(function(){

	$(window).load(function () {
		init();
	});

	$(window).bind('mousewheel',function(){
		mousewheelEvent();
	});

	$(window).on('resize', function(){
		mousewheelEvent();
	});
	

	$(window).bind('scroll', function(){
		scrollMotion();
	});

});

// 초기화
function init(){
	moveSection(1); 
}

// 마우스 힐 이벤트
function mousewheelEvent() {
	if ( $(window).height() > 840 ) { // 최소사이즈 체크 후 제안
		$('#section1').bind('mousewheel', function(e) {
			if(e.preventDefault) e.preventDefault();
			if(e.originalEvent.wheelDelta / 120 > 0) { }
			else moveSection(2);
		});

		$('#section2').bind('mousewheel', function(e) {
			if(e.preventDefault) e.preventDefault();
			if(e.originalEvent.wheelDelta / 120 > 0) { moveSection(1); }
			else { moveSection(3); }
		});

		$('#section3').bind('mousewheel', function(e) {
			if(e.preventDefault) e.preventDefault();
			if(e.originalEvent.wheelDelta / 120 > 0) { moveSection(2); }
			else { moveSection(4); }
		});

		$('#section4').bind('mousewheel', function(e) {
			if(e.preventDefault) e.preventDefault();
			if(e.originalEvent.wheelDelta / 120 > 0) { moveSection(3); }
			else {  }
		});
	} else {
		$('.section').unbind('mousewheel');
	}
}

// 메인 스크롤 모션
function scrollMotion(){
	scrolltopCenter = $(window).scrollTop() + ( $(window).height() / 2 ) + 300;

	var $section1 = $("#section1"),
		$section2 = $("#section2"),
		$section3 = $("#section3"),
		$section4 = $("#section4");
	
	if ( ($section1.offset().top < scrolltopCenter) && ($section1.offset().top + $section1.height() > scrolltopCenter) ) {		
		//$section1.addClass("animate");
		console.log("motion1");
		showNavi(1);
	} else if ( ($section2.offset().top < scrolltopCenter) && ($section2.offset().top + $section2.height() > scrolltopCenter) ) {		
		//$section2.addClass("animate");
		console.log("motion2");
		showNavi(2);
	} else if ( ($section3.offset().top < scrolltopCenter) && ($section3.offset().top + $section3.height() > scrolltopCenter) ) {		
		//$section3.addClass("animate");
		console.log("motion3");
		showNavi(3);
	} else if ( ($section4.offset().top < scrolltopCenter) && ($section4.offset().top + $section4.height() > scrolltopCenter) ) {
		//$section4.addClass("animate");
		console.log("motion4");
		showNavi(4);
	}
}


// indicator 표시
function showNavi(index) {
	$(".nav li.on").removeClass("on").addClass("off");
	if ( index > 0) {
		$(".nav li:eq(" + (index-1) + ")").removeClass("off").addClass("on");
	}

	$(".nav li .hvr-grow").css({transform:'scale(.6)'});
	$(".nav li:eq("+ (index-1) +") .hvr-grow").css({transform:'scale(1)'});

}

// section 바로가기
function moveSection( val ) {
	$("html,body").stop().animate({ scrollTop: $("#section" + val).offset().top },400);
}