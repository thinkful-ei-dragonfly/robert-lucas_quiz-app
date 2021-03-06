'use strict';

import $ from 'jquery';
import Renderer from './lib/Renderer';
import Quiz from './Quiz'
import TriviaApi from './TriviaApi'

class QuizDisplay extends Renderer {



  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
      'click .submitAnswer': 'handleSubmit',
      'click .continue': 'handleNextQuestion',
      'click .start-over': 'handleReset',
    };
  }

  _generateIntro() {
    return `
      <div>
        <h2>
          Welcome to Lucas & Rob's Trivia Quiz
        </h2>
        <h3>
          Test your smarts and see how high you can score!
        </h3>
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
        feedback = `
          <h3>Correct!</h3>
          <p>The correct answer was:</p>
          <p'>${this.model.currentQuestion.rightAnswer}</p>
          <button class="continue">Next Question</button>
          `;


      } else {
        answerString = '';
        feedback = `
          <h3>Sorry, that's incorrect.</h3>
          <p>You answered with:</p>
          <p>${this.model.userAnswer}</p>
          <p>The correct answer was:</p>
          <p>${this.model.currentQuestion.rightAnswer}</p>
          <button class="continue">Next Question</button>`;
      }

    }

    if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    }

    if (this.model.asked.length > 0 && this.model.asked.length <= 5) {
      let currentQuestion = quiz.getCurrentQuestion();

      for (var i = 0; i < currentQuestion.allAnswers.length; i++) {
        answerString += `
        <button class="submitAnswer">${currentQuestion.allAnswers[i]}</button>
        `;
      }
      if (this.model.isAnswered === true) {
        answerString = '';
      }
      if (this.model.isAnswered === false) {
        $('body').removeClass('greenBG').removeClass('redBG');
      }
      if (this.model.isAnswered === true && this.model.isCorrect === true) {
        $('body').addClass('greenBG');
      }
      if (this.model.isAnswered === true && this.model.isCorrect === false) {
        $('body').addClass('redBG');
      }
      html = `
      <form>
        <h2>${currentQuestion.questionText}</h2>
        ${answerString}
        ${feedback}
      </form>
      `;
    }


    if (this.model.unasked.length === 0 && this.model.asked.length === 6) {
      let endMessage = `<h1>You finished the Quiz! Thanks for playing!</h1>
        <button class="start-over">Play again?</button>`;
        html = endMessage;
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
  }

  handleNextQuestion(event) {
    event.preventDefault();
    this.model.isCorrect = false;
    this.model.isAnswered = false;
    this.model.nextQuestion();
    this.model.update();
  }
  handleReset(){
    this.model.active = false;
    this.model.scoreHistory.push(this.model.score);
    this.model.asked = [];
    this.model.score = 0;
    this.model.isAnswered = false;
    this.model.isCorrect = false;

    const api = new TriviaApi();
    api.getQuestions()
      .then(response => {
        response.results.forEach(question => {
          quiz.addToUnasked(question);
        });
      })
      .then(response => {
        this.model.active = true;
        this.model.nextQuestion();
        this.model.update()
      });



  }

  sendToResults(isCorrect){
    if (true) {

    }
  }
}

export default QuizDisplay;
