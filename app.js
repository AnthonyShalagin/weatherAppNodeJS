const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=2180%20East%2027%20Street,%20Brooklyn,%20NY',
    json: true
}, (error,response,body) => { //callback function gets called once the data comes back from the HTTP endpoint
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
