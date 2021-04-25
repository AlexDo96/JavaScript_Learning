function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

// Handle Promise chain with catch()
sleep(1000) // Call function sleep
    .then(function () {
        console.log(1);
        return sleep(1000);  // Return Promise
    })
    .then(function () {
        console.log(2);
        return new Promise(function (resolve, reject) {
            reject('ERROR !')
        });  // Wait for first Promise run complete and Return Promise
    })
    .then(function () {
        console.log(3);
        return sleep(3000);  // Wait for second Promise run complete and Return Promise
    })
    .then(function () {
        console.log(4);
        return sleep(1000);  // Wait for third Promise run complete and Return Promise
    })
    .catch(function (err) {  // Handle when any Promise got error
        console.log(err);
    });

// 1. Promise.resolve
// 2. Promise.reject

let promise = new Promise(
    function (resolve, reject) {
        // resolve('Success !');
        reject('Error !');
    }
);

promise
    .then(function (result) {
        console.log('Result: ', result); // Return Promise resolve
    })
    .catch(function (err) {
        console.log('Result: ', err); // Return Promise reject
    });

let promise1 = Promise.resolve('Success !'); // Not define new Promise for this

promise1
    .then(function (result) {
        console.log('Result: ', result); // Return Promise resolve
    })
    .catch(function (err) {
        console.log('Result: ', err); // Return Promise reject
    });


// 3. Promise.all => Implement running in parallel
let promise_A = new Promise(
    function (resolve) {
        setTimeout(function () {
            resolve([1]);
        }, 2000)
    }
);

let promise_B = new Promise(
    function (resolve) {
        setTimeout(function () {
            resolve([2, 3]);
        }, 5000)
    }
);

Promise.all([promise_A, promise_B])
    .then(function (result) {
        let result_1 = result[0];
        let result_2 = result[1];

        console.log(result_1.concat(result_2));  // Just cost 5000 ms to return result due to run parallel
    });

// ES6 style
Promise.all([promise_A, promise_B])
    .then(function ([result_1, result_2]) {
        console.log(result_1.concat(result_2));  // Just cost 5000 ms to return result due to run parallel
    });


// Handle error when run Promsise.all in parallel
Promise.all([promise_A, promise_B])
    .then(function ([result_1, result_2]) {
        console.log(result_1.concat(result_2));  // Just cost 5000 ms to return result due to run parallel
    })
    .catch(function (err) {        
        console.log(err);
    });
