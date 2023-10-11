var n1 = Math.random();
n1 = n1 * 6;
n1 = Math.floor(n1) + 1;

var randomdice = n1 + ".png";
var randomimagesource = "images/" + randomdice;

var player1 = document.querySelectorAll("img") [0];
player1.setAttribute("src", randomimagesource);

var n2 = Math.random();
n2 = n2 * 6;
n2 = Math.floor(n2) + 1;

var randomdice = n2 + ".png";
var randomimagesource = "images/" + randomdice;
var player2 = document.querySelectorAll("img") [1];
player2.setAttribute("src", randomimagesource);


if (n1 > n2){
    document.querySelector("h1").innerHTML = "Player 1 wins! 🏆";
}

else if (n2 > n1){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🏆";
}

else {
    document.querySelector("h1").innerHTML = "Draw! 🤜🤛";
}

