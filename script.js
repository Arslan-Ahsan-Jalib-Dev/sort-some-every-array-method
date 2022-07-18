               /*** sort method with Examples starts*****/
//*************Sort in alphabatical order alters the original array as well ******///
/*  a) if result is less than zero or negative a comes before b
    b) if result is greater than zero b comes befiore a
    c) if result is equals to 0 nothing will happens
    (by default ascending order)
*/


//*1) Sort the array of fruits in alphabaticall order in Ascending order*//

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();
//console.log(fruits);

//*2) Sort the array of fruits in alphabaticall order in descending order*//

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

fruits2.sort();
fruits2.reverse();
//console.log(fruits2);

//*3) Sort the array of alphabets*//

const mix_array=['a','d','A','n','w','z','Z'];

mix_array.sort();
//console.log(mix_array);
//
//[ "A", "Z", "a", "d", "n", "w", "z" ]  output


//*4) Sort the array of numbers in Ascending order *//

var a=[74,18,10,5,84,24,105];
a.sort((a,b)=>{
   return a-b; 
});

//console.log(a);

//*5) Sort the array of numbers in Desending order *//

var a=[74,18,10,5,84,24,105];
a.sort((a,b)=>{
   return b-a; 
});

//console.log(a);

//*6) Sort by product price highest price first (desending order) *//

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

products.sort((a,b)=>{
   return a.price - b.price; 
});
//console.log(products);

//*7) Sort by product price highest price first (Ascending order) *//

var products1=[
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
products1.sort((a,b)=>{
    return b.price - a.price;
})
//console.log(products1);

//*8) Given string below convert it in to array containing the length greater than 2 and sort with smaller word first*//

var my_str="It was a dark and stormy night";

var result=my_str.split(" ").filter((val,index)=>val.length > 2);
result.sort((a,b)=>{
    return a.length - b.length;
});

//console.log(result);

//*9) Given string below convert it in to array containing the length greater than 2 and sort with longer word first*//

var result1=my_str.split(" ").filter((val,index)=>val.length > 2);
result1.sort((a,b)=>{
    return b.length - a.length;
});
//console.log(result1);

//*7) Sort by Name in Ascending order*//

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

items.sort((a,b)=>{
   var nameA=a.name.toUpperCase();
   var nameB=b.name.toUpperCase(); 
   
   if(nameA<nameB){
       return -1;
   }
    if(nameA>nameB){
        return 1;
    }
    else{
        return 0;
    }
});
//console.log(items);

//*8) Sort by Name in Descending order*//
item=items;
item.reverse();
//console.log(item);

//*9) Sorting non asci characters other than english language*//
const item3 = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];

var result=item3.sort((a,b)=>{
   return a.localeCompare(b); 
});
//console.log(result);


//*10) Sorting non asci characters other than english language*//
var posts = [
{ foo: 'bbb', date: '2013-05-06' },
{ foo: 'aaa', date: '2012-01-02' },
{ foo: 'ccc', date: '2014-01-02' },
{ foo: 'ccc', date: '2015-01-02' },
  { foo: 'bbb', date: '2014-06-01' },
 { foo: 'aaa', date: '2014-02-02' },
];

posts.sort((a,b)=>{
   var nameA=a.date.toUpperCase();
   var nameB=b.date.toUpperCase(); 
   
   if(nameA<nameB){
       return -1;
   }
    if(nameA>nameB){
        return 1;
    }
    else{
        return 0;
    }
});

//console.log(posts);

                       /*** sort method with Examples ends*****/
                       /*** some method with Examples starts*****/

/* In some method atleast one element in the array meet the condition then return true else false

/*1) number greater than 14 */

var a=[3,4,5,19,30];

var result=a.some((val,index,source_array)=>{
    return val > 19;
});
//console.log(result);

/*2) number greater than 18 */
let person = 
    [
       {firstName:"John", 
        lastName:"Doe", 
        age:15, 
        eyeColor:"blue"},
        {firstName:"John", 
        lastName:"Doe", 
        age:18, 
        eyeColor:"blue"},
        {firstName:"John", 
        lastName:"Doe", 
        age:38, 
        eyeColor:"blue"},
        {firstName:"John", 
        lastName:"Doe", 
        age:50, 
        eyeColor:"blue"}
    ];
var result=person.some((val,index,source_array)=>{
    return val.age > 18;
});
//console.log(result);

/*3) Check weather even number in array */
const array = [1, 2, 3, 4, 5];

var result=array.some((val,index,source_array)=>{
    return val % 2===0;
});
//console.log(result);

/*4) Checking whether a value exists in an array */

const fruits_list = ['apple', 'banana', 'mango', 'guava'];

var result=fruits_list.some((val,index,array)=>{
   return val==='guava'; 
});
//console.log(result);

    

                      /*** some method with Examples ends*****/

                      /*** Every method with Examples starts*****/

/* In every method true will return if test condition is valid for every element of the array; */

/*1) Check if all values in ages[] are over 18: */

const ages = [32, 33, 16, 40];
var r=ages.every((val,index,array)=>{
    return val > 18;
});
//console.log(r);

/*2) Check if all values in ages[] are over 14: */

var r=ages.every((val,index,array)=>{
    return val > 14;
});
//console.log(r);

/*3) Check if all answers are the same: */
const survey = [
  { name: "Steve", answer: "yes"},
  { name: "Jessica", answer: "Yes"},
  { name: "Peter", answer: "Yes"},
  { name: "Elaine", answer: "No"}
];
var resulttt=survey.every((val,index,source_array)=>{
    if(index>0){
      return val.answer===source_array[index-1].answer;   
    }
    else if(index===0){
       return true; 
    }
    
});
//console.log(resulttt);

/*4) Check if one array is a subset of another array */

var arr1=[1, 2, 3, 4, 5, 6, 7];
var arr2=[5, 6, 7];

var rseult=arr2.every((val,index)=>{
    return arr1.includes(val);
});
//console.log(rseult);

/*5) Are all employees team lead  */
var employees = [
    {id: 101, profile: 'employees', skill: 'Java'},
    {id: 102, profile: 'Developer', skill: 'Java'},
    {id: 103, profile: 'Team Lead', skill: 'Java'}
 ];  

var result=employees.every((val,index)=>{
   return val.profile==="employees";
});
console.log(result);



  

  

     





                      /*** Every method with Examples ends*****/
