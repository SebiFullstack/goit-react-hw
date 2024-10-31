import { useState, useEffect } from 'react';
import './App.css';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem('saved-values');

    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = values.good + values.neutral + values.bad;

  function updateFeedbackRef(feedbackType) {
    if (feedbackType === 'reset') {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }

    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
    return;
  }

  useEffect(() => {
    window.localStorage.setItem('saved-values', JSON.stringify(values));
  }, [values]);

  return (
    <>
      <Description />
      <Options update={updateFeedbackRef} total={totalFeedback} />
      {totalFeedback > 0 ? <Feedback values={values} /> : <Notification />}
    </>
  );
}

export default App;