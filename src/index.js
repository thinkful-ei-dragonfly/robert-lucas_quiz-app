import $ from 'jquery';
import Quiz from './Quiz';
import TriviaApi from './TriviaApi.js';
import Question from './Question';
import QuizDisplay from './QuizDisplay';
import QuizStatus from './QuizStatus';
import Renderer from './lib/Renderer'
import Model from './lib/Model'



function main() {


  const quiz = new Quiz();
  window.quiz = quiz;  // adding `q` to `window`, so you can examine it in console

  const api = new TriviaApi();

  api.getQuestions()
    .then(response => {
      response.results.forEach(question => {
        quiz.addToUnasked(question);
      })
    });
      // console.log(quiz);

  const quizDisplay = new QuizDisplay(quiz, '.display');
  //
  const quizStatus = new QuizStatus(quiz, '.status');



  // Instantiate display classes

  // const quizDisplay = new QuizDisplay(quiz, '.display');

  // const quizStatus = new QuizStatus(quiz, '.status');



      ////   for each a = newQuestion.push(a)   Quiz.addToUnasked()    new Question()






}

$(main);
