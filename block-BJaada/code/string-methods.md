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
   - Return: Returns  the string with  the whitespaces removed from  the start of the string.
   - Example:
     ```js
     const firstName="Abhishek";
     const lastName="Agarwal";
     const middleName="Gopal";
     console.log(firstName.concat(' ', lastName));// "Abhishek Agarwal"
     console.log(firstName.concat(' ',middleName,' ',lastName));//"Abhishek Gopal Agarwal"
     console.log(firstName.concat('@',middleName,'@',lastName));//
     ```
   - `.trimStart() this method removes the whitespaces in the string present on the start of the string.
8. `endsWith`
9. `includes`
10. `indexOf`
11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
