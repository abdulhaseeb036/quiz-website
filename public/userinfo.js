let user_n = sessionStorage.getItem("name");
document.querySelector(".name_u").innerHTML ="!" + " "+user_n;

// print total score in end.html page by geting sessionstorage
let score = sessionStorage.getItem("points");
document.querySelector(".num").innerHTML = score;

// let time = document.querySelector("")

let msi = sessionStorage.getItem("time");
let time = document.querySelector(".time");

time.innerHTML = "You Complete Your Quiz in "+ " " + msi;
