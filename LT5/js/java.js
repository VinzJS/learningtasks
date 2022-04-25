var Song = document.getElementById("Song");
var icon = document.getElementById("icon");
var Song2 = document.getElementById("song2");
var icon2 = document.getElementById("icon2");
document.getElementById("song2").volume = 0.2;
document.getElementById("Song").volume = 0.2;
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

icon.onclick = function(){
if(Song.paused){
    Song.play();
    icon.src="img/pause.png";
}else{
    Song.pause();
    icon.src="img/play.png";
}
}
icon2.onclick = function(){
    if(song2.paused){
        song2.play();
        icon2.src="img/pause.png";
    }else{
        song2.pause();
        icon2.src="img/play.png";
    }
    }
