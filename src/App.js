import React, { Component } from 'react'
import FeedbackOptions from './Components/FeedbackOptions ';
import Section from './Components/Section';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification'

class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleClick = (e) => {
    const { name } = e.target
    this.setState(prev => ({[name]: prev[name] + 1 }))
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage = () => {
    const equation = this.state.good * 100 / (this.countTotalFeedback())
    const flooredEquation = Math.floor(equation * 100) / 100 || 0;
    const percentage = `${flooredEquation}%`
    console.log(percentage);
    return percentage;
  }

  renderFirst = () => {
    if (this.countTotalFeedback()) {
      return (
      <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
      />
    )
    } else {
        return <Notification message="No feedback given" />
    }
  }
  
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.handleClick} onLeaveFeedback={this} />
        </Section>
        <Section title='Statistics'>
          {this.renderFirst()}  
        </Section>
      </>
      
    )
  }
    
}

export default App;