//    Practice set Chapter 6 to 9

// Q:1 Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// Q:2 What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2;
// var b = 1;
// document.write("a is : $ {a}");
// document.write("b is : $ {b}" );
// var result = --a - --b + ++b + b--;
// document.write("result : ${result}");


// Q:03  Write a program that takes input a name from user &
// greet the user.

// var username =prompt("What is you name");
// document.write(username);

// Q:04-05  Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var Enternum = prompt("enter number!" , 5);
// console.log(Enternum) 

// Q:06 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// var Maths_Num = +prompt("Enter your Math's Number");
// var Comp_Num = +prompt("Enter your Comp Number ");
// var phy_Num = +prompt("Enter your Phy Number");
// var total_marks = 300;
// var obt_marks =  Maths_Num + Comp_Num + phy_Num;
// document.write("Your percentage is : " + obt_marks/total_marks*100 + "%");