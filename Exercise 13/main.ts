//Array

//favourite transportion

let favoriteTransportation: Array<[transport: string, brand: string]> = [];


//trabsportation type
favoriteTransportation.push(["Motorcycle", "Suzuki"]);

favoriteTransportation.push(["Car", "Toyota"]);

// Statement: “I would like to own a suzuki motorcycle.”

// Using for each loop to print a series of statements.

favoriteTransportation.forEach(([transport, brand]) => {console.log(`I would like to own a ${brand} ${transport}.`) })

