const request = require('request');

var APIkey = 'bca016a0cda00ec2b0b5b4e102209c23';
var latitude = 40.59880769999999;
var longitude = -73.9447994;

var getWeather = () => {
    request({
        url: `https://api.darksky.net/forecast/${APIkey}/${latitude},${longitude}`,
        json: true
    }, (error,response,body) => { //callback function gets called once the data comes back from the HTTP endpoint
        if (!error & response.statusCode === 200) {
            console.log(body.currently.temperature);
        }
        else {
            console.log('Unable to fetch weather');
        }

    });
};

module.exports.getWeather = getWeather;



// https://api.darksky.net/forecast/bca016a0cda00ec2b0b5b4e102209c23/40.59880769999999,-73.9447994
//
// https://api.darksky.net/forecast/
