const yargs = require('yargs'); //need for url encoding

const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address);
