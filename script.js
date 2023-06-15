var minutesObj = document.getElementById("minutes");
var secondsObj = document.getElementById("seconds");

var minutes = parseInt(minutesObj.innerHTML);
var seconds = parseInt(secondsObj.innerHTML);

var start = document.getElementById("start");
var pause = document.getElementById("pause");
var stop = document.getElementById("stop");


var spn = document.querySelector("#start span");
console.log(spn);

var timerID;
var flag = false;
start.addEventListener('click', ()=>{
    flag = !flag
    if (flag) {
        spn.innerHTML = "pause";
        timerID = setInterval(()=>{
            minutesObj.innerHTML = minutes;
            secondsObj.innerHTML = seconds;
            if(minutes == 0 && seconds == 0){
                clearInterval(timerID);
                alert("Timer Ended");
                minutesObj.innerHTML = '25';
                secondsObj.innerHTML = '00';
            }
            if(seconds == 0){
                secondsObj.innerHTML = '00';
                minutes--;
                seconds = 60;
            }
            seconds--;    
        }, 1000)
    } else {
        spn.innerHTML = "start";
        clearInterval(timerID);
    }
    
})

stop.addEventListener('click', ()=>{
    if (spn.innerHTML = "pause"){
        spn.innerHTML = "start";
        flag = false;
    }
    alert("Timer Stopped");
    clearInterval(timerID);
    minutesObj.innerHTML = '25';
    secondsObj.innerHTML = '00';
    minutes = 25;
    seconds = 0;
})

var flag2 = false;
var settings = document.querySelector("#settings span i");
var wlpp = document.getElementById("wallpaper");
settings.addEventListener("click", ()=>{
    flag = !flag;
    if (flag) {
        settings.style = "transform : rotate(45deg)";
        wlpp.style = "opacity:1";
    } else {
        settings.style = "transform : rotate(0deg)";
        wlpp.style = "opacity : 0";

    }
    
})

var bg = document.getElementsByClassName("bgnames");
var body = document.getElementsByTagName("body");
for(let i=0; i<bg.length; i++){
    bg[i].addEventListener('click', ()=>{
        var names = bg[i].innerHTML;
        console.log(names);
        body[0].style = `background-image : url(${names}.jpg)`; 
        
    })
}
