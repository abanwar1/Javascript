// Date

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(Date.now());
// console.log(Date.parse());
// console.log(Date.UTC());

// console.log(typeof myDate);
// let customDate = new Date(2023, 0, 23);
// console.log(customDate);
// console.log(customDate.toString());

let myCreatedDate = new Date("01-2-2002");
console.log(Date.now());
console.log(myCreatedDate.getTime());

//convert into second
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate.getTime());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
