function show(){
    var myArray = ["England","Spain",["one","two","three"],"France","Germany",3,4,56];
    var arrValue = myArray.length;
    document.getElementById('show1').innerHTML=('Length: '+ arrValue);
    document.getElementById('show2').innerHTML='Deleting the last element...';
    var removing = myArray.pop()
    document.getElementById('show3').innerHTML=('Updated array: '+ myArray);
    document.getElementById('show4').innerHTML='Adding an element...';
    var adding = myArray.push('Doggo')
    document.getElementById('show5').innerHTML=('Updated array: '+ myArray);
  }
  