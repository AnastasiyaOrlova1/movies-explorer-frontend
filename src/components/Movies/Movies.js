import React, { useEffect, useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './Movies.css'

function Movies({
  isLoading,
  onSubmitSearch,
  movies,
  setPreloader,
  moviesSearchResponse,
  toggleMovieLike,
  checkBookmarkStatus,
  sortShortMovies,
  searchKeyword,
}) {
  const [isChecked, setIsChecked] = useState(false)
  const [isShortMovies, setIsShortMovies] = useState(false)

  function onCheckboxToggle() {
    setIsChecked(!isChecked)
    localStorage.setItem('shortFilms', !isChecked)
  }

  useEffect(() => {
    const shortFilms = localStorage.getItem('shortFilms')

    if (shortFilms === 'true') {
      setIsShortMovies(isShortMovies)
      setIsChecked(true)
    }
  }, [])

  return (
    <section className="movies">
      <SearchForm
        handleSearch={onSubmitSearch}
        setPreloader={setPreloader}
        // isLoading={isLoading}
        searchKeyword={searchKeyword}
        isChecked={isChecked}
        onCheckboxToggle={onCheckboxToggle}
      />
      {moviesSearchResponse
        ? movies.length === 0 && (
            <p className="movie__response">{moviesSearchResponse}</p>
          )
        : movies.length === 0 && (
            <p className="movie__response">Введите запрос</p>
          )}

      {isChecked && movies.length !== 0 && movies.length === 0 && (
        <p className="movie__response">Среди фильмов нет короткометражек</p>
      )}

      {movies.length !== 0 && (
        <MoviesCardList
          movies={isChecked ? sortShortMovies(movies) : movies}
          toggleMovieLike={toggleMovieLike}
          checkBookmarkStatus={checkBookmarkStatus}
          // isLoading={isLoading}
        />
      )}
    </section>
  )
}

export default Movies
