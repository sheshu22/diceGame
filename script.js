let random= Math.floor(Math.random()*6)+1;
let random1= Math.floor(Math.random()*6)+1;

let val="/images/dice" + random +".png";
let val2="/images/dice" + random1 +".png";

document.querySelector(".img1").setAttribute("src",val);
document.querySelector(".img2").setAttribute("src",val2);