import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function RandomMeals() {
  const [randomMeals, setRandomMeals] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchRandomMeals = async () => {
      try {
        const meals = [];
        for (let i = 0; i < 6; i++) {
          const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
          if (!response.ok) throw new Error("Failed to fetch random meals");
          const data = await response.json();
          meals.push(data.meals[0]);
        }
        setRandomMeals(meals); // Set all meals at once
      } catch (error) {
        console.error("Error occurred while fetching meals:", error);
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading after API calls
      }
    };

    fetchRandomMeals();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center w-full my-20 ml-[410px]">
    <p className="text-nowrap">Loading random meals...</p>
  </div>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {randomMeals.map((meal, index) => (
        <div
          key={index}
          className="relative border-1 border-black rounded-2xl h-[350px] w-[300px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] break-words overflow-hidden mb-6 group"
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-t-2xl h-full w-full object-cover"
          />
          <h2 className="px-4 py-2 flex items-center justify-center font-palanquin font-bold text-xl text-center bg-white rounded-b-2xl whitespace-normal break-words">
            {meal.strMeal}
          </h2>

          {/* Hidden meal details on hover */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center flex-col text-white transition-transform duration-[3s] translate-y-full group-hover:translate-y-0">
            <h3 className="text-md font-bold font-montserrat text-center px-4">
              <p>Name: {meal.strMeal}</p>
              <p>Country of Origin: {meal.strArea}</p>
              <p>Category: {meal.strCategory}</p>
            </h3>
          </div>

          <div className="absolute flex justify-center bottom-6 w-full">
            {/* If you want to use NavLink, uncomment and modify the path */}
            <NavLink to={`/${meal.idMeal}`}>
              <button className="bg-cyan-600 rounded-full w-24 h-10 font-bold text-xl font-palanquin">
                Recipe
              </button>
            </NavLink>
          </div>
        </div>
      ))}
   </>
  );
}

export default RandomMeals;
