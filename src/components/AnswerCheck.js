import React from 'react'


const AnswerCheck = ({correct, userAnswer}) => {

console.log(correct);

  return(
    <div className='answer'><
    h2>Your answer: </h2><p>{userAnswer}</p>
    <div><h2>The correct answer is:</h2><p>{correct}</p></div>
    <a className="btn btn-info" href="/" role="button">Next</a>

    </div>
  )
}


export default AnswerCheck;
