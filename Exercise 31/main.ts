//no users

//use previous question users
let users: string[] = ["Maham", "Hani", "Maheen", "Tooba", "Admin"];


//print empty user
if (users.length === 0) {
    console.log("We need to find some users!");
} 
//removing all users from list
else {
    users = [];
    console.log("All user have been removed" + users.length);
}