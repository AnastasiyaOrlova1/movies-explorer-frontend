import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => (
  <div className="filter-container">
    <input className="filter-container__checkbox" type="checkbox" required />
    <p className="filter-container__checkbox-label">Короткометражки</p>
  </div>
);

export default FilterCheckbox;
