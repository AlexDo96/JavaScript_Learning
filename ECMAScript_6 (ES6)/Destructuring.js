// Destructuring is use for Object and Array

// Array
var array = ['Javascript', 'Php', 'Ruby'];

var a = array[0];
var b = array[1];
var c = array[2];

var [a, b, c] = array; // Destructuring

console.log(a, b, c);

// Rest parameters [param, ...rest]
var [a, ...rest] = array;

console.log(rest); // Output: ['Php', 'Ruby']


// Object
var course = {
    name: 'Javascript',
    price: 1000,
    images: 'images-address'
};

var { name, price, images } = course; // Destructuring

var { name, ...rest } = course;

console.log(name, price, images);

console.log(rest); // Output: {price: 1000, images: 'images-address'}


