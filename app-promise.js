const yargs = require('yargs'); //need for url encoding
const axios = require('axios');


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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => { //get returns a promise
    console.log(response.data);
});