window.onload = function (ev) {
    if (true) {
        hideDiv();
        showError();
        setInterval(function () {
            window.location.href = "login.html";
        }, 5 * 1000);
    } else {
        $("#unlogin").hide();
        loadContent();

    }
}

function hideDiv() {

}

function showError() {

}

function loadContent() {

}