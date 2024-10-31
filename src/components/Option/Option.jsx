import css from './Options.module.css'

export default function Options({ onLeaveFeedback, resetFeedback, totalFeedback }) {
  return (
    <ul className= {css.button_wrapper}>
      <li><button className= {`${css.button_feedback} ${css.good}`} onClick={() => onLeaveFeedback('good')}>Good</button></li>
      <li><button className= {`${css.button_feedback} ${css.neutral}`} onClick={() => onLeaveFeedback('neutral')}>Neutral</button></li>
      <li><button className= {`${css.button_feedback} ${css.bad}`} onClick={() => onLeaveFeedback('bad')}>Bad</button></li>
      {totalFeedback > 0 && <li><button className= {`${css.button_feedback} ${css.reset}`} onClick={() => resetFeedback()}>Reset</button></li>}
    </ul>
  )
}