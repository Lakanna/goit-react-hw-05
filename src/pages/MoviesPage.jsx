import { useEffect, useState } from "react";
import fetchData from "../FetchData";
import ListOfFilms from "../components/ListOfFilms/ListOfFilms";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchFilms, setSearchFilms] = useState([]);
  const endpoint = "search/movie";
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

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
        console.log(response.results, "response.results");
      } catch {
        setError(true);
        (err) => console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getSearchFilms(query);
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.searchingFilms.value.trim();

    if (value === "") {
      console.log("Please, input value for search");
      return;
    }

    setSearchParams({ query: value.toLowerCase() });
    form.reset();
  }
  console.log(searchFilms, "searchFilms in handlesubmit");
  return (
    <main>
      <div>Movies page</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchingFilms" autoComplete="off" />
        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {searchFilms.length > 0 && <ListOfFilms list={searchFilms} />}
    </main>
  );
}
