var index_lflag = 0;

function indexInfonLunbo() {
    var img = ["th.png", "th.png", "th.png", "th.png", "th.png", "th.png"];
    $(".arrowRight").click(function () {
        //最后一张有提示
        if (index_lflag == img.length - 1) {
            // alert("最后一张");
        } else {
            index_lflag++;
            var i = index_lflag + 1;
            //添加背景图片
            $(".adver").css("background", "url(/img/" + img[index_lflag] + ")");
            $("li:nth-of-type(" + i + ")").css("background", "orange");
            //下一个节点sibling()查找同类别的所有属性
            $("li:nth-of-type(" + i + ")").sibling().css("background", "#333333");
        }
    });

    $(".arrowLeft").click(function () {
        if (index_lflag == 0) {
            // alert("这是第一张图片");
        } else {
            index_lflag--;
            var i = flag + 1;
            $(".adver").css("background", "url(file:///C:/Users/hanxi/Desktop/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/img/" + img[flag] + ")");
            //结构选择器
            $("li:nth-of-type(" + i + ")").css("background", "orange");
            //下一个节点
            $("li:nth-of-type(" + i + ")").sibling().css("background", "#333333");
        }
    });

    $(".adver").mousemove(function () {
        $(".arrowRight").show();
        $(".arrowLeft").show();
    }).mouseout(function () {
        $(".arrowRight").hide();
        $(".arrowLeft").hide();
    });
}

