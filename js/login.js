var b = $("#start-button").on("click", function () {
    alert(2333)
    if ($("#account").text == "") {
        $("#account").parent().addClass("has-error");
        alert(2333)
    } else if ($("#password").text == "") {
        $("#password").parent().addClass("has-error");
    } else {
        login()
    }
});
$("#account").on("click", function () {
    alert(2333)
})
