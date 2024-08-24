let myArr = new Array(1,2,3,4,5)
// console.log(myArr);

// Array methods
// console.log(myArr.push(6));
// console.log(myArr.pop());
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// Slice and Splice 
// const myn1 = myArr.slice(1,3) //index 1 ,2 are included
// console.log(myArr)
// console.log(myn1);

// const nyn2 = myArr.splice(1,3) //index 1, 2 ,3 are included
// console.log(myArr)
// console.log(nyn2);

// Slice dont manipulate the original array where splice manipulate the original array.

const numb1 = [1,2,3,4]
const num2 = [5,6,7]

// numb1.push(num2)
// console.log(numb1);
// console.log(numb1[4][1]);

// const new1 = numb1.concat(num2)
// console.log(new1)

// const all_numbers = [...numb1 , ...num2 , ...myArr]
// console.log(all_numbers);

// const flat_array = [1,2,3,[4,5,6],7,8,[9,[10,11]]]
// const real_arry = flat_array.flat(Infinity)
// console.log(real_arry);

console.log(Array.isArray("Rishabh"))
console.log(Array.from("Rishabh"));
console.log(Array.from({name : "Rishabh"})); //Gives Empty Array 

score1=100
score2=200
console.log(Array.of(score1 , score2))