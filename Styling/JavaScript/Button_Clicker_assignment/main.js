var logout = "Log out"
function logouthandler(){
    var button = document.querySelector(".login-button")
    console.log(button.innertext)
    button.innerText = logout;
}

function hide(element){
    element.remove();
}
