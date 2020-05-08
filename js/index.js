// TABS JS
function changeTab (event, tabName) {
    let tabContent;
    let tablinks;

    tabContent = document.getElementsByClassName("tabcontent");

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += "active";
}