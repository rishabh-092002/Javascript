//Two Types of memory - Stack(Primitives) and Heap(Non Primitives)
let username = "rishabh"
let name = username
name = "agarwal"
console.log(name);
console.log(username);

let myObj = {
    name : "rishabh",
    email: "rishabh@gmail.com"
}
let user = myObj
user.name = "agarwal"
console.log(user.name);
console.log(myObj.name);
// Heap Memory uses reference and stack memory uses copy value.
