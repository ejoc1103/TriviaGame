// variable for wins and losses
var wins = 0; 
var loses = 0;
var unAns = 0;
// questinos array of objects 
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);



function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
var myQuestions = [
    {
        question: "Who won the first Super Bowl?",
        answers: {
            a: 'NY Giants',
            b: 'Green Bay Packers',
            c: 'San Francisco 49ers',
            d: 'Houston Oilers'
        },
        correctAnswer: 'Green Bay Packers'
    },
    {
        question: "Who is the NBA modeled after?",
        answers: {
            a: 'Michael Jordan',
            b: 'John Stockton',
            c: 'Jerry West',
            d: 'Someone else'
        },
        correctAnswer: 'Rutgers and Trilogy partnership'
    }
];//more questions to follow


var clockRunning = false;
var intervalId;

// timer object
var timer = {

  time: 30,

// key named reset set equal to a function
  reset: function() {
// we use dot notation to set the time back to 0
    timer.time = 30;

    // DONE: Change the “display” div to “00:00.”
    $("#timer").text("30s");

  },
  start: function() {


    if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {
    console.log("stopping time");
    
    clearInterval(intervalId);
    clockRunning = false;
  },
  count: function() {

  
    timer.time--;

    if(timer.time === 0){
      console.log("working");
      timer.stop();
    }
    $("body").text(timer.time + "s");;
  }
};


  function startGame(){
    
    timer.start()

  }


    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;
  
        for(var i=0; i<myQuestions.length; i++){
            
            
            $("#quest").html(myQuestions[i].questions);

            $("#ans1").html(myQuestions[i].questions.a);
            $("#ans2").html(myQuestions[i].questions.b);
            $("#ans3").html(myQuestions[i].questions.c);
            $("#ans4").html(myQuestions[i].questions.d);
            
            var one = myQuestions[i].questions.a;
            var two = myQuestions[i].questions.b;
            var three = myQuestions[i].questions.c;
            var four = myQuestions[i].questions.d;
            
            $("#ans1").on("click", function(){
              if(one === myQuestions[i].answers){
              console.log("correct");        
              wins++;
              }
              else
                console.log("incorrect");
              losses++;
              })

            $("#ans2").on("click", function(){
              if(two === myQuestions[i].answers){
              console.log("correct"); 
              wins++;       
              }
              else
                console.log("incorrect");
              losses++;
              })

            $("#ans3").on("click", function(){
              if(three === myQuestions[i].answers){
              console.log("correct");
              wins++;        
              }
              else
                console.log("incorrect");
              losses++;
              })

            $("#ans4").on("click", function(){
              if(four === myQuestions[i].answers){
              console.log("correct");  
              wins++;      
              }
              else
                console.log("incorrect");
              losses++;
              })


          }

}

    