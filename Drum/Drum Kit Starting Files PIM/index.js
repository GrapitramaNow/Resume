alert("Linked");

// document.querySelectorAll(".drum")[0].addEventListener("click", handleClick);
// function handleClick() {
// alert("Clicked");
// }

// for(var i = 0; i < document.querySelectorAll("button").length; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// }
// function handleClick() {
//   alert("Clicked");
// }

// Drum Kit Click //
// for (var i = 0; i < document.querySelectorAll("button").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//     // var audio = new Audio('sounds/snare.mp3'); audio.play();
//     console.log(this.innerHTMLt);
//     var buttonInnerHTML = this.innerHTML;
//     switch (buttonInnerHTML) {
//       case "w":
//         var audio = new Audio('sounds/tom-1.mp3');
//         break;
//       case "a":
//         var audio = new Audio('sounds/tom-2.mp3');
//         break;
//       case "s":
//         var audio = new Audio('sounds/tom-3.mp3');
//         break;
//       case "d":
//         var audio = new Audio('sounds/tom-4.mp3');
//         break;
//       case "j":
//         var audio = new Audio('sounds/snare.mp3');
//         break;
//       case "k":
//         var audio = new Audio('sounds/kick-bass.mp3');
//         break;
//       case "l":
//         var audio = new Audio('sounds/crash.mp3');
//         break;
//       default:
//     }
//     audio.play();
//
//   });
// }

// ----- Drum Kit Keydown ----- //
document.addEventListener('keydown', function() {
  var buttonInnerHTML = event.key;
  switch (buttonInnerHTML) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      break;
    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      break;
    case "l":
      var audio = new Audio('sounds/crash.mp3');
      break;
    default:
  }
  audio.play();

});
