import css from "./CardOfMovie.module.css";

export default function CardOfMovie({ data }) {
  const {
    poster_path,
    overview,
    original_title,
    genres,
    vote_average,
    release_date,
    origin_country,
  } = data;

  const src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <div className={css.cardContainer}>
      <img
        className={css.poster}
        src={src}
        alt={`poster of ${original_title}`}
      />
      <div>
        <h2>Title: {original_title}</h2>
        <p className={css.dataMovie}>
          <span className={css.span}>Release date :</span> {release_date}
        </p>
        <p className={css.dataMovie}>
          <span className={css.span}>Origin country : </span>
          {origin_country}
        </p>
        <p className={css.dataMovie}>
          <span className={css.span}>Vote average : </span>
          {vote_average}
        </p>
        <p className={css.dataMovie}>
          <span className={css.span}>Overviev: </span>
          {overview}
        </p>
        <p className={css.dataMovie}>
          <span className={css.span}>Genres : </span>
          {genres.map(({ name }) => name).join(", ")}
        </p>
      </div>
    </div>
  );
}
