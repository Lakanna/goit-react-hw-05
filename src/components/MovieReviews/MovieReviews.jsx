import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../FetchData";
import ReviewsList from "../ReviewsList/ReviewsList";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  // const endPoint = `movie/${id}/reviews`;

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        setError(false);
        const respons = await fetchData(1, "", `movie/${id}/reviews`);
        setReviews(respons.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getReviews();
  }, [id]);

  return (
    <>
      <h2>Movie reviews</h2>
      {loading && <div>Loading reviews...</div>}
      {error && <div>This is Error</div>}
      {reviews.length > 0 ? (
        <ReviewsList arrOfReviews={reviews} />
      ) : (
        <h3>Sorry, there are no reviews for this movie yet</h3>
      )}
    </>
  );
}
