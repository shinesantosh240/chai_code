

// const addtwo =(num1,num2)=>{
//     return num1+num2
// }

// console.log(addtwo(2,8))

const addtwon =(num1,num2)=>num1+num2
//addtwon(3,4)
//console.log(`add two number is: ${addtwon(10,9)}`)


const user ={ username:"Hitesh",age:40,

welcome: function(){
    console.log(`Welome to js course ${this.username}`)
    //console.log(this)
}


}
//user.welcome();
const y=user.username="Sammy";
//user.welcome();


function chai(){
    let userName ="Hites C"
    console.log(this.userName)
}

chai();

const tea =()=>{
    let usernm="Hitman";
    console.log(usernm);
}
tea()