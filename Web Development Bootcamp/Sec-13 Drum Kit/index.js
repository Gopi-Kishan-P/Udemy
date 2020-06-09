for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       playSound(this.textContent)
       addAnimation(this.textContent);
    });
}

document.addEventListener("keypress",function(event){
    playSound(event.key);
    addAnimation(event.key);
})

function playSound(letter){
    switch(letter){
        case "w": new Audio("sounds/tom-1.mp3").play();
                     break;
        case "a": new Audio("sounds/tom-2.mp3").play();
                     break;
        case "s": new Audio("sounds/tom-3.mp3").play();
                     break;
        case "d": new Audio("sounds/tom-4.mp3").play();
                     break;
        case "j": new Audio("sounds/snare.mp3").play();
                     break;
        case "k": new Audio("sounds/crash.mp3").play();
                     break;
        case "l": new Audio("sounds/kick-bass.mp3").play();
                     break;
    }
}

function addAnimation(letter){
    document.querySelector("."+letter).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+letter).classList.remove("pressed");
    },1000);
}