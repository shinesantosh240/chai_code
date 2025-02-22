function sayMyname () {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H")

}

//sayMyname();

// function addTwoNumbers(number1,number2){

//     console.log(number1+number2);

// }
function addTwoNumbers(number1,number2){

    // let result =number1+number2;
    
    // console.log("Hiteshhhh")
    return number1+number2;

}
const Result = addTwoNumbers(3,2)

console.log("Result:",Result)

function loginUser(user) {
    user = user || "sam";
    if (!user) {
        console.log("Please enter a user name", user);
        return;
    }
    return `Hello ${user}, You are in`;
}

console.log(loginUser("Test")); // Output: Hello sam, You are in


