var start = document.getElementById('start')
var reset = document.getElementById('reset')
var pause = document.getElementById('pause')


var wm = document.getElementById('w_minutes') 
var ws = document.getElementById('w_seconds') 

var bm = document.getElementById('b_minutes') 
var bs = document.getElementById('b_seconds') 


var StartTimer;

function oi(){
    wm--
}


/*start.addEventListener('click', function(){
    if(StartTimer === undefined){
        StartTimer = setInterval(timer, 1000)
    }else{
        alert("Timer is running")
    }
})

function timer(){
    //work timer count
    if(ws.innerText != 0){
        ws.innerText --
    }else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59
        wm.innerText --
    }

    //break time count
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText --
        }else if (bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59
            bm.innerText --
        }
    }

    //increment counter 
    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25
        ws.innerText = "0"

        bm.innerText = 5
        bs.innerText = "00"

        document.getElementById('w_cycles').innerText++
    }
}*/