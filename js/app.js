`use strict`;
// Phase 1 Requirements:

//Ask the user to enter his/her name as input.

let userName = prompt("Enter Your name plz");
if (userName == "") {
  userName = "invalid";
}
//console.log(userName);
// Ask the user to enter his/her gender as input.
// The answer should be either (male or female).
let userGender = prompt(`Enter Your Gender Plz :`);

// Ask the user to enter his/her age as input
// and alert the user if the age is less than or equal to zero.
let userAge = prompt("Enter Your Age Plz :");
if (userAge <= 0) {
  alert("Invalid Age!!!");
}

// Ask the user to confirm if he wants to skip the welcoming message.
let skip = confirm("Are you sure do you want to skip the welcoming message?");
//console.log(skip);

// Alert a welcoming message with the name of the user
// and the title Mr if the user is male and Ms if the user is female,
// and if the gender input is not correct,
// alert the welcoming message without the title, according to the confirmation.
function welcomingUser(userName, userGender) {
  if (skip === false) {
    if (userGender === "male") {
      alert("Welcome To Our Page Mr " + userName + " 😊");
    } else if (userGender === "female") {
      alert("Welcome To Our Page Ms " + userName + " 😊");
    } else {
      alert("Welcome To Our Page " + userName + " 🙄");
    }
  }
}
welcomingUser(userName, userGender);

//Phase 2 Requirements:

// As a user, I would like to answer more questions,
// so you should add new three (Yes/No) questions.

//1)
let isLovingPets = confirm("Do you Love Pets 🐰?");
//console.log(isLovingPets);
///2)
let isLovingMansuf = confirm("Do you Love Mansuf 🥘?");
//console.log(isLovingMansuf);
//3)
let isLovingJs = confirm("Do you Love JavaScript 👨‍💻?");
//console.log(isLovingJs);

//Consider putting all the answers into an array.
const arr = [];
arr.push(userName);
arr.push(userGender);
arr.push(userAge);
arr.push(isLovingPets);
arr.push(isLovingMansuf);
arr.push(isLovingJs);

//Traverse the array and print the items on the console.
for (let i = 0; i < arr.length; i++) {
  if (i === 0) {
    console.log("User Name : " + arr[i]);
  } else if (i === 1) {
    console.log("User Gender : " + arr[i]);
  } else if (i === 3) {
    console.log("is Loving Pets :" + arr[i]);
  } else if (i === 4) {
    console.log("is Loving Mansuf :" + arr[i]);
  } else if (i === 5) {
    console.log("is Loving JavaScript :" + arr[i]);
  } else {
    console.log("Age : " + arr[i]);
  }
}
