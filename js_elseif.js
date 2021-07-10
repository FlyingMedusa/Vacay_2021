function elseIf(){
    var personAge = 20;
    if (personAge < 18) {
        document.getElementById('agePara').innerHTML="You're too young";
    } else if (personAge > 80) {
        document.getElementById('agePara').innerHTML="You're too old";
    } else {
        document.getElementById('agePara').innerHTML="Yes, you can";
    }
    
}