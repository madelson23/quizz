import React, {Component} from 'react'
import questions from './question-bank'
import QuestionBox from './QuestionBox'


class Question extends Component {

constructor(props){
  super(props)
    this.state={
      userAnswer: null,
      hasEnded: false,
      options: [],
      currentIndex: (Math.floor(Math.random()*(questions.length-1))),
    };
}

loadQuestion = () => {
  const {currentIndex} = this.state;
  this.setState(() =>{
    return {
      question: questions[currentIndex].question,
      options: questions[currentIndex].answers,
      correct: questions[currentIndex].correct
    };
  });
};

componentDidMount(){
  this.loadQuestion()
}




render(){

    const {options, question, questionId, userAnswer, correct} = this.state;

  return(
    <QuestionBox  key={questionId} options={options} question={question}
    correct={correct} userAnswer={userAnswer} />
  )
}

}

export default Question;
