//CITY NAMES

//formating city country pairs

function city_country(city : string, country: string): string {
    return `${city}, ${country};`
}

//PRINTING CITIES WITH COUNTRIES

console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Islamabad', 'Pakistan'));
console.log(city_country('Riyadh', 'Saudia Arabia'));
console.log(city_country('Istanbul', 'Turkey'));