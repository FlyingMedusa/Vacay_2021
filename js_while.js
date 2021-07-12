var myCars = ["BMW", "Volvo", "Saab", "Ford", "Fiat","Audi"]
var para = '';

count = 0;

while (count < myCars.length) {
    para += (myCars[count] + "<br>");
    count++
}

document.getElementById("allCars").innerHTML=para;
  