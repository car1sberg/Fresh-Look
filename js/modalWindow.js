// ~~~~~  Modal Window ~~~~~~~
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var c = document.getElementsByClassName("biggerImg");
//var captionText = document.getElementById("caption");
for (var i = 0; i < c.length; i++) {
    c[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        //captionText.innerHTML = this.alt;
    }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
