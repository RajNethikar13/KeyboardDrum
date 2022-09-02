for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
   var buttonInnerHTML = this.innerHTML;
   character(buttonInnerHTML);
   animation(buttonInnerHTML);
  });
}
addEventListener("keypress",function(event) {
  character(event.key);
  animation(event.key);
})
//var audio = new Audio('sounds/tom-1.mp3');
//audio.play();
function character(buttonInnerHTML)
 {
   switch (buttonInnerHTML) {
   case "w":
   var audio = new Audio('sounds/crash.mp3');
   audio.play();
   case "a":
   var audio = new Audio('sounds/tom4.mp3');
   audio.play();
   case "s":
   var audio = new Audio('sounds/tom3.mp3');
   audio.play();
   case "d":
   var audio = new Audio('sounds/tom2.mp3');
   audio.play();
   case "j":
   var audio = new Audio('sounds/tom1.mp3');
   audio.play();
   case "k":
   var audio = new Audio('sounds/snare.mp3');
   audio.play();
   case "l":
   var audio = new Audio('sounds/kick-bass.mp3');
   audio.play();
     break;
   default: console.log(buttonInnerHTML);

 }}
function animation(currentkey){
  var activebutton = document.querySelector("."+currentkey)
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed")
  },100);
}
