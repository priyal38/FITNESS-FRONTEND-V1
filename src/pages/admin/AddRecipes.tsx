import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

type Props = {}


interface Ingredient {
  name: string;
  quantity: string;

}

interface FormInput {
  title: string;
  description: string;
  mealType: string;
  dietaryType: string;
  prepTime: string;
  cookTime: string;
  calories: string;
  carbohydrates: string;
  protein: string;
  totalfat: string;
  ingredients: Ingredient[];
  instructions: string[];
  image: string
}



const AddHealthyRecipes = (props: Props) => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();

  const onSubmit = async (data: FormInput) => {

    console.log(data)
    // try {
    //   const formData = new FormData();
    //   formData.append('title', data.title);
    //   formData.append('category', data.category);
    //   formData.append('content', data.content);
    //   formData.append('author', data.author);
    //   formData.append('readtime', data.readtime);
    //   formData.append('coverImg', data.coverImg[0]); 


    //   const response = await axios.post('http://localhost:5000/api/blog/addblog', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data' 
    //     }
    //   });
    //   console.log(response.data);
    //   if(response.status===200){
    //     toast.success("Blog added successfully")
    //   }


    // } catch (error) {
    //   console.error('Error adding workout:', error);
    //  toast.error("Please try again")
    // }
  };

  return (


    <>
      <div className="max-w-lg  mx-auto mt-10 border bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
          Add Healthy Recipes
        </div>
        <form className="py-4 px-6" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" {...register("title", {
                required: "title required"
              })} />
            {errors.title && <p className="text-red-600 mt-1">{errors.title.message}</p>}
          </div>

          {/* =====================explanation================== */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("description", {
                required: "description required"
              })}></textarea>
            {errors.description && <p className="text-red-600 mt-1">{errors.description.message}</p>}
          </div>

          <div className='flex md:flex-row flex-col md:gap-14'>


            {/* ================Mealtype======================== */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" >
                MealType
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("mealType", {
                  required: "mealType required"
                })}>
                <option value="">Select a mealType</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner"> Dinner</option>
                <option value="Snack">Snack</option>
                <option value="Dessert">Dessert</option>

              </select>
              {errors.mealType && <p className="text-red-600 mt-1">{errors.mealType.message}</p>}
            </div>

            {/* ================Dietrytype======================== */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" >
                DietaryType
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("dietaryType", {
                  required: "dietaryType required"
                })}>
                <option value="">Select a dietaryType</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Gluten-Free">Gluten-Free</option>
                <option value="Low-Carb">Low-Carb</option>
                <option value="Low-Fat">Low-Fat</option>
                <option value="High-Protein">High-Protein</option>

              </select>
              {errors.mealType && <p className="text-red-600 mt-1">{errors.mealType.message}</p>}
            </div>
          </div>

          <div className='flex md:flex-row flex-col md:gap-8'>
            {/* =====================preptime================== */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" >
                PrepTime (Minutes)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number" {...register("prepTime", {
                  required: "PrepTime required"
                })} />
              {errors.prepTime && <p className="text-red-600 mt-1">{errors.prepTime.message}</p>}
            </div>
            {/* =====================cooktime================== */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" >
                CookTime (Minutes)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number" {...register("cookTime", {
                  required: "cookTime required"
                })} />
              {errors.cookTime && <p className="text-red-600 mt-1">{errors.cookTime.message}</p>}
            </div>
          </div>


          <div className='flex md:flex-row flex-col md:gap-8'>
            {/* ======calories============ */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" >
                Calories(grams)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" {...register("calories", {
                  required: "calories required"
                })} />
              {errors.calories && <p className="text-red-600 mt-1">{errors.calories.message}</p>}
            </div>
            {/* ======Author============ */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" >
                Carbohydrates(grams)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" {...register("carbohydrates", {
                  required: " carbohydrates required"
                })} />
              {errors.carbohydrates && <p className="text-red-600 mt-1">{errors.carbohydrates.message}</p>}
            </div>

          </div>


          <div className='flex md:flex-row flex-col md:gap-8'>
            {/* ======Author============ */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" >
                Protein(grams)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" {...register("protein", {
                  required: "protein required"
                })} />
              {errors.protein && <p className="text-red-600 mt-1">{errors.protein.message}</p>}
            </div>
            {/* ======Author============ */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" >
                Total Fat(grams)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" {...register("totalfat", {
                  required: " totalfat required"
                })} />
              {errors.totalfat && <p className="text-red-600 mt-1">{errors.totalfat.message}</p>}
            </div>

          </div>




          {/* ============================thumbnailURL================================== */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("image", {
                required: "image required"
              })} type="file" />
            {errors.image && <p className="text-red-600 mt-1">{errors.image.message}</p>}
          </div>

          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit">
              Add Recipe
            </button>
          </div>

        </form>
      </div>
      <Toaster />
    </>


  )
}
export default AddHealthyRecipes