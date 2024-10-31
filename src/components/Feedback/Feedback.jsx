import css from './Feedback.module.css'

export default function Feedback({ valueFeedBack, totalFeedback }) {
  return (
    <ul className={css.feedback_stats_wrapper}>
      <li className={css.feedback_stats}>Good: <span>{valueFeedBack.good }</span></li>
      <li className={css.feedback_stats}>Neutral: <span>{valueFeedBack.neutral }</span></li>
      <li className={css.feedback_stats}>Bad: <span>{valueFeedBack.bad}</span></li>
      <li className={css.feedback_stats}>Total: <span>{ totalFeedback }</span></li>
      <li className={css.feedback_stats}>Positive: <span>{Math.round((valueFeedBack.good / totalFeedback) * 100) } %</span></li>
    </ul>
  )
}