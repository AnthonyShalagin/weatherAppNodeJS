var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Anthony'
    };
    callback(user);
};

getUser(31, (userObject) => {
    console.log(userObject);
});
