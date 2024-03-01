import axios from 'axios';
import React from 'react'
import { useForm, useFieldArray } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

type Props = {}


interface Ingredient {
  name: string;
  quantity: string;
  unit: string

}
interface Instruction {
  step: string;
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
  instructions: Instruction[];
  image: string
}



const AddHealthyRecipes = (props: Props) => {

  const { register, handleSubmit, formState: { errors }, control } = useForm<FormInput>({
    defaultValues: {
      ingredients: [{ name: "", quantity: "", unit: "" }], instructions: [{ step: "" }]
    }
  });

  const { fields: ingredientsFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({
    control,
    name: 'ingredients'
  });

  const { fields: instructionsFields, append: appendInstruction, remove: removeInstruction } = useFieldArray({
    control,
    name: 'instructions'
  });

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
      <div className="max-w-xl  mx-auto mt-10 border bg-white shadow-lg rounded-lg overflow-hidden">
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
            {errors.title && <span className="text-red-500 text-xs italic">{errors.title.message}</span>}
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
            {errors.description && <span className="text-red-500 text-xs italic">{errors.description.message}</span>}
          </div>

          <div className='flex md:flex-row flex-col md:gap-24'>


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
              {errors.mealType && <span className="text-red-500 text-xs italic">{errors.mealType.message}</span>}
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
              {errors.mealType && <span className="text-red-500 text-xs italic">{errors.mealType.message}</span>}
            </div>
          </div>

          <div className='flex md:flex-row flex-col md:gap-16'>
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
              {errors.prepTime && <span className="text-red-500 text-xs italic">{errors.prepTime.message}</span>}
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
              {errors.cookTime && <span className="text-red-500 text-xs italic">{errors.cookTime.message}</span>}
            </div>
          </div>


          <div className='flex md:flex-row flex-col md:gap-16'>
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
              {errors.calories && <span className="text-red-500 text-xs italic">{errors.calories.message}</span>}
            </div>
            {/* ======Carbohydrates============ */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" >
                Carbohydrates(grams)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" {...register("carbohydrates", {
                  required: " carbohydrates required"
                })} />
              {errors.carbohydrates && <span className="text-red-500 text-xs italic">{errors.carbohydrates.message}</span>}
            </div>

          </div>


          <div className='flex md:flex-row flex-col md:gap-16'>
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
              {errors.protein && <span className="text-red-500 text-xs italic">{errors.protein.message}</span>}
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
              {errors.totalfat && <span className="text-red-500 text-xs italic">{errors.totalfat.message}</span>}
            </div>

          </div>
          {/* ================================ingredients========================= */}

          {ingredientsFields.map((field, index) => (
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-2">Ingredient {index + 1}</label>
              <div key={field.id} className="flex mb-2">
                <div className="flex flex-col">
                  <input
                    type="text"
                    {...register(`ingredients.${index}.name`, { required: 'Name is required' })}
                    defaultValue={field.name}
                    placeholder="Name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.ingredients && errors.ingredients[index] && (
                    <span className="text-red-500 text-xs italic">{errors.ingredients[index]?.name?.message}</span>
                  )}
                </div>
                <div className="flex flex-col ml-2">
                  <input
                    type="text"
                    {...register(`ingredients.${index}.quantity`, { required: 'Quantity is required' })}
                    defaultValue={field.quantity}
                    placeholder="Quantity"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.ingredients && errors.ingredients[index] && (
                    <span className="text-red-500 text-xs italic">{errors.ingredients[index]?.quantity?.message}</span>
                  )}
                </div>
                <div className="flex ml-2">
                  <input
                    type="text"
                    {...register(`ingredients.${index}.unit`)}
                    defaultValue={field.unit}
                    placeholder="Unit"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
                  />
                </div>
                {index !== 0 && (
                  <button
                    type="button"
                    className=" ml-2 py-2 px-4 bg-red-400 text-white  text-sm font-semibold rounded"
                    onClick={() => removeIngredient(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendIngredient({ name: '', quantity: '', unit: '' })}
            className="mt-0.5  py-1 px-2 mb-4 bg-green-500 text-white font-semibold text-sm rounded"
          >
            Add Ingredient
          </button>




          {/* =====================instruction==================== */}


          {instructionsFields.map((field, index) => (
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-2">Instruction {index + 1}</label>
              <div key={field.id} className="flex mb-2">
                <div className='flex w-full flex-col'>
                  <input
                    type="text"
                    {...register(`instructions.${index}.step`, { required: 'Step is required' })}
                    defaultValue={field.step}
                    placeholder={`Step ${index + 1}`}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.instructions && errors.instructions[index] && (
                    <span className="text-red-500 text-xs italic">{errors.instructions[index]?.step?.message}</span>

                  )}
                  </div>
                  {index !== 0 && (<button
                    type="button"
                    className=" ml-2 py-2 px-4 bg-red-400 text-white font-semibold text-sm rounded"
                    onClick={() => removeInstruction(index)}
                  >
                    Remove
                  </button>)}
                </div>
              </div>
            ))}
              <button
                type="button"
                onClick={() => appendInstruction({ step: '' })}
                className="mt-0.5  py-1 px-2 mb-4  bg-green-500 text-white font-semibold text-sm rounded"
              >
                Add Instruction
              </button>





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
                {errors.image && <span className="text-red-500 text-xs italic">{errors.image.message}</span>}
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