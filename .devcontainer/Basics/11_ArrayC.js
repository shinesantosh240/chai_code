// const marvelHeros=["Thor","IronMan","SpiderMan"]

// const dcHeros =["SuperMan","Flash","Batman"]

// const num7 =[9,8,7,6]

// marvelHeros.push(dcHeros,num7)

// console.log(marvelHeros[3][0]);

// const array = [1, 2, 3, 6, 7,99];
// const newLength = array.push(4, 5);
//  console.log("R:",array); // Outputs: [1, 2, 3, 4, 5]
// // console.log(newLength); // Outputs: 5

// const combinedHeros = marvelHeros.concat(dcHeros,num7);
// console.log("C:",combinedHeros)
//  //node 11_ArrayC.jsconsole.log(combinedHeros[3][0]);

const another_Array =[1,2,3,[4,5,6],7,8,[0,2]]

const real_another_Array =another_Array.flat(Infinity)

console.log("Result:",real_another_Array)


//array.of() - this method is used for convertion of list of arguements into array

let score1 =100; 
let score2= 200; 
let score3 =300

console.log(Array.of(score1,score2,score3))





