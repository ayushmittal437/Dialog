const express = require("express");
const app = express();
const weather = require("weather-js");
const gsr = require('google-search-results-nodejs')
const serp = new gsr.GoogleSearchResults("undefined")
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e13ace31542048cb991c32548c6ba2ea');
const fetch = require('node-fetch');

const js = require("jsearch");

var google = require('google')

google.resultsPerPage = 25
var nextCounter = 0

//const Bluebird = require('bluebird');
 
//fetch.Promise = Bluebird;

//66f4404867f84c0b9b900851e5dd6591app.get("/forecast2",(req,res) =>{


    weather.find({search: 'Jalandhar', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        
        JSON.stringify(result[0], null, 2);
        const ANS = `It is ${result[0]["current"]["temperature"]}  degree celcius right now with a low of ${result[0]["forecast"][1]["low"]} and a high of ${result[0]["forecast"][1]["high"]}`
        console.log(ANS);
        res.json({msg :ANS})
 
    });
})