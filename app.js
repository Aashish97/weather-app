const yargs = require('yargs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(!address){
    console.log("Please provide address");
}else{
    geocode(address, (error, data) => {
        error ? console.log(error) : 
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }else{
                console.log(data.location);
                console.log('Summary: ',forecastData.weatherSummary);
                console.log('Current Temperature: ',forecastData.currentTemperature);
                console.log('Rain Probability: ',forecastData.rainProbability);
            }
        });
    });
}




