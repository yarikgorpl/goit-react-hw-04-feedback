import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions ';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleButton = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const values = Object.values(feedback);
    let total = 0;
    for (const value of values) {
      total += value;
    }

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const good = feedback.good;
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }

    return Math.round((good / total) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          onButtonClick={handleButton}
          option={Object.keys(feedback)}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          sum={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default App;
