'use strict';

class TriviaApi {

  constructor() {
    this.getQuestions = function() {

      let BASE_URL = 'https://opentdb.com/api.php?amount=5&type=multiple';
  
      return fetch(BASE_URL)
        .then( response => {
          if (!response.ok) {
            throw new Error("request questions from server unsuccessful");
          }
          // console.log(response);
          // console.log(response.body);
          // console.log(response.json());
          return response.json();
        })
        .catch(error => console.log(error.message));
    }

  }


  

  // // let BASE_URL = 'https://opentdb.com/api.php?amount=5&type=multiple';

  // this.getQuestions = function() {

  //   let BASE_URL = 'https://opentdb.com/api.php?amount=5&type=multiple';

  //   return fetch(BASE_URL)
  //     .then( response => {
  //       if (!response.ok) {
  //         throw new Error("request questions from server unsuccessful");
  //       }
  //       console.log(response);
        
  //     })
  //     .catch(error => console.log(error.message));
  // }
}


export default TriviaApi;
