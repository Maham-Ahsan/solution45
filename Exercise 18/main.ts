// Seeing the World: Think of at least five places in the world you’d like to visit.

// Step # 1: Create an array to store travel destinations.

let travelDestinations: string[] = ["Makkah", "Madina", "japan", "Maldives", "Dubai"];

// Step # 2: Print your array in its original order.

console.log("Original Order:")
console.log(travelDestinations)

// Step # 3: Print your array in alphabetical order without modifying the actual list.

console.log("\n Alphabetical order without modifying the actual list:") 
console.log([...travelDestinations].sort())

// Step # 4: Show that your array is still in its original order by printing it.

console.log("\n Array is still in it's original order:")
console.log(travelDestinations)

// Step # 5: Print your array in reverse alphabetical order without changing the order of the original list.

console.log("\n Reverse alphabetical order without modifying the actual list:") 
console.log([...travelDestinations].sort().reverse())

// Step # 6: Show that your array is still in its original order by printing it again.

console.log("\n Array is still in it's original order:")
console.log(travelDestinations)

// Step # 7: Reverse the order of your list. Print the array to show that its order has changed.

console.log("\n Reverse Order:")
travelDestinations.reverse()
console.log(travelDestinations)

// Step # 8: Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("\n Back to original:")
travelDestinations.reverse()
console.log(travelDestinations)

// Step # 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("\n Change to alphabetical order:")
travelDestinations.sort()
console.log(travelDestinations)

// Step # 10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("\n Change to reverse alphabetical order:")
travelDestinations.sort().reverse()
console.log(travelDestinations);