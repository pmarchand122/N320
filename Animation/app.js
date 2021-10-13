let longRect = document.getElementById("longRect")
let rects = document.getElementsByClassName("smallRect")

TweenMax.from(longRect, {duration: 3, alpha: 0})


for(var i = 0; i < rects.length; i++){
    TweenMax.from(rects[i], {duration: 3, alpha: 0})
    
    rects[i].addEventListener("mouseover", (event) => {
        TweenMax.to(event.target, {duration:  0.4, width: 310, height: 210, alpha: 0.5})
    })

    rects[i].addEventListener("mouseout", (event) => {
        TweenMax.to(event.target, {duration: 0.4, width: 300, height: 200, alpha: 1})
    })

    
}
