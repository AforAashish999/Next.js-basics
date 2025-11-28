'use client';
import { use } from "react";
import CheckCalorie from "../../calorie/page";

export default function RecipeList({recipesPromise}) {
    const data = use(recipesPromise);
  return (
    <div>
        <ul className="p-10 bg-gray-400 grid grid-cols-2 gap-10">
            {
                data.recipes.map( (recipe) => (
                    <li key={recipe.id} className="p-3 bg-green-300 border-amber-400 border-2 rounded-xl ">
                        <img src={recipe.image} alt={recipe.name} className="w-50 h-50 object-cover" />
                        <p className="text-2xl font-semibold underline">  {recipe.name} </p>
                        <p>Ingredients: {recipe.ingredients} </p>
                       <div>
                        <h3 className="font-bold text-xl">Instructions:</h3>
                        <ul className="list-disc ml-5">
                            <li> {recipe.instructions} </li>
                        </ul>
                       </div>
                       <p> Preparing Time: {recipe.prepTimeMinutes} </p>
                       <p> Cooking Time: {recipe.cookTimeMinutes} </p>
                       <p> Servings: {recipe.servings} </p>
                       <p> Difficulty: {recipe.difficulty} </p>
                       <p> Cusine: {recipe.cuisine} </p>
                       <CheckCalorie calories={recipe.caloriesPerServing} />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
