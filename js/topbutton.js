topButton = document.getElementById("backTop");
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function returnToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}