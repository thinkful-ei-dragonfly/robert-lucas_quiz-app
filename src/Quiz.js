'use strict';
import Model from './lib/Model'
import Question from './Question';



class Quiz extends Model {

  static DEFAULT_QUIZ_LENGTH = 2;

  constructor() {

    super();

    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.active = false;

    // TASK: Add more props here per the exercise
    this.score = 0;
    this.scoreHistory = [];
    this.currentQuestion = null;
    this.isCorrect = false;
    this.isAnswered = false;
    this.userAnswer = '';
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
  }

  // Example method:
  startNewGame() {
    this.active = true;
    this.nextQuestion();
    this.update();  // render the
  }

  /**
   * Returns the current question field.
   */
  getCurrentQuestion() {
    return this.currentQuestion;
  }


  /**
   * Updates the current question to the question that is removed from the unasked array.
   * Adds the current question to the asked array.
   * updates the this.currentQuestion.
   * calls a command to re-render the page with the new question that is currently being asked
   *
   */
  nextQuestion() {
    // runs initially but also runs after a click event handler on a "Continue" button
    let currentQuestion = this.unasked.pop();
    this.asked.push(currentQuestion);
    this.currentQuestion = currentQuestion;
    this.update();
    // return currentQuestion;
    // This will run after the event handler compares userAnswer to this.asked item's rightAnswer
  }

  submitAnswer(answer) {
    this.userAnswer = answer;
    if (this.currentQuestion.rightAnswer === answer) {
      this.score += 1;
    }
    return this.renderFeedback(this.currentQuestion.rightAnswer === answer);
  }

  renderFeedback(result) {
    if (result === true) {
      // render successful feedback
      return 'You were right';
    } else {
      // render feedback with the right answer
      return false;
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
