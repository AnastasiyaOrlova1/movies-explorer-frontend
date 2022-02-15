import React, { useState, useMemo, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './SavedMovies.css'

function SavedMovies({
  isLoading,
  // onSubmitSearch,
  movies,
  setPreloader,
  moviesSearchResponse,
  toggleMovieLike,
  checkBookmarkStatus,
  sortShortMovies,
  removeMovies,
  searchKeyword,
}) {
  const [searchedMovies, setSearchedMovies] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [shortMovies, setShortMovies] = useState([]);
  function onCheckboxToggle() {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    if (isChecked) {
      setShortMovies(sortShortMovies(movies));
    }
  }, [isChecked]);


  const searchSavedMovies = useMemo(
    () =>
      movies.filter(i =>
        i.nameRU.toLowerCase().includes(searchedMovies.toLowerCase())
      ),
    [movies, searchedMovies]
  )

  return (
    <section className="saved-movies">
      <SearchForm
        handleSearch={setSearchedMovies}
        setPreloader={setPreloader}
        // isLoading={isLoading}
        onCheckboxToggle={onCheckboxToggle}
        isChecked={isChecked}
        searchKeyword={searchKeyword}
      />
      {moviesSearchResponse
        ? searchSavedMovies.length === 0 && (
            <p className="movie__response">{moviesSearchResponse}</p>
          )
        : searchSavedMovies.length === 0 && (
            <p className="movie__response">Нет сохраненных фильмов</p>
          )}

      {isChecked && searchSavedMovies.length !== 0 && shortMovies.length === 0 && (
        <p className="movie__response">Среди фильмов нет короткометражек</p>
      )}

      {movies.length !== 0 && (
        <MoviesCardList
          movies={
            isChecked ? sortShortMovies(searchSavedMovies) : searchSavedMovies
          }
          toggleMovieLike={toggleMovieLike}
          checkBookmarkStatus={checkBookmarkStatus}
          isSavedPage={true}
          // isLoading={isLoading}
          handleDelete={removeMovies}
        />
      )}
    </section>
  )
}

export default SavedMovies
