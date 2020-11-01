import React from 'react';

const Question = ( { questionIndex, questions }) => {

  return (
    <div className='question'>
      {questions[questionIndex].question}
    </div>
  )
};

export default Question;