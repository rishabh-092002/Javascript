// Singleton created using constructor - Object.create

// Object Literal - No Singleton

const mySym = Symbol("Hellooo")
const myObj = {
    name : "Rishabh",
    [mySym] : "Worldd",
    email : "rishabh@googlle.com",
    array : ["Monday" , "Saturady"],
    "full name" : "Risshabh Agarwal"
}

// console.log(myObj.name);
// console.log(myObj["email"]);
// console.log(myObj["full name"]);
// console.log(myObj[mySym]);

// myObj.name = "Rishu"
// Object.freeze(myObj)
myObj.name = "Rishabh"
// console.log(myObj);

myObj.greeting = function(){
    console.log("Hellooooooooo");
}

myObj.greeting2 = function(){
    console.log(`Hellooo ${this.name}`);
    
}
console.log(myObj.greeting());
console.log(myObj.greeting2());





