"use strict";
//Array
//favourite transportion
let favoriteTransportation = [];
//trabsportation type
favoriteTransportation.push(["Motorcycle", "Suzuki"]);
favoriteTransportation.push(["Car", "Toyota"]);
// Statement: “I would like to own a Honda motorcycle.”
// Using for each loop to print a series of statements.
favoriteTransportation.forEach(([transport, brand]) => { console.log(`I would like to own a ${brand} ${transport}.`); });
