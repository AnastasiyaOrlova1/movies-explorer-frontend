import React from "react";
import "./MoviesCard.css";
//import movie from "../../images/test-pic1.png";

export default function MoviesCard(props) {
  /*const cardLikeButtonClassName = (
    `${props.isLiked ? 'movies-card__like_active' : 'movies-card__like_disabled'}`
  );*/
  // const cardDeleteButtonClassName = (
  //   `${props.isOwn ? 'movies-card__delete' : `${cardLikeButtonClassName}`}`
  // );


    const [liked, setLiked] = React.useState(false);
   
    function handleLikeChange() {
     setLiked(!liked);
    }

  /*function handleCardLike() {
    props.onCardLike(props)
  }*/
  function handleCardDelete() {
    props.onCardDelete()
  }
  return (
    <section className="movies-card">
      <img className="movies-card__preview" src={props.filePath} alt="Фильм" />
      <div className="movies-card__info">
          <h3 className="movies-card__title">{props.title}</h3>
          {props.isOwn
          ?
          <button className="movies-card__delete button" onClick={handleCardDelete}></button>
          :
          <button className = {`movies-card__like${liked ? '_active' : '_disabled'}`} onClick={handleLikeChange}></button>
          }
      </div>
      <span className="movies-card__duration">1ч42м</span>
    </section>
  );
}
