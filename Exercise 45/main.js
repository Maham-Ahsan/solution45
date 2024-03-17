"use strict";
//detail car objects with flexible properties
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createCar("Suzuki", "Ciaz", { color: "Black", year: "2024" });
console.log(myCar);
