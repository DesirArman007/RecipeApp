import React, { useState } from 'react';
import Button from '../Components/Button';
import MealCard from '../Components/MealCard';
import RandomMeals from '../Components/RandomMeals';

function Main() {
  const [mealName, setMealName] = useState('');
  const [mealData, setMealData] = useState('')
  

  const mealNameInput = (e) => {
    setMealName(e.target.value);
  };

  const getMeal = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      setMealData(data.meals)
    } catch (error) {
      console.error('Error fetching meal data:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getMeal();
    }}

  return (
    <section className="max-container flex flex-1  flex-col  justify-start items-center rounded-md bg-slate-400 min-h-screen p-4 ">
      <div className="mt-[-60px] w-full flex flex-col  justify-center items-center mb-8">
      <h1 className="font-palanquin font-bold  text-[80px] mx-auto ">
        Get Your <span className="text-pink-600 "> Recipe</span>
      </h1>
      
      <div className="lg:max-w-[40%]  flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full bg-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <input
          type="text"
          placeholder="Enter Recipe Name"
          className="input border-4 rounded-full font-montserrat font-medium py-2  w-full "
          value={mealName}
          onChange={mealNameInput} 
          onKeyDown={handleKeyPress}
        />
        <div>
          <Button label="Search" onClick={getMeal}  />
        </div>
      </div>
      </div>
    
      {mealName ? ( <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16 mt-8'>
        <MealCard details={mealData} />
      </div> ): (

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16 mt-8 ">
      <RandomMeals  />
      </div>)
      }
    </section>
  );
}

export default Main;
