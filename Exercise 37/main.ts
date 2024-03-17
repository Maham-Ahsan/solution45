//large shirts

//making functions
function make_shirt(size: string = 'large', message:string = 'I love type script.') {
    console.log(`you have order a ${size}, shirt that says ${message} printed on it.`);
}

//printing message on shirts
//default large shirt message
make_shirt();

//default medium shirt message
make_shirt("medium"); 

//default small shirt message
make_shirt("small", "code can't lie, comments can");