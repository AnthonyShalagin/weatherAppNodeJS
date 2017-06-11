const yargs = require('yargs'); //need for url encoding

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather.js');


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

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

// lat, lng, callback

weather.getWeather(40.59880769999999, -73.9447994);
