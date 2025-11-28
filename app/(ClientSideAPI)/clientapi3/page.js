'use client';
import { useState, useEffect } from 'react';

export default function Page() {
  const [recipes, setRecipes] = useState([]); // inside component

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://dummyjson.com/recipes");
        const result = await data.json();
        setRecipes(result.recipes);
        console.log(result.recipes);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    };

    fetchData(); // call the async function
  }, []);

  return (
    <div>
      <ul>
        {recipes.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
