const request = require('request');

const URL = 'https://api.darksky.net/forecast/ab50cd36126b4928f245dedbfb477f85/37.8267,-122.4233';

request({ url: URL, json: true }, (error, response) => {
    // console.log(response.body.currently);
    const currentTemperature = response.body.currently.temperature;
    const rainProbability = response.body.currently.precipProbability;
    const weatherSummary = response.body.daily.data[0].summary;

    console.log('Current temperature is: ' + currentTemperature);
    console.log('There is ' + rainProbability + '% chance of rain'); 
    console.log(weatherSummary);
})