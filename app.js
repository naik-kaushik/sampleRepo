'const request =  require('request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geocode('Mumbai',(error,data)=>{
    console.log("Message : ",error," Data : ",data);
    if(data){
        forecast(data.lat,data.lon,(err,res)=>{
            console.log("Message is : ",err," Res : ",res)
        })
    }
})
