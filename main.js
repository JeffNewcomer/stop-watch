
var stopWatchRunning = false
var intervalID = null
var $input = document.getElementById('input')
document.querySelector('#resetbutton').style.visibility = "hidden";               // hides the reset button

document.querySelector('#startbutton').addEventListener("click", function() {     // event listener place on the start button

  if (stopWatchRunning === false){                                               //  runs the timer
    stopWatchRunning = true
    var interval = setInterval(increaseSeconds, 1000)                            // runs the increaseSeconds function once every second
    intervalID = interval
    document.querySelector('#startbutton').src = "pausewhite.png";
    document.querySelector('#resetbutton').style.visibility = "visible";
  } else {                                                                       // pauses the timer
    stopWatchRunning = false
    clearInterval(intervalID)
    intervalID = null
    document.querySelector('#startbutton').src = "playblue.png"; //restart
  }
})

var seconds = 0;
function increaseSeconds( ) {                                                      // increases seconds in intervals of 1
  seconds = seconds +1
  var updateCountOnSite = document.getElementById('secondCounter')                 // updates the DOM with the current value of seconds
  updateCountOnSite.textContent = seconds

  //timelimit feature

  var inputValueToNumber = Number($input.value)

  if (($input.value!=="") && (seconds === inputValueToNumber)){
    stopWatchRunning = false
    clearInterval(intervalID)
    intervalID = null
    document.querySelector('#startbutton').src = "playblue.png";
  }
}

// code for the reset button function
document.querySelector('#resetbutton').addEventListener("click", function() {
  if (stopWatchRunning === false){
  seconds = 0
  $input.value = ""
  var updateCountOnSiteReset = document.getElementById('secondCounter')                 // updates the DOM with the current value of seconds
  updateCountOnSiteReset.textContent = seconds
  stopWatchRunning = false
  clearInterval(intervalID)
  intervalID = null
  document.querySelector('#resetbutton').style.visibility = "hidden";
  }
})
