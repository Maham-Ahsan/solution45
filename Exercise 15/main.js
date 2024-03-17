"use strict";
//Changing Guest List 
//guest list
let guestList = ["Maheen", "Tooba", "Hani"];
//modifying list of guests;
// Step # 1: Print the name of a guest who can't make it.
let guestWhoCantMakeIt = "Maheen";
//print the guest name who can't make it
console.log(`${guestWhoCantMakeIt} can't make it to Dinner.`);
// Step # 2: Replace the name of a guest who can't make it.
//replace name
let newGuest = "Sadaf";
let indexOfguestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfguestWhoCantMakeIt !== -1) {
    guestList[indexOfguestWhoCantMakeIt] = newGuest;
}
;
// Step # 3: Print a second set of invitation messages.
console.log("Second set of invitation messages:");
guestList.forEach((guest) => { console.log(`Dear ${guest}, You are invited to Dinner.`); });
