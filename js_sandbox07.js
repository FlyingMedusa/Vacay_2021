const name = 'Martha';
const age = 23;
const occ = 'student';
const city = 'Poznań';
let html;

function hello(){
    return 'hello';
}

html = '<ul><li>Name: ' + name + '</li><li>Age: '+ age + '</li><li>Occupation: '+ occ + '</li><li>City: '+ city + '</li</ul>';

html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: '+ age + '</li>' +
    '<li>Occupation: '+ occ + '</li>' +
    '<li>City: '+ city + '</li>' +
    '</ul>';

//With template strings (es6)
html =`
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Occupation: ${occ}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 25 ? 'Over 25' : 'Under 25 or 25'}</li>
    </ul>`
;

document.body.innerHTML = html;