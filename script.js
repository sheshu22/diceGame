let random= Math.floor(Math.random()*6)+1;
let random1= Math.floor(Math.random()*6)+1;

let val="/images/dice" + random +".png";
let val2="/images/dice" + random1 +".png";

document.querySelector(".img1").setAttribute("src",val);
document.querySelector(".img2").setAttribute("src",val2);

if(random>random1)
{
    document.querySelector(".win").innerHTML="Player 1 wins !";
}
else if(random<random1)
{
    document.querySelector(".win").innerHTML="Player 2 wins !";
}
else
{
    document.querySelector(".win").innerHTML="DRAW !";
}