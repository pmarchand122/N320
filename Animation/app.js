let container = document.getElementById("animationContainer")
let longRect = document.getElementById("longRect")
let rects = document.getElementsByClassName("smallRect")

TweenMax.from(longRect, {duration: 1, alpha: 0})
longRect.addEventListener("mouseover", (event) => {
    TweenMax.to(event.target, {duration: 0.4, width: 1020, height: 220})
})
longRect.addEventListener("mouseout", (event) => {
    TweenMax.to(event.target, {duration: 0.4, width: 1000, height: 200})
})
longRect.addEventListener("click", (event) => {
    TweenMax.to(event.target, {duration: 0.4, alpha: 0})
})

for(var i = 0; i < rects.length; i++){
    TweenMax.from(rects[i], {duration: 1, alpha: 0})

    rects[i].addEventListener("mouseover", (event) => {
        TweenMax.to(event.target, {duration:  0.4, width: 310, height: 210})
    })

    rects[i].addEventListener("mouseout", (event) => {
        TweenMax.to(event.target, {duration: 0.4, width: 300, height: 200})
    })

    rects[i].addEventListener("click", (event) => {
        TweenMax.to(event.target, {duration: 0.4, alpha: 0})
    })

}


