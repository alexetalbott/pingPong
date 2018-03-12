

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var pingPongInput = parseInt($("input#yourNumber").val());
    var counting = [];
    for (var index = 0; index <= pingPongInput; index += 1) {
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
