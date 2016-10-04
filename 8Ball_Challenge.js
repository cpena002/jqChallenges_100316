$(document).ready(function() {
  $("button").on("click", function() {
    generateAnswer();
  });
});

function generateAnswer() {
  var question = $("#question").val();
  console.log(question);

  // If question is empty...
  if (question === "" ) {
    $("p").text("Please enter a question.");

  // If question is valid...
  } else {

    var random = Math.floor(Math.random() * 4);
    var answer = "";
    console.log(random);

    if(random == 0){
      answer = "Never in your life!";
    }
    if (random == 1){
      answer = "Sometimes, but not always.";
    }
    if(random == 2){
      answer = "No, but maybe.";
    }
    if(random == 3){
      answer = "Yes, it's doubtful. ";
    }

    // Update paragraph with answer on page
    $("p").text(answer); //This line of text was added to each if statement with a random number. A better way to accomplish the same goal was to create a variable and use it to chage the .text of the <p> tag. IF YOU'RE REPEATING YOURSELF, CHECK IF YOU CAN USE A VARIABLE. DON'T REPEAT YOURSELF. 

  }

    $("#question").val(""); //We initially had this bit of code inside the $(document).ready function and was changing the value of the input box to an empty string. This was preventing the answer function to execute the if statements.
}
