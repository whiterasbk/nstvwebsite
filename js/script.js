window.onload = function (ev) {
    var leftLinks = ["qqgroup", "bilibili", "youku", "sina", "qqzone"];
    for (var i in leftLinks) {
        onleftClick("#left-join-in-" + leftLinks[i]);
        console.log("#left-join-in-" + leftLinks[i]);
}
}

function onleftClick(id) {
    var tag = $(id).on("click", function () {
        var topPage = $("#nstv" + id.replace("#left-join-in", ""));
        topPage.parent().find(".hiding-page").slideUp();
        if (!topPage.is(":visible")) {
            topPage.slideDown();
        } else {
            topPage.slideUp();
        }
        tag.addClass("active");
        $("#left-join-in-title").removeClass("active");
        setInterval(function () {
            tag.removeClass("active");
            $("#left-join-in-title").addClass("active");
        }, 700);
        console.log("#nstv" + id.replace("#left-join-in", ""));
    })
}
