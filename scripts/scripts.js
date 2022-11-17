const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("dark");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else {
    window.localStorage.setItem("theme", "dark");
  }
});

let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

let player1 = 0;
let player2 = 0;

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);

      if (player1 == player2) {
        player1++;

        if(secondPlayer == 'ia-player'){
            computerPlay()
            player2++
        }
      } else {
        player2++;
      }

      checkWinCondition();
    }
  });
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute("id")

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none'
        }

        setTimeout(function(){
            let container = document.querySelector("#container")
            container.classList.remove("hide")
        }, 200)
    })
}

function checkEl(player1, player2) {
  if (player1 == player2) {
    el = x;
  } else {
    el = o;
  }

  return el;
}

function checkWinCondition() {
  let blocoOne = document.getElementById("block-1");
  let blocoTwo = document.getElementById("block-2");
  let blocoThree = document.getElementById("block-3");
  let blocoFour = document.getElementById("block-4");
  let blocoFive = document.getElementById("block-5");
  let blocoSix = document.getElementById("block-6");
  let blocoSeven = document.getElementById("block-7");
  let blocoEight = document.getElementById("block-8");
  let blocoNine = document.getElementById("block-9");

  if (blocoOne.childNodes.length > 0 && blocoTwo.childNodes.length > 0 && blocoThree.childNodes.length > 0) {
    let blocoOneChild = blocoOne.childNodes[0].className;
    let blocoTwoChild = blocoTwo.childNodes[0].className;
    let blocoThreeChild = blocoThree.childNodes[0].className;

    if ( blocoOneChild == "x" && blocoTwoChild == "x" && blocoThreeChild == "x") {
        declareWinner('x')
    } else if (blocoOneChild == "o" && blocoTwoChild == "o" && blocoThreeChild == "o") {
        declareWinner('o')
    }
  }

  if (blocoFour.childNodes.length > 0 && blocoFive.childNodes.length > 0 && blocoSix.childNodes.length > 0) {
    let blocoFourChild = blocoFour.childNodes[0].className;
    let blocoFiveChild = blocoFive.childNodes[0].className;
    let blocoSixChild = blocoSix.childNodes[0].className;

    if (blocoFourChild == "x" && blocoFiveChild == "x" && blocoSixChild == "x") {
        declareWinner('x')
    } else if (blocoFourChild == "o" && blocoFiveChild == "o" && blocoSixChild == "o") {
        declareWinner('o')
    }
  }

  if (blocoSeven.childNodes.length > 0 && blocoEight.childNodes.length > 0 && blocoNine.childNodes.length > 0) {
    let blocoSevenChild = blocoSeven.childNodes[0].className;
    let blocoEightChild = blocoEight.childNodes[0].className;
    let blocoNineChild = blocoNine.childNodes[0].className;

    if (blocoSevenChild == "x" && blocoEightChild == "x" && blocoNineChild == "x") {
        declareWinner('x')
    } else if (blocoSevenChild == "o" && blocoEightChild == "o" && blocoNineChild == "o") {
        declareWinner('o')
    }
  }

  if (blocoOne.childNodes.length > 0 && blocoFour.childNodes.length > 0 && blocoSeven.childNodes.length > 0) {
    let blocoOneChild = blocoOne.childNodes[0].className;
    let blocoFourChild = blocoFour.childNodes[0].className;
    let blocoSevenChild = blocoSeven.childNodes[0].className;

    if (blocoOneChild == "x" && blocoFourChild == "x" && blocoSevenChild == "x") {
        declareWinner('x')
    } else if (blocoOneChild == "o" && blocoFourChild == "o" && blocoSevenChild == "o") {
        declareWinner('o')
    }
  }

  if (blocoTwo.childNodes.length > 0 && blocoFive.childNodes.length > 0 && blocoEight.childNodes.length > 0) {
    let blocoTwoChild = blocoTwo.childNodes[0].className;
    let blocoFiveChild = blocoFive.childNodes[0].className;
    let blocoEightChild = blocoEight.childNodes[0].className;

    if (blocoTwoChild == "x" && blocoFiveChild == "x" && blocoEightChild == "x") {
        declareWinner('x')
    } else if (blocoTwoChild == "o" && blocoFiveChild == "o" && blocoEightChild == "o") {
        declareWinner('o')
    }
  }

  if (blocoThree.childNodes.length > 0 && blocoSix.childNodes.length > 0 && blocoNine.childNodes.length > 0) {
    let blocoThreeChild = blocoThree.childNodes[0].className;
    let blocoSixChild = blocoSix.childNodes[0].className;
    let blocoNineChild = blocoNine.childNodes[0].className;

    if (blocoThreeChild == "x" && blocoSixChild == "x" && blocoNineChild == "x") {
        declareWinner('x')
    } else if (blocoThreeChild == "o" && blocoSixChild == "o" && blocoNineChild == "o") {
        declareWinner('o')
    }
  }

  if (blocoOne.childNodes.length > 0 && blocoFive.childNodes.length > 0 && blocoNine.childNodes.length > 0) {
    let blocoOneChild = blocoOne.childNodes[0].className;
    let blocoFiveChild = blocoFive.childNodes[0].className;
    let blocoNineChild = blocoNine.childNodes[0].className;

    if (blocoOneChild == "x" && blocoFiveChild == "x" && blocoNineChild == "x") {
        declareWinner('x')
    } else if (blocoOneChild == "o" && blocoFiveChild == "o" && blocoNineChild == "o") {
        declareWinner('o')
    }
  }

  if (blocoThree.childNodes.length > 0 && blocoFive.childNodes.length > 0 && blocoSeven.childNodes.length > 0) {
    let blocoThreeChild = blocoThree.childNodes[0].className;
    let blocoFiveChild = blocoFive.childNodes[0].className;
    let blocoSevenChild = blocoSeven.childNodes[0].className;

    if (blocoThreeChild == "x" && blocoFiveChild == "x" && blocoSevenChild == "x") {
        declareWinner('x')
    } else if (blocoThreeChild == "o" && blocoFiveChild == "o" && blocoSevenChild == "o"
    ) {
        declareWinner('o')
    }
  }

  let counter = 0;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    declareWinner('DEU VELHA')
  }
}

function declareWinner(winner){
    let scoreboardX = document.querySelector("#scoreboard-1")
    let scoreboardY = document.querySelector("#scoreboard-2")
    let msg = '';

    if(winner == 'x'){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1
        msg = 'O JOGADOR 1 VENCEU!'
    } else if (winner == 'o'){
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1
        msg = 'O JOGADOR 2 VENCEU!'
    } else {
        msg = 'DEU VELHA'
    }

    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide")

    setTimeout(function(){
        messageContainer.classList.add("hide")
    }, 3000)

    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll(".box div")

    for(let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }
}

function computerPlay(){
    let cloneO = o.cloneNode(true);
    counter = 0
    filled = 0

    for(let i = 0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5);

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO)
                counter++;
                break
            }
        } else {
            filled++
        }
    }

    if(counter == 0 && filled < 9){
        computerPlay();
    }
}