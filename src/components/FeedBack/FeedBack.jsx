import  { useState } from 'react';
import { Statistics } from '../FeedbackStatistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export const FeedBack = () => {

  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad] = useState(0);
  const optionsFeedBack = { good, neutral, bad };

  const leaveFeedback = propertyName => {
   
    switch (propertyName) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

 const countPositiveFeedbackPercentage =() => {
    if (!countTotalFeedback()) {
      return 0;
    }
    return Number(((100 / countTotalFeedback()) * good).toFixed(0));
  }
  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(optionsFeedBack)}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {' '}
          {good || bad || neutral ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }

