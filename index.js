var randomNumber1 = Math.floor(Math.random()*6) +1;   //1-6

var randomDiceImage = "Dice" + randomNumber1 + ".png";    // dice1.png - dice6.png

var randomDiceImageSource = "images/" + randomDiceImage;   // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImageSource);




var randomNumber2 = Math.floor(Math.random()*6) +1;   //1-6

var randomDiceImage2 = "Dice" + randomNumber2 + ".png";    // dice1.png - dice6.png

var randomDiceImageSource2 = "images/" + randomDiceImage2;   // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🎉 Player 1 Wins 🎉";
}

else if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML="🎲 That's a Draw 🎲"
}
else{
  document.querySelector("h1").innerHTML="🎉 Player 2 Wins 🎉";
}









// if(randomNumber1 === 1){
//   const img1 = document.getElementByClass('dice');
//   img1.setAttribute('src', '/images/dice1.png');
// }
