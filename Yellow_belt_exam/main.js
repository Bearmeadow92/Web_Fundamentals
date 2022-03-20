var gameImg = document.querySelector("#punk-img");
    
function switchImgpi() {
    gameImg.src = "images/pixel-ninjas-2.png"; 
    
}
function switchImgpu() {
    gameImg.src = "images/stonepunk.png"; 
    
}

var buygame = 0
function clickHandler(){
    console.log("CLICK HANDLER")
    buygame++
    var p = document.querySelector("#cart-items")
    p.innerText = buygame
}



