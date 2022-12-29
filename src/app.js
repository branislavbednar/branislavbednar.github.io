function showCollapsedMenu() {
    var collapsedMenu = document.getElementById("collapsedMenu");
    if (collapsedMenu.className.indexOf("w3-show") == -1){
        collapsedMenu.className += " w3-show";
    } else {
        collapsedMenu.className = collapsedMenu.className.replace(" w3-show", "");
    }
}

function collapseMenu() {
    var collapsedMenu = document.getElementById("collapsedMenu");
    collapsedMenu.className = collapsedMenu.className.replace(" w3-show", "");
}

function countYearsOfExperience() {
    var actualYear = new Date().getFullYear()
    var yearsOfExperience = actualYear - 2018;
    return yearsOfExperience;
}