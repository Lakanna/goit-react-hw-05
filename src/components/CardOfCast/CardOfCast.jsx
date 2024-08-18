import css from "./CardOfCast.module.css";

export default function CardOfCast({ movieCast }) {
  return (
    <div>
      <ul className={css.listOfCast}>
        {movieCast.map(
          ({ profile_path, popularity, name, character, cast_id }) => {
            return (
              <li key={cast_id} className={css.itemOfCast}>
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={`Photo of${name}`}
                />
                <p>Name : {`${name}`}</p>
                <p>Character : {`${character}`}</p>
                <p>Popularity : {`${popularity}`}</p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
