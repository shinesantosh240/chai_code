// const temprature =46;

// if (temprature<50){
//     console.log("Temprature is less than 50")
// }else{
//     console.log("Temprature less than 50");
// }


// const score =200;

// if (score>100){
//     let power ="Fly";
//     console.log(`The power hold with user is:${power}`)
// }
//console.log(power);

//console.log(`The power hold with user is:${power}`)

// const Balance =1000;

// if (Balance<750){
//     console.log("The original balance is Less:750");
// }else if(Balance<900){
//     console.log("The balance is 900");
// }else if(Balance <500){
//     console.log("The balance is less than 500")
// }else{
//     console.log("The balance is less than 1200")
// }

const userLoggin = true;
const debitcard = true;

const loggedinfromgoolge =true;
const loggedinfromEmail=true;
if (userLoggin && debitcard){
    console.log("Allow user to buy course")
}

if(loggedinfromEmail||loggedinfromgoolge){
    console.log("I am logged in")
}
/***********************Switch case*************************************/

const Month =3;

switch(Month)
{
    case 1:
        console.log("This month is January")
        break;
    case 2:
        console.log("This month is February")
        break;
    case 3:
        console.log("This month is March")
        break;
    case 4:
        console.log("This month is April")
        break;
        default: console.log("This is not sure")
        break;
}