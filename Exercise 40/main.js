"use strict";
//ALBUM
//FUNCTION THAT IS CALLED MAKE_ALBUM
function make_album(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + artist.slice(1)
    };
    return dictionaries;
}
let album = make_album('Talha Yunus', 'Afsanay');
console.log(album);
album = make_album('Eva B', 'kana Yaari');
console.log(album);
album = make_album('Talha Anjum', 'Guman');
console.log(album);
