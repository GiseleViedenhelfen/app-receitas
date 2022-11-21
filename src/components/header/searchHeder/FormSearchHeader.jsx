import React from 'react';
import '../style.css';

function FormSearchHeader() {
  return (
    <div className="search-header-container">
      <form>
        <div className="input-header-container">
          <input type="text" />
        </div>
        <div className="radio-input-container">
          <label htmlFor="Ingredient">
            <input type="radio" value="Ingredient" name="search-type" id="Ingredient" />
            Ingrediente
          </label>
          <label htmlFor="Name">
            <input type="radio" value="Name" name="search-type" id="Name" />
            Nome
          </label>
          <label htmlFor="First letter">
            <input type="radio" value="First letter" name="search-type" id="First letter" />
            Primeira letra
          </label>
        </div>
      </form>
    </div>
  );
}
export default FormSearchHeader;
