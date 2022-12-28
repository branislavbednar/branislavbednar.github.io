function showCollapsedMenu() {
    var collapsedMenu = document.getElementById("collapsedMenu");
    if (collapsedMenu.className.indexOf("w3-show") == -1){
        collapsedMenu.className += " w3-show";
    } else {
        collapsedMenu.className = collapsedMenu.className.replace(" w3-show", "");
    }
}