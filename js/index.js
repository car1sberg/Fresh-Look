// Used to toggle the menu on small screens when clicking on the menu button
$(function () {
    $("#hiddenBlock").css({display:'block'}).animate({opacity:'1'}, 4000)
});


function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
