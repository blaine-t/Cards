var timerStart = true;

function myTimer(d0){
   // get current time
   var d=(new Date()).valueOf();
   // calculate time difference between now and initial time
   var diff = d-d0;
   // calculate number of seconds
   var seconds = Math.floor(diff/1000);
   var ms = diff-seconds*1000;
   // if number of minutes less than 10, add a leading "0"
   seconds = seconds.toString();
   // if number of seconds less than 10, add a leading "0"
   ms = ms.toString();
   if (ms.length <= 1){
      ms = "00"+ms;
   } else if (ms.length <= 2) {
    ms = "0"+ms;
   }

   // return output to Web Worker
   postMessage("Time: " + seconds+"."+ms + "s");
}

if (timerStart){
   // get current time
   var d0=(new Date()).valueOf();
   // repeat myTimer(d0) every 100 ms
   myVar=setInterval(function(){myTimer(d0)},1);
   // timer should not start anymore since it has been started
   timerStart = false;
}