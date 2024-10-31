import { useState, useEffect } from 'react';
import './App.css';
import Description from './Description/Description';
import Options from './Option/Option';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });


  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className='container'>
      <Description />
      <Options onLeaveFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0
        ? <Feedback valueFeedBack={feedback} totalFeedback={totalFeedback} />
        : <Notification />}
    </div>
  );
}

export default App;