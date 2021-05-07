import React, { Component } from 'react'
import FeedbackOptions from './Components/FeedbackOptions ';
import Section from './Components/Section';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification'
import PropTypes from "prop-types";

class App extends Component {

  static defaultProps = {
    title: ''
  }

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

  countPositiveFeedbackPercentage = (total) => {
    const equation = this.state.good * 100 / total
    const flooredEquation = Math.floor(equation * 100) / 100 || 0;
    const percentage = `${flooredEquation}%`
    console.log(percentage);
    return percentage;
  }
  
  render() {
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage(total)

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title='Statistics'>
          {total !== 0
            ? <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={positivePercentage}
          />
            : <Notification message="No feedback given" />
          }
        </Section>
      </>
      
    )
  }
    
}

export default App;