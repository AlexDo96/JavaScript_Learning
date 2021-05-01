// Recursive (De quy)
function countDown(num) {
    if (num >= 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}

countDown(10);

function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number - 1)
    }
    return 1;
}

var number = 6;
console.log(`Giai thua cua ${number}: ` + giaiThua(number));