const name = "hassaan";

const repoCount = 50;

// console.log(name + " repo count: " + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hassaan");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   hassaan   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hassaa%40n"

console.log(url.replace("%40", "-"));

console.log(url.includes("hassaan"));

console.log(gameName.split("-"));
