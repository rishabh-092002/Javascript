const obj = new Object()
obj.id = "123"
obj.name = "ABC"
obj.isLogged = false
// console.log(obj);

const user = {
    fullname : {
        ottherfullname : {
            first_name : "Rishabh",
            last_name  : "Agarwal"
        }
    }
}
// console.log(user.fullname.ottherfullname.first_name);


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4:"c"}
const obj3 = {5:"a" ,6:"c"}

// const obj4 = Object.assign({} , obj1 , obj2 , obj3) First Way
const obj4 = {...obj1 , ...obj2 , ...obj3} //Second Way **
// console.log(obj4);


const user2 = [
    {
        id : 1,
        name : "aaabccs"
    },
    {
        id : 1,
        name : "aaabccs"
    },
    {
        id : 1,
        name : "aaabccs"
    }
]
// console.log(user2[0].name);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// console.log(obj.hasOwnProperty('id')); //to find any key is present or not.


const course = {
    name :"JS",
    price : '999',
    teacher : "abc"
}

console.log(course.teacher); //1st way

const {teacher} = course
console.log(teacher); //2nd way 

const {teacher : instructor} = course //Destructure
console.log(instructor , "using destructuree");




