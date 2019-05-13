import $ from 'jquery';
import Quiz from './Quiz';
import TriviaApi from './TriviaApi.js';
import Question from './Question';

function main() {
  const q = new Quiz();
  window.q = q;  // adding `q` to `window`, so you can examine it in console
  
  console.log(q);
  
  const api = new TriviaApi();
  const quiz = new Quiz();


  // Start


  api.getQuestions()
    .then(response => {
      console.log(response.results);

      // DONT DO HERE
      response.results.forEach( quiz.addToUnasked( new Question(textOfQuestion, answer) ) )
      ////   for each a = newQuestion.push(a)   Quiz.addToUnasked()    new Question()

      return response.results;

    });


}

$(main);

