//1.Write a program using for loop to print Numbers from 1 to 10.

// for(let i = 1; i <=10; i++){
//     console.log(i)
// }

// //2.Write a program using while loop to sum of Numbers from 1 to 100.

// let sum  =0;
// let i =1;
// while(i<=100){
//     sum += i;
//     i ++;
// }
// console.log("The sum of number from 1 to 100 is: ",sum);

// //3.Write a program using for loop to print all even numbers between 1 and 20.

// for(let i = 1; i <= 20; i ++){
//     if(i % 2 ===0){
//         console.log(i);
//     }
// }

// //4.Write a program using while loop to reverse the string (Softwarica).
// let str = "Softwarica"
// let reversed = "";
// let i = str.length -1;
// while(i>=0){
//     reversed += str[i];
//     i --;
// }
// console.log("Reversed String: ", reversed);

// //5.Write a program to find the largest number of Array [5, 8, 12, 3, 7]
// let number = [5, 8, 12, 3, 7];
// let largest= number[0];
// for(let i = 1; i < number.length; i++){
//     if (number[i]>largest){
//         largest= number[i];
//     }
// }
// console.log("The largest number of Array is : ", largest)

// //6.Write a program using a for loop to print the multiplication table of a given number (e.g.5).
// let num = 5;

// console.log('Multiplication Table of ${number}:');

// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }

// //7.Write a program using a while loop to count the number of digits in a given number.
// let number = parseInt(prompt("Enter a number:"));
// if (number < 0) {
//     number = Math.abs(number);
// }
// let digitCount = 0;
// do {
//     digitCount++;
//     number = Math.floor(number / 10); 
// } while (number > 0);
// console.log(`The number of digits is: ${digitCount}`);

// //8.Write a program using a for loop to generate the first 10 numbers of the Fibonacci sequence.

// let n1 = 0, n2 = 1, nextTerm;

// console.log("Fibonacci Sequence:");

// for (let i = 1; i <= 10; i++) {
//     console.log(n1); 
//     nextTerm = n1 + n2; 
//     n1 = n2; 
//     n2 = nextTerm; 
// }

// //9.Write a program using a while loop to calculate the sum of digits of a given number.

// let number = parseInt(prompt("Enter a number: "));
// if (number < 0) {
//     number = Math.abs(number);
// }
// let digitSum = 0;
// while (number > 0) {
//     digitSum += number % 10;  
//     number = Math.floor(number / 10);  
// }
// console.log(`The sum of the digits is: ${digitSum}`);


// //10.Write a program using a for loop to count the number of vowels in a given string (e.g., "Softwarica").

// let inputString = prompt("Enter a string:");
// inputString = inputString.toLowerCase();
// let vowelCount = 0;
// const vowels = "aeiou";
// for (let i = 0; i < inputString.length; i++) {
//     if (vowels.includes(inputString[i])) {
//         vowelCount++; 
//     }
// }
// console.log(`The number of vowels in "${inputString}" is: ${vowelCount}`);

// //11.Write a program using a while loop to check if a given string is a palindrome (reads the same backward as forward).
// let inputString = prompt("Enter a string:");
// inputString = inputString.toLowerCase().replace(/[^a-z0-9]/g, "");
// let left = 0;
// let right = inputString.length - 1;
// let isPalindrome = true;
// while (left < right) {
//     if (inputString[left] !== inputString[right]) {
//         isPalindrome = false;
//         break; 
//     }
//     left++;
//     right--;
// }
// if (isPalindrome) {
//     console.log(`"${inputString}" is a palindrome.`);
// } else {
//     console.log(`"${inputString}" is not a palindrome.`);
// }
