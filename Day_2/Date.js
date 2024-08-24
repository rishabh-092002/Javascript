let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString())
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());

// let anotherDate = new Date(2023 , 0 ,5)
// let anotherDate = new Date(2023 , 0 ,5, 5 ,3)
// let anotherDate = new Date("2023-01-14")
let anotherDate = new Date("01-14-2023")

// console.log(anotherDate.toLocaleString());
// console.log(typeof anotherDate);

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(anotherDate.getTime());
// console.log(Math.floor(Date.now()/1000));

console.log(anotherDate.toLocaleString('default' , {
    weekday: "long"
}));









