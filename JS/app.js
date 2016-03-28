var text, interval, counter=1500;
//page initialization crap
$(document).ready(function() {
  console.log("ready");

text=$("#timeRemaining")[0]
console.log(text);




})

//submit button
$("#submitButton").click(function() {
  console.log("submitButton");
  console.log($("#minutes")[0].value);
  counter = $("#minutes")[0].value * 60;
})

//loop start
$("#startButton").click(function() {
  console.log("start");
  clearInterval(interval);
  loop();

})

//loop pause
$("#pauseButton").click(function() {
  console.log("pause");
  clearInterval(interval);

})

//resume
$("#resumeButton").click(function(){
  clearInterval(interval);
  loop();
})

//loop reset
$("#resetButton").click(function() {
  console.log("reset");
  clearInterval(interval);
  counter=1500;
  text.innerText=convertToTime(counter);
})

//1 second loop
function loop() {
  interval = setInterval(function() {
    text.innerText=convertToTime(counter);
    console.log("interval");
    counter--;
  },1000)
}

function convertToTime(counter) {
var minutes = Math.floor(counter/60)
var seconds = counter%60
if (seconds.toString().length === 1) {
  //add a zero before digit
  seconds = "0" + seconds
}
  return minutes+ ":" + seconds
}
