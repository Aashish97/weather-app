const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('New York', (error, data) => {
    error ? console.log(error) : console.log(data);
})

forecast(-27.6841119, 152.893382, (error, data) => {
    error ? console.log(error) : console.log(data);
})
