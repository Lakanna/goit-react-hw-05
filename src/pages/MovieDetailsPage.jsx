import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import fetchData from "../FetchData";
import CardOfMovie from "../components/CardOfMovie/CardOfMovie";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { id } = useParams();

  const [dataFilm, setDataFilm] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const endPoint = `movie/${id}`;
  const location = useLocation();

  const backLinkHref = location.state ?? "/";

  useEffect(() => {
    const getDataFilm = async () => {
      try {
        setLoading(true);
        setError(false);

        const respons = await fetchData(1, "", endPoint);

        const {
          poster_path,
          overview,
          title,
          genres,
          vote_average,
          release_date,
          origin_country,
        } = respons;

        setDataFilm({
          poster_path,
          overview,
          title,
          genres,
          vote_average,
          release_date,
          origin_country,
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

  return (
    <main>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {dataFilm.title && <CardOfMovie data={dataFilm} />}

      <Link to={backLinkHref} className={css.linkGoBack}>
        Go back
      </Link>
      <ul className={css.listLink}>
        <li>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>
            Review
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
