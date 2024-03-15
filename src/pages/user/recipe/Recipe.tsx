import React, { useEffect, useState } from 'react'
import RecipeCard from '../../../components/dashboard/recipe/RecipeCard'
import SearchBar from '../../../components/dashboard/common/SearchBar'
import useAxiosPrivate from '../../../axios/useAxiosPrivate'
import CardSkeleton from '../../../components/dashboard/common/CardSkeleton'


type Props = {}

export interface NutritionFacts {
  calories: number;
  carbohydrates: number;
  protein: number;
  totalfat: number;
}
export interface Ingredient {
  name: string;
  quantity: string;
  unit:string

}
export interface RecipeData{
  _id: string
  title: string;
  description?: string;
  mealType?: string;
  dietaryType?: string;
  prepTime: number;
  cookTime: number;
  nutritionFacts: NutritionFacts;
  ingredients: Ingredient[];
  instructions: string[];
  image: string
}

const Recipe = (props: Props) => {
  const [recipe, setRecipe] = useState<RecipeData[]>([])
  const [loading, setLoading] = useState(true);

  const axiosPrivate = useAxiosPrivate()

  const getRecipes = async () => {
    try {
      const response = await axiosPrivate.get('/recipe/getrecipe');
      console.log(response)
      setRecipe(response.data.data);
      setLoading(false)


    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };


  useEffect(() => {
    getRecipes();
  }, []);

  console.log(recipe)
  return (
    <>

      {/* <SearchBar /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ">

      {loading ? (
                 
                    <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </>
                ) : (
       
        recipe.map(recipe => (
          <RecipeCard
            key={recipe._id}
            id={recipe._id}
            image={`http://localhost:5000/${recipe.image}`}
            title={recipe.title}
            description={recipe.description}
            dietaryType={recipe.dietaryType}
             />
        ))
        )}
      </div>

    </>
  )
}

export default Recipe