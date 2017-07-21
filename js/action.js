//포트폴리오 목록제어,더보기
function portfolioList() {
    //목록제어
    var workList = $(".career_list li");
    var workListLength = workList.length;
    var index = 8;
    var length  = workListLength - 8;

    if (workListLength > 8) {
        for (var workNum = 8; workNum < workListLength; workNum++) {
            workList.eq(workNum).hide();
        }
    }

    //더보기버튼 제어
    $(".btn_list_more").on("click",function(){
        if (workListLength > 8) {
            if(length > 8){
                length = index +8;
                for (index; index < length; index++) {
                    workList.eq(index).show();
                }
                length = workListLength -length;
            }else{
                length = index + length;
                for (index; index < length; index++) {
                    workList.eq(index).show();
                }
            }
        }
    });
}

//sns인스타클릭시 안내팝업
function snsAlert(){
    $(".snsicon_ig").on("click",function(){
        alert('Mobile에서만 접속가능합니다');
    });
}

//스크롤 모션
function scrollMotion(){
    scrollMiddle = $(window).scrollTop()+($(window).height()/2)+300;
    var $section1 =$("#section1"),
        $section2 =$("#section2"),
        $section3 =$("#section3");
    if(($section1.offset().top<scrollMiddle)&&($section1.offset().top+$section1.height()>scrollMiddle)){
        console.log("motion1");
        menuBar(1);
    }else if ( ($section2.offset().top < scrollMiddle) && ($section2.offset().top + $section2.height() > scrollMiddle) ) {
        console.log("motion2");
        menuBar(2);
    } else if ( ($section3.offset().top < scrollMiddle) && ($section3.offset().top + $section3.height() > scrollMiddle) ) {
        //$section3.addClass("animate");
        console.log("motion3");
        menuBar(3);
    }
}

// indicator 표시
function menuBar(index) {
    $(".mgl_cont.current").removeClass("current").addClass("current");
    if (index > 0) {
        $(".mgl_cont:eq(" + (index - 1) + ")").removeClass("current").addClass("current");
    }
}

// section 바로가기
    function moveSection( val ) {
        $("html,body").stop().animate({ scrollTop: $("#section" + val).offset().top },400);
    }