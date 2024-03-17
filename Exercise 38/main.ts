//CITIES

//describing cities with a function
function describe_city(city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}.`);
}  

//cities names
describe_city("Karachi");
describe_city("Peshawer");
describe_city("Faisalabad");
describe_city("Istanbul", "Turkey");