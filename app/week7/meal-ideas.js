import React, { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Define API Fetching Function
  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (response.ok) {
        const data = await response.json();
        setMeals(data.meals || []);
      } else {
        console.error('Error fetching meal ideas:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
    }
  };

  // Define Load Function
  const loadMealIdeas = () => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    } else {
      // Reset the meals when there's no ingredient
      setMeals([]);
    }
  };

  // Use the useEffect Hook
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="ml-4">
      <h3 className="text-xl font-bold mb-2">Meal Ideas</h3>
      {ingredient && meals.length > 0 && (
        <>
          <p>Here are some meal ideas using {ingredient}:</p>
          <div>
            {meals.map((meal) => (
              <div key={meal.idMeal} className="mb-2">
                <h4 className="font-semibold">{meal.strMeal}</h4>
                <p>ID: {meal.idMeal}</p>
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-20 h-20" />
              </div>
            ))}
          </div>
        </>
      )}
      {!ingredient && (
        <p>Select an item to see meal ideas.</p>
      )}
      {ingredient && meals.length === 0 && (
        <p>No meal ideas found for {ingredient}</p>
      )}
    </div>
  );
}
