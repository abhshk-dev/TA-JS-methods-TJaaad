Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
    - Parameter: No parameter. can mention a specific separator which is optional. Array.join('.'); 
   - Return: A string with all the elements joined and separated by the same separator used in the array or as passed in the parameters.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join(); //'1,2,3'
     let numbers=[1,2,3,4];
     numbers.join('@');//'1@2@3@4'
     let colors = ['red', 'green', 'blue'];
     colors.join(''); // 'redgreenblue'
     ```
   - `join` joins all the values in the array and returns the string of it.
   - No it does not mutate the original array.
3. `flat`
   - Parameter: flat(depth).The depth value is of number data type 
   - Return: returns a new array with the sub-array elements concatenated to it.
   - Example:
     ```js
     let numbers = [1, 2, 3,[4,5 ]];
     numbers.flat(); //[1,2,3,4,5]
     let numbers=[1,2,3,4,[5,6,[7,8]]];
     numbers.flat(2);//[1,2,3,4,5,6,7,8]
     let colors = ['red', 'green', 'blue',[['orange','yellow']]];
     colors.flat(); // ['red', 'green', 'blue', Array(2)]
     ```
   - `flat` it concatenates all the sub array elements of the array.
   - No it does not mutate the original array.
4. `push`
   - Parameter: push(elements1,element2....elementN). Elements are the values which are to be added to the end of the parameter.
   - Return: returns a new array with the elements added to it.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.push(4); //[1,2,3,4]
     let numbers=[1,2,3,4];
     let count=numbers.push(21);//[1,2,3,4,21]
     console.log(count);//5
     let colors = ['red', 'green', 'blue','orange','yellow'];
     colors.push('pink'); // ['red', 'green', 'blue', 'orange','yellow','pink']
     ```
   - `push` it pushes the passed value(in the parameters) to the end of the array , and also returns the length of the new array
   -  it does  mutate the original array.
5. `indexOf`
   - Parameter: indexOf(searchelement,fromIndex). fromIndex parameter is optional.
   - Return: returns the first index of the element in the array.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.indexOf(3); //2
     let numbers=[1,2,3,2];
     console.log(numbers.indexOf(2,2));//3
     let colors = ['red', 'pink', 'blue','orange','yellow','pink'];
     colors.indexOf('pink',-1); //5
     ```
   - `indexOf` it returns the first index of the search element passed in the parameters.if the element is not present then it returns -1.
   -  it does not mutate the original array.
6. `lastIndexOf`
   - Parameter: lastindexOf(searchelement,fromIndex). fromIndex parameter is optional.
   - Return: returns the last index of the element in the array. if not present it returns -1.
   - Example:
     ```js
     let numbers = [1, 2, 3,1];
     numbers.lastIndexOf(1); //4
     let numbers=[1,2,3,2];
     console.log(numbers.lastIndexOf(2,2));//1
     let colors = ['red', 'pink', 'blue','orange','yellow','pink'];
     colors.lastIndexOf('pink',4); //1
     ```
   - `lastIndexOf` it returns the last index at which the search element passed in the parameters is present.if the element is not present then it returns -1.The array is searched backwards
   -  it does not mutate the original array.
7. `includes`
   - Parameter: includes(searchelement)
   - Return: returns either true or false.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.includes(1); //true
     let numbers=[1,2,3,4,5];
     console.log(numbers.includes(-1));//false
     let colors = ['red', 'pink', 'blue','orange','yellow','pink'];
     colors.includes('pink'); //true
     ```
   - `includes` it searches the array for the search element passed in the parameters of the method
   -  it does not mutate the original array.
8. `reverse`
   - Parameter: No parameters
   - Return: returns a reversed array.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.reverse(); //[3,2,1]
     let numbers=[1,2,3,4,5];
     console.log(numbers.reverse());//[5,4,3,2,1]
     let colors = ['red', 'pink', 'blue'];
     colors.reverse(); //['blue','pink','red']
     ```
   - `reverse` it searches the array for the search element passed in the parameters of the method
   -  it does  mutate the original array.
9. `every`
   - Parameter: every(callbackFunction,)
   - Return: returns either true or false.
   - Example:
     ```js
     let isCheckEven= (num) => num%2===0;
     let numbers = [12, 24, 36];
     numbers.every(isCheckEven); //true
     
     let checkAdult= (age)=>age>=18;
     let ages=[18,20,21,3];
     console.log(ages.every(checkAdult));//false
     
     var checkType= (str) => typeof(str)==='string';
     let colors = ['red', 'pink', 'blue','orange'];
     colors.every(checkType); //true
     ```
   - `every` it goes through the whole array to check whether all the elements satisfy the condition passed in the callback function.
   -  it does not mutate the original array.
10. `shift` 
   - Parameter: No parameters
   - Return: returns the removed element from the array.
   - Example:
     ```js
     let numbers = [12, 24, 36];
     console.log(numbers.shift()); //12 //[24,36]


     let ages=[18,20,21,3];
     console.log(ages.shift());//18 //[20,21,3]
     
     
     let colors = ['red', 'pink', 'blue','orange'];
     console.log(colors.shift()); //'red' // ['pink', 'blue','orange']
     ```
   - `shift` it removes the first element of the array and returns it. This changes the original array. This reduces the length of the array.If the length property of the array is 0 undefined is returned
     -  it  mutates the original array.

11. `splice`
   - Parameter: splice(start,deleteCount,itemtobeAdded)
   - Return: returns a new array with the removed or relaced elements.
   - Example:
     ```js
     let numbers = [12, 24, 36,60];
     console.log(numbers.splice(3,0,48));// [] 
     console.log(numbers);//[12,24,36,48,60]


     let ages=[18,20,21,3];
     console.log(ages.splice(1,1));//[20]
     console.log(ages) //[18,21,3]
     
     
     let colors = ['red', 'pink', 'blue','orange'];
     console.log(colors.splice(2,1,'magenta','purple')); //['blue'] 
     console.log(colors);// ['pink', 'blue','magenta','purple','orange']
     ```
   - `splice` method can be used for replacing or removing elements from an array and adding new elements in the array, its start index of the element to be removed is required and number of elements to be deleted from that index onwards is also required and if any element is required to be added from that index in the array is also required.
     -  it  mutates the original array.
      
12. `find`
   - Parameter: find(callbackFunction(element,index,array))
   - Return: returns the first element in the array which satisfies the provided testing conditions.
   - Example:
     ```js
     let checkfn= (num)=> num>=40;
     let numbers = [12, 24, 36,60];
     console.log(numbers.find(checkfn));// 60 

     let checkEven=[18,20,21,3];
     console.log(checkEven.find(num=>num%2===0));//18
          
     let colors = ['red', 'pink', 'blue','orange'];
     console.log(colors.find(color=> color==='RED')); //undefined
     console.log(colors);// ['pink', 'blue','magenta','purple','orange']
     ```
   - `find` method finds the first element in the array which satisfies the test condition of the callback function. if the thisArg parameter is not defined in the find method it will return undefined. 
     -  it does not  mutates the original array.

13. `unshift`
   - Parameter: unshift(elementToBeAddedToTheStart)
   - Return: returns the new array and the length of the array.
   - Example:
     ```js
     let numbers = [12, 24, 36];
     console.log(numbers.unshift(8,10)); // 5//[8,10,12,24,36]


     let ages=[18,20,21,3];
     console.log(ages.unshift(0));//5 //[0,18,20,21,3]
     
     
     let colors = ['red', 'pink', 'blue','orange'];
     console.log(colors.unshift('magenta','green'));//6  // ['magenta','green','pink', 'blue','orange']
     ```
   - `unshift` it adds elements to the start of the array, and changes the length of the array,and returns the length of the array.
     -  it  mutates the original array.

14. `findIndex`
   - Parameter: findIndex(callbackfn(element,index,array))
   - Return: returns the index of the first element that passes the test.
   - Example:
     ```js
     var checkAdult=(age)=>age>=18;
     let ages = [12, 24, 36];
     console.log(ages.findIndex(checkAdult)); // 1

     var checkOdd=(num)=> num%2 == 0;
     let numbers=[18,20,21,3];
     console.log(numbers.findIndex(checkOdd));//2
     
     var colorCheck= (color)=> color==='magenta';
     let colors = ['red', 'pink', 'blue','orange'];
     console.log(colors.findIndex(colorCheck));// -1
     ```
   - `findIndex` it returns the index of the element being checked in the callback function if the element is not found it returns -1.
   -  it does not mutate the original array.

15. `filter`
   - Parameter: filter(callbackfn(element,index,array))
   - Return: returns a new array which contains all the elements which have passed the test of the callback fn. if no elements pass the test empty array will be returned.
   - Example:
     ```js
     var checkAdult=(age)=>age>=18;
     let ages = [12, 24, 36];
     console.log(ages.filter(checkAdult)); // [24,36]

     var checkOdd=(num)=> num%2 == 0;
     let numbers=[18,20,21,3];
     console.log(numbers.filter(checkOdd));//[18,20]
     
     var colorCheck= (color)=> color.length < 6;
     let colors = ['red', 'pink', 'blue','orange'];
     console.log(colors.filter(colorCheck));//  ['red', 'pink', 'blue']
     ```
   - `filter` it returns a new array which contains all the elements in the array which have passed the test of the callback function.
   -  it does not mutate the original array.

17. `forEach`
   - Parameter: forEach(callbackfn(element,index,array))
   - Return: undefined.
   - Example:
     ```js
     var add=(age)=> console.log(age+2);
     let ages = [12, 24, 36];
     ages.forEach(add); // 14 26 38


     var opn=(num)=> console.log(num%2);
     let numbers=[18,20,21,3];
     console.log(numbers.forEach(opn));//0 0 1 1
     
     var colorCheck= (color)=> console.log(color.length < 6);
     let colors = ['red', 'pink', 'blue','orange'];
     console.log(colors.forEach(colorCheck));//  true true true false
     ```
   - `forEach` executes a provided function once for each element of the array.
   -  it does not mutate the original array.

18. `map`
   - Parameter: map(callbackfn(element,index,array))
   - Return: returns a new array with each element being the result of the callback function.
   - Example:
     ```js
     var add=(age)=> age+2;
     let ages = [12, 24, 36];
     console.log(ages.map(add)); // [14,26,38]


     var opn=(num)=> num%2;
     let numbers=[18,20,21,3];
     console.log(numbers.map(opn));//[0,0,1,1]
     
     var colorCheck= (color)=> color.length < 6;
     let colors = ['red', 'pink', 'blue','orange'];
     console.log(colors.map(colorCheck));//  [true, true, true, false]
     ```
   - `map` executes a provided function once for each element of the array and returns an array with each element being the result of the operation performed in the callback fn.
   -  it does not mutate the original array.
19. `pop`
   - Parameter: no parameters.
   - Return: returns the removed element from the array , undefined in case of empty array.
   - Example:
     ```js
     
     let ages = [12, 24, 36];
     console.log(ages.pop());//36 // [12,24]


     
     let numbers=[18,20,21,3];
     console.log(numbers.pop());//3 //[18,20,21]
     
     
     let colors = [];
     console.log(colors.pop());// undefined
     ```
   - `pop` removes the last element from the array and returns it.

   -  it  mutates the original array.


20. `reduce`
   - Parameter: reduce(callbackFn,initialValue).
   - Return: returns the removed element from the array , undefined in case of empty array.
   - Example:
     ```js
     
     let ages = [10, 20, 30, 40];
     let result=ages.reduce((accumulator,currentValue) =>{
       return accumulator + currentValue;
        
     });
        console.log(result);


     
     let numbers=[18,20,21,3];
     console.log(numbers.pop());//3 //[18,20,21]
     
     
     let colors = [];
     console.log(colors.pop());// undefined
     ```
   - `pop` removes the last element from the array and returns it.

   -  it  mutates the original array.

21. `slice`
   - Parameter: slice(start,end).
   - Return: returns a new array with the extracted elements.
   - Example:
     ```js
     let numbers = [12, 24, 36,60];
     console.log(numbers.slice(1)); 
     console.log(numbers);//[24,36,60]


     let ages=[18,20,21,3];
     console.log(ages.slice(1,3));//[20,21]
     
     
     
     let colors = ['red', 'pink', 'blue','orange'];
     console.log(colors.slice(0,2)); //['red','pink'] 
     ```
   - `slice` method helps extract the elements from the array without changing the original array, the start index value and the  end index value are to be passed in the parameters of this method. The elements before the start index and the elements after the end index are excluded in the process and the extracted array is returned. 
     -  it does not mutate the original array.

22. `some`
   - Parameter: some(callbackFunction,thisArg)
   - Return: returns either true or false.
   - Example:
     ```js
     let isCheckEven= (num) => num%2===0;
     let numbers = [12, 21, 31];
     numbers.every(isCheckEven); //true
     
     let checkAdult= (age)=>age>=18;
     let ages=[11,18,2,3];
     console.log(ages.some(checkAdult));//true
     
     var checkType= (str) => typeof(str)==='string';
     let colors = ['red', 1, 210,false];
     colors.some(checkType); //true
     ```
   - `some` it goes through the whole array to check whether any of the element satisfy the condition passed in the callback function.
   -  it does not mutate the original array.
