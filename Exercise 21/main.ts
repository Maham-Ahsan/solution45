//storing in typescript object
interface item {
    name:string
    price:number
}
//creating two objects
const book: item ={
    name:"Halim",
    price:20
}
const apple: item= {
    name : 'apple',
    price : 5000
}

console.log(` book name: ${book.name}, price:$${book.price}`)
console.log(` Apple name: ${apple.name}, price:$${apple.price}`)