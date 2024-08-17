import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MovieList() {
  const [listFilms, setListFilms] = useState([]);
  const url = "https://api.themoviedb.org/3/trending/movie/day";

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjJjMWVjNTM1YWVhNWJhMTEwYjMzNTM2NzNiNzliMyIsIm5iZiI6MTcyMzkyODEwOS41OTA5OTYsInN1YiI6IjY2YzEwYmM4NjJjYjVmNjlkYTE2YWQ3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Jr4S-hFFyTGB-UPQ3vcYr0Ahmk1mETjvYJWA_QAWw8",
    },
    api_key: "ef2c1ec535aea5ba110b3353673b79b3",
  };
  useEffect(() => {
    const getFilmsList = async () => {
      try {
        const respons = await axios.get(url, options);

        setListFilms(respons.data.results);
      } catch {
        (err) => console.error(err);
      }
    };
    getFilmsList();
  }, []);
  // const { id } = useParams();

  return (
    <main>
      <div>MovieList</div>
      <ul>
        {listFilms.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
