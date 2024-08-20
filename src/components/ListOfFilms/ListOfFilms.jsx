import { Link } from "react-router-dom";
import css from "./ListOfFilms.module.css";

export default function ListOfFilms({ list, state }) {
  return (
    <ul className={css.listOfFilms}>
      {list.map(({ id, title, release_date }) => {
        const year = new Date(release_date);

        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={state}>
              {title}
              {"  "} {year.getFullYear() ? year.getFullYear() : <p>not info</p>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
