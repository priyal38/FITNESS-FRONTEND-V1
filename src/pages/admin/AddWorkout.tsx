import React from 'react'

type Props = {}

const AddWorkout = (props: Props) => {
  return (
    <>
      <div className="max-w-md h-screen mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-blue-400  text-blue-950 text-center font-bold uppercase">
          Add Workout
        </div>
        <form className="py-4 px-6" action="" method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name" type="text" required />
          </div>



          {/* ================Category======================== */}
          <div className='flex md:flex-row sm:flex-row flex-col gap-3'>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
                Category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service" required>
                <option value="">Select a category</option>
                <option value="gym">Gym</option>
                <option value="home">Home</option>
                <option value="yoga">Yoga</option>

              </select>
            </div>


            {/* ================Difficulty level======================== */}

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
                Difficulty Level
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service" required>
                <option value="">Select defficulty level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>

              </select>
            </div>


</div>
            {/* ========================subcategory======================== */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                SubCategory
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="text" />
            </div>






            {/* =====================explanation================== */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Explanation
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"></textarea>
            </div>

            {/* ============================thumbnailURL================================== */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Thumbnail URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" required />
            </div>


            {/* ==============================video URL ==================================== */}

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Video URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" required />
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
    </>


  )
}

export default AddWorkout