import React, { useContext } from 'react';
import GlobalContext from '../../context/context';
import './style.css';

function CategoriesHeader() {
  const { categories } = useContext(GlobalContext);
  return (
    <ul className="categories-container">
      {categories && categories.map((item) => (
        <li key={item.strCategory}>{item.strCategory}</li>
      ))}
    </ul>

  );
}
export default CategoriesHeader;
