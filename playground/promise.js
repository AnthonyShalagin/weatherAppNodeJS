var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey. It worked! Wooo!');
        reject('It did not work....Boooo');
    }, 2500);
});

somePromise.then(
    (message) => { //only works if resolve works
    console.log("Success: ", message);
    },
    (errorMessage) => {
    console.log('Error:', errorMessage);
    }
);
