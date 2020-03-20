const yargs = require('yargs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(!address){
    console.log("Please provide address");
}else{
    geocode(address, (error, {latitude, longitude, location}) => {
        error ? console.log(error) : 
        forecast(latitude, longitude, (error, {weatherSummary, currentTemperature, rainProbability}) => {
            if(error){
                return console.log(error);
            }else{
                console.log(location);
                console.log('Summary: ',weatherSummary);
                console.log('Current Temperature: ',currentTemperature);
                console.log('Rain Probability: ',rainProbability);
            }
        });
    });
}




