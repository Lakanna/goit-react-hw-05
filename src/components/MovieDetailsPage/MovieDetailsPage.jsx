import { Link, Outlet } from "react-router-dom";

export default function MovieDetailsPage() {
  return (
    <main>
      <div>Movie details</div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
