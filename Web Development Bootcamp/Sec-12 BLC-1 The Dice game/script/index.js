var diceNum1=Math.floor(Math.random()*6)+1;
console.log(diceNum1);
var diceNum2=Math.floor(Math.random()*6)+1;
console.log(diceNum2);

//player-1
if(diceNum1>diceNum2)
    document.querySelector("h1").innerHTML='Player <span class="highLight">1</span> Won'
else if(diceNum1<diceNum2)
    document.querySelector("h1").innerHTML='Player <span class="highLight">2</span> Won'
else
    document.querySelector("h1").innerHTML='Its A <span class="highLight">TIE</span>'

var img1="images/dice"+diceNum1+".png";
var img2="images/dice"+diceNum2+".png";

document.getElementById("pd1").setAttribute("src",img1);
document.getElementById("pd1").setAttribute("alt",diceNum1);

document.getElementById("pd2").setAttribute("src",img2);
document.getElementById("pd2").setAttribute("alt",diceNum2);
