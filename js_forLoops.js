var myCars = ["BMW", "Volvo", "Saab", "Ford", "Fiat","Audi"]


for (i = 0; i < myCars.length; i++) {
    document.getElementById("allCars").innerHTML+=("<br>"+myCars[i]);
  }
  