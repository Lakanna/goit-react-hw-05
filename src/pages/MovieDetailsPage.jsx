import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import fetchData from "../FetchData";
import CardOfMovie from "../components/CardOfMovie/CardOfMovie";

export default function MovieDetailsPage() {
  const { id } = useParams();

  const [dataFilm, setDataFilm] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const endPoint = `movie/${id}`;
  // console.log(endPoint, "endPoint in movie det before fetch");

  function handleClick() {
    navigate("/");
  }
  useEffect(() => {
    const getDataFilm = async () => {
      try {
        setLoading(true);
        setError(false);

        const respons = await fetchData(1, "", endPoint);
        const { poster_path, overview, original_title, genres } = respons;

        setDataFilm({
          poster_path,
          overview,
          original_title,
          genres,
        });
      } catch {
        setError(true);
        console.error();
      } finally {
        setLoading(false);
      }
    };

    getDataFilm();
  }, [endPoint]);

  console.log(dataFilm, "data after useeffect");

  return (
    <main>
      <div>Movie details page for {id}</div>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {dataFilm.original_title && <CardOfMovie data={dataFilm} />}
      <button type="button" onClick={handleClick}>
        Go back
      </button>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
