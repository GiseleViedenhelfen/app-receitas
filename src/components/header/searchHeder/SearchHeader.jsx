import React, { useEffect } from 'react';
import FormSearchHeader from './FormSearchHeader';
import '../style.css';
import { getMealByFirstLetter } from '../../../utils/API/Meals/requestApi';

function SearchHeader() {
  useEffect(() => {
    const requestApi = async (letter) => {
      const api = await getMealByFirstLetter(letter);
      return api;
    };
    requestApi();
  }, []);
  return (
    <FormSearchHeader />
  );
}
export default SearchHeader;
