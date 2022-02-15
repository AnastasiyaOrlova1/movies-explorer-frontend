import React from 'react';
import headerLogo from '../../images/header__logo.svg';
import Navigation from '../Navigation/Navigation';
import { useLocation, Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header({ loggedIn }) {
  const location = useLocation();

  return (
    <header
      className={`header ${
        (location.pathname === '/signup' && 'auth-no-display') ||
        (location.pathname === '/signin' && 'auth-no-display') ||
        (location.pathname === '*' && 'auth-no-display')
      }`}
    >
      <NavLink exact to="/">
      <img src={headerLogo} alt='logo' />
      </NavLink>
      {loggedIn ? (
        <Navigation />
      ) : (
        <div className='header__container'>
            <Link className='header__link hover' to='/signup'>
            Регистрация
            </Link>
            <Link className='header__button hover' to='/signin'>
            Войти
            </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
