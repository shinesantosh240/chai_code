//Primitive
// //7 types :String,Number, Null,Boolean,Undefined,symbol, BigInt


// //Non Primitive(Reference)

// //Array, Objects, Functions


// const id = Symbol('123')

// const anotherid = Symbol('123')

// console.log(id===anotherid)

// const bigNumber =12345324n;
// console.log(bigNumber)

// const heros =["Shaktiman","Naagraj","Doga"]

// let myObj= {
//     Name:"Raj",
//     age : 28
// }

// const myFunction = function(){
//     console.log("hello World")
// }

// console.log(typeof(heros))


let myYoutubename ="youtube.com"

let anotherName = myYoutubename

anotherName ="Biscuitaurcode"
console.log(myYoutubename)

console.log(anotherName)

let userOne ={
    email:"UserOne@gmail.com",
    upi:"user@ybl"
}

let usertwo =userOne

usertwo.email ="Userme@hm.com"

console.log(userOne.email)

console.log(usertwo.email)