import React from 'react';

const UserScore = ( { questions, score }) => {

  return (
    <div className="user-score">
      There were {questions.length} questions and you got {score} correct!
    </div>
  )
};

export default UserScore;