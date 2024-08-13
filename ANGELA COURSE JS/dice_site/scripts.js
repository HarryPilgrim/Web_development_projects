
function randomNumber1() {
    return Math.floor(Math.random() * 6)+1
}


let firstDice = document.querySelector(".img1").src = `images/dice${randomNumber1()}.png`
// can also use...
//  document.querySelector(".img1")setAttribute("src", `images/dice${randomNumber1()}.png`)
//console.log(`dice${randomNumber1()}.png`)


let secondDice = document.querySelector(".img2").src = `images/dice${randomNumber1()}.png`


if (firstDice === secondDice) {
        document.querySelector("h1").innerText = "It's a draw";
} else if (firstDice > secondDice) {
    document.querySelector("h1").innerText = "🚩 Player 1 wins";
} else {
    document.querySelector("h1").innerText = "Player 2 wins 🚩";
}


