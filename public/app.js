// CODED BY HASEEB


function sum(e){
    e.preventDefault();
    var aa = document.forms["welcome"]["name"].value;
    sessionStorage.setItem("name" ,aa);
    location.href  ="quiz.html/quiz.html";
}




