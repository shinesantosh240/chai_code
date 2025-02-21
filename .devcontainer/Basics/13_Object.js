//const tinder = new Object()-->singleton 
 const tinder ={}

 tinder.user ="12345A"
tinder.name ="Sammy"
tinder.isLoggeduser=false
console.log(tinder)

//const regularUser ={
    // email:"some@gmail.com",
    // fullname:{
    //     userfullname:{
    //         firstName:"Sam",
    //         LastName:"john"
    //     }
        // }


//console.log(regularUser.email)

const regularUser1 ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstName: "Sam",
            LastName: "john"
        }
    }
}

//console.log(regularUser1.email);

//console.log(regularUser1.fullname.userfullname.firstName);


const obj1 = {1:"a",2:"b",3:"c"}

const obj2={3:"d",4:"e",f:"f"}

const obj3 ={obj1,obj2}

//console.log(obj3)

const obj4=Object.assign(obj1,obj2)
//console.log(obj4)

const obj5 ={...obj1,...obj2}

//console.log(obj5)
console.log(tinder);

console.log(Object.keys(tinder));

console.log(Object.values(tinder));

console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLoggeduser'));

console.log(obj1.toString())







