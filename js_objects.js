var myCarObject = {color:"Black", maxSpeed:"200 km/h", seats:5, wheels:4};
var myObject = {name:"Martha", eyeColor:"blue", skill:"learning"};
var countryPopulations = {england: 3000, france:2000, indonesia:3500};

myCarObject.engineSize="2L";

function run() {
    var value = myCarObject.engineSize;
    document.getElementById('output').innerHTML=value;
}