
//포트폴리오 더보기
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

function snsAlert(){
    //sns인스타클릭시 안내팝업
    $(".snsicon_ig").on("click",function(){
        alert('Mobile에서만 접속가능합니다');

    });
}

