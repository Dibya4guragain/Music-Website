var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused){
    mySong.play();
    mySong1.pause();
    mySong2.pause();
    mySong3.pause();
    icon.src ="./images/play.png";
    icon1.src ="./images/pause.png"
    icon2.src ="./images/pause.png"
    icon3.src ="./images/pause.png"  
  }
  else{
    mySong.pause();
    icon.src = "./images/pause.png";
  }
}

var mySong1 = document.getElementById("mySong1");
var icon1 = document.getElementById("icon1");

icon1.onclick = function () {
  if (mySong1.paused){
    mySong1.play();
    mySong.pause();
    mySong2.pause();
    mySong3.pause();
    icon1.src ="./images/play.png";
    icon.src ="./images/pause.png"
    icon2.src ="./images/pause.png"
    icon3.src ="./images/pause.png" 
  }
  else{
    mySong1.pause();
    icon1.src = "./images/pause.png";
  }
}

var mySong2 = document.getElementById("mySong2");
var icon2 = document.getElementById("icon2");

icon2.onclick = function () {
  if (mySong2.paused){
    mySong2.play();
    mySong1.pause();
    mySong.pause();
    mySong3.pause();
    icon2.src ="./images/play.png";
    icon1.src ="./images/pause.png"
    icon.src ="./images/pause.png"
    icon3.src ="./images/pause.png" 
  }
  else{
    mySong2.pause();
    icon2.src = "./images/pause.png";
  }
}

var mySong3 = document.getElementById("mySong3");
var icon3 = document.getElementById("icon3");

icon3.onclick = function () {
  if (mySong3.paused){
    mySong3.play();
    mySong1.pause();
    mySong2.pause();
    mySong.pause();
    icon3.src ="./images/play.png";
    icon1.src ="./images/pause.png"
    icon2.src ="./images/pause.png"
    icon.src ="./images/pause.png" 
  }
  else{
    mySong3.pause();
    icon3.src = "./images/pause.png";
  }
}