var myCars = ["BMW", "Volvo", "Saab", "Ford", "Fiat","Audi"]
var para = '';

for (i = 0; i < myCars.length; i++) {
    para += (myCars[i] + "<br>");
  }

  document.getElementById("allCars").innerHTML=para;
  