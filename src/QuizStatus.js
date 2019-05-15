'use strict';


import $ from 'jquery'

import Renderer from './lib/Renderer';

class QuizStatus extends Renderer {


  template() {
    // return some HTML here, utilizing `this.model`

    // Do what with this.model??

   

  //  debugger;

    let currentProgress = `${this.model.asked.length} of 5`;

    if (this.model.active === false || this.model.asked.length === 6) {
      currentProgress = 'Inactive';
    }

    

    // FUTURE: if we increase question count, need to account for non 5 question total, right now, fine

    return `
      <div>
      <p class="green">Score: ${this.model.score}</p>
      <p>High Score: ${this.model.collectHighScore()}</p>
      <p>Progress: ${currentProgress}</p>
      </div>
    `;


  }
}

export default QuizStatus;
