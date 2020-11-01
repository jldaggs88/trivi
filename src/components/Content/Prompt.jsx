import React, { useState, useEffect } from 'react';

import data from '../../Apprentice_TandemFor400_Data.json';

const Prompt = () => {

  const [prompts, setPrompts] = useState(data);
  const count = Math.floor(Math.random() * prompts.length);
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState([]);
  const [userChoice, setUserChoice] = useState('');
  const [answer, setAnswer] = useState(prompts[count].correct);
  const [userScore, setUserScore] = useState(0);

  const shuffle = (arr) => {
    let currentI = arr.length, temp, randomI;

    while (0 !== currentI) {
      randomI = Math.floor(Math.random() * currentI);
      currentI -= 1;

      temp = arr[currentI];
      arr[currentI] = arr[randomI];
      arr[randomI] = temp;
    }
    return arr;
  }

  useEffect(
    ()=>{
      setPrompts(shuffle(prompts));
      setQuestion(prompts[count].question);
      setChoices(prompts[count].incorrect.concat(prompts[count].correct));
    },
  []);

  const handleUserChoice = (index) => {
    if(answer === userChoice){
      setUserScore(userScore + 1);
    }
  }

  return (
    <div>
      <div>{question}</div>
      {[...choices.map((choice, index)=>{
        return <div key={index} onClick={event => {
          setUserChoice(event.target.innerText);
          handleUserChoice(index);
        }}>{choice}</div>
      })]}
    </div>
  )
};

export default Prompt;