var Song = document.getElementById("Song");
var icon = document.getElementById("icon");
var Song2 = document.getElementById("Song2");
var icon2 = document.getElementById("icon2");
document.getElementById("Song2").volume = 0.2;
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
    if(Song2.paused){
        Song2.play();
        icon2.src="img/pause.png";
    }else{
        Song2.pause();
        icon2.src="img/play.png";
    }
    }
