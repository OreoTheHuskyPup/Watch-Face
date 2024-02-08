"use strict";
function faceCalc(){
    var face=document.getElementById("face");
    if(window.innerWidth<window.innerHeight){
        document.getElementById("face").style.width=window.innerWidth+"px";
        document.getElementById("face").style.height=window.innerWidth+"px";
    } else {
        document.getElementById("face").style.width=window.innerHeight+"px";
        document.getElementById("face").style.height=window.innerHeight+"px";
    }
    face.style.borderRadius=face.offsetWidth/2+"px";
    window.radius=face.offsetWidth/2;
}
function drawCenter(){
    document.getElementById("center").style.top=window.radius-5+"px";
    document.getElementById("center").style.left=window.radius-5+"px";
}
function drawHourHand(hours){
    document.getElementById("hourhand").style.top=window.radius*0.25+"px";
    document.getElementById("hourhand").style.left=window.radius-5+"px";
    document.getElementById("hourhand").style.height=window.radius*0.75+"px";
    document.getElementById("hourhand").style.transform="rotate("+hours+")";
}
function drawMinuteHand(minutes){
    document.getElementById("minutehand").style.top=window.radius*0.15+"px";
    document.getElementById("minutehand").style.left=window.radius-5+"px";
    document.getElementById("minutehand").style.height=window.radius*0.85+"px";
    document.getElementById("minutehand").style.transform="rotate("+minutes+")";
}
function drawSecondHand(seconds){
    document.getElementById("secondhand").style.top=window.radius*0.15+"px";
    document.getElementById("secondhand").style.left=window.radius-5+"px";
    document.getElementById("secondhand").style.height=window.radius*0.85+"px";
    document.getElementById("secondhand").style.transform="rotate("+seconds+")";
}
function drawClock(){
    var time=new Date();
    var seconds=time.getSeconds()*6+6/(1000/time.getMilliseconds())+"deg";
    drawSecondHand(seconds);
    var minutes=(time.getMinutes()+((time.getSeconds()*1000+time.getMilliseconds())/60000))*6+"deg";
    drawMinuteHand(minutes);
    var hours=(time.getHours()+((time.getMinutes()*60000+time.getSeconds()*1000+time.getMilliseconds())/3600000))*30+"deg";
    drawHourHand(hours);
}
setInterval(drawClock,10);
