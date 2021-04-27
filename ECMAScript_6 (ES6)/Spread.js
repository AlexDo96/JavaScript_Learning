// Spread (...): Tác dụng thay thế dấu "[", "]"

// Array 
var array = ['Javascript', 'Php', 'Ruby'];
var array_2 = ['ReactJS', 'Python'];

var array_3 = [...array, ...array_2]; // Spread array

console.log(array_3);

// Object
var course = {
    name: 'Javascript',
    price: 1000,
    images: 'images-address'
};

var course_2 = {
    name: 'Python',
    price: 3000,
    images: 'images-address'
};

var course_3 = {
    ...course,
    ...course_2
};

console.log(course_3);


var array_3 = ['Javascript', 'Php', 'Ruby'];

// Rest
function logger(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

// Spread
logger(...array);
