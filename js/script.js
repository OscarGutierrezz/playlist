/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Better Now", "Treasure", "Girls like You", "Psycho"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var links =["https://www.youtube.com/watch?v=UYwF-jdcVjY","https://www.youtube.com/watch?v=nPvuNsRccVw","https://www.youtube.com/watch?v=aJOTlE1K90k","https://www.youtube.com/watch?v=au2n7VVGv_c"];
var artist =["Post Malone","Bruno Mars","Maroon 5","Post Malone"]
var songlength =["255","300","320","230"]
function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song) {
        $("#songs").append("<p>"+song+"</p>");
    });
    
    links.forEach(function(link){
        $("#links").append("<a href="+link+">listen</a>");
    });
    artists.forEach(function(artist) {
        $("#artist").append("<p>"+artist+"</p>");
    });
    songlength.forEach(function(songlength){
        $("#songlength").append("<p>"+songlength+"</p>");
    });
function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();