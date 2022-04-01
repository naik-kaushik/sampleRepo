const request = require('request');

const forecast = (lat,lon,callback) => {
    const urlForecast = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude={part}&appid=5a4281fd0abfe708a724af462d63a677&units=metric'
    request({url : urlForecast,json:true},(error,response) => {
        if(error) {
            callback('FATAL ERROR OCCURED',"Couldn't Fetch the Forecast")
        }else if(response.body.message){
            callback('Some Error Occurred Check the Address',"Couldn't Fetch the Forecast")
        }else{
            var message = "The Temperature is " + response.body.current.temp+" deg Celsius and the Humidity is "+response.body.current.humidity+"%";
            callback('Success!',message)
        }
    })
}


module.exports = forecast