"use strict";
//checking username
let current_users = ["Admin", "Maham", "Hani", "Sadaf", "Maheen"];
let new_users = ["Ali", "Admin", "Hani", "Fatima", "Hamza"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`sorry ${new_user}, that name is taken`);
    }
    else
        (console.log(`yes ${new_user}, is still in available list`));
}
