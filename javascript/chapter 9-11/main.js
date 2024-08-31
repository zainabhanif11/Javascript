//   Chapter 9-11

// Q:1
// const city = prompt("Enter your city: ");
// if (city.toLowerCase() === "karachi") {
//   alert("Welcome to city of lights!");
// } else {
//   alert(`Welcome to ${city}!`);
// }

// Q:2 
// const gender = prompt("Enter your gender (Male/Female): ").trim().toLowerCase();
// if (gender === "male") {
//   alert("Good Morning Sir.");
// } else if (gender === "female") {
//   alert("Good Morning Ma’am.");
// } else {
//   alert("Invalid input. Please enter Male or Female.");
// }

// Q:3
// const color = prompt("Enter the color of the road traffic signal (Red, Yellow, Green): ").trim().toLowerCase();
// if (color === "red") {
//   alert("Stop!");
// } else if (color === "yellow") {
//   alert("Get ready to go!");
// } else if (color === "green") {
//   alert("Go!");
// } else {
//   alert("Invalid input. Please enter Red, Yellow, or Green.");
// }

// Q:04 
// const fuel = parseFloat(prompt("Enter the remaining fuel in liters: "));
// if (fuel < 0.25) {
//   alert("Please refill the fuel in your car.");
// } else {
//   alert("You have sufficient fuel.");
// }

// Q:05
// // Q:06 Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// function computePercentageAndGrade(marks1, marks2, marks3, totalMarks) {
//     let totalMarksObtained = marks1 + marks2 + marks3;
//     let percentage = (totalMarksObtained / totalMarks) * 100;
//     let gradeThresholds = {
//       'A': 90,
//       'B': 80,
//       'C': 70,
//       'D': 60,
//       'F': 0
//     };
//     let grade = null;
//     for (let gradeLetter in gradeThresholds) {
//       if (percentage >= gradeThresholds[gradeLetter]) {
//         grade = gradeLetter;
//         break;
//       }
//     }
//     return { percentage, grade };
//   }
  
//   let marks1 = parseFloat(prompt("Enter marks obtained in subject 1: "));
//   let marks2 = parseFloat(prompt("Enter marks obtained in subject 2: "));
//   let marks3 = parseFloat(prompt("Enter marks obtained in subject 3: "));
//   let totalMarks = parseFloat(prompt("Enter total marks: "));
//   let result = computePercentageAndGrade(marks1, marks2, marks3, totalMarks);
//   console.log(`Percentage: ${result.percentage.toFixed(2)}%`);
//   console.log(`Grade: ${result.grade}`);

// // Q:07 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// function checkGuess() {
//   let userGuess = parseInt(prompt("Guess the secret number (1-10): "));
//   if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
//   } else if (userGuess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
//   } else {
//     alert("Try again!");
//     checkGuess();
//   }
// }
// checkGuess();

// // Q:08 Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// function checkDivisibilityBy3() {
//     let number = parseInt(prompt("Enter a number: "));
//     if (number % 3 === 0) {
//       alert(`${number} is divisible by 3`);
//     } else {
//       alert(`${number} is not divisible by 3`);
//     }
//   }
//   checkDivisibilityBy3();

// Q:09 Write a program that checks whether the given input is an
// even number or an odd number.
// Function to check if a number is even or odd
// function checkEvenOrOdd() {
//     let number = parseInt(prompt("Enter a number: "));
//     if (number % 2 === 0) {
//       alert(`${number} is an even number`);
//     } else {
//       alert(`${number} is an odd number`);
//     }
//   }
//   checkEvenOrOdd();

// // Q:10  Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// function checkTemperature() {
//     let temperature = parseFloat(prompt("Enter the temperature: "));
//     if (temperature > 40) {
//       alert("It is too hot outside.");
//     } else if (temperature > 30) {
//       alert("The Weather today is Normal.");
//     } else if (temperature > 20) {
//       alert("Today’s Weather is cool.");
//     } else if (temperature > 10) {
//       alert("OMG! Today’s weather is so Cool.");
//     } else {
//       alert("Please enter a valid temperature.");
//     }
//   }
//   checkTemperature();

// Q:11 Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// function calculator() {
//     let num1 = parseFloat(prompt("Enter the first number: "));
//     let num2 = parseFloat(prompt("Enter the second number: "));
//     let operation = prompt("Enter the operation (+, -, *, /, %): ");
//     if (operation === "+") {
//       let result = num1 + num2;
//       alert(`The result of ${num1} + ${num2} is ${result}`);
//     } else if (operation === "-") {
//       let result = num1 - num2;
//       alert(`The result of ${num1} - ${num2} is ${result}`);
//     } else if (operation === "*") {
//       let result = num1 * num2;
//       alert(`The result of ${num1} * ${num2} is ${result}`);
//     } else if (operation === "/") {
//       if (num2 !== 0) {
//         let result = num1 / num2;
//         alert(`The result of ${num1} / ${num2} is ${result}`);
//       } else {
//         alert("Error: Division by zero is not allowed.");
//       }
//     } else if (operation === "%") {
//       if (num2 !== 0) {
//         let result = num1 % num2;
//         alert(`The result of ${num1} % ${num2} is ${result}`);
//       } else {
//         alert("Error: Modulus by zero is not allowed.");
//       }
//     } else {
//       alert("Error: Invalid operation. Please enter +, -, *, /, or %.");
//     }
//   }
//   calculator();


