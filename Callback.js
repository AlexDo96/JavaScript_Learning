// Callback
// Là hàm (function) được truyền qua đối số
// khi gọi hàm khác
// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

function myFunction(param) {
    param("Hoc lap trinh")
}

function myCallback(value) {
    console.log("Value: ", value);
}

myFunction(myCallback); // This is Callback in Javascript
