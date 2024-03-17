//checking username

//making list of current users
let current_users : string[] = ["Admin","Maham", "Hani", "Sadaf", "Maheen", "Ahsan"];

//making list of new users
let new_users : string[] = ["Ali", "Admin", "Hani", "Fatima", "Hamza"];


//loop list
let current_users_lower : string[]= current_users.map(user => user.toLowerCase())

//printing message to the users
for (let new_user of new_users){
    if (current_users_lower.includes (new_user.toLowerCase()))  {
        console.log(`sorry ${new_user}, that name is taken`)
    } else(
        console.log(`yes ${new_user}, is still in available list`)
    )
}