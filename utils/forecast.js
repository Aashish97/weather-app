const request = require('request');

//forecast takes longitude and latitude as a input and provides the weather information accordingly

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ab50cd36126b4928f245dedbfb477f85/' + latitude + ',' + longitude;
    request( {url, json: true}, (error, response) => {
        if (error){
            callback("Unable to connect with weather API!!!");
        }else if (response.body.error){
            callback("Unable to find the location");
        }else{
            callback({
                currentTemperature: response.body.currently.temperature,
                rainProbability: response.body.currently.precipProbability,
                weatherSummary: response.body.daily.data[0].summary
            }
            );
        }
    });

}

module.exports = forecast;