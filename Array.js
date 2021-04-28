var languages = [
    'JS',
    'Java',
    'Python'
];

var languages2 = [
    'React',
    'C++',
    'Ruby'
];

console.log(languages);

console.log(languages.length);

console.log(languages[1]);

// Working with Array
//1. To string
console.log(languages.toString());

//2. Join
console.log(languages.join(' - '));

//3. Pop
// Xóa array final index and return that array final index
console.log(languages.pop());

//4. Push
// Add value for array
console.log(languages.push('C#'));

//5. Shift
// Xóa array first index and return that array index
console.log(languages.shift());

//6. Unshift
console.log(languages.unshift('C#'));

//7. Splicing
console.log(languages.splice(1, 2));

//8. concat
console.log(languages.concat(languages2));

//9. Slicing
console.log(languages.slice(1, 2));

/* 
    Array methods:
       forEach()
       every()
       some()
       find()
       filter()
       map()
       reduce()
*/

var courses = [{
        id: 1,
        name: 'JS',
        cost: 250
    },
    {
        id: 2,
        name: 'Python',
        cost: 200
    },
    {
        id: 3,
        name: 'C#',
        cost: 150
    },
    {
        id: 4,
        name: 'Go',
        cost: 400
    },
    {
        id: 5,
        name: 'Go',
        cost: 500
    }
];

// forEach()
courses.forEach(function (course, index) {
    console.log(index, course);
});

// every()
var isFree = courses.every(function (course, index) {
    return course.cost === 0;
});

console.log(isFree); //return true if all costs == 0

// some()
var isFree = courses.some(function (course, index) {
    return course.cost === 0;
});

console.log(isFree); //return true if any cost == 0

// find()
var course = courses.find(function (course, index) {
    return course.name === 'Go';
});

console.log(course); // return 1 result 

// filter()
var listcourses = courses.filter(function (course, index) {
    return course.name === 'Go';
});

console.log(listcourses); // return filter results 

// map()
function courseHandler(course) {
    return {
        id: course.id,
        name: `Khoa hoc ${course.name}`,
        cost: course.cost,
        unit: '$'
    }
};

var newCourses = courses.map(courseHandler);

console.log(newCourses);

// reduce()
var totalCost = courses.reduce(function (total, course) {
    return total + course.cost;
}, 0); // initial value

console.log(totalCost);