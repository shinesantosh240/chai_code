const username= false;

if (username){
    console.log(`The user is in this list ${username}`)
}else{
    console.log(`This is not the user: ${username}`)
}

//let val1 = 5??10

let val1 = null ?? 10

let val2 = null ?? 10??20

console.log(val1);
console.log(val2);

/***********************************Null coalesc opeartor******************/

const iceTeaPrice =150

iceTeaPrice<80?console.log("OK"):console.log("No")
