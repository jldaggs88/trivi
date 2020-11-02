import React from 'react';
import restartbtn from '../../Branding/restartbtn.png';
import { images } from '../../FunStuff/images.js';


const UserScore = ({ questions, score, refreshPage }) => {

  let randomM; 

  const renderMeme = () => {
    randomM = images[Math.floor(Math.random() * images.length)];
  }
  renderMeme();
  
  return (
    <div className="score">
      There were {questions.length} questions and you got {score} correct!
      <button className="refresh-btn" onClick={refreshPage}><img src={restartbtn} atl="" className="refresh-img" /></button>
      <img src={randomM} alt="" className="trivia-meme"/>
    </div>
  )
};

export default UserScore;