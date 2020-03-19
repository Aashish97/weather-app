const request = require('request');

const CITY = 'Kathmandu';

const weatherURL = 'https://api.darksky.net/forecast/ab50cd36126b4928f245dedbfb477f85/37.8267,-122.4233';

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + CITY + '.json?types=address&access_token=pk.eyJ1IjoiYWFzaGlzaHNociIsImEiOiJjazd5bnE4ZnMwMWxoM25uMWNvbXQwZnl1In0._YZETtNB8ssgrJ-hXEFEtw';


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


//geocode API that converts the CITY into respective latitude and longitude

request( { url: geocodeURL, json: true }, (error, response) =>  {
    if (error){
        console.log("Unable to find location service");
    }else if (response.body.features.length === 0){
        console.log("Unable to find the location, please search next location");
    }else{
        const longitude = response.body.features[0].center[0];
        const latitude = response.body.features[0].center[1];
    
        console.log('the lattitude and longitude of ' + CITY + ' are: ', latitude, longitude);
    }
});