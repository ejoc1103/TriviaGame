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

    // DONE: Use setInterval to start the count here and set the clock to running.
    // if clockRunning is false
    if (!clockRunning) {
    	// variable intervalId holds the counter 
    	// setInterval() --> calls timer.count at an interval of 1000 milliseconds (1 second)
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {
    console.log("stopping time");
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  count: function() {

    // DONE: decrement time by 1
    timer.time--;
    // console.log(typeof timer.time)

    if(timer.time === 0){
      console.log("working");
      timer.stop();
    }
    $("body").text(timer.time + "s");;
  }
};

//console.log(timer.time) --> 0 

// ==================== FUNCTIONS ========================== //

// startGame function 
  function startGame(){
    // calls the start function inside the timer object
    timer.start()

  }

//Set up function to show the results (A panel to display them)


    function showQuestions(questions, quizContainer){

// we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    // for each question...
        for(var i=0; i<myQuestions.length; i++){
            
            // We need a command to reset the list of answers
            $("#quest").html(myQuestions[i].questions);

            $("#ans1").html(myQuestions[i].questions.a);
            $("#ans2").html(myQuestions[i].questions.b);
            $("#ans3").html(myQuestions[i].questions.c);
            $("#ans4").html(myQuestions[i].questions.d);
            // We want to assign a variable for each available answer...
            var one = myQuestions[i].questions.a;
            var two = myQuestions[i].questions.b;
            var three = myQuestions[i].questions.c;
            var four = myQuestions[i].questions.d;
                // ...add  button to each answer
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

// add question and its answers to the output

// finally combine our output list into one string of html and put it on the page

// gather answer containers from our quiz

// keep track of user's answers
        
        // for each question...

            // find selected answer
            
            // if answer is correct
                // add to the number of correct answers
                
                // make the answers a color to show its correct

                // if answer is wrong or blank
            
                // make the answers a color to show its wrong
   

        // show number of correct answers out of total


}
// =================== EVENT LISTENER ==================== //
  // startGame();



    

    // show questions right away
    
    // on submit button, show results
    