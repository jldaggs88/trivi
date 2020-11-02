import React from 'react';

const QuestionCounter = ( { round, questionIndex, questions }) => {
  if(questionIndex !== 20){
    return (
      <div className="count">
        <div>Round {round}! </div>
        <span>Question {questionIndex + 1}</span>/{questions.length}
      </div>
    )
  } else {
    return (
      <div className="count">
        <div>Final Question!</div>
        <span>Question {questionIndex + 1}</span>/{questions.length}
      </div>
    )
  }
};

export default QuestionCounter;