//Primitive
//7 types :String,Number, Null,Boolean,Undefined,symbol, BigInt


//Non Primitive(Reference)

//Array, Objects, Functions


const id = Symbol('123')

const anotherid = Symbol('123')

console.log(id===anotherid)

const bigNumber =12345324n;
console.log(bigNumber)

const heros =["Shaktiman","Naagraj","Doga"]

let myObj= {
    Name:"Raj",
    age : 28
}

const myFunction = function(){
    console.log("hello World")
}

console.log(typeof(heros))
