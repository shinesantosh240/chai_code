const code =["Java","Linux","Python"]

code.forEach((item)=>{
    //console.log(item);
})

const filNumbers =[18,34,54,11,12,13,14,15,76]

const numbersFilter =filNumbers.filter(function(num){
    return num>15;
})
//console.log(numbersFilter)

const i =[10,11,12,13,14,15,16,17]

const fillNumbers = i.filter(item=>item>13);

//console.log(fillNumbers);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981,
    edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
    edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999,
    edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
    edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009,
    edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987,
    edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986,
    edition: 1996 },
    { title:'Book Eight',genre:'Devotion',publish:2000,edition:2005}]

    let userBook =books.filter(item=>item.genre==='Devotion');
    console.log(userBook);

    userBook =books.filter(item=>{
        return item.edition>2000 && item.genre==='History'
    })