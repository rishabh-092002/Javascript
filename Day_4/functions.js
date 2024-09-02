// function add(num1 , num2) {
//     console.log(num1 + num2)
// }
// const result = add(2 , 3)
// console.log(result);

function add(num1 , num2){
    return num1 + num2
}

const result = add(2 , 3)
// console.log(result);

function usernamemessage(username){
    if(username === undefined){           //Another way for it is - if(!username){}
        console.log("Please enter username");
        return
    }
    return `${username} looged in`
}

console.log(usernamemessage("rishabh"));
console.log(usernamemessage());

