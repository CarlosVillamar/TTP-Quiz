$(document).ready(function () {


    //function below sets up the entire quiz and active slide on page load
    (function () {

        //grabs elements from the the respective Ids and sets it to a variable constant
        const quizContainer = document.getElementById("quiz");
        const resultsContainer = document.getElementById("result");
        const submitButton = document.getElementById("submit");
        const score = document.getElementById('score')

        //Sets the array of questions
        const myQuestions = [{
            question: "Who is the current president of the U.S.?",
            answers: {
                a: "Vladmir Putin",
                b: "Barack Obama",
                c: "Sadam Hussain",
                d: "Donald Trump",
            },
            correctAnswer: "d"
        },

        {


            question: "What is the name of the actor in the series 'The Flash' ?",
            answers: {
                a: "Barry Allen",
                b: "Wally West",
                c: "Grant Gustin",
                d: "Carlos Valdes",
            },
            correctAnswer: "c"
        },

        {
            question: "What team is Lebron James on?...for now",
            answers: {
                a: "Houston Rockets",
                b: "Cleveland Indians",
                c: "Cleveland Cavaliers",
                d: "Los Angeles Lakers",
            },
            correctAnswer: "c"
        },

        {
            question: " Which country  has won the most World Cups?",
            answers: {
                a: "Argentina",
                b: "Russia",
                c: "Italy",
                d: "Brasil",
            },
            correctAnswer: "d"
        },

        {
            question: "Who is the king of pop?",
            answers: {
                a: "James Brown",
                b: "Chris Brown",
                c: "Michael Jackson",
                d: "Madonna",
            },
            correctAnswer: "c"
        },

        {
            question: "Which movie grossed the most money in 2018?",
            answers: {
                a: "Incredibles",
                b: "Black Panthers",
                c: "Deadpool",
                d: "Avengers: Infinity War",
            },
            correctAnswer: "b"
        },



        {
            question: "What is a popular dish in Cuba?",
            answers: {
                a: "Frita",
                b: "Cheeseburger",
                c: "Asado",
                d: "Carbonara",
            },
            correctAnswer: "a"
        },

        {
            question: "When was the first car invented?",
            answers: {
                a: "2018",
                b: "1886",
                c: "1773",
                d: "1856",
            },
            correctAnswer: "a"
        },

        {
            question: "Where did hip-hop originate?",
            answers: {
                a: "Queens",
                b: "West Virginia",
                c: "Bronx",
                d: "Manhatthan",
            },
            correctAnswer: "c"
        },


        {
            question: "In what state is the statue of liberty located?",
            answers: {
                a: "NY",
                b: "NJ",
                c: "CA",
                d: "IN",
            },
            correctAnswer: "a"
        },

        ]

        function buildQuiz() {
            // we'll need a place to store the HTML output
            const output = [];

            // for each question...
            myQuestions.forEach((currentQuestion, questionNumber) => {
                // we'll want to store the list of answer choices
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {
                    // ...add an HTML radio button
                    answers.push(
                        `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
                );
            });

            // finally combine our output list into one string of HTML and put it on the page
            quizContainer.innerHTML = output.join(" ");
        }

        
        function showResults() {
            // gather answer containers from our quiz
            const answerContainers = quizContainer.querySelectorAll(".answers");

            // keep track of user's answers
            let numCorrect = 0;

            // for each question...
            myQuestions.forEach((currentQuestion, questionNumber) => {
                // find selected answer
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                // if answer is correct
                if (userAnswer === currentQuestion.correctAnswer) {
                    // add to the number of correct answers
                    numCorrect++;

                    // color the answers green
                    answerContainers[questionNumber].style.color = "lightgreen";
                } else {
                    // if answer is wrong or blank
                    // color the answers red
                    answerContainers[questionNumber].style.color = "red";
                }
            });

            // show number of correct answers out of total
            score.value = `${numCorrect} out of ${myQuestions.length}`;

            resultsContainer.value = `${numCorrect}`
            // results container
            

        }

        function showSlide(n) {
            slides[currentSlide].classList.remove("active-slide");
            slides[n].classList.add("active-slide");
            currentSlide = n;

            if (currentSlide === 0) {
                previousButton.style.display = "none";
            } else {
                previousButton.style.display = "inline-block";
            }

            if (currentSlide === slides.length - 1) {
                nextButton.style.display = "none";
                submitButton.style.display = "inline-block";
            } else {
                nextButton.style.display = "inline-block";
                submitButton.style.display = "none";
            }
        }

        function showNextSlide() {
            showSlide(currentSlide + 1);
        }

        function showPreviousSlide() {
            showSlide(currentSlide - 1);
        }



        // display quiz right away
        buildQuiz();

        const previousButton = document.getElementById("previous");
        const nextButton = document.getElementById("next");
        const slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        showSlide(0);

        // on submit, show results
        submitButton.addEventListener("click", showResults);
        previousButton.addEventListener("click", showPreviousSlide);
        nextButton.addEventListener("click", showNextSlide);
    })();



    $.ajax({
        type: 'GET',
        url: "http://api.napster.com/v2.2/search/verbose?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&per_type_limit=1&query=mario+solo+piano&type=track",
        success: (d) => {//attempted to do playlist
            // var i=0;
            // for( var t in d.search.data.tracks){
            // const s = d.search.data.tracks[i].previewURL
            // console.log(s)
            // $('audio').append("<source src='" + s + "'type='audio/mpeg'>")
            // i++
            // }
            const s = d.search.data.tracks[0].previewURL
            console.log(s)
            $('audio').append("<source src='" + s + "'type='audio/mpeg'>")

        }
    })

    var song = document.getElementById("audio")
    // console.log(song)

    $('#mute').click((e) => {
        e.preventDefault()
        // console.log("button")
      if(song.muted===true){
            song.muted =false
            $('#mute').css('background-color','orange')

        }else{
            song.muted=true
            $('#mute').css('background-color','blue')
        }
    })
  
    $("#tag").keydown(function (e) {
        if (e.which== 13) {
            // console.log("enter pressed")
            capped();
            e.preventDefault();
        }
    });
    $('#submit').click(function(){
            $('#form').submit()
    })

});
function capped() {
    //disable username text box to lock in the value
    document.getElementById("tag").readOnly = true;
}

