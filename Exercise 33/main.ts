//ordinal numbers

//storing number in an array through 1 to 9 and making loop
let numbers : number [] = [1,2,3,4,5,6,7,8,9]


//printing proper ordinal ending
for (let number of numbers) {

if (number === 1) {
    console.log (`${number}st`)
}else if (number === 2) {
    console.log (`${number}nd`)
}else if (number === 3) {
    console.log (`${number}rd`)
} else if (number === 4) {
    console.log (`${number}th`)
}
}