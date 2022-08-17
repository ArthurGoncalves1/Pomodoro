"use strict"

var wm = 25;
var ws = 0;

var bm = 5
var bs = 0;

var counter = 0;

var startTimer;

function start(){
   if(startTimer ===undefined){
      
      startTimer = setInterval(timer, 1000);
      
   }else{
      alert("Timer is already running")
   }
}


function timer(){
   if( ws != 0){
      console.log(startTimer)
      ws--;
   } else if(wm != 0 && ws == 0){
      ws = 59;
      wm--;
   }

   document.getElementById('w_minutes').innerText = wm + ":"
   document.getElementById('w_seconds').innerText = ws

   if(wm == 0 && ws == 0){
      if(bs != 0){
         bs--;
         document.getElementById('b_seconds').innerText = bs
      }else if(bm != 0 && bs ==0){
         bs = 59;
         bm--;
         document.getElementById('b_minutes').innerText = bm + ":"
         document.getElementById('b_seconds').innerText = bs
      }
   }

   
  

   if(wm == 0 && ws == 0 && bm == 0 && bs == 0){
      wm = 25;
      ws = "00";

      bm = 5;
      bs = "00";

      counter++;
      document.getElementById('w_cycles').innerText = counter;
   }
}

function pause(){
   clearInterval(startTimer);
   startTimer = undefined;
}

function reset(){
   document.getElementById('w_minutes').innerText = 25 + ":"
   document.getElementById('w_seconds').innerText = "00"
   wm = 25
   ws = 0 

   document.getElementById('b_minutes').innerText = 5 + ":"
   document.getElementById('b_seconds').innerText = "00"
   bm = 5
   bs = 0

   document.getElementById('w_cycles').innerText = 0;
   counter = 0

   pause();
}
