import { useLocation } from "react-router-dom";
import css from "./SearhForm.module.css";

export default function SearhForm({ onSubmit, getLocation }) {
  const location = useLocation();
  getLocation(location);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.searchingFilms.value.trim();

    if (value === "") {
      console.log("Please, input value for search");
      return;
    }
    onSubmit(value);
    form.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="searchingFilms"
        autoComplete="off"
        placeholder="Movies title"
      />
      <button type="submit">Search</button>
    </form>
  );
}
