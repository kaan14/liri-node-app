require("dotenv").config();

//call apis
var request = require("request");
var fs = require("fs"); 
var twitter = require("twitter"); 
var spotify = require("node-spotify-api"); 
var keys = require("./keys.js"); 


var client = new Twitter ({
    
})
 
//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter)



//Add the code required to import the keys.js file and store it in a variable.?????????



// write code here and does following items 
//* `my-tweets`

//* `spotify-this-song`

//* `movie-this`

//* `do-what-it-says`


var command = process.argv[2];
var secondArg = process.argv[3];

if (command == "movie-this") {
    console.log(secondArg); 
    movieThis(secondArg);
}
else if(command == twitter){
    console.log()
}









function myTweets() {
    //This will show your last 20 tweets and when they were created at in your terminal/bash window.
    //code here
}





function spotifyTheSong(song_name) {


    /*This will show the following information about the song in your terminal/bash window
    Artist(s)
    The song's name
    A preview link of the song from Spotify
    The album that the song is from */

    //code here
}





function movieThis(movie_name) {




    // Then run a request to the OMDB API with the movie specified
    request("http://www.omdbapi.com/?t="+ movie_name + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        console.log(JSON.parse(body));

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
           
            //var jsonB = JSON.parse(body); 

            console.log("The movie's name is: " + JSON.parse(body).Title);
            console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
            console.log("The came out at" + JSON.parse(body).Year); 
            console.log("The is originated from " + JSON.parse(body).Country); 
            console.log("The languages are " +JSON.parse(body).Language);
            console.log("The plot " +JSON.parse(body).Plot); 
            console.log("The actors " +JSON.parse(body).Actors);  
        }
    });



    //You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.


    /*This will output the following information to your terminal/bash window:
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie. */

}


function doWhatItSays() {


}


