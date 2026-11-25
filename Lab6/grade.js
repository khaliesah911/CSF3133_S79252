/* Error Identification and Correction

Error 1 (grade.html, Line 9):Missing return before checkMark() in onsubmit.
Error 2 (grade.html, Line 17):Function name showtable() should be showTable().
Error 3 (grade.js, Line 5):Assignment operator (=) should be comparison operator (===).
Error 4 (grade.js, Line 9):isNan() should be isNaN().
Error 5 (grade.js, Line 14):Logical AND (&&) should be OR (||).
Error 6 (grade.js, Line 28):getElementByID() should be getElementById().
Error 7 (grade.js, Line 30):style.colour should be style.color.
Error 8 (grade.js, Line 38):Loop should start from 0 instead of 1.
Error 9 (grade.js, Line 42):innerHtml should be innerHTML.
*/
// Check student mark function
function checkMark() {

// Get input values
let name = document.forms["gradeForm"]["name"].value;
let mark = document.forms["gradeForm"]["mark"].value;

// Check empty name
if (name.trim() === "") {
    alert("Name must be filled out.");
    return false;
}

// Check empty mark
if (mark.trim() === "") {
    alert("Mark field cannot be empty.");
    return false;
}

// Check numeric value
if (isNaN(mark)) {
    alert("Please enter a valid numeric value.");
    return false;
}

// Convert mark into number
mark = Number(mark);

// Check mark range
if (mark < 0 || mark > 100) {
    alert("Mark must be between 0 and 100.");
    return false;
}

// Declare grade variable
let grade;

// Determine student grade
if (mark >= 80) {
    grade = "A";

} else if (mark >= 65) {
    grade = "B";

} else if (mark >= 50) {
    grade = "C";

} else {
    grade = "F";
}

// Display student result
document.getElementById("result").innerHTML =
    name + " got grade " + grade;

// Change result colour according to grade
if (grade === "A" || grade === "B") {
    document.getElementById("result").style.color = "green";

} else if (grade === "C") {
    document.getElementById("result").style.color = "orange";

} else {
    document.getElementById("result").style.color = "red";
}

// Display date and time using Date()
document.getElementById("checkTime").innerHTML =
    "Checked on: " + new Date();

// Prevent page refresh
return false;
}

// Display grade table function
function showTable() {

let grades = ["A", "B", "C", "F"];

let ranges = ["80-100", "65-79", "50-64", "0-49"];

// Create table
let tableHTML = "<table>";

tableHTML += "<tr><th>Grade</th><th>Mark Range</th></tr>";

// Loop through all grades
for (let i = 0; i < grades.length; i++) {

    tableHTML +=
        "<tr><td>" + grades[i] +
        "</td><td>" + ranges[i] +
        "</td></tr>";
}

tableHTML += "</table>";

// Display table
document.getElementById("tableContainer").innerHTML =
    tableHTML;
}

// Generate random mark function
function randomMark() {

// Generate random whole number from 0 to 100
let random = Math.floor(Math.random() * 101);

// Put random mark into mark input
document.getElementById("mark").value = random;
}