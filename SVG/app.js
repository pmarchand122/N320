//class that contains the logic for the game
class Game {

    //class properties
    chanceOfsearchColor = 0.3;
    numCircles = 25;
    foundSearchCircles = 0;
    totalSearchCircles = 0;
    blk = "#000";
    searchColor = "#99FF00";
    normalColor = "#7700AA"
    gameZome = document.getElementById("gameZone");
    foundBar = new FoundBar();
    percentDisp = new PercentDisplay();
    
    constructor(){
        //make the circles
        for(var i=0; i < this.numCircles; i++){
            let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            
            //circle css
            newCircle.classList.add("gameCirc");

            //randomizes the circle position
            newCircle.setAttribute("cx", Math.random() * 400);
            newCircle.setAttribute("cy", Math.random() * 400);

            //randomly choose what reveal color the circle is
            //'.dataset.hiddenColor' adds the hiddenColor attribute to the circle 
            if(Math.random() < this.chanceOfsearchColor){
                //set to be the 'looking for' color
                newCircle.dataset.hiddenColor = this.searchColor;
                this.totalSearchCircles++;
            } else {
                //set to be the 'normal' color
                newCircle.dataset.hiddenColor = this.normalColor;
            }


            //mouse events
            //on mouse over, show the hidden color in the data-hiddenColor
            newCircle.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor;
            })
            newCircle.addEventListener("mouseout", (event) => {
                event.target.style.fill = this.blk;
            })
            newCircle.addEventListener("click", (event) => {
                //if the user clicked on something with the "looking for" color, remove the circle
                if(event.target.dataset.hiddenColor == this.searchColor){
                    event.target.remove();

                //store how many have been clicked on
                this.foundSearchCircles++;

                //update the found bar UI
                this.foundBar.setPercent(this.foundSearchCircles / this.totalSearchCircles)
                
                //update the percent UI
                this.percentDisp.displayPercent(this.foundBar.percent)

                console.log(this.foundBar.percent)
                }

                
            })
            


            //add the circle to the screen
            this.gameZome.appendChild(newCircle);
        }
    }
}

class FoundBar {
    element = document.getElementById("foundBar")
    maxSize = 300;
    percent = 0;

    setPercent(percentInput){
        this.percent = percentInput;
        this.element.setAttribute("width", this.percent * this.maxSize)
    }
}

//added this just for fun
class PercentDisplay {
    percentDisplay = document.getElementById("percentDisplay")
    
    displayPercent(percent){
        let p = percent * 100;
        this.percentDisplay.innerText = p.toFixed(2) + "%"
    }

}


let game = new Game();