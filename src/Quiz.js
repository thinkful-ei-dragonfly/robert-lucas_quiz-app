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

  }


  // Add this new question we created passed in as a param to unasked question array

  new Question('ddfd', )


  // Example method:
  startGame() {
    this.active = true;
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