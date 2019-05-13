'use strict';


import Question from './Question';

class Quiz {

  static DEFAULT_QUIZ_LENGTH = 2;

  constructor() {
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.active = false;

    // TASK: Add more props here per the exercise
    this.score = 0;
    this.scoreHistory = [];
  }

  addToUnasked(question) {
    // First break down this question object and make variables for question text, right answer, wrong answer array
    // Then we're going to make a new Question(questiontext, rightAnswer, wrongArray)
    // then we'll push that new question into this.unasked

    const rightAnswer = question.correct_answer;
    const questionText = question.question;
    const arrayWrong = question.incorrect_answers;

    const newQuestion = new Question(questionText, rightAnswer,arrayWrong)
    this.unasked.push(newQuestion);
    // console.log(this.unasked);
  }




  // Example method:
  startGame() {
    this.active = true;
    this.nextQuestion();
  }
  nextQuestion() {
    // runs initially but also runs after a click event handler on a "Continue" button
    let currentQuestion = this.unasked.pop();
    this.asked.push(currentQuestion);
    this.currentQuestion = currentQuestion;
    return currentQuestion;
    // This will run after the event handler compares userAnswer to this.asked item's rightAnswer
  }
  submitAnswer(answer) {
    if (this.currentQuestion.rightAnswer === answer) {
      console.log("you were right");
      score += 1;
    } else {
      console.log("you were wrong")
    }
    // Validate answers and render some kind of feedback;
  }
  renderFeedback(result) {
    if (result === true) {
      // render successful feedback
    } else {
      // render feedback with the right answer
    }
    // generate 'continue' button
  }
  collectHighScore(){
    function sortNumbers(a,b) {
      return b - a;
    }
    this.scoreHistory.sort(sortNumbers);
    if (scoreHistory[0]) {
      return scoreHistory[0];
    }

  }
}

export default Quiz;



// WHAT WIRE FRAME RECOMMENDS/SUGGESTS

// Quiz {
//   unasked: [Question, Question],
//   asked: [Question],
//   score: 0,
//   scoreHistory: [2, 5],
//   active: true,
// }
