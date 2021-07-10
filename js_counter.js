var value = 0;
var colorArr = [ '#ff8566', '#ff9980', '#ffad99', '#ffc2b3', '#ffd6cc', '#ffebe6','#ffffff', '#ebfaeb', '#d6f5d6','#c2f0c2', '#adebad', '#99e699', '#85e085']

function addOne(){
  value += 1;
  document.getElementById('number').innerHTML=value;
  document.body.style.backgroundColor=colorArr[6+value];
}

function subtractOne(){
    value -= 1;
    document.getElementById('number').innerHTML=value;
    document.body.style.backgroundColor=colorArr[6+value];
  }