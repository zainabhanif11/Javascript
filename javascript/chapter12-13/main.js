// Q1
// function checkCharacterType(char) {
//     const code = char.charCodeAt(0);

//     if (code >= 48 && code <= 57) {
//         return 'Number';
//     } else if (code >= 65 && code <= 90) {
//         return 'Uppercase Letter';
//     } else if (code >= 97 && code <= 122) {
//         return 'Lowercase Letter';
//     } else {
//         return 'Other Character';
//     }
// }
// const inputChar = prompt("Enter a character:");
// console.log(checkCharacterType(inputChar));

// Q2
//  let num1 = parseInt(prompt("Enter the first integer:"));
//  let num2 = parseInt(prompt("Enter the second integer:"));
//  if (isNaN(num1) || isNaN(num2)) {
//      console.log("Please enter valid integers.");
//  } else {
//      if (num1 > num2) {
//          console.log("The larger integer is: " + num1);
//      } else if (num2 > num1) {
//          console.log("The larger integer is: " + num2);
//      } else {
//          console.log("Both integers are equal.");
//      }
//  }

// Q3
//  let number = parseFloat(prompt("Enter a number:"));
//  if (isNaN(number)) {
//      console.log("Please enter a valid number.");
//  } else {
//      if (number > 0) {
//          console.log("The number is positive.");
//      } else if (number < 0) {
//          console.log("The number is negative.");
//      } else {
//          console.log("The number is zero.");
//      }
//  }

// Q4
// let char = prompt("Enter a single character:").toLowerCase();
// if (char.length !== 1) {
//     console.log("Please enter exactly one character.");
// } else {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// Q5
//         const correctPassword = "mypassword123";
//         let userPassword = prompt("Enter your password:");
//         if (userPassword === null || userPassword.trim() === "") {
//             console.log("Please enter your password.");
//         } else {
//             if (userPassword === correctPassword) {
//                 console.log("Correct! The password you entered matches the original password.");
//             } else {
//                 console.log("Incorrect password.");
//             }
//         }

// Q6
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);

// Q7
// var time = prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");
// var timeInt = parseInt(time, 10);
// if (isNaN(timeInt) || timeInt < 0 || timeInt > 2359 || time.length !== 4) {
//     console.log("Please enter a valid time in 24-hour format.");
// } else {
//     if (timeInt >= 500 && timeInt < 1200) {
//         console.log("Good morning");
//     } else if (timeInt >= 1200 && timeInt < 1700) {
//         console.log("Good afternoon");
//     } else if (timeInt >= 1700 && timeInt < 2100) {
//         console.log("Good evening");
//     } else {
//         console.log("Good night");
//     }
// }

