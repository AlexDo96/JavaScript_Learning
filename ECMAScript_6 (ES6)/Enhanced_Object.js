// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

var name = 'Javascript';
var price = 1000;

// Enhance literals
var course = {
    name,
    price,

    getName: function () { return name; }
}

console.log(course.getName());

var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    [fieldName]: 'JS',
    [fieldPrice]: 1000
}

console.log(course);