let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(arrWords){
  let longestWord=0;
  let wordlong=' ';
  for(word of arrWords){
    if(word.length>longestWord){
      longestWord=word.length;
      wordlong=word;
    }
}
return longestWord;
return wordlong;
}
findLongestWord(words);

// - Convert the above array "words" into an array of length of word instead of word.

function convertToLength(arrWords){
let emptyArr=[];
for(let i=0;i<arrWords.length;i++){
  emptyArr[i]= arrWords[i].length;
}
return console.log(emptyArr);
}
convertToLength(words);

// - Create a new array that only contains word with atleast one vowel.
function OneVowel(arrWords){
  var vowelArr=[];
  for(word of arrWords){
    if(word.includes('a')||word.includes('e')||word.includes('i')||word.includes('o')||word.includes('u')){
      vowelArr.push(word);
    }
  }
  return console.log(vowelArr);
}
OneVowel(words);
// - Find the index of the word "rhythm"
let find=words.indexOf('rhythm');
console.log(find);
// - Create a new array that contians words not starting with vowel.
function noVowel(arrWords){
  let noVowelArr=[];
  for(word of arrWords){
    if(word.startsWith('a')||word.startsWith('e')||word.startsWith('i')||word.startsWith('o')||word.startsWith('u')){
     
    }else{
      noVowelArr.push(word);
    }
  }
  return console.log(noVowelArr);
}
noVowel(words);
// - Create a new array that contianse words not ending with vowel
function endingVowel(arrWords){
  let endVowel=[];
  for(word of arrWords){
    if(word.endsWith('a')||word.endsWith('e')||word.endsWith('i')||word.endsWith('o')||word.endsWith('u')){

    }else{
      endVowel.push(word);
    }
  }
  return console.log(endVowel);
}
endingVowel(words);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arrNum){
  let sum=0;
for(num of arrNum){
    sum=sum+num;
}
return console.log(sum);
}
sumArray(numbers);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
const newArr=numbers.map(num=>num*3);
console.log(newArr);
// - Create a new array that contains only even numbers
const onlyEven= numbers.filter(num=>num%2===0); 
console.log(onlyEven);
// - Create  a new array that contains only odd numbers.
const onlyOdd=numbers.filter(num=>num%2!==0);
console.log(onlyOdd);
// - Create a new array that should have true for even number and false for odd numbers.
const trueOrfalse=numbers.map(num=>num%2===0);
console.log(trueOrfalse);
// - Sort the above number in assending order.
let sorted= [...numbers].sort(function(a,b){
  return a - b;
});
console.log(sorted);
// - Does sort mutate the original array?
//yes
// - Find the sum of the numbers in the array.
let reducer=(previousValue,currentValue)=> previousValue + currentValue;
let sum=numbers.reduce(reducer);
console.log(sum);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arrNum){
  let sum=0,avg;
  for(let i=0;i<arrNum.length;i++){
    sum=sum+arrNum[i];
  }
  avg=sum/arrNum.length;
  return console.log(avg);
}
averageNumbers(numbers);
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
