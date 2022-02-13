import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../hooks/useValidationForm/useFormValidation';
import iconSearch from '../../images/findButton.svg';
import { useState } from 'react';
import './SearchForm.css';

function SearchForm({ handleSearch, setPreloader, setIsChecked }) {
  const { values, errors, isValid, handleChange } =
  useFormWithValidation({});

  const [keyword, setKeyword] = useState("");
  const [isShortMovies, setIsShortMovies] = useState(false);

  function onCheckboxToggle(checked) {
      setIsShortMovies(checked);
      setIsChecked(!isShortMovies);
  }

  function handleKeyword(evt) {
      handleChange(evt);
      setKeyword(evt.target.value); 
  }

  function handleSubmit(event) {
      event.preventDefault();
      handleSearch(keyword);
      setPreloader(true);
  }
 return (
    <section className="search-form">
    <div className="search-form__container">
      <form className="search-form__form" onSubmit={handleSubmit} noValidate>
        <div className="search-form__film-container">
          <img src={iconSearch} alt="Поиск" className="search-form__film-icon" />
          <input 
          className="search-form__film-input" 
          type="search" 
          name="name" 
          placeholder="Фильм"
          value={values.name || ""}
          onChange={handleKeyword}
          required/>
          <button className="search-form__film-find" type="submit">Найти</button>
          <span id='input-error' className={`error-text ${!isValid && 'error-text_hidden'}`}>{errors.keyword}</span>
        </div>
        <FilterCheckbox onCheckboxToggle={onCheckboxToggle}/>
      </form>
    </div>
  </section>
  );
  
  
}

export default SearchForm;
