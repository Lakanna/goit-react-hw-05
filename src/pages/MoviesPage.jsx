import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import fetchData from "../FetchData";
import MovieList from "../components/MovieList/MovieList";
import SearhForm from "../components/SearchForm/SearhForm";
import { toast } from "react-toastify";

import { PaginatedMovies } from "../components/PaginatedMovies/PaginatedMovies.jsx";

export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);
  // const [currentPage, setCurrentPage] = useState(1);

  const endpoint = "search/movie";
  const query = searchParams.get("query") ?? "";
  const pageOnParams = Number(searchParams.get("page"));
  const page = pageOnParams ? pageOnParams : 1;

  function changePage(page, query) {
    setSearchParams({ query: query, page: page });
  }

  const notify = () =>
    toast.warn("😈 There is not matched movie, please, try other one", {
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
    setSearchParams({ query: value.toLowerCase(), page: 1 });
  }

  useEffect(() => {
    if (query === "") {
      return;
    }

    const getSearchFilms = async (query) => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchData(page, query, endpoint);

        if (response.results.length === 0) {
          notify();
          return;
        }
        console.log(response.total_pages, "total pages in useeffect");

        setTotalPages(response.total_pages);
        setSearchFilms(response.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getSearchFilms(query);
  }, [query, page]);

  return (
    <main>
      <h3>Movies search page</h3>
      <SearhForm onSubmit={setParams} />
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {searchFilms.length > 0 && <MovieList list={searchFilms} />}
      {searchFilms.length > 0 && (
        <PaginatedMovies
          totalPages={totalPages}
          onChangePage={changePage}
          query={query}
        />
      )}
    </main>
  );
}
