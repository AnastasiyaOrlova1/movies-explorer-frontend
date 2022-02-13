import { useLocation } from 'react-router-dom';
import "./MoviesCard.css";


function MoviesCard({ movie, onLikeClick, checkBookmarkStatus}){
  const location = useLocation();
  const { nameRU, duration, image, trailer } = movie;

    const isLiked = checkBookmarkStatus(movie);
    const durationConverter = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours > 0 ? hours + "ч " : ""}${minutes}м`;
    };


    function handleBookmarkClick() {
        onLikeClick(movie, isLiked);
    }



  return (
    <li className='movie-card'>
      <div className='movie-card__container'>

        <a
          className='movie-card__img-link hover'
          href={trailer}
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movie-card__img'
            src={image}
            alt={`Трейлер фильма ${nameRU}`}
          />
        </a>
        <div className='movie-card__info-container'>
          <h3 className='movie-card__title'>{nameRU}</h3>

          {location.pathname === '/movies' && (
            <button
              className={`movie-card__save-btn ${isLiked && 'movie-card__save-btn_saved'
                }`}
              type="button"
              aria-label="Сохранить"
              onClick={handleBookmarkClick}
            />
          )}
          {location.pathname === '/saved-movies' && (
            <button
              className="movie-card__save-btn_remove"
              type="button"
              aria-label="Сохранить"
              onClick={handleBookmarkClick}
              //onClick={removeMovies}
            />
          )}

        </div>
        <p className='movie-card__duration'>{durationConverter(duration)}</p>

      </div>
    </li>
  );
}

export default MoviesCard;
