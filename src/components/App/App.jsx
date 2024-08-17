// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Navigation from "../Navigation/Navigation";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";

function App() {
  return (
    <div className="css.container">
      <header className="css.header">
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
