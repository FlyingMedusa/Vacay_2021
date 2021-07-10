var hour = new Date().getHours();

if (hour < 5) {
    document.getElementById('greetHour').innerHTML="It's still night, go to sleep";
    document.body.style.backgroundColor="#DCDCDC";
    document.getElementById("hImage").src="images/night.jpg";
} else if (hour < 12) {
    document.getElementById('greetHour').innerHTML="Good Morning Sunshine!";
    document.body.style.backgroundColor="#F0E68C";
    document.getElementById("hImage").src="images/morning.jpg";
} else if (hour < 17) {
    document.getElementById('greetHour').innerHTML="Good Afternoon!";
    document.body.style.backgroundColor="#FFA07A";
    document.getElementById("hImage").src="images/afternoon.jpg";
} else if (hour < 22) {
    document.getElementById('greetHour').innerHTML="Good Evening!";
    document.body.style.backgroundColor="#DDA0DD";
    document.getElementById("hImage").src="images/evening.jpg";
} else {
    document.getElementById('greetHour').innerHTML="It's bed time - no greetings.";
    document.body.style.backgroundColor="#DCDCDC";
    document.getElementById("hImage").src="images/night.jpg";
}