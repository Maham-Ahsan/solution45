"use strict";
//SANDWICHES
function sandwich(...items) {
    console.log('sandwich order:');
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log("Enjoy your sandwich Madam");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('mayo sauce', 'tomato catchup');
