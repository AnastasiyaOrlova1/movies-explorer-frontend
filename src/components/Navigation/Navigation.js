import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.css";

function Navigation() {
  const [isOpened, setIsOpened] = useState(false);
  function handleNavClick() {
    setIsOpened((state) => !state);
  }

  function closeNavClick() {
    setIsOpened(false); 
  }
  return (
    <div className='navigation'>
      <button
        className={`isOpened navigation__burger-btn navigation__burger-btn_hidden hover no-display ${
          isOpened && 'navigation__close-btn_active'
        }`}
        type='button'
        onClick={handleNavClick}
      ></button>

      <nav
        className={`navigation__container navigation__container_hidden ${
          isOpened && 'navigation__container_active'
        }`}
      >
        <ul className='navigation__list'>
          <li className='navigation__list-item'>
            <NavLink
              className='navigation__list-item-link navigation__list-item-link_hidden hover'
              exact
              to='/'
              activeClassName='navigation__list-item-link_active'
              onClick={handleNavClick}
            >
              Главная
            </NavLink>
          </li>
          <li className='navigation__list-item'>
            <NavLink
              className='navigation__list-item-link hover'
              to='/movies'
              activeClassName='navigation__list-item-link_active'
              onClick={closeNavClick}
            >
              Фильмы
            </NavLink>
          </li>
          <li className='navigation__list-item'>
            <NavLink
              className='navigation__list-item-link hover'
              to='/saved-movies'
              activeClassName='navigation__list-item-link_active'
              onClick={closeNavClick}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className='navigation__list-item'>
            <NavLink
              className='navigation__list-item-link navigation__list-item-profile hover'
              to='/profile'
              onClick={closeNavClick}
            ></NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
