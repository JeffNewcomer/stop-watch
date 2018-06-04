// event listener place on the start button
document.querySelector('#startbutton').addEventListener("click", function() {
  // runs the increaseSeconds function once every second
  setInterval(increaseSeconds, 1000)
})
// increases seconds in intervals of 1
var seconds = 0;
function increaseSeconds( ) {
  seconds = seconds +1
// updates the DOM with the current value of seconds
  var updateCountOnSite = document.getElementById('secondCounter')
  updateCountOnSite.textContent = seconds
}
