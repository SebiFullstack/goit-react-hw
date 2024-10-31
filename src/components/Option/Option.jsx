import c from './Options.module.css';

const Options = ({ update, total }) => {
  return (
    <div className={c.options}>
      <button className={c.btn} onClick={() => update('good')}>
        Good
      </button>
      <button className={c.btn} onClick={() => update('neutral')}>
        Neutral
      </button>
      <button className={c.btn} onClick={() => update('bad')}>
        Bad
      </button>
      {total > 0 && (
        <button className={c.btn} onClick={() => update('reset')}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;