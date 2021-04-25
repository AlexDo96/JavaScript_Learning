// -Sync: Đồng bộ
// -Async: Bất đồng bộ

// Callback hell
// Pyramid of doom
setTimeout(function () {
    console.log(1);   // Task 1
    setTimeout(function () {
        console.log(2);   // Task 2
        setTimeout(function () {
            console.log(3);   // Task 3
            setTimeout(function () {
                console.log(4); // Task 4
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// Lý thuyết và cách hoạt động
// 1. Khởi tạo Promise
// 2. Khởi tạo Executor

// 3 states of Promise:
//      1. Pending
//      2. Fulfilled
//      3. Rejected

let promise = new Promise(
    // Executor
    // Always have 2 params resolve and reject
    function (resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
        resolve();
        reject();
    }
);

promise
    .then(function () {
        console.log('Successfully !');
    })
    .catch(function () {
        console.log('Failure !');
    })
    .finally(function () {
        console.log('Done !');
    });


// Promise chain
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000) // Call function sleep
    .then(function () {
        console.log(1);
        return sleep(1000);  // Return Promise
    })
    .then(function () {
        console.log(2);
        return sleep(1000);  // Wait for first Promise run complete and Return Promise
    })
    .then(function () {
        console.log(3);
        return sleep(3000);  // Wait for second Promise run complete and Return Promise
    })
    .then(function () {
        console.log(4);
        return sleep(1000);  // Wait for third Promise run complete and Return Promise
    });

