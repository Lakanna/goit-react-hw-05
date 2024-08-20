import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import fetchData from "../FetchData";
import ListOfFilms from "../components/ListOfFilms/ListOfFilms";
import SearhForm from "../components/SearchForm/SearhForm";

export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [location, setLocation] = useState({});
  const location = useLocation();

  const endpoint = "search/movie";

  // function getLocation(value) {
  //   setLocation(value);
  // }
  const query = searchParams.get("query") ?? "";

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
        setSearchFilms(response.results);
      } catch {
        setError(true);
        (err) => console.error(err);
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
        <ListOfFilms list={searchFilms} state={location} />
      )}
    </main>
  );
}
