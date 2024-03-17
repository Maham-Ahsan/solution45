// Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// This code is written by: Maham Ahsan
// Date : 4/Mar/2024

//PROGRAM 1

// This Program Stores a person’s name in a variable, and print a message to that person:

//storing person name
let personName:string = "Maham"
//printing a message to the person
console.log(`Hello ${personName}, would you like to learn some python today?`);

//PROGRAM 2

//In this program we are printing name in uppercase, lowercase and title case

//storing person name in veriable
let person_Name:string = "Maham Ahsan"

//printing a person name in lowercase
console.log("Lowercase:", person_Name. toLowerCase());

//printing a person name in uppercase
console.log("Uppercase:", person_Name. toUpperCase());

//printing a person name in titlecase
console.log("Titlecase:", person_Name.replace(/\bw/g,c =>c.toUpperCase()));
