import React from 'react';
import restartbtn from '../../Branding/restartbtn.png';

const UserScore = ({ questions, score, refreshPage }) => {

  return (
    <div className="score">
      There were {questions.length} questions and you got {score} correct!
      <button className="refresh-btn" onClick={refreshPage}><img src={restartbtn} atl="" className="refresh-img" /></button>
    </div>
  )
};

export default UserScore;