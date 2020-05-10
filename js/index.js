// TABS JS
let defaultTab = document.getElementById("default") 

if (defaultTab) {  //checks if default is true(an id on the page)
    defaultTab.click();
}

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
let topButton = document.getElementById("backTop");

if (topButton) {
    window.onscroll = scrollFunction;
}

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
