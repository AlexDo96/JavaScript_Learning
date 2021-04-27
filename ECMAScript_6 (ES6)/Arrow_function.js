// Normal function
function logger(log) {
    console.log(log);
}

// Expression function
const logger = function (log) {
    console.log(log);
}

// Arrow function
const logger_1 = (log) => {
    console.log(log);
}

logger('Loading...');

// Arrow functions 
// Type 1
const sum = (a, b) => {
    return a + b;
}

// Type 2
const sum = (a, b) => a + b;

// Type 3
const sum = (a, b) => ({ a: a, b: b });

console.log(sum(2, 3));

// Arrow function not use context
const course = {
    name: 'Javascript basic!',
    getName: () => {
        return this; // Context
    }
};

console.log(course.getName()); // => Return undefined

// Arrow function not use for Constructor function
const Course = (name, price) => {
    this.name = name;
    this.price = price;
}

const jsCourse = new Course('JS', 100000);

console.log(jsCourse); // Return Course is not a constructor

