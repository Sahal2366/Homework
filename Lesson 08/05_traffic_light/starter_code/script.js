// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// grab elements
// grab buttons 
// grab lights
// give each button a light 
 
function turnOff(){
    document.getElementById("stopLight").classList.remove("stop")
    document.getElementById("slowLight").classList.remove("slow")
    document.getElementById("goLight").classList.remove("go")
}

// go function 
function go(){
    turnOff();
    document.getElementById("goLight").classList.add("go");
}
// slow function 
function slow(){
    turnOff();
    document.getElementById("slowLight").classList.add("slow");
}
function stop(){
    turnOff();
    document.getElementById("stopLight").classList.add("stop");
}
// add an eventlistener 

document.getElementById("stopButton").addEventListener("click",stop);

document.getElementById("goButton").addEventListener("click",go);

document.getElementById("slowButton").addEventListener("click",slow);