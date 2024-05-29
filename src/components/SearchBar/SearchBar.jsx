import css from "./SearchBar.module.css";

export default function SearchBar({ value, onChange, handleSubmit }) {
  return (
    <header className={css.container}>
      <form onSubmit={(e) => handleSubmit(e, value)} className={css.form}>
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={onChange}
          autoComplete="off"
          autoFocus
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
