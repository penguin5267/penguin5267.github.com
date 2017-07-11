
//포트폴리오 더보기
function portfolioList() {
    //목록제어
    var workList = $(".career_list li");
    var workListLength = workList.length;

    if (workListLength > 8) {
        for (var workNum = 8; workNum < workListLength; workNum++) {
            workList.eq(workNum).hide();
        }
        $(".career_inner").addClass("current");
    } else if (workListLength <= 7) {
        $(".career_inner").removeClass("current");
    }

    //더보기버튼 제어
    $(".btn_list_more").on("click",function(){
        workList.show();
        $(".career_inner").addClass("current");

    });

}

    /*
    //프로그램소개 더보기버튼 리스트 제어
    function programinfoList() {
        var programLi = $('.pi_detail_list li');
        var programLiLenght = programLi.length;
        //li 갯수체크
        if (programLiLenght > 7) {
            for (var ii = 7; ii < programLiLenght; ii++) {
                programLi.eq(ii).hide();
            }
            $('.pibtn_open').addClass('current');
        } else if (programLiLenght <= 7) {
            $('.pibtn_open').removeClass('current');
            //console.log(programLiLenght);
        }
        $('.pibtn_open').on("click", function () {
            $(this).removeClass('current');
            $(this).parent().children('.pibtn_closed').addClass('current');
            if (programLiLenght > 7) {
                programLi.show();
            }
        });
        $('.pibtn_closed').on("click", function () {
            $(this).removeClass('current');
            $(this).parent().children('.pibtn_open').addClass('current');
            if (programLiLenght > 7) {
                for (var ii = 7; ii < programLiLenght; ii++) {
                    programLi.eq(ii).hide();
                }
            }
        });
    }
    */
