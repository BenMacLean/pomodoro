var text, interval;
//page initialization crap
$(document).ready(function() {
  console.log("ready");

text=$("#timeRemaining")[0]
console.log(text);

})

$("#startButton").click(function() {
  console.log("start");
  text.innerText="start"
  loop()

})

$("#stopButton").click(function() {
  console.log("stop");
  clearInterval(interval)
})

function loop() {
  interval = setInterval(function() {
    console.log("interval");
  },1000)
}
