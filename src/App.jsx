import React, { useState } from 'react';

import Landing from './components/Landing/index.jsx';
import Header from './components/Header/index.jsx';
import { Question, QuestionCounter, AnswerOptions, UserScore } from './components/Content/index.jsx';
import questions from '../src/Apprentice_TandemFor400_Data.json';

import './App.css';

const App = () => {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [round, setRound] = useState(1);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [showLanding, setShowLanding] = useState(true);

  const handleUserChoice = (option) => {
    if(option === questions[questionIndex].correct){
      setScore(score + 1);
    }
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < (questions.length -1) / 2) {
      setQuestionIndex(nextQuestion);
      setRound(1);
    }  else if(nextQuestion >= (questions.length -1) / 2 && nextQuestion < questions.length) {
      setQuestionIndex(nextQuestion);
      setRound(2);
    } else if(nextQuestion === questions.length){
      setQuizComplete(true);
    }
  };

  const refreshPage = () => {
    setQuestionIndex(0);
    setQuizComplete(false);
    setRound(1);
  }

  
  return (
    <div className="app">
      <div>
        {showLanding ?
          <div className="landing-view">
            <Landing />
            <button className="enter-btn" onClick={
              () => setShowLanding(false)}>
            </button>
          </div>
        : 
        <div className="outer">
          <Header />
          {!quizComplete ? <div className="prompt">
            <QuestionCounter round={round} questionIndex={questionIndex} questions={questions} />
            <Question questionIndex={questionIndex} questions={questions} />
            <AnswerOptions questionIndex={questionIndex} questions={questions} handleUserChoice={handleUserChoice}/>
          </div> : <UserScore questions={questions} score={score} refreshPage={refreshPage} /> }
        </div>
        }
      </div>
    </div>

  );
};

export default App;