//detail car objects with flexible properties

type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car{
    return{
        manufacture,
        model,
        ...optional
    }
}

const myCar: car = createCar("Suzuki", "Ciaz", {color: "Black", year:"2024"})
console.log(myCar)