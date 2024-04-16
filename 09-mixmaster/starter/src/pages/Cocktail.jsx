import React from "react";
import axios from "axios";
import { Link, useLoaderData, Navigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailsQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${cocktailSearchUrl}${id}`);
      return data;
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ params }) => {
    // console.log(data);
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailsQuery(id));

    return { id };
  };

function extractIngredients(drink) {
  const ingredients = [];
  let i = 1;

  // Dynamically check for ingredients until none are found
  while (
    drink[`strIngredient${i}`] !== undefined &&
    drink[`strIngredient${i}`] !== null
  ) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    const ingredient = drink[ingredientKey];
    const measure = drink[measureKey] || ""; // Use an empty string if measure is null or undefined

    // Only add to list if the ingredient exists
    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
    i++;
  }

  return ingredients;
}

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailsQuery(id));
  console.log(data);
  if (!data.drinks) {
    return <Navigate to="/" />;
  }

  const singleDrink = data.drinks[0];
  const ingredients = extractIngredients(singleDrink);
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strGlass: glass,
    strCategory: category,
    strInstructions: instructions,
  } = singleDrink;
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients :</span>
            {ingredients.map((item, index) => (
              <span key={index} className="ing">
                {item.ingredient}
                {item.measure && ` - ${item.measure}`}
                {index < ingredients.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
