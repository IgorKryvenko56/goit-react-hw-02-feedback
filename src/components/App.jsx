import React, { Component } from 'react';
import Statistics from '../components/Statistics/Statistics'; 
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Section from '../components/Section/Section';
import Notification from '../components/Notification/Notification';

export class App extends Component {
  state = {
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };

  
  handleFeedback = type => {
    this.setState(prevState => ({
      feedback: {
        ...prevState.feedback,
        [type]: prevState.feedback[type] + 1,
      },
    }));
  };

  render() {
    const { feedback } = this.state;
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <Section title="Leave Feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  };
}
export default App;

