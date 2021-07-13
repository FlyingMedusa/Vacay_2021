window.onload = appear();

var start;
var clicked;

function disappear() {
    document.getElementById('box').style.display="None";
    clicked = Date.now()
    var reactionTime = (clicked-start)/1000;
    alert(reactionTime + " seconds.")
    setTimeout(appear, 2000);
    
}

function appear() {
    document.getElementById('box').style.display="block";
    start=Date.now()
}