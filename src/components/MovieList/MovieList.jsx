import { useEffect, useState } from "react";
import ListOfFilms from "../ListOfFilms/ListOfFilms";
import fetchData from "../../FetchData";

export default function MovieList() {
  const [listFilms, setListFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const endPoint = "trending/movie/day";

  useEffect(() => {
    const getFilmsList = async () => {
      try {
        setLoading(true);
        const respons = await fetchData(1, "", endPoint);
        setListFilms(respons.results);
      } catch {
        setError(true);
        (err) => console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getFilmsList();
  }, []);
  // const { id } = useParams();

  return (
    <>
      <div>MovieList</div>
      {loading && <div>Loading a list of films</div>}
      {error && (
        <div>Oops... It is error....Please try reloading this page!</div>
      )}
      {listFilms.length > 0 && <ListOfFilms list={listFilms} />}
    </>
  );
}
