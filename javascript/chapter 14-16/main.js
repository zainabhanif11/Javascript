// Q1 
// let studentNames = [];

// Q2
// let studentNames = {};

// Q3
// let fruits = ["Apple", "Banana", "Cherry",];

// Q4 
// let numbers = [10, 20, 30, 40, 50];

// Q5
// let booleans = [true, false, true, false];

// Q6
// let mixedArray = ["Alice", 25, true, null, { name: "Bob" }, [1, 2, 3]];

// Q7
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// let listElement = document.getElementById("qualificationsList");
// for (let i = 0; i < qualifications.length; i++) {
//     let listItem = document.createElement("li");
//     listItem.textContent = qualifications[i];
//     listElement.appendChild(listItem);
// }

// Q8
// let studentNames = ["Alice", "Bob", "Charlie"];
// let studentScores = [450, 380, 490];
// let totalMarks = 500;
// let listElement = document.getElementById("studentScores");
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (studentScores[i] / totalMarks) * 100;
//     let listItem = document.createElement("li");
//     listItem.textContent = `${studentNames[i]}: Score = ${studentScores[i]}, Percentage = ${percentage.toFixed(2)}%`;
//     listElement.appendChild(listItem);
// }

// Q10
// let studentScores = [450, 380, 490, 250, 300];
//         studentScores.sort(function(a, b) {
//             return a - b; 
//         });
//         let listElement = document.getElementById("sortedScores");
//         for (let i = 0; i < studentScores.length; i++) {
//             let listItem = document.createElement("li");
//             listItem.textContent = `Score: ${studentScores[i]}`;
//             listElement.appendChild(listItem);
//         }

// Q11
// let cities = ["New York", "London", "Tokyo", "Paris", "Sydney", "Toronto"];
//         let selectedCities = [];
//         selectedCities[0] = cities[0];
//         selectedCities[1] = cities[1];
//         selectedCities[2] = cities[2];
//         let listElement = document.getElementById("cityList");
//         for (let i = 0; i < selectedCities.length; i++) {
//             let listItem = document.createElement("li");
//             listItem.textContent = selectedCities[i];
//             listElement.appendChild(listItem);
//         }

// Q12
//         var arr = ["This ", "is ", "my ", "cat"];
//         var resultString = arr.join('');
//         document.getElementById("result").textContent = resultString;

Q13
// let fifoArray = [];
//         fifoArray.push("First");
//         fifoArray.push("Second");
//         fifoArray.push("Third");
//         let firstItem = fifoArray.shift(); 
//         let secondItem = fifoArray.shift(); 
//         let listElement = document.getElementById("fifoList");
//         let listItem1 = document.createElement("li");
//         listItem1.textContent = `Removed: ${firstItem}`;
//         listElement.appendChild(listItem1);

//         let listItem2 = document.createElement("li");
//         listItem2.textContent = `Removed: ${secondItem}`;
//         listElement.appendChild(listItem2);

//         let remainingItems = fifoArray.join(", ");
//         let remainingItemList = document.createElement("li");
//         remainingItemList.textContent = `Remaining in FIFO: ${remainingItems}`;
//         listElement.appendChild(remainingItemList);