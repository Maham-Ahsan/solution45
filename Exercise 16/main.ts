// More Guests:

//previous guestlist :

let guestList: Array<string> = ["Maheen", "Tooba", "Hani"];

// Step # 1: Informing peoples that you found a bigger dinner table.

for (let guest of guestList) {console.log(`Hello, ${guest}, We found a bigger dinner table.`)};

// Step # 2: Add one new guest to the beginning of your array.
//new guest
let newGuestAtBeginning: string = "Sadaf"

guestList.unshift(newGuestAtBeginning);

// console.log(guestList);

// Step # 3: Add one new guest to the middle of your array.

let newGuestInMiddle: string = "Ahsan"

let middleIndex: number = Math.floor(guestList.length/2);

guestList.splice(middleIndex, 0, newGuestInMiddle);

// console.log(guestList)

// Step # 4: Use append() to add one new guest to the end of your list.

let newGuestAtend: string = "Shahbaz"

guestList.push(newGuestAtend);

// console.log(guestList)

// Final Step: Print a new set of invitation messages.

console.log("New set of invitation messages:")

for(let guest of guestList) 
{
    console.log(`Dear ${guest}, You are invited to Dinner.`)
}