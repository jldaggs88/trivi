import React from 'react';

const UserScore = ({ questions, score, refreshPage }) => {

  return (
    <div className="score">
      There were {questions.length} questions and you got {score} correct!
      <button onClick={refreshPage}>Click to reload!</button>
    </div>
  )
};

export default UserScore;