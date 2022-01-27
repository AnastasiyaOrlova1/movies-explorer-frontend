import React from "react";
import { useLocation } from 'react-router-dom';
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";


export default function MoviesCardList(props) {

  const { pathname } = useLocation();
  return (
    <section className="movies-card-list">
      <section className="movies-card-list__elements">
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic1.png').default} title={`33 слова о дизайне`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic2.png').default} title={`Киноальманах «100 лет дизайна»`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic3.png').default} title={`В погоне за Бенкси`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic4.png').default} title={`Баския: Взрыв реальности`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic5.png').default} title={`Бег это свобода`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic6.png').default} title={`Книготорговцы`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic7.png').default} title={`Когда я думаю о Германии ночью`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic8.png').default} title={`Gimme Danger: История Игги и The Stooges`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic9.png').default} title={`Дженис: Маленькая девочка грустит`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic10.png').default} title={`Собраться перед прыжком`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic11.png').default} title={`Пи Джей Харви: A dog called money`}/>}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic12.png').default} title={`По волнам: Искусство звука в кино`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic13.png').default} title={`Рудбой`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic14.png').default} title={`Скейт - кухня`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic15.png').default} title={`Война искусств`} />}
        {pathname === '/movies' && <MoviesCard filePath={require('../../images/test-pic16.png').default} title={`Зона`} />}
        {pathname === '/saved-movies' && <MoviesCard filePath={require('../../images/test-pic1.png').default} title={`33 слова о дизайне`} isOwn={props.isOwn} onCardDelete={props.onCardDelete}/>}
        {pathname === '/saved-movies' && <MoviesCard filePath={require('../../images/test-pic2.png').default} title={`Киноальманах «100 лет дизайна»`} isOwn={props.isOwn} onCardDelete={props.onCardDelete}/>}
        {pathname === '/saved-movies' && <MoviesCard filePath={require('../../images/test-pic3.png').default} title={`В погоне за Бенкси`} isOwn={props.isOwn} onCardDelete={props.onCardDelete}/>}
      </section>
      <button className="movies-card-list__more-button button">Ещё</button>
    </section>
  );
}