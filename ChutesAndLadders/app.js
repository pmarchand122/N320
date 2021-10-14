class Board {
  gameZone = document.getElementById("board");
  numCells = 99;
  dice = new Dice();
  result = new resultDisplay();

  constructor() {
    //Cell display properties
    let xPos = 0;
    let row = 0;
    let yPos = 0;

    //Array of cells
    let cellList = [];

    //Initial position current cell
    var currentPosition = 98;

    //Number of times the "Roll Dice" button is clicked
    let rollNum = 0;

    //Create the board
    for (var i = 0; i < this.numCells; i++) {
      let newCell = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );

      //Cell's style and positioning on the board
      newCell.classList.add("cell", "normal");
      newCell.setAttribute("height", 70 + "px");
      newCell.setAttribute("width", 75 + "px");
      newCell.setAttribute("x", xPos);
      newCell.setAttribute("y", yPos);
      newCell.setAttribute("id", "normal");

      console.log(newCell);

      //Add each new cell to an array so that they can then be individually targeted
      cellList.push(newCell);

      //Add each new cell to the board
      this.gameZone.appendChild(newCell);

      //If there are already 8 cells in a row, reset the xPos to 0 and make the yPos go down to start a new row and reset the row to zero. If the row is not at 8 yet, add 1 to row  and move each cell 75px on the x-axis.
      if (row >= 8) {
        yPos += 70;
        xPos = 0;
        row = 0;
      } else {
        row += 1;
        xPos += 75;
      }
    }

    //Animation that displays each cell on the screen one by one
    for (var i = 0; i < cellList.length; i++) {
      TweenLite.from(cellList[i], {
        duration: 0.6,
        alpha: 0,
        delay: i * 0.01,
      });
    }

    //Randomly assign where the chutes and ladders will be assigned on the board
    for (var i = 0; i < 20; i++) {
      cellList[Math.floor(Math.random() * 89)].setAttribute("id", "chute");
      cellList[Math.floor(Math.random() * 95)].setAttribute("id", "ladder");
    }

    //If a cell's id is "chute" or "ladder", add their respective classes.
    for (var i = 0; i < cellList.length; i++) {
      if (cellList[i].id == "chute") {
        cellList[i].classList.add("chute");
      }
      if (cellList[i].id == "ladder") {
        cellList[i].classList.add("ladder");
      }
    }

    //Dice roll listener
    this.dice.btn.addEventListener("click", () => {
      if (currentPosition <= 0) {
        //If the current position is at 0, trigger animations that make the board, and di button and display disappear
        TweenLite.to(this.gameZone, { duration: 0.6, alpha: 0 });
        TweenLite.to(this.dice.btn, { duration: 0.6, alpha: 0 });
        TweenLite.to(this.dice.rollDisp, { duration: 0.6, alpha: 0 });

        //Set the results container div's display to block to display it on the screen
        this.result.resultsContainer.style.display = "block";

        //use the displayFinalResult function from the resultDisplay class to display how many rolls it took for the game to be completed
        this.result.displayFinalResult(rollNum);
      } else {
        //If the current position is NOT at 0, at 1 to the amount of times the di was rolled
        rollNum++;

        //Remove the CSS class from the current cell
        cellList[currentPosition].classList.remove("current");

        //Asign a random value from 1 to 6
        let value = Math.floor(Math.random() * 6) + 1;

        //Update the current position to subtract the amount from the random value which moves the current position up the board
        currentPosition = currentPosition - value;

        //Re assign the CSS class to the new current position
        cellList[currentPosition].classList.add("current");

        //use the displayDiceResult function from the Dice class to display the random value that was applied to the currentPosition
        this.dice.displayDiceResult(value);

        //If the ID of the current position is equal to "chute" or "ladder", remove the current class, subtract or add a random number between 1 and 10 to the current position, add the current class to the new position
        if (cellList[currentPosition].id == "chute") {
          cellList[currentPosition].classList.remove("current");
          currentPosition =
            currentPosition + Math.floor(Math.random() * 10) + 1;
          cellList[currentPosition].classList.add("current");
        }

        if (cellList[currentPosition].id == "ladder") {
          cellList[currentPosition].classList.remove("current");
          currentPosition =
            currentPosition - Math.floor(Math.random() * 10) + 1;
          cellList[currentPosition].classList.add("current");
        }
      }
    });

    //Add the current class for the initial currentPosition which is the start of the game
    cellList[currentPosition].classList.add("current");
  }
}

//Di class which displays the random value from the "Roll Dice" button
class Dice {
  rollDisp = document.getElementById("diceResult");
  btn = document.getElementById("roll");

  displayDiceResult(value) {
    this.rollDisp.innerHTML = value;
  }
}

//Result Dispaly which displays the amount of rolls it took for the game to be completed. Results are displayed at the end of the game
class resultDisplay {
  resultsContainer = document.getElementById("resultsContainer");
  results = document.getElementById("results");

  displayFinalResult(rolls) {
    this.results.innerHTML = `You finished in ${rolls} rolls`;
  }
}

let board = new Board();
