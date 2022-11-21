async function allMeals() {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const data = await fetch(url);
  const response = await data.json();
  return response;
}
async function allCategoriesNames() {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const data = await fetch(url);
  const response = await data.json();
  return response;
}
async function getMealByFirstLetter(letter) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

module.exports = { allMeals, allCategoriesNames, getMealByFirstLetter };
