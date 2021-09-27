Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   - Parameter: No Parameters
   - Return: Returns a new string converted to UpperCase. 
   - Example:
     ```js
     let name = 'Arya Stark';
     console.log(name.toUpperCase());//'ARYA STARK'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     console.log(sentance.UpperCase()); // "A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
     let houseName = 'Starks';
     console.log(houseName.toUpperCase()); // "STARKS"
     ```
   - `.toUpperCase() this method converts the calling strings characters to Uppercase.

3. `toLowerCase`
   - Parameter: No Parameters
   - Return: Returns a new string converted to LowerCase. 
   - Example:
     ```js
     let name = 'ARYA STARK';
     console.log(name.toLowerCase());//'arya Stark'
     let sentance = 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG';
     console.log(sentance.toLowerCase()); // "a quick brown fox jumped over a lazy dog"
     let houseName = 'STARKS';
     console.log(houseName.toLowerCase()); // "starks"
     ```
   - `.toLowerCase() this method converts the calling strings characters to LowerCase.
4. `trim`
   - Parameter: No Parameters
   - Return: Returns a the string with all the whitespaces removed from both the ends.
   - Example:
     ```js
     let name = ' ARYA STARK ';
     console.log(name.trim());//'ARYA STARK'
     let sentance = '   A QUICK BROWN FOX JUMPED OVER A LAZY DOG ';
     console.log(sentance.trim()); // "A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
     let houseName = ' STARKS ';
     console.log(houseName.trim()); // "STARKS"
     ```
   - `.trim() this method removes the whitespaces in the string present on both the ends.
      
5. `trimEnd`
  - Parameter: No Parameters
   - Return: Returns  the string with  the whitespaces removed from  the end of the string.
   - Example:
     ```js
     let name = ' ARYA STARK ';
     console.log(name.trimEnd());//' ARYA STARK'
     let sentance = '   A QUICK BROWN FOX JUMPED OVER A LAZY DOG ';
     console.log(sentance.trimEnd()); // "  A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
     let houseName = 'STARKS ';
     console.log(houseName.trimEnd()); // "STARKS"
     ```
   - `.trimEnd() this method removes the whitespaces in the string present on the end of the string.
6. `trimStart`
   - Parameter: No Parameters
   - Return: Returns  the string with  the whitespaces removed from  the start of the string.
   - Example:
     ```js
     let name = ' ARYA STARK ';
     console.log(name.trimStart());//'ARYA STARK '
     let sentance = '   A QUICK BROWN FOX JUMPED OVER A LAZY DOG ';
     console.log(sentance.trimStart()); // "A QUICK BROWN FOX JUMPED OVER A LAZY DOG "
     let houseName = ' STARKS';
     console.log(houseName.trimStart()); // "STARKS"
     ```
   - `.trimStart() this method removes the whitespaces in the string present on the start of the string.

7. `concat`
   - Parameter: The parameter accepts string data and any number of strings can be added in the parameters. Abhishek.concat(' ',Agarwal); . 
   - Return: Returns a new string combined with the new text.
   - Example:
     ```js
     const firstName="Abhishek";
     const lastName="Agarwal";
     const middleName="Gopal";
     console.log(firstName.concat(' ', lastName));// "Abhishek Agarwal"
     console.log(firstName.concat(' ',middleName,' ',lastName));//"Abhishek Gopal Agarwal"
     console.log(firstName.concat('@',middleName,'@',lastName));//"Abhishek@Gopal@Agarwal"
     ```
   - `.concat(); this function concatenates two or more strings and returns a new string.
8. `endsWith`
   - Parameter: the string to be searched is put in the parameters, and length of the string which is being searched(optional).
   - Return: Returns true or false.
   - Example:
     ```js
     const firstName="Abhishek";
     const lastName="Agarwal";
     const middleName="Gopal";
     console.log(firstName.endsWith('k'));// True
     console.log(lastName.endsWith('l',6));//false
     console.log(middleName.endsWith('l',5));//true
     ```
   - endsWith(searchString):- This method searches the last of the String for the characters/string which are being passed in the parameters.
9. `includes`
   - Parameter: the string to be searched is put in the parameters, and length of the string which is being searched(optional), this method is case sensitive.
   - Return: Returns true or false.
   - Example:
     ```js
     const firstName="Abhishek";
     const lastName="Agarwal";
     const middleName="Gopal";
     console.log(firstName.includes('k'));// True
     console.log(lastName.incleudes('L',7));//false
     console.log(middleName.includes('l',5));//true
     ```
   - includes(searchString,length(optional)):- This method searches for the string passed in the parameters. this method is case sensitive ,it returns true or false.
10. `indexOf`
   - Parameter: searchstring is passed in the parameters(string data type).fromIndex can also be passed in the parameters(number data type) it searches for the string from the index passed in the parameters.
   - Return: Returns the index of the particular search string.If the string is not found then it returns -1.
   - Example:
     ```js
     const firstName="Abhishek";
     const lastName="Agarwal";
     const middleName="Gopal";
     console.log(firstName.indexOf('k'));// 7
     console.log(lastName.indexOf('B'));//-1
     console.log(lastName.indexOf('a',3));//true
     ```
   - The indexOf() method returns the position of the first occurence of a specified value in a string. This method  is case sensitive.
11. `lastIndexOf`
   - Parameter: searchstring is passed in the parameters(string data type).fromIndex can also be passed in the parameters(number data type) it searches for the string from the index passed in the parameters.
   - Return: Returns the index of the particular search string.If the string is not found then it returns -1.
   - Example:
     ```js
     const firstName="Abhishek";
     const lastName="Agarwal";
     const middleName="Gopal";
     console.log(firstName.lastIndexOf('h'));// 5
     console.log(lastName.lastIndexOf('a'));//5
     console.log(lastName.lastIndexOf('a',4));//2
     ```
   - The lastIndexOf() method is similar to indexOf method it also searches for the specified string but the search is performed backwards. This method  is case sensitive.
12. `padEnd`
   - Parameter: targetLength (number data type) or max length to be entered after the string has been padded. A string parameter can also be passed to pad the end of the string.
   - Return: Returns string.
   - Example:
     ```js
     const firstName="Abhishek";
     const lastName="Agarwal";
     const middleName="Gopal";
     console.log(firstName.padEnd(9,'k'));// "Abhishekk"
     console.log(lastName.padEnd(10));//"Agarwal   "
     console.log(middleName.indexOf(6,"@"));//"Gopal@"
     ```
   - The indexOf() method returns the position of the first occurence of a specified value in a string. This method  is case sensitive.
13. `padStart`
   - Parameter: targetLength (number data type) or max length to be entered after the string has been padded. A string parameter can also be passed to pad the end of the string.
   - Return: Returns string.
   - Example:
     ```js
     const firstName="Abhishek";
     const lastName="Agarwal";
     const middleName="Gopal";
     console.log(firstName.padStart(10,'.'));// "..Abhishek"
     console.log(lastName.padEnd(10));//"Agarwal   "
     console.log(middleName.indexOf(6,"@"));//"Gopal@"
     ```
   - The indexOf() method returns the position of the first occurence of a specified value in a string. This method  is case sensitive.
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
