import React, {useState} from 'react';
import AnswerCheck from './AnswerCheck'


const QuestionBox = ({question, options, correct, userAnswer, questionId}) => {

  const [hasAnswered, setHasAnswered] = useState(false);

  let [answer, setAnswer ] = useState(options)

  function handleClick (index){
    setHasAnswered(true);
    setAnswer(options[index]);

  }

userAnswer  = answer;



return (
  <div className='form'>
    <div className='quizBorder'>
    <div className="option">
      <h1>{question}</h1>
      {hasAnswered ? <AnswerCheck correct={correct} userAnswer={userAnswer} />
      :options.map(function(option, index){
      return <button key={questionId} type="button" className="btn btn-info
        btn-lg btn-block" onClick={() =>{handleClick(index)}}>{option}</button>}) }

    </div>
    </div>
  </div>
  )
}

export default QuestionBox;
