var somePromise = new Promise((resolve, reject) => {
    resolve('Hey. It worked! Wooo!');
});

somePromise.then((message) => { //only works if resolve works
    console.log("Success: ", message);
})
