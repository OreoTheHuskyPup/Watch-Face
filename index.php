<!doctype HTML>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/png" href="../me.png">
<style>
body{margin:0;}
.face{border:1px solid;box-sizing:border-box;background:url(../me.png) black;background-size:80% 80%;background-repeat: no-repeat;background-position: center;}
.hourhand{z-index:2;width:10px;border-radius:5px;background-color:yellow;position:absolute;transform-origin:bottom;}
.minutehand{z-index:1;width:10px;border-radius:5px;background-color:red;position:absolute;transform-origin:bottom;}
.secondhand{z-index:3;width:10px;border-radius:5px;background-color:rgba(0,0,255,0.6);position:absolute;transform-origin:bottom;}
.center{z-index:15;position:absolute;width:10px;height:10px;border-radius:5px;background-color:silver;}
</style>
<script src="script.js"></script>
</script>
</head>
<body onresize="faceCalc();drawCenter();drawClock();" onload="faceCalc();drawCenter();drawClock();">
    <div id="face" class="face">
        <div class="center" id="center"></div>
        <div class="hourhand" id="hourhand"></div>
        <div class="minutehand" id="minutehand"></div>
        <div class="secondhand" id="secondhand"></div>
    </div>
</body>
<html>