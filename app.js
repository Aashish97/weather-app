const request = require('request');
const geocode = require('./utils/geocode');

const weatherURL = 'https://api.darksky.net/forecast/ab50cd36126b4928f245dedbfb477f85/37.8267,-122.4233';

//weather api that provides all the required information about the weather

request({ url: weatherURL, json: true }, (error, response) => {
    if(error){
        console.log("Unable to connect with weather API!!!");
    }
    else if (response.body.error) {
        console.log("Unable to find location");
    }
    else{
    const currentTemperature = response.body.currently.temperature;
    const rainProbability = response.body.currently.precipProbability;
    const weatherSummary = response.body.daily.data[0].summary;

    console.log(weatherSummary);
    console.log('Current temperature is: ' + currentTemperature);
    console.log('There is ' + rainProbability + '% chance of rain'); 
    }
});

geocode('New York', (error, data) => {
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})
