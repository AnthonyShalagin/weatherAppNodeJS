const request = require('request');

var APIkey = 'bca016a0cda00ec2b0b5b4e102209c23';
//var latitude = 40.59880769999999;
// var longitude = -73.9447994;

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/bca016a0cda00ec2b0b5b4e102209c23/${lat},${lng}`,
        json: true
    }, (error,response,body) => { //callback function gets called once the data comes back from the HTTP endpoint
        if (error) {
            callback('Unable to connect to forecast.io server');
        }
        else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        }
        else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }

    });
};

module.exports.getWeather = getWeather;



// https://api.darksky.net/forecast/bca016a0cda00ec2b0b5b4e102209c23/40.59880769999999,-73.9447994
//
// https://api.darksky.net/forecast/
