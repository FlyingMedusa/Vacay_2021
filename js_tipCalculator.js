function calculate() {
    var toPayVar = document.getElementById('billAmount').value;
    var tipPercVar = document.getElementById('service').value;
    var peopleVar = document.getElementById('billSplit').value;
    var totalVar = (+toPayVar + +(toPayVar*tipPercVar)) / peopleVar;

    document.getElementById('payment').innerHTML=("Each of you should pay $" + totalVar + ".");
}