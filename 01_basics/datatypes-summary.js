let myUserName = "anwarislam@com";
let anotherName = myUserName;

anotherName = "papa ki pori";

console.log(myUserName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "anwar@ybl",
};

let userTwo = userOne;
userTwo.email = "hitesh@google.com";

console.log(userTwo.email);
console.log(userOne.email);

//string

const gameName = new String("anwar-islam-muslim");

console.log(gameName.length);
console.log(gameName.toUpperCase());

const newString = "    pakhi    ";
console.log(newString);
console.log(newString.trim());

const url = "https://anwar.com/anwar%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("anw"));
console.log(gameName.split("-"));
