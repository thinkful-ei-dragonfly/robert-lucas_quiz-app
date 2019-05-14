'use strict';

// import Renderer from './lib/Renderer'


// class QuizDisplay extends Renderer {

//   constructor () {

//     super();
//   }

//   /**
//    * This function must return an HTML string
//    */
//   template() {
//     if (!this.model.active && this.model.asked.length === 0) {
//       return `<div>Intro Screen</div>`;
//     }
//   }  


//   /**
//    * This function must return an object
//    */
//   getEvents() {
//     return {
//       'click .start': 'handleStart'
//     };
//   }

//   /**
//    * All event handler functions should call model methods
//    */
//   handleStart() {
//     this.model.startQuiz();   // WILL THIS WORK????? Call diff name that we made?
//   }
 
// }


  

import $ from 'jquery';
import Renderer from './lib/Renderer';



class QuizDisplay extends Renderer {


  // NEED?? Incorrect???
  constructor() {
    super();
  }


  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
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
    
    if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    }
    
    return html;
  }

  handleStart() {
    this.model.startNewGame();
  }
}

export default QuizDisplay;
