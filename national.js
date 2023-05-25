var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function (){
  if(mySong.paused){
    mySong.play();
    mySong1.pause();
    icon.src= "./images/play.png";
    icon1.src="./images/pause.png";
  }
  else{
    mySong.pause();
    icon.src="./images/pause.png";
  }
}

var mySong1 = document.getElementById("mySong1");
var icon1 = document.getElementById("icon1");

icon1.onclick = function (){
  if(mySong1.paused){
    mySong1.play();
    mySong.pause();
    icon1.src= "./images/play.png";
    icon.src="./images/pause.png";
  }
  else{
    mySong1.pause();
    icon1.src="./images/pause.png";
  }
}