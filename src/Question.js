'use strict';

class Question {

  /**
   * This constructor creates an individual question that houses.....
   *
   * @param {*} questionText string that represents question
   * @param {*} rightAnswer string of right answer
   * @param {*} arrayWrong an array of strings that contains all the wrong answers
   */
  constructor(questionText, rightAnswer, arrayWrong) {

    this.questionText = questionText;
    this.rightAnswer = rightAnswer;

    this.allAnswers = arrayWrong;
    this.allAnswers.push(rightAnswer);
    this.allAnswers.sort();

    this.userAnswer = null;

  }

  // addQuestion

//   function addAnswers( arrayWrong )

}

export default Question;


// WHAT WIRE FRAME SUGGESTS

// Question {
//   text: "Whats does ...",
//   answers: ['Hats, Shoes'],
//   correctAnswer: 'Hats',
//   userAnswer: null,
// }


// BEHAVIOR:

// Needs to do: method
