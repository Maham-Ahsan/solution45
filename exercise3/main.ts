//storing person name in veriable
let personName:string = "Maham Ahsan"

//printing a person name in lowercase
console.log("Lowercase:", personName. toLowerCase());

//printing a person name in uppercase
console.log("Uppercase:", personName. toUpperCase());

//printing a person name in titlecase
console.log("Titlecase:", personName.replace(/\bw/g,c =>c.toUpperCase()));
