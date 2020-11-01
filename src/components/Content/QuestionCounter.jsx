import React from 'react';

const QuestionCounter = ( { questionIndex, questions }) => {

  return (
    <div className='question-count'>
      <span>Question {questionIndex + 1}</span>/{questions.length}
    </div>
  )
};

export default QuestionCounter;