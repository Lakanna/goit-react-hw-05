import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const { id } = useParams();

  const [dataFilm, setDataFilm] = useState({});
  const URL = "https://api.themoviedb.org/3/movie/";
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjJjMWVjNTM1YWVhNWJhMTEwYjMzNTM2NzNiNzliMyIsIm5iZiI6MTcyMzkyODEwOS41OTA5OTYsInN1YiI6IjY2YzEwYmM4NjJjYjVmNjlkYTE2YWQ3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Jr4S-hFFyTGB-UPQ3vcYr0Ahmk1mETjvYJWA_QAWw8",
    },
    api_key: "ef2c1ec535aea5ba110b3353673b79b3",
  };

  useEffect(() => {
    const getDataFilm = async () => {
      try {
        const respons = await axios.get(`${URL}${id}`, options);
        const { poster_path, overview, original_title, genres } = respons.data;
        console.log(original_title, "or title");

        // console.log(respons.data);
        setDataFilm({
          poster_path,
          overview,
          original_title,
          genres,
        });
        console.log(dataFilm, "data film");
      } catch {
        console.error();
      }
    };
    getDataFilm();
  }, []);

  return (
    <main>
      <div>Movie details page for {id}</div>
      <div>
        <img src={`${dataFilm}`} alt="" />
      </div>
    </main>
  );
}
