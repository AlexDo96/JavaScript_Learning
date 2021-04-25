// arguments allow input values add into array
// for loop print out all arguments values
function writeLog() {
    for (let param of arguments) {
        console.log(param);
    }
}

writeLog('Log 1', 'Log 2', 'Log 3');


// Use template string "`${variable}`" to add variable value into string
function writeLog2() {
    let myString = '';
    for (let param of arguments) {
        myString += `${param} - `
    }
    console.log(myString);
}

writeLog2('Log 1', 'Log 2', 'Log 3');

//Return in function
function sum(a, b) {
    return a + b;
}

var result = sum(8, 2);
console.log(result);

// Function have 3 types
// 1. Declaration function
showMessage(); // Can run before Function defined

function showMessage() { };

// 2. Expression function
let showMessage2 = function AAA() { };

setTimeout(function BBB() {

});

let myObject = {
    myFunction: function CCC() {

    }
}

// 3. Arrow function
