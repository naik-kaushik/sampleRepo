const request  = require('request');

// geocode (address,callback) -> 
// 	request inside geocode
// 		err handling inside the request


// use geocode with callback

const geocode = (address,callback) => {
    const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZXhpcGh5IiwiYSI6ImNsMHhnY3dpaDA1azAzZW1vMWRoN3h6cWcifQ.wWdXu6YhJZh3XrKRahZOMQ&limit=1'
    request({url : urlGeo, json:true},(err,response) => {
        if(err){
            callback('Fatal error occured, check your network connection',undefined);
        }else if(response.body.features.length==0){
            callback('Location Not Found Kindly revise the Search Keyword',undefined);
        }else{
            callback(undefined,{
                lat : response.body.features[0].center[1],
                lon : response.body.features[0].center[0],
                loc : response.body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;