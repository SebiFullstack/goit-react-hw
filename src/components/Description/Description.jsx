import c from './Description.module.css';

export default function Description() {
  return (
    <header className={c.header}>
      <h1 className={c.caption}>Sip Happens Café</h1>
      <p className={c.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </header>
  );
}