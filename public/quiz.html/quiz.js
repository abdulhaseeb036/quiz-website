
var questions = [
    {
        id : 1,
        question : "Who is the owner of this Quiz app?",
        answer : "Haseeb Alam Rafiq",
        option : [
            "Haseeb Alam Rafiq",
            "Muhammad Wasi",
            "Mark zinger Burger",
            "None of these"

        ]
    },

    {
        id : 2,
        question : "When was MR HASEEB ALAM born?",
        answer : "12-dec-2000",
        option : [
            "13-aug-2000",
            "12-may-1999",
            "1-march-2001",
            "12-dec-2000"

        ]
    },

    {
        id : 3,
        question : "Which university MR HASEEB ALAM RAFIQ complete Becholars degree?",
        answer : "Lumber 1 university",
        option : [
            "Baharia university ",
            "Lumber 1 university",
            "IBM university",
            "DHA suffah university"

        ]
    },
    
    {
        id : 4,
        question : "jab barish aata hy tu, ?",
        answer : "Pani aata hy",
        option : [
            "Kuch nhi aata",
            "Sb kuch aata hy",
            "Pani aata hy",
            "Zayada pani ata hy"

        ]
    },

    {
        id : 5,
        question : " Ye Tu Hoga , Was Spoken By ?",
        answer : "Laddan Jafri",
        option : [
            "Waqar Zaka",
            "Laddan Jafri",
            "Amir Liaquat",
            "None Of These"

        ]
    },

    {
        id : 6,
        question : "1988 Noble Peace Prize Has Been Awarded To?",
        answer : "Pakistan",
        option : [
            "Diego",
            "Anwar Sadat",
            "United Nations",
            "Pakistan"

        ]
    },

    {
        id : 7,
        question : "Robert Mugabe is: ?",
        answer : "President Of Zimbabwe",
        option : [
            "President Of Zimbabwe",
            "President Of Kenya",
            "President Of Span",
            "President Of France"

        ]
    },

    {
        id : 8,
        question : "Which Country is , LAND OF GOLDEN FLEECE?",
        answer : "Australia",
        option : [
            "Zimbabwe",
            "Pakistan",
            "Australia",
            "France"

        ]
    },

    {
    id : 8,
    question : "Which Country is , LAND OF SUICIDE OF PEOPLE?",
    answer : "India",
    option : [
        "Canada",
        "Afghanistan",
        "India",
        "New Zealand"

    ]
},

  {
    id : 9,
    question : "Longest Ever Smuggling Tunnel Discovered is ____________ Border?",
    answer : "US-Mexico",
    option : [
        "US-Mexico",
        "Canada-US",
        "Pakistan-India",
        "India-China"

    ]
},

]



// var welcome = document.getElementById(location.href="../index.html" ,"first-ip");
// console.log(welcome.value);

// counter
var counter = 0;
var userPoints = 0;
function nextq() {

    var userAns = document.querySelector("li.option.active").innerHTML;
    if (userAns == questions[counter].answer){
        userPoints = userPoints + 10;
        sessionStorage.setItem("points" ,userPoints);

    }

    if (counter == questions.length -1) {
        sessionStorage.setItem("time" ,min+ " " + "Minutes"+ " " + second+ " " +"Seconds");
        location.href = "../end.html";
        return;    
    }

    console.log(userPoints);
    counter++;
    show(counter);

}

// on every onload mean refresh this function calls and in this function
// show(counter) function calls
window.onload = function() { 
    show(counter); //here counter value 0 means first q render on refresh page.
}


// this function render onclick new question with options 
function show(counter) {
    var question = document.getElementById("questions");
    question.innerHTML=`
    <h2>Q${counter +1}. ${questions[counter].question}</h2>
    <ul>
    <li class="option">${questions[counter].option[0]}</li>
    <li class="option">${questions[counter].option[1]}</li>
    <li class="option">${questions[counter].option[2]}</li>
    <li class="option">${questions[counter].option[3]}</li>
    </ul>
    `;
    toggleActive();
}



function toggleActive() {
          let option1 = document.querySelectorAll("li.option");

for(let i = 0; i< option1.length; i++){               
    option1[i].onclick =function() {                 
     for(let j = 0; j< option1.length; j++){       
        if(option1[j].classList.contains("active")){  
            option1[j].classList.remove("active");  
        }
        option1[i].classList.add("active");

      }
    }
    
  }
}





   
        




