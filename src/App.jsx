import React, { useState } from 'react';

import { Question, QuestionCounter, AnswerOptions, UserScore } from './components/Content/index.jsx';
import questions from '../src/Apprentice_TandemFor400_Data.json';

const App = () => {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  const handleUserChoice = (option) => {
    if(option === questions[questionIndex].correct){
      setScore(score + 1);
    }
    const nextQuestion = questionIndex + 1;
    nextQuestion < questions.length ?
      setQuestionIndex(nextQuestion) : setQuizComplete(true);

  };

  
  return (
    <div className='app'>
      {!quizComplete ? <div>
        <QuestionCounter questionIndex={questionIndex} questions={questions} />
        <Question questionIndex={questionIndex} questions={questions} />
        <AnswerOptions questionIndex={questionIndex} questions={questions} handleUserChoice={handleUserChoice}/>
      </div> : <UserScore questions={questions} score={score} /> }
    </div>

  );
};

export default App;