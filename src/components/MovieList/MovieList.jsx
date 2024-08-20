import { useEffect, useState } from "react";
import ListOfFilms from "../ListOfFilms/ListOfFilms";
import fetchData from "../../FetchData";
import { useLocation } from "react-router-dom";
// import LoadMore from "../LoadMore/LoadMore";

export default function MovieList() {
  const [listFilms, setListFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [page, setPage] = useState(2);
  // const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();

  const endPoint = "trending/movie/day";

  // function addPage() {
  //   setPage(page + 1);
  // }

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
        (err) => console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getFilmsList();
  }, []);

  return (
    <>
      {loading && <div>Loading a list of films</div>}
      {error && (
        <div>Oops... It is error....Please try reloading this page!</div>
      )}
      {listFilms.length > 0 && (
        <ListOfFilms list={listFilms} state={location.state} />
      )}
      {/* {page < totalPages && <LoadMore onClick={addPage} />} */}
    </>
  );
}
