import React from 'react';

const AnswerOptions = ( { questionIndex, questions, handleUserChoice }) => {

  return (
    <div className="answer-options">
      {questions[questionIndex].incorrect.concat(questions[questionIndex].correct).map((option, index)=> {
        return <button className="option-btn" key={index}
          onClick={() => handleUserChoice(option)}>{option}
        </button>
      })}
  </div>
  )
};

export default AnswerOptions;