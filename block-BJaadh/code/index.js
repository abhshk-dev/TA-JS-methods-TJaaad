// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/ 


// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '));
// - Add two new words in the strings array "called" and "sentance"
let cloneStr=[...strings];
let result=cloneStr.push('called','sentence.');
console.log(cloneStr);
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(cloneStr.join(' '));
// - Remove the first word in the array (strings)
console.log(strings.unshift());
// - Find all the words that contain 'is' use string method 'includes'
let allIs=strings.filter((str)=>str.includes('is'));
// - Find all the words that contain 'is' use string method 'indexOf'
let allIsAgain=strings.filter((str)=>str.indexOf('is')!==-1);
// - Check if all the numbers in numbers array are divisible by three use array method (every)

let checkOdd=numbers.every((num)=>num%3===0);
console.log(checkOdd);
// -  Sort Array from smallest to largest
let cloneSort=[...numbers];
 cloneSort.sort((a,b)=> a - b);
// - Remove the last word in strings
[...strings].pop(
);
// - Find largest number in numbers
let largest=cloneSort.sort((a,b)=> a - b).pop();

// - Find longest string in strings
let longest=strings.sort((a,b) => a.length - b.length).pop();
// - Find all the even numbers
let even=numbers.filter((num)=> num%2===0);
console.log(`even numbers ${even}`);
// - Find all the odd numbers
let odd=numbers.filter((num)=> num%2!==0);
console.log(`odd numbers ${odd}`);
// - Place a new word at the start of the array use (unshift)
strings.unshift('new word');
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3,7));
// - Make a subset of strings array ['a','collection']
console.log([...strings].slice(3,5));
// - Replace 12 & 18 with 1221 and 1881
console.log(
numbers.map((num)=>{
  if(num===12){
    return 1221;
  }else if(num===18){
    return 1881;
  }else{
    return num;
  }
}));
// - Replace words in strings array with the length of the word
let store=strings.map((string)=> string.length);
// - Find the sum of the length of words using above question
store.reduce((acc,cv)=>{
  acc=acc+cv;
  return acc;
},0)
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let Jcustomer=customers.filter((customer)=> customer.firstname.startsWith('J'));
console.log(Jcustomer);
// - Create new array with only first name
let firstName=customers.map((first)=>first.firstname);
console.log(firstName);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName=customers.map((fullname)=>`${fullname.firstname} ${fullname.lastname}`);
console.log(fullName);
// - Sort the array created above alphabetically
[...fullName].sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel= customers.filter((customer)=>{
  if(
  customer.firstname.toLowerCase().includes('a'); ||
  customer.firstname.toLowerCase().includes('e'); ||
  customer.firstname.toLowerCase().includes('i'); ||
  customer.firstname.toLowerCase().includes('o'); ||
  customer.firstname.toLowerCase().includes('u'); 
  ){
    return true;
  } 
  else{
    return false;
  }});