const request = require('request');
const yargs = require('yargs'); //need for url encoding

const argv = yargs //object that stores the final parsed output
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for:',
            string: true    //always parse as a string
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.a); //Encode the address to pass it into the url with the correct format

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error,response,body) => { //callback function gets called once the data comes back from the HTTP endpoint

    if (error) {
        console.log('Unable to connect to google servers');
    }
    else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address');
    }
    else if (body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);        
    }
});
