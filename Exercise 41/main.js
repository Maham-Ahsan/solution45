"use strict";
// Exercise 41
// Array of Magician & pass this Array to function
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Maham", "Tooba", "Maheen"];
show_magicians(magician);
