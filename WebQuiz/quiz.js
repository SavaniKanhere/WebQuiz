
var quesno=0;
var score=0;

const questionSet=[
  {
    question:"HTML stands for____",
    option1:"Hyper Text Markup Language",
    option2:"Higher Text Markup Language",
    option3:"Hyper Test Markup Language",
    option4:"Hyper Text Makeup Language",
    answer:"option1"
  },
  {
    question:"CSS stands for___",
    option1:"Cascading Store Sheet",
    option2:"Cascading Style Sheet",
    option3:"Carry Style Sheet",
    option4:"Cascading String Sheet",
    answer:"option2"
  },
  {
    question:"JavaScript is____language",
    option1:"scripting",
    option2:"programming",
    option3:"application",
    option4:"None of these",
    answer:"option1"
  },
  {
    question:"The attribute of form tag",
    option1:"Method  ",
    option2:"Action  ",
    option3:"Both (a)&(b)",
    option4:"Head    ",
    answer:"option3"
  },
  {
    question:"Local Browser used for validations on the Web Pages uses ____.",
    option1:"JS    ",
    option2:"CSS   ",
    option3:"HTML  ",
    option4:"Java  ",
    answer:"option1"
  },
  {
    question:"Which of the following selectors selects any tag with an id attribute set?",
    option1:"id     ",
    option2:"*      ",
    option3:".class ",
    option4:"#id    ",
    answer:"option4"
  }
];


document.querySelector("h3").innerHTML="Q."+(quesno+1)+" "+questionSet[quesno].question;
document.querySelector("#option1").innerText="A. "+questionSet[quesno].option1;
document.querySelector("#option2").innerHTML="B. "+questionSet[quesno].option2;
document.querySelector("#option3").innerHTML="C. "+questionSet[quesno].option3;
document.querySelector("#option4").innerHTML="D. "+questionSet[quesno].option4;

var attemptedQuestion=["false","false","false","false","false","false"];

for(var i=0;i<4;i++){

  document.querySelectorAll(".btn-light")[i].addEventListener("click",function(event){

    attemptedQuestion[quesno]=true;

    var answerFromQuestionSet=questionSet[quesno].answer;

    document.querySelector("#"+answerFromQuestionSet).style.backgroundColor="#79d70f";

    document.getElementById(questionSet[quesno].answer).disabled=true;

    if(event.target.id===questionSet[quesno].answer){
      // alert("Correct Answer :)");
      score++;
      document.querySelector(".score").innerHTML=score+"/6";
    }
    else{

      //alert("Oops!Wrong Answer");
    }
  });
}

  document.querySelector(".next").addEventListener("click",function(){

    document.querySelector("#"+questionSet[quesno].answer).style.backgroundColor="#af8baf";
    document.getElementById(questionSet[quesno].answer).disabled=false;

    quesno++;

    if(attemptedQuestion[quesno]==true){
      document.getElementById(questionSet[quesno].answer).disabled=true;
    }


    if(quesno<6){
      document.querySelector("h3").innerHTML="Q."+(quesno+1)+" "+questionSet[quesno].question;
      document.querySelector("#option1").innerText="A. "+questionSet[quesno].option1;
      document.querySelector("#option2").innerHTML="B. "+questionSet[quesno].option2;
      document.querySelector("#option3").innerHTML="C. "+questionSet[quesno].option3;
      document.querySelector("#option4").innerHTML="D. "+questionSet[quesno].option4;
    }
    else {
      alert("🎉Congratulations!🎊\nYour Score is "+score+" / 6.");
      window.location.href="index.html";
    }
    if(quesno===5)
    {
      document.querySelector(".next").innerHTML="Finish";
    }
  });

  document.querySelector(".prev").addEventListener("click",function(){

    document.querySelector("#"+questionSet[quesno].answer).style.backgroundColor="#af8baf";
    document.getElementById(questionSet[quesno].answer).disabled=false;

    if(quesno>=1){

      document.querySelector(".prev").disabled=false;

      quesno--;

      if(attemptedQuestion[quesno]==true){
        document.getElementById(questionSet[quesno].answer).disabled=true;
      }
      else{
        document.getElementById(questionSet[quesno].answer).disabled=false;
      }

      document.querySelector("h3").innerHTML="Q."+(quesno+1)+" "+questionSet[quesno].question;
      document.querySelector("#option1").innerText="A. "+questionSet[quesno].option1;
      document.querySelector("#option2").innerHTML="B. "+questionSet[quesno].option2;
      document.querySelector("#option3").innerHTML="C. "+questionSet[quesno].option3;
      document.querySelector("#option4").innerHTML="D. "+questionSet[quesno].option4;
      document.querySelector(".next").innerHTML="Next";
    }
    else{
      alert("You are already on first question");
    }
  });
