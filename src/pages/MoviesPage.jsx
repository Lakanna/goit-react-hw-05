import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import fetchData from "../FetchData";
import MovieList from "../components/MovieList/MovieList";
import SearhForm from "../components/SearchForm/SearhForm";
import { toast } from "react-toastify";

export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const endpoint = "search/movie";
  const query = searchParams.get("query") ?? "";

  const notify = () =>
    toast.warn("😈 There is not matched movie, please, try an other one", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  function setParams(value) {
    setSearchParams({ query: value.toLowerCase() });
  }

  useEffect(() => {
    if (query === "") {
      return;
    }

    const getSearchFilms = async (query) => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchData(1, query, endpoint);

        if (response.results.length === 0) {
          notify();
          return;
        }
        setSearchFilms(response.results);
      } catch {
        setError(true);
        console.error();
      } finally {
        setLoading(false);
      }
    };

    getSearchFilms(query);
  }, [query]);

  return (
    <main>
      <h3>Movies search page</h3>
      <SearhForm onSubmit={setParams} />

      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {searchFilms.length > 0 && (
        <MovieList list={searchFilms} state={location} />
      )}
    </main>
  );
}
