// Object construtor
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}` // User string template
    }
}

var author = new User('Anh', 'Do');
var user = new User('Thi', 'Du');

// Can add more property even though Object not have
author.title = 'AAAAA' 
user.comment = 'BBBBB'

console.log(author.getName());
console.log(user.getName());

// Object prototype: add more property to Object
User.prototype.className = 'F8';
User.prototype.getClassName = function () {
    return this.className;
};

console.log(author.getClassName());

