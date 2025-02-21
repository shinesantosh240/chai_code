//singleton

//boject literal
//Object.create ---> This is called constructor method 0r singleton

const mySym = Symbol("Key1")

const Juser ={
    name:"Santosh",
    "fullName":"SK Pandit",
    [mySym]:"MyKey1",
    email:"SK@google.com",
    age:35,
    job_Title:"Senior Analyst",
    Sal:100000
}

//console.log("Salary:",Juser.Sal,"Name:",Juser.name,"Job Title:",Juser.job_Title)

Juser.Sal=3830000;

// console.log(Juser.fullName)

// console.log(Juser.Sal)
// console.log(Juser.age)
// console.log(Juser.email)


Juser.email="Sk@accenture1.com"
//console.log(`Hello ${Juser.fullName}, Welcome to JS learning please find your email ${Juser.email},`)
//Object.freeze(Juser)
Juser.email="Sk@accent.com"
Juser.fullName= "S_K Pandit"
//console.log(`Hello ${Juser.fullName}, you email id is ${Juser.email}`)

Juser.greeting =function(){
    console.log("Hello Santosh")
}
console.log(Juser.greeting())

Juser.greetingTwo =function(){
    console.log(`Hello ${this.fullName} and your salary ${this.Sal}, welcome to new company`)
}

console.log(Juser.greetingTwo())

