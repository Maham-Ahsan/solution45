//making an array for greeting including admin

let users: string[] = ["Maham", "Hani", "Maheen", "Tooba", "Admin"];

//printing message to them

for (let user of users) {
    if (user === "Admin"){
        console.log ('Hello Admin, would you like to see a status report?. ')
    }
    
    else{
        console.log(`Hello ${user}, 'Thank you for logging in again.'`)
    }
};