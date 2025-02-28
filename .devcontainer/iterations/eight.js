const nums =[1,2,3,4,5]

const sum = nums.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);

console.log(sum);

const numbers = [1, 2, 3, 4];
const result = numbers.reduce((acclator, cutValue) => acclator + cutValue, 0);
//console.log(acclator);
console.log(result);  // Output: 10

const numsL =[1,2,3,4,5,6]

const sumC = numsL.reduce(function(acc,currval){
    console.log(`accumulator ${acc} and currvsal ${currval}`)
    return acc+currval
},0)

console.log(sumC);

const shoppingcart =[{itemName:"Js Course",Price :2999},
    {itemName:"Youtube",Price :999},{itemName:"PY",Price :899},{itemName:"Csharp",Price :9999}
]
const sumtotal =shoppingcart.reduce((acm,val)=>acm+val.Price,0)

console.log(sumtotal);




