import RecipeList from "../clientapi2list/page"
import { Suspense } from "react"

async function getRecipes(){
    const data = await fetch('https://dummyjson.com/recipes');
    return data.json();
}
export default function page() {
    const recipesPromise = getRecipes();
  return (
    <div>
        <Suspense fallback={<h3> Wait, Your recipes are loading..................................................</h3>}>
{/* Passing the promise directly to client component */}
        <RecipeList recipesPromise={recipesPromise} />
        </Suspense>
    </div>
  )
}
