class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const phpCourse = new Course('Php', 1000);
const jsCourse = new Course('Js', 4000);

console.log(phpCourse);
console.log(jsCourse);