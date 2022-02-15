import React, { useEffect, useState, useContext } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { useFormWithValidation } from '../../hooks/useValidationForm/useFormValidation'
import './Profile.css'

function Profile({ onEditProfile, onLogOut }) {
  const user = useContext(CurrentUserContext)
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation()

  const { name, email } = values

  const [isValuesNotMatched, setisValuesNotMatched] = useState(false)

  function checkValues() {
    if ((name !== user.name || email !== user.email) && isValid) {
      setisValuesNotMatched(true)
    } else {
      setisValuesNotMatched(false)
    }
  }

  useEffect(() => {
    checkValues()
  }, [handleChange])

  useEffect(() => {
    if (user) {
      resetForm(user, {}, true)
    }
  }, [user, resetForm])

  function handleOnSubmit(evt) {
    evt.preventDefault()
    onEditProfile(values)
    resetForm()
  }
  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleOnSubmit} noValidate>
        <h2 className="profile__title">Привет, {user.name}!</h2>
        <div className="profile__container">
          <label className="profile__label">
            <div className="profile__label-container">
              <p className="profile__input-name">Имя</p>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Изменить имя"
                className={`profile__input ${
                  errors.name && 'profile__input_invalid'
                }`}
                minLength="2"
                maxLength="30"
                required
                defaultValue={name || ''}
                onChange={handleChange}
              />
            </div>

            <span id="error" className="error-text">
              {errors.name}
            </span>
          </label>

          <label className="profile__label">
            <div className="profile__label-container">
              <p className="profile__input-name">E-mail</p>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Изменить E-mail"
                className={`profile__input ${
                  errors.email && 'profile__input_invalid'
                }`}
                minLength="1"
                maxLength="40"
                defaultValue={email || ''}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                onChange={handleChange}
              />
            </div>

            <span id="error" className="error-text">
              {' '}
              {errors.email}
            </span>
          </label>
        </div>
        <button
          className="profile__edit-btn hover"
          type="submit"
          onClick={handleOnSubmit}
          disabled={!isValuesNotMatched}
        >
          Редактировать
        </button>

        <button
          className="profile__signout-btn hover"
          type="button"
          onClick={onLogOut}
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  )
}

export default Profile
