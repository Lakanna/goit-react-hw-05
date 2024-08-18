import { Link } from "react-router-dom";

export default function ListOfFilms({ list }) {
  //   console.log(list);
  return (
    <ul>
      {list.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
