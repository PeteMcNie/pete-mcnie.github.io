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