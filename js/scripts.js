//business logic


//user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var pingPongInput = parseInt($"input#yourNumber").val();
    var result = pingPongFunction (pingPongInput);
    
  })
}
