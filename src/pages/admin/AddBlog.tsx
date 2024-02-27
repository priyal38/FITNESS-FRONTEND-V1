import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

type Props = {}


interface FormInput {
  title: string;
  category: string;
  content: string;
  author: string;
  readtime: string;
  coverImg: string;
  
}

const AddBlog = (props: Props) => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();

  const onSubmit = async (data: FormInput ) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('category', data.category);
      formData.append('content', data.content);
      formData.append('author', data.author);
      formData.append('readtime', data.readtime);
      formData.append('coverImg', data.coverImg[0]); 
     
   
      const response = await axios.post('http://localhost:5000/api/blog/addblog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' 
        }
      });
      console.log(response.data);
      if(response.status===200){
        toast.success("Blog added successfully")
      }
      
      
    } catch (error) {
      console.error('Error adding workout:', error);
     toast.error("Please try again")
    }
  };

  return (


    <>
      <div className="max-w-lg  mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-blue-400  text-blue-950 text-center font-bold uppercase">
          Add Blog
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



          {/* ================Category======================== */}
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
                <option value="fitness">Fitness</option>
                <option value="health">Health</option>
                <option value="mentalHealth">Mental Health</option>

              </select>
              {errors.category && <p className="text-red-600 mt-1">{errors.category.message}</p>}
            </div>


          {/* ======Author============ */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
             Author
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("author", {
                required: "readtime required"
              })}></input>
              {errors.author && <p className="text-red-600 mt-1">{errors.author.message}</p>}
          </div>

          {/* =====================explanation================== */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Content
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("content", {
                required: "content required"
              })}></textarea>
              {errors.content && <p className="text-red-600 mt-1">{errors.content.message}</p>}
          </div>


          {/* =====================read time================== */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Readtime(minutes)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("readtime", {
                required: "readtime required"
              })}></input>
              {errors.readtime && <p className="text-red-600 mt-1">{errors.readtime.message}</p>}
          </div>


          {/* ============================thumbnailURL================================== */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("coverImg", {
                required: "image required"
              })} type="file"  />
              {errors.coverImg && <p className="text-red-600 mt-1">{errors.coverImg.message}</p>}
          </div>


          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit">
              Add Blog
            </button>
          </div>

   </form>
      </div>
      <Toaster/>
    </>


  )
}
export default AddBlog