import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MealInfo() {
  const [info, setInfo] = useState(null);
  const { MealId } = useParams();

  const getInfo = async () => {
    try {
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`);
      if (!get.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await get.json();
      console.log(data.meals[0]);
      setInfo(data.meals[0]);
    } catch (error) {
      console.error('Error fetching meal info:', error);
    }
  };

  useEffect(() => {
    if (MealId) {
      getInfo();
    }
  }, [MealId]);

  // Extract YouTube link safely
  const youtubeLink = info?.strYoutube ? info.strYoutube.split("v=")[1] : null;

  return (
    <div className='min-h-screen'>
      {/* Ternary check for loading or rendering info */}
      {!info ? (
        <div>Loading...</div>
      ) : (
        <div className='flex gap-8 justify-center items-start'>
          <img
            src={info.strMealThumb}
            alt={info.strMeal}
            className='w-[380px] h-[410px] rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'
          />
          <div>
            <h1 className='text-4xl font-montserrat font-bold'>Meal Recipe</h1>
            <h2 className='text-2xl mb-4 font-palanquin font-semibold'>{info.strMeal}</h2>
            <span className='inline-block bg-yellow-200 p-2'>
              <p className='text-md font-montserrat'>{info.strInstructions}</p>
            </span>
          </div>
        </div>
      )}

      {/* Ternary check for YouTube video */}
      {youtubeLink ? (
        <div className="flex flex-col grid-rows-2 justify-center items-center mt-28">
          <h3 className="text-2xl font-palanquin font-bold mb-7">
            <span className='bg-green-400 px-4 rounded-2xl'>Watch Recipe Video</span>
          </h3>
          <iframe
            width="58%"
            height="400"
            src={`https://www.youtube.com/embed/${youtubeLink}`}
            title="YouTube video player"
            className='rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null}
    </div>
  );
}

export default MealInfo;
