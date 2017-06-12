var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(5,'7').then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 2);
}).then((res) => {
    console.log('Should be 45', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey. It worked! Wooo!');
//         reject('It did not work....Boooo');
//     }, 2500);
// });
//
// somePromise.then(
//     (message) => { //only works if resolve works
//     console.log("Success: ", message);
//     },
//     (errorMessage) => {
//     console.log('Error:', errorMessage);
//     }
// );
