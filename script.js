/*** sort method with Examples *****/

//*1) Sort the array of fruits in alphabaticall order *//
//*************Sort in alphabatical order alters the original array as well ******///
/*  a) if result is less than zero or negative a comes before b
    b) if result is greater than zero b comes befiore a
    c) if result is equals to 0 nothing will happens
    (by default ascending order)
*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];

var result=fruits.sort();
//console.log(result);
//console.log(fruits);

var a=[10,5,6,20,30,50];

var result=a.sort((a,b)=>{
    var d=a-b;
    return d;
});
//console.log(result);

//*2) Sort the array of fruits in descending order *//
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

var result=fruits1.sort((a,b)=>{
    return b-a;
});
console.log(fruits1 );

//*2) Sort the array of numbers in Ascending order *//

var a=[74,18,10,5,84,24,105];

var result=a.sort((a,b)=>{
   return a-b; 
});
//console.log(result);

//*3) Sort the array of numbers in decending order *//
var a=[74,18,10,5,84,24,105];

var result=a.sort((a,b)=>{
   return b-a; 
});
//console.log(result);

//*4) Sort by product price highest price first (desending order)*//

var products=[
    {
        name:'Laptop',
        price:45000
    },
    {
        name:'mobile',
        price:30000
    },
    {
        name:'mobile',
        price:20000
    },
    {
        name:'mobile',
        price:10000
    },
    {
        name:'Tablet',
        price:80000
    },
    {
        name:'Dektop',
        price:60000
    }
];

var result=products.sort((a,b)=>{
    return b.price-a.price;
});
//console.log(result);

//*5) Given string below convert it in to array containing the length greater than 2 and sort with smaller word first*//

var my_str="It was a dark and stormy night";

var result=my_str.split(" ").filter((val,index)=>{
    return val.length > 2;
}).sort((a,b)=>{
    return a.length - b.length;
});
//console.log(result);

//*6) longer word first*//

var my_str="It was a dark and stormy night";

var result=my_str.split(" ").filter((val,index)=>{
    return val.length > 2;
}).sort((a,b)=>{
    return b.length - a.length;
});
//console.log(result);

//*7) Sort by Name*//

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

items.sort(function(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
//console.log(items);

//var names=['Edward','Sharpe','And','The','Magnetic','Zeros'];
//
//names.sort();
//console.log(names);

//*8) Sorting non asci characters other than english language*//

const item = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];

var result=item.sort((a,b)=>{
   return a.localeCompare(b); 
});
//console.log(result);