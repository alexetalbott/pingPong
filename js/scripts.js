//business logic

//var Rule1 = function(input){
    //return input;
//  };


//user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var pingPongInput = parseInt($("input#yourNumber").val());
    var counting = [];
    for (var index = 0; index < pingPongInput; index += 1) {
      if ((index % 3 === 0) && (index % 5 === 0)) {
        counting.push("PingPong");
      } else if (index % 3 === 0){
      counting.push("ping");
      } else if (index % 5 === 0){
      counting.push("pong");
      } else {
      counting.push(index);
      };
    };
  $(".showNumber").text(counting.join("\n"));
  $("#results").show();
});
});

// create a blank array
// assign userInput to a variable
// create a loop that pushes numbers AND displays it into the blank array for as long as index < userInput
// once that works, create ANOTHER function that replaces the numbers?
