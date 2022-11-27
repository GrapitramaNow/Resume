// document.querySelector("h1").style.color = "green";
$(document).keypress(function(event){
  $("h1").text(event.key);
})
