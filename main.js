
var stopWatchRunning = false
var intervalID = null
document.querySelector('#resetbutton').style.visibility = "hidden";             // hides the reset button until stopwatch is paused

document.querySelector('#startbutton').addEventListener("click", function() {   // event listener place on the start button

  if (stopWatchRunning === false){
    stopWatchRunning = true
    var interval = setInterval(increaseSeconds, 1000)                           // runs the increaseSeconds function once every second
    intervalID = interval
    document.querySelector('#startbutton').src = "pausewhite.png";
    document.querySelector('#resetbutton').style.visibility = "visible";
  } else {
    stopWatchRunning = false
    clearInterval(intervalID)
    intervalID = null
    document.querySelector('#startbutton').src = "playblue.png"; //restart
  }
})

var seconds = 0;
function increaseSeconds( ) {                                                   // increases seconds in intervals of 1
  seconds = seconds +1
  var updateCountOnSite = document.getElementById('secondCounter')              // updates the DOM with the current value of seconds
  updateCountOnSite.textContent = seconds
}

// code for the reset button function
document.querySelector('#resetbutton').addEventListener("click", function() {
  if (stopWatchRunning === false){
  seconds = 0
  var updateCountOnSiteReset = document.getElementById('secondCounter')         // updates the DOM with the current value of seconds
  updateCountOnSiteReset.textContent = seconds
  stopWatchRunning = false
  clearInterval(intervalID)
  intervalID = null
  document.querySelector('#resetbutton').style.visibility = "hidden";
  }
})
