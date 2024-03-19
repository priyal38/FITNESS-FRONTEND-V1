import React, { useEffect, useState } from 'react'
import RecipeCard from '../../../components/dashboard/recipe/RecipeCard'
import SearchBar from '../../../components/dashboard/common/SearchBar'
import useAxiosPrivate from '../../../axios/useAxiosPrivate'
import CardSkeleton from '../../../components/dashboard/common/CardSkeleton'
import Pagination from '../../../components/dashboard/common/Pagination'
import usePagination from '../../../hooks/usePagination'
import { useSearchParams } from 'react-router-dom'


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
  unit: string

}
export interface RecipeData {
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
  const [recipes, setRecipes] = useState<RecipeData[]>([])
  const [loading, setLoading] = useState(true);
  const axiosPrivate = useAxiosPrivate()
  const [searchParams] = useSearchParams();
  const { currentPage, totalPages, handlePageChange, updateTotalPages } = usePagination();
  const perPage = 3

  const getRecipes = async () => {
    try {
      const queryParamValue = searchParams.get('q');
      const response = await axiosPrivate.get('/recipe/getrecipe ', {
        params: {
          page: currentPage,
          perPage: perPage,
          query: queryParamValue || '',
        }
      })
      setRecipes(response.data.data.recipes);
      updateTotalPages(response.data.data.totalPages);
      setLoading(false)


    }
    catch (error) {
      console.error('Error fetching recipes:', error);
      setRecipes([]);
      setLoading(false);
    }
  };


  useEffect(() => {
    getRecipes();
  }, [currentPage, searchParams]);

  console.log(recipes)
  return (
    <>

      <SearchBar />
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
       

        </div>
      ) : recipes.length !== 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe._id}
                data={recipe}
              />
            ))}
          </div>
          <div className="mt-8">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </>
      ) : (
        <div className="mt-8 text-center text-white text-3xl">Oops! No Recipes found.</div>
      )}

    </>

  )
}

export default Recipe