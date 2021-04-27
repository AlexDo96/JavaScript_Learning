// Tagged template literals

function highlight(...rest) {
    console.log(rest);
}

var brand = 'F8';
var course = 'Javascript';

const html = highlight`Hoc lap trinh ${course} tai ${brand}`;

console.log(html);