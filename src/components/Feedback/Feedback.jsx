import c from './Feedback.module.css';

const Feedback = ({ values }) => {
  const total = values.bad + values.good + values.neutral;
  return (
    <div className={c.feedback}>
      <ul className={c.feedbackList}>
        <li className={c.feedbackListItem}>Good: {values.good}</li>
        <li className={c.feedbackListItem}>Neutral: {values.neutral}</li>
        <li className={c.feedbackListItem}>Bad: {values.bad}</li>
        <li className={c.feedbackListItem}>Total: {total}</li>
        <li className={c.feedbackListItem}>
          Positive: {Math.round((values.good / total) * 100)}%
        </li>
      </ul>
    </div>
  );
};

export default Feedback;