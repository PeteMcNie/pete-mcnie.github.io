// TABS JS
document.getElementById("default").click();

function changeTab (event, tabName) {
    let tabContent = document.getElementsByClassName("tabcontent");;
    let tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}


// BACK TO TOP BUTTON
topButton = document.getElementById("backTop");
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function returnToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
