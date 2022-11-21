import React, { useContext, useEffect } from 'react';
import CardHome from '../../components/card/CardsHome';
import Header from '../../components/header/Header';
import GlobalContext from '../../context/context';
import { allCategoriesNames, allMeals } from '../../utils/API/Meals/requestApi';

function HomePage() {
  const { meals, setMeals, setCategories } = useContext(GlobalContext);
  useEffect(() => {
    const requestApi = async () => {
      const api = await allMeals();
      setMeals(api.meals);
    };
    const requestCategories = async () => {
      const api = await allCategoriesNames();
      setCategories(api.meals);
    };
    requestApi();
    requestCategories();
  }, []);
  return (
    <div>
      <Header />
      { meals && <CardHome />}
    </div>
  );
}
export default HomePage;
