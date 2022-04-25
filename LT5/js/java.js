var Song = document.getElementById("Song");
var icon = document.getElementById("icon");
var Song2 = document.getElementById("Song2");
var icon2 = document.getElementById("icon2");
document.getElementById("song2").volume = 0.2;
document.getElementById("Song").volume = 0.2;

icon.onclick = function(){
Song.play();
}
icon2.onclick = function(){
song2.play();
}
