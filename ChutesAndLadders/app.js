class Board {
  gameZone = document.getElementById("board");
  numCells = 99;
  numLadders = 5;
  numChutes = 5;
  chance = 0.4;
  dice = new Dice();
  result = new resultDisplay();

  constructor() {
    let xPos = 0;
    let row = 0;
    let yPos = 0;
    let cellList = [];
    var currentPosition = 98;
    let rollNum = 0;

    for (var i = 0; i < this.numCells; i++) {
      let newCell = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      newCell.classList.add("cell");
      newCell.classList.add("normal");
      newCell.setAttribute("height", 70 + "px");
      newCell.setAttribute("width", 75 + "px");
      newCell.setAttribute("x", xPos);
      newCell.setAttribute("y", yPos);
      newCell.setAttribute("id", "normal");

      console.log(newCell);
      cellList.push(newCell);

      this.gameZone.appendChild(newCell);

      if (row >= 8) {
        yPos += 70;
        xPos = 0;
        row = 0;
      } else {
        row += 1;
        xPos += 75;
      }
    }

    //Settings for chutes
    cellList[10].setAttribute("id", "chute");
    cellList[59].setAttribute("id", "chute");
    cellList[89].setAttribute("id", "chute");

    //settings for ladders
    cellList[82].setAttribute("id", "ladder");
    cellList[39].setAttribute("id", "ladder");
    for (var i = 0; i < cellList.length; i++) {
      if (cellList[i].id == "chute") {
        cellList[i].classList.add("chute");
      }
      if (cellList[i].id == "ladder") {
        cellList[i].classList.add("ladder");
      }
    }

    //settings for current position

    this.dice.btn.addEventListener("click", () => {
      if (currentPosition <= 0) {
        this.gameZone.style.display = "none";
        this.result.resultsContainer.style.display = "flex";
        this.result.displayFinalResult(rollNum);
      } else {
        rollNum++;
        console.log(rollNum);
        cellList[currentPosition].classList.remove("current");
        let value = Math.floor(Math.random() * 6);
        console.log(value);
        currentPosition = currentPosition - value;
        cellList[currentPosition].classList.add("current");
        this.dice.displayDiceResult(value);
        console.log(currentPosition);

        if (cellList[currentPosition].id == "chute") {
          cellList[currentPosition].classList.remove("current");
          currentPosition = currentPosition + 10;
          cellList[currentPosition].classList.add("current");
        }

        if (cellList[currentPosition].id == "ladder") {
          cellList[currentPosition].classList.remove("current");
          currentPosition = currentPosition - 10;
          cellList[currentPosition].classList.add("current");
        }
      }
    });

    cellList[currentPosition].classList.add("current");

    console.log(currentPosition);
  }
}

class Dice {
  rollDisp = document.getElementById("diceResult");
  btn = document.getElementById("roll");

  displayDiceResult(value) {
    this.rollDisp.innerHTML = value;
  }
}

class resultDisplay {
  resultsContainer = document.getElementById("resultsContainer");
  results = document.getElementById("results");

  displayFinalResult(rolls) {
    this.results.innerHTML = `You finished in ${rolls} rolls`;
  }
}

let board = new Board();
