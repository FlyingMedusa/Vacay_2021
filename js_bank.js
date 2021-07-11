var correctName = 'Martha'
var correctPass = 'martha123'
var moneyStored = 1200

function returnInfo() {
    var nameVar = document.getElementById('nameForm').value;
    var namePass = document.getElementById('passForm').value;
    var toWithdraw = document.getElementById('amountForm').value;
    var moneyLeft = moneyStored - toWithdraw;
    
    if (nameVar == correctName && namePass == correctPass && toWithdraw <= 1200) {
        alert('Access granted.');
        document.getElementById('feedback').innerHTML=("Money withdrawn. Money left: "+ moneyLeft);
    } else if (nameVar != correctName) {
        alert('Wrong user name.');
    } else if (namePass != correctPass) {
        alert('Wrong password');
    } else if (toWithdraw > 1200) {
        document.getElementById('feedback').innerHTML=("You want to withdraw $"+ toWithdraw +" but you have only $" + moneyStored + "stored.");
    }
}