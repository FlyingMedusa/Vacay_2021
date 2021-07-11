var correctName = 'martha'
var correctPass = 'martha123'

function returnInfo() {
    var nameVar = document.getElementById('nameForm').value;
    var namePass = document.getElementById('passForm').value;
    
    if (nameVar == correctName && namePass == correctPass) {
        document.body.style.backgroundColor="lime";
        alert('Access granted. Welcome!');
    } else {
        document.body.style.backgroundColor="darkred";
        alert('Access denied.');
    }
}