//NPM Packages
var inquirer = require("inquirer");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

//variable referencing Twitter keys
var client = new Twitter({
    consumer_key: keys.consumer_key,
    consumer_secret: keys.consumer_secret,
    access_token_key: keys.access_token_key,
    access_token_secret: keys.access_token_secret
});

//Prompt asking user to make choice
inquirer.prompt([{
    type: "list",
    message: "What would you like to do?",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
    name: "options"
//Ouput depending on user choice
}]).then(function(response) {
    if (response.options === "my-tweets"){
        getTweets();
    }else if (response.options === "spotify-this-song"){
            inquirer.prompt([{
                type: "input",
                message: "What song would you like to search?",
                name: "song"
                },
                // {
                // type: "confirm",
                // message: "Are you sure:",
                // name: "confirm",
                // default: true
                // }
            ])
  .then(function(inquirerResponse) {
    var song = input.name
    console.log(song)
  });


    // }else if(response.options === "movie-this"){
    //     getMovie();
    // }else if(response.options === "do-what-it-says"){
    }
});

//Function to get last 20 tweets and when they were created
function getTweets() {
    var params = { deeVeeEssAyy: 'nodejs' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (i = 0; i < 21; i++) {
                var singleTweet = tweets[i];
                console.log(singleTweet.text, singleTweet.created_at)
            }
        } else {
            console.log(error)
        }
    });
}

//Function that takes song request and return artist, song, preview link, and album
function getSongs() {
    var song = process.argv[3]

    var spotify = new Spotify({
        id: "a145437ec86b4253a6e4b762d50f8a5e",
        secret: "90c9f2233fd24ae2aea7b7389bbaf398"
    });
    spotify.search({ type: "album", query: "name" }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
 
        console.log(data); 
    });
}

// function getMovie(){

// }