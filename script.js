"use strict"

 
var w_minutes = 25;
var w_seconds = 0;

var w_cycles = 0;

var b_minutes = 5
var b_seconds = 0;

var tempo = 1000;
var cron;
var cron2;


function start(){
   if(w_seconds > 0  || w_minutes > 0){
      cron = setInterval(w_timer, tempo);
   }else{
      w_cycles++
      document.getElementById('w_cycles').innerHTML = w_cycles;
   }

}

function pause(){
   clearInterval(cron)
   clearInterval(cron2)
}

function reset(){

   var w_minutes = 0;
   var w_seconds = 2;

   var b_minutes = 5
   var b_seconds = 0;

}

function w_timer(){

   if (w_seconds > 0){
      w_seconds --;
      
   }else if(w_minutes > 0){
      w_seconds = 59;
      w_minutes --;
   }   

   document.getElementById('w_seconds').innerText = w_seconds;
   document.getElementById('w_minutes').innerText = w_minutes;

   

} 

   function b_timer(){

      if (b_seconds > 0){
         b_seconds --;
         
      }else if(b_minutes > 0){
         b_seconds = 59;
         b_minutes --;
      }   
   
      document.getElementById('b_seconds').innerText = b_seconds;
      document.getElementById('b_minutes').innerText = b_minutes;

   }

