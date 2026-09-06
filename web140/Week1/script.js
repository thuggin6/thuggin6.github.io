const form = document.getElementById('quizForm');

 //Keep track of correct answers
const correctAnswer = [];
//track number of correct answers:
let score = 0; 
let totalQuestions = 5;

form.addEventListener('change', (event) => {    
    const selectedRadio = event.target;
    
     
    
    if(selectedRadio){
        const questionNumber = selectedRadio.name.replace('num','');  
        let resultname = 'result' + questionNumber;
        const answer = document.getElementById(resultname);
        const isCorrect = selectedRadio.getAttribute('data-correct-answer') === 'true';

        //Check the selected answer
        if (isCorrect) {            
            answer.textContent = ' Correct!';
            answer.style.color = 'green';
            if (!correctAnswer.includes(resultname)){
                score++;
                correctAnswer.push(resultname);
            }
        } else {
            answer.textContent = ' Incorrect.';
            answer.style.color = 'red';
             if (correctAnswer.includes(resultname)){
                score--;
                correctAnswer.pop(resultname);
            }
        }
        //Display Score
        displayScore(score,totalQuestions);

    }
} );

//Display score
function displayScore(myscore,numOfQuestions){
    const scoreCount = document.getElementById("scoreValue");
    scoreCount.textContent = 'Total Correct: ' + myscore + ' out of ' + numOfQuestions;
    scoreCount.style.display="none";
}

function showScore() {
    document.getElementById("scoreValue").style.display = "block";
}