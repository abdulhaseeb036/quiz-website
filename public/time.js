let second =00;
let min = 00;


function watch() {
  second++;
  document.querySelector(".sec").innerHTML = second;
if (second > 60){
    min++;
    document.querySelector(".min").innerHTML = min;
   second = 00;
   
}

let formatsec = second < 10 ? `0${second}` : `${second}`;
document.querySelector(".sec").innerHTML = formatsec;
let formatmin = min < 10 ? `0${min}` : `${min}`;
document.querySelector(".min").innerHTML = formatmin;
}

setInterval(watch,1000);


function home() {
  location.href = "index.html";
}










