'use strict';

import $ from 'jquery';
import Renderer from './lib/Renderer';
import Quiz from './Quiz'

class QuizDisplay extends Renderer {



  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
      'click .submitAnswer': 'handleSubmit',
    };
  }

  _generateIntro() {
    return `
      <div>
        <p>
          Welcome to the Trivia Quiz
        </p>
        <p>
          Test your smarts and see how high you can score!
        </p>
      </div>
      <div class="buttons">
        <button class="start-quiz">Start Quiz</button>
      </div>
    `;
  }

  template() {
    let html = '';
    let feedback = '';
    let answerString = '';
    if (this.model.isAnswered === true) {
      if (this.model.isCorrect === true) {
        answerString = '';
        feedback = `<h1>TRUE</h1>`;
      } else {
        answerString = '';
        feedback = `<h1>FALSE</h1>`
      }

    }
    if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    }
    if (this.model.asked.length > 0) {
      let currentQuestion = quiz.getCurrentQuestion();

      for (var i = 0; i < currentQuestion.allAnswers.length; i++) {
        answerString += `
        <button class="submitAnswer">${currentQuestion.allAnswers[i]}</button>
        `;
      }
      let submitButton = `
        <button type="submit" name="submitAnswer" class="submitAnswer">Submit Answer</button>
      `;
      html = `
      <form>
        <legend>${currentQuestion.questionText}</legend>
        ${answerString}
        ${feedback}
      </form>
      `;

    }

    return html;
  }

  handleStart() {
    this.model.startNewGame();
    // debugger;
  }
  handleSubmit(event) {
    event.preventDefault();
    this.model.isAnswered = true;
    if(this.model.submitAnswer(event.target.textContent)) {
      this.model.isCorrect = true;
    }
    this.model.update();
    // this.sendToResults(this.model.isCorrect);
  }

  handleNext(){
    this.model.isAnswering = false;
  }
  sendToResults(isCorrect){
    if (true) {

    }
  }
}

export default QuizDisplay;
