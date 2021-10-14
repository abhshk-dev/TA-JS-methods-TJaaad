let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName=[];
for(people of persons){
  peopleName.push(people.name);
}
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade=[];
for(people of persons){
  peopleGrade.push(people.grade);
}
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex=[];
for(people of persons){
  peopleSex.push(people.sex);
}
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
var filteredName=peopleName.filter(
  (name)=> name.startsWith('J') || name.startsWith('P'));
console.log(filteredName);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
var filterAC=peopleName.filter((name) =>
name.startsWith('A') || name.startsWith('C')).length;
console.log(filterAC);
// Log all the filtered male ('M') in persons array

for(people of persons){
  if(people.sex==='M'){
    console.log(`"Male Names"-${people.name}`);
  }
}
// Log all the filtered female ('F') in persons array
let filteredFemales=[];
for(people of persons){
  if(people.sex==='F'){
    filteredFemales.push(people.name);
  }
}
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let femalenameCJ=filteredFemales.filter((name)=> name.startsWith('C')||name.startsWith('J'));
// Log all the even numbers from peopleGrade array
let evenNum=peopleGrade.filter((num)=> num%2===0);

// Find the first name that starts with 'J' in persons array and log the object
for(people of persons){
  if(people.name.startsWith('J')){
    console.log(people);
    break;
  }
}
// Find the first name that starts with 'P' in persons array and log the object
for(people of persons){
  if(people.name.startsWith('P')){
    console.log(people);
    break;
  }
}
// Find the first name that starts with 'J', grade is greater than 10 and is a female
for(people of persons){
  if(people.name.startsWith('J')&& people.grade>10 && people.sex==='F'){
    console.log(people);
    break;
  }
}
// Filter all the female from persons array and store in femalePersons array
let femalePersons=[];
for(people of persons){
  if(people.sex==='F'){
    femalePersons.push(people);
  }
}
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons=[];
for(people of persons){
  if(people.sex==='M'){
    malePersons.push(people);
  }
}
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let gradeTotal=peopleGrade.reduce((ac,cv)=>ac=ac+cv,0);
console.log(gradeTotal);
// Find the average grade
let gradeAvg= gradeTotal/peopleGrade.length;
console.log(gradeAvg);
// Find the average grade of male
let maleGrades=[],maleTotal;
for(males of malePersons){
  maleGrades.push(males.grade);
}
maleTotal=maleGrades.reduce((ac,cv)=>ac=ac+cv,0);
console.log(maleTotal);
let maleAvg=maleTotal/maleGrades.length;
console.log(maleAvg);
// Find the average grade of female

let femaleGrades=[],FemaleTotal;
for(females of femalePersons){
  femaleGrades.push(females.grade);
}
FemaleTotal=femaleGrades.reduce((ac,cv)=>ac=ac+cv,0);
console.log(FemaleTotal);
let femaleAvg=FemaleTotal/femaleGrades.length;
console.log(femaleAvg);

// Find the highest grade
 let highest=[...peopleGrade].sort((a,b)=> a-b).pop();
// Find the highest grade in male
let highestMale=[...maleGrades].sort((a,b)=>a-b).pop();
// Find the highest grade in female
let highestFemale=[...femaleGrades].sort((a,b)=>a-b).pop();
// Find the highest grade for people whose name starts with 'J' or 'P'
let nameJorP=persons.filter((person)=>
person.name.startsWith('J')||
person.name.startsWith('P'));
let gradewithJorP=nameJorP.map((person)=> person.grade);
[...gradewithJorP].sort((a,b)=>a-b).pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let ascSort=peopleGrade.sort((a,b)=>a-b);
// Yes the elements of the peopleGrade changed.
// Sort the peopleGrade in descending order
let descSort=peopleGrade.sort((a,b)=> b-a);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let noMutation=[...peopleGrade].sort((a,b)=>b-a);
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort();