const name = 'Hitesh'

const repoCount =50

console.log(`Hello I am ${name}`, `and I have ${repoCount}` )

 const gameName =new String('Hitesh_Hct')

// console.log(gameName[0])
// console.log(gameName[1])

// console.log(gameName.__proto__);

// console.log(gameName.length) // to know the length of the string

// console.log(gameName.toUpperCase())// to convert the string to Uppercase

// console.log(gameName.charAt(2))//to know the at 2 position which character is lying

// console.log(gameName.indexOf('t'))// to know the postion of any character in the string
// const newString =gameName.substring(0,5)
// console.log(newString)




//console.log(nnewstring)

const nwstring =gameName.length// to find out the length of a string
console.log(nwstring)


const nnewstring =gameName.slice(2,nwstring)

console.log(nnewstring)

const moreString ="       Hitesh          "

console.log(moreString)

console.log(moreString.trimStart())

const url ="www.gmail.com/%20santosh"

console.log(url.replace('%20',"-")) //Repalce character from a string or line 

console.log(url.includes("santosh"))// We can ask to the console using 'includes' keyword
console.log(gameName.split("_"))


