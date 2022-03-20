var likestop = 9
function clickHandler(){
    console.log("CLICK HANDLER")
    likestop++
    var p = document.querySelector("#top-like")
    p.innerText = likestop + "likes"
}
var likesmid = 12
function secondClickHandler(){
    console.log("CLICK HANDLER")
    likesmid++
    var p = document.querySelector("#mid-like")
    p.innerText = likesmid + "likes"
}
var likesbot = 9
function thirdClickHandler(){
    console.log("CLICK HANDLER")
    likesbot++
    var p = document.querySelector("#bot-like")
    p.innerText = likesbot + "likes"
}