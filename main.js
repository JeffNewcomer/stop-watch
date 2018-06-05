
var stopWatchRunning = false
var intervalID = null

document.querySelector('#startbutton').addEventListener("click", function() {     // event listener place on the start button

  if (stopWatchRunning === false){
    stopWatchRunning = true
    var interval = setInterval(increaseSeconds, 1000)                            // runs the increaseSeconds function once every second
    intervalID = interval
    document.querySelector('#startbutton').src = "pausewhite.png"; // pause
  } else {
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
}

//use an if then statement
//use clearInterval
//needs to flip from true to false?
//onclick?
