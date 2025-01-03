// # Primitive  = 7 Types = String, Number, Boolean, null , undefined , Symbol , BigInt

// # Reference = 2 Types = Object, Array , Function

// Memory In Javascript
// Stack , Heap

// Stack Is Mostly Used in Primitive Data Types
// Heap Is Mostly Used in Non-Primitive Data Types

let myYoutubename = "luffy'slogic.js";
let anothername = myYoutubename
anothername = "devilx16";

console.log(myYoutubename);

console.log(anothername);

let userone = {
    email: "userone@example",
    upi: "userone@ybl",
}

let userTwo = userone;

userTwo.email = "usertwo@example.com";

console.log(userone.email);
console.log(userTwo.email);
