
var randNumberGen = Math.floor((Math.random() * 100) + 1);

var count = 0;


$(document).ready(function() {
  console.log(randNumberGen);
  $("button").on("click", function() {
    // alert($("input").val());
    randomNum();
  })

});

function randomNum() {


  var guess = $("input").val();

      $("p").html(6 - count + " guesses left.");
      $("p").addClass("intro");


    if (parseInt(guess) > randNumberGen) {
      $("ol").append("<li>Guess lower. Try again.</li>");
    }
    if (parseInt(guess) < randNumberGen) {
      $("ol").append("<li>Guess higher. Try again.</li>");
      }
    if (parseInt(guess) === randNumberGen) {
      $("ol").append("<li>you guessed right! You Win!</li>");
      }
    if (count === 6) {
      $("button").hide();
      $("input").hide();
      alert("YOU LOSE!")
      }
    count = count + 1;
    console.log(count);
}
