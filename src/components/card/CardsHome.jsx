import React, { useContext } from 'react';
import GlobalContext from '../../context/context';
import './style.css';

function CardHome() {
  const { meals } = useContext(GlobalContext);
  return (
    <section className="container-cards-meals">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="meal-card">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <p>{meal.strMeal}</p>
        </div>
      ))}
    </section>
  );
}
export default CardHome;
