document.querySelector('#startbutton').addEventListener("click", function() {


})
var seconds = 0;

function increaseSeconds( ) {
  seconds = seconds +1
  var updateCountOnSite = document.getElementById('secondCounter')
  updateCountOnSite.textContent = seconds
}
