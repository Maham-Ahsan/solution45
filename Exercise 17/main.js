"use strict";
// Shrinking Guest List:
let guestList = [
    'Maheen',
    'Tooba',
    'Hani',
    'Sadaf',
    'Shahbaz',
    'Ahsan',
];
// Step # 1: Message about inviting only two people.
console.log(`I can invite only two people for Dinner.`);
// Step # 2: Remove guests from the list one at a time until only two names remain.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest}, I can't invite you to Dinner.`);
}
;
// Step # 3: Mmessage to each of the two people still on the list, letting them know they’re still invited.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, You are still invited to Dinner!`);
}
;
// Step # 4: Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestList.pop();
guestList.pop();
//step 5: Print empty string:
console.log(`Guest list after Dinner`, guestList);
