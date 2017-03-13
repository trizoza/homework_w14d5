import React, { Component } from 'react'

class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: undefined
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    var options = this.props.questions.map(function(question, index) {
      return <option value={index} key={index}>{question}</option>    
    });
    var askedQuestions = this.props.askedQuestions.map(function(question, index) {
      return <p key={index}>{index + 1}. {question}</p>    
    });
    // console.log('questions', this.props.questions)
    return (
      <div>
        <select 
          className='questions' 
          value={this.state.selectedIndex}
          onChange={this.handleChange}>
          {options}
        </select>
        {askedQuestions}
      </div>
    );
  }

  handleChange(event) {
    var newIndex = event.target.value;
    this.setState({ selectedIndex: newIndex });
    var selectedQuestion = this.props.questions[newIndex];
    this.props.didSelectQuestion(selectedQuestion);
    console.log('selectedQuestion', selectedQuestion)

  }

}

export default Questions