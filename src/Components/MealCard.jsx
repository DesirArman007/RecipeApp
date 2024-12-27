import React from "react";
import { NavLink } from "react-router-dom";

function MealCard({ details }) {

  console.log(details);
  function instruction(){

  }

  return (
    <>
      {!details
        ? " "
        : details.map((item, index) => {
            return (
              <div
                key={index}
                className="border-1 border-black rounded-2xl h-[350px] w-[300px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  whitespace-normal break-words overflow-hidden mb-6"
              >
                {/* Card Content */}
                <div className="group relative h-full w-full">
                  {/* Dish Image and Name */}
                  <div className="relative h-full w-full">
                    <img
                      src={item.strMealThumb}
                      alt="mealImage"
                      className="rounded-t-2xl h-full w-full object-cover"
                    />
                    <h3 className="px-4 py-2 flex items-center justify-center font-palanquin font-bold text-xl text-center bg-white rounded-b-2xl whitespace-normal break-words">
                      {item.strMeal}
                    </h3>
                  </div>

                  {/* Hover Info Layer */}
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center flex-col text-white transition-transform duration-[3s] translate-y-full group-hover:translate-y-0">
                    <h3 className="text-md font-bold font-montserrat text-center px-4">
                      <p>Name: {item.strMeal}</p>
                      <p>Country of Origin: {item.strArea}</p>
                      <p>Category: {item.strCategory}</p>
                    </h3>
                  </div>
                  
                

                {/* Recipe Button */}
                <div className="absolute flex justify-center h-10 mt-[-50px]  items-center">
                  <NavLink to={`/${item.idMeal}`}>
                    <button className="bg-cyan-600 rounded-full ml-24 mt-[-50px] w-24 h-10 font-bold text-xl font-palanquin">
                      Recipe
                    </button>
                  </NavLink>
                </div>
                </div>

              </div>
            );
          })}
    </>
  );
}

export default MealCard;
