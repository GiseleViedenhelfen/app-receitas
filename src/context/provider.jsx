import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './context';

export default function GlobalProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);

  const context = useMemo(() => ({
    meals,
    categories,
    setMeals,
    setCategories,
  }), [meals, categories]);

  return (
    <GlobalContext.Provider value={context}>
      { children }
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
