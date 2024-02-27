import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

type Props = {}


interface FormInput {
  title: string;
  category: string;
  subCategory: string;
  explanation: string;
  difficultyLevel: string;
  thumbnail: string;
  videoUrl: string
}

const AddWorkout = (props: Props) => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();

  const onSubmit = async (data: FormInput ) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('category', data.category);
      formData.append('subCategory', data.subCategory);
      formData.append('explanation', data.explanation);
      formData.append('difficultyLevel', data.difficultyLevel);
      formData.append('thumbnail', data.thumbnail[0]); 
      formData.append('videoUrl', data.videoUrl);
   
      const response = await axios.post('http://localhost:5000/api/workout/addworkout', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' 
        }
      });
      console.log(response.data);
      if(response.status===200){
        toast.success("Workout added successfully")
      }
      
      
    } catch (error) {
      console.error('Error adding workout:', error);
     toast.error("Please try again")
    }
  };

  return (


    <>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-blue-400  text-blue-950 text-center font-bold uppercase">
          Add Workout
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
              })} required/>
              {errors.title && <p className="text-red-600 mt-1">{errors.title.message}</p>}
          </div>



          {/* ================Category======================== */}
          <div className='flex md:flex-row sm:flex-row flex-col gap-3'>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" >
                Category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("category" , {
                  required: "category required"
                })}>
                <option value="">Select a category</option>
                <option value="gym">Gym</option>
                <option value="home">Home</option>
                <option value="yoga">Yoga</option>

              </select>
              {errors.category && <p className="text-red-600 mt-1">{errors.category.message}</p>}
            </div>


            {/* ================Difficulty level======================== */}

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" >
                Difficulty Level
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("difficultyLevel" , {
                  required: "difficulty level required"
                })} >
                <option value="">Select defficulty level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>

              </select>
              {errors.difficultyLevel && <p className="text-red-600 mt-1">{errors.difficultyLevel.message}</p>}
            </div>


          </div>
          {/* ========================subcategory======================== */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              SubCategory
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("subCategory")} type="text" />
          </div>


          {/* =====================explanation================== */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Explanation
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("explanation", {
                required: "explanation required"
              })}></textarea>
              {errors.explanation && <p className="text-red-600 mt-1">{errors.explanation.message}</p>}
          </div>

          {/* ============================thumbnailURL================================== */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Thumbnail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("thumbnail", {
                required: "thumbnail required"
              })} type="file"  />
              {errors.thumbnail && <p className="text-red-600 mt-1">{errors.thumbnail.message}</p>}
          </div>


          {/* ==============================video URL ==================================== */}

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Video URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("videoUrl", {
                required: "videourl required"
              })} type="text"  />
              {errors.videoUrl && <p className="text-red-600 mt-1">{errors.videoUrl.message}</p>}
          </div>


          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit">
              Add workout
            </button>
          </div>

        </form>
      </div>
      <Toaster/>
    </>


  )
}

export default AddWorkout