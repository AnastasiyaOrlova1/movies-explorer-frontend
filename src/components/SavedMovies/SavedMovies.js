import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

export default function SavedMovies() {

  const location = useLocation();
  const isOwn = `${location.pathname === "/saved-movies" ? true : false}`;

  function handleCardDelete() {
    MoviesCard.remove();
  }

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList isOwn={isOwn} onCardDelete={handleCardDelete} />
    </section>
  );
}