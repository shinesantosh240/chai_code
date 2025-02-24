function calculatecartprice(...value)
{
    return value;
}

var result =calculatecartprice(200,300,400,500);

console.log(result)

function CalC( num1,num2,...Values)
{
    return num1,num2,Values;
}

var returnesult =CalC(200,300,400,500);

console.log(returnesult)

const nUser ={
    name:"Hitesh Chowdhury",
    age:33,
    sal:2900000
}

function hanldeObject(anyobject){

    console.log(`user name is ${anyobject.name}, sal: ${anyobject.sal}\n`)

}
hanldeObject(nUser)
// hanldeObject({
//     name:"Rajesh",
//     sal:2890000
// })


const Array =[800,900,700,500,300,433]

function NArray(HArray){

    return HArray[2] 

}
console.log(NArray(Array))