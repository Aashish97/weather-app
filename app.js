const request = require('request');

const URL = 'https://api.darksky.net/forecast/ab50cd36126b4928f245dedbfb477f85/37.8267,-122.4233';

request(URL, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
})