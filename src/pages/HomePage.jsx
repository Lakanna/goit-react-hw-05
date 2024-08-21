import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import fetchData from "../FetchData";

export default function HomePage() {
  const [listFilms, setListFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();

  const endPoint = "trending/movie/day";

  useEffect(() => {
    const getFilmsList = async () => {
      try {
        setLoading(true);
        setError(false);

        const respons = await fetchData(1, "", endPoint);

        // setTotalPages(respons.total_pages);

        setListFilms([...respons.results]);
      } catch {
        setError(true);
        console.error();
      } finally {
        setLoading(false);
      }
    };

    getFilmsList();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {loading && <div>Loading a list of films</div>}
      {error && (
        <div>Oops... It is error....Please try reloading this page!</div>
      )}
      {listFilms.length > 0 && (
        <MovieList list={listFilms} state={location.state} />
      )}
      {/* {page < totalPages && <LoadMore onClick={addPage} />} */}
    </main>
  );
}
