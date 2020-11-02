import React from 'react';

const QuestionCounter = ( { questionIndex, questions }) => {

  return (
    <div className="count">
      <span>Question {questionIndex + 1}</span>/{questions.length}
    </div>
  )
};

export default QuestionCounter;