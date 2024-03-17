let car: string ='subaru';

//test 1 equality comparison(True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car =='subaru'); //True


//Test 2:strict equality comparison (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); //True


//Test 3:Inequality comparison (False)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); //False


//Test 4:Strict Inequality comparison (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); //False


//test 5: less then comparison (False)
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru'); //False (lexicographic comparison)


//test 6: Greater then comparison (False)
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru'); //False (lexicographic comparison)


//test 7: less then or equal comparison (true)
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); //True


//test 8: Greater then or equal comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); //True



//Test 9: Checking truthinest (True)
console.log("Is car? I predict True.");
console.log(car); //True (non-empty string is truthy)


//Test 9: Checking Falsiness (False)
console.log("Is !car? I predict False.");
console.log(!car); //False (negation of a truthy value)