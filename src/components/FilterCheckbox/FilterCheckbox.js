import React from 'react'
import './FilterCheckbox.css'

function FilterCheckbox({ onCheckboxToggle, isChecked }) {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__toggle">
        <input
          className="filter-checkbox__input"
          type="checkbox"
          id="toggle"
          onChange={onCheckboxToggle}
          checked={isChecked}
        />
        <span className="filter-checkbox__input-visible"></span>
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox
