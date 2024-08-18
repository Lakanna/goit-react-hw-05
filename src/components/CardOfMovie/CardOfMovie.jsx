import css from "./CardOfMovie.module.css";

export default function CardOfMovie({ data }) {
  const { poster_path, overview, original_title, genres } = data;
  console.log(genres, "genres");

  const src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <div className={css.cardContainer}>
      <img
        className={css.poster}
        src={src}
        alt={`poster of ${original_title}`}
      />
      <div>
        <p>Overviev: {overview}</p>
        <p>Genres : {genres.map(({ name }) => name).join(", ")}</p>
      </div>
    </div>
  );
}
