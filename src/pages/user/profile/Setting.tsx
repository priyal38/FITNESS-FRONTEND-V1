import React, { useEffect, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import useAxiosPrivate from '../../../axios/useAxiosPrivate';
import { MdOutlineEmail } from 'react-icons/md';
import { CiCalendarDate } from "react-icons/ci";
import { GiBodyHeight } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { FiEdit, FiUpload } from "react-icons/fi";
import user from '../../../images/user-06.png'
import { useForm } from 'react-hook-form';

interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  profilePhoto: string |undefined;
  height?: number;
  role?: number;
  dob?: Date;
  weight?: number;
  bio:string
}

interface photo{
  profilePhoto: FileList;
}
const Settings = () => {

  const [userData , setUserData] = useState<UserData | null>(null)
const axiosPrivate = useAxiosPrivate()
const { register, handleSubmit, reset, control } = useForm<UserData>({
  defaultValues: {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    height: 0,
    weight: 0,
    dob: new Date(),
  }
});
const { register: registerPhoto, handleSubmit: handleSubmitPhoto } = useForm<photo>();



  const getUserProfileData = async() =>{
    try {
      const response = await axiosPrivate.get('/user/profile' )
      console.log(response)
      setUserData(response.data.data) 
      reset(response.data.data)
    } catch (error) {
      console.error('Error fetching workout details:', error);
    }
  }

   useEffect(()=>{
getUserProfileData()
   } , [])


   const onSubmitData = async (data: UserData) => {
    try {
      console.log('Updating user profile with data:', data);
    
    const response =   await axiosPrivate.put('/user/updatedata', data);
    console.log(response);
    
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleCancel = () => {
    if(userData){

      reset(userData); 
      console.log(userData);
      
    }
  };

  const onSubmitPhoto = async (data: any) => {
    try {
      console.log('Updating user photo:', data?.profilePhoto);
      console.log(data.profilePhoto[0]);
      
      const formData = new FormData();
      formData.append('profilePhoto', data?.profilePhoto[0]);
      const response = await axiosPrivate.put('/user/uploadphoto', formData , {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file upload
        },
      } );
      console.log(response);
    } catch (error) {
      console.log(error)
      console.error('Error updating user photo:', error);
    }
  }


  return (

    <div className="mx-auto max-w-270">


      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 xl:col-span-3">

          {/* secction 1 */}
          <div className=" border rounded-lg bg-surface-200 shadow-md  border-surface-300">
            <div className="border-b border-surface-300 py-4 px-7 ">
              <h3 className="font-medium text-white">
                Personal Information
              </h3>
            </div>
            <div className="p-7">
              <form onSubmit={handleSubmit(onSubmitData)}>
                <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-white"
                      htmlFor="fullName"
                    >
                      First Name
                    </label>
                    <div className="relative ">
                      <span className="absolute left-4 top-4 text-gray-400">

                        <FaRegUser className='text-lg' />
                      </span>
                      <input
                        className="w-full rounded border text-[15px] tracking-wider border-surface-300 bg-surface-200 py-3 pl-11 pr-4  focus:ring-surface-500 focus:border-surface-300 text-white "
                        type="text"
                        placeholder='Enter Firstname'
                       
                        {...register("firstname")}
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-white"
                      htmlFor="phoneNumber"
                    >
                      Last Name
                    </label>
                    <div className="relative ">
                      <input
                        className="w-full text-[15px] tracking-wider rounded border border-surface-300 bg-surface-200 py-3 pl-6 pr-4  focus:ring-surface-500 focus:border-surface-300 text-white"
                        type="text"
                        
                        placeholder='Enter lastname'
                      
                        {...register("lastname")} 
                      />
                    </div>

                  </div>
                </div>

                <div className="mb-5">
                  <label
                    className="mb-3 block text-sm font-medium text-white"
                    htmlFor="emailAddress"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 text-gray-400">
                      <MdOutlineEmail className='text-xl' />
                    </span>
                    <input
                      className="w-full  text-[15px] tracking-wider rounded border border-surface-300 bg-surface-200 py-3 pl-11 pr-4  focus:ring-surface-500 focus:border-surface-300 text-white "
                      type="email"
                    
                      placeholder='Enter your email'
                    
                      {...register("email")} 
                    />
                  </div>
                </div>


                <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-white"
                      htmlFor="fullName"
                    >
                      Date of birth
                    </label>
                    <div className="relative ">
                      <span className="absolute left-4 top-4 text-gray-400">

                        <CiCalendarDate className='text-xl' />
                      </span>
                      <input
                        className="w-full text-[15px] tracking-wider rounded border border-surface-300 bg-surface-200 py-3 pl-11 pr-4  focus:ring-surface-500 focus:border-surface-300 text-white "
                        type="date"
                       
                        placeholder='Enter your DOB'
                      
                        {...register("dob") }
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-white"
                      htmlFor="phoneNumber"
                    >
                      Gender
                    </label>





                    <div className="flex items-center ps-4 border border-surface-300 rounded dark:border-gray-700">
                      <input id="bordered-radio-1" type="radio" value="male" className="w-4 h-4 text-primary-400  focus:ring-primary-300 ring-offset-gray-800 focus:ring-0 bg-surface-300 border-surface-500" {...register('gender')} />
                      <label className="w-full  text-[15px] tracking-wider py-3 ms-2 text-white">Male</label>

                      <input id="bordered-radio-1" type="radio" value="female" className="w-4 h-4 text-primary-400  focus:ring-primary-300 ring-offset-gray-800 focus:ring-0 bg-surface-300 border-surface-500" {...register('gender')} />
                      <label className="w-full py-3 text-[15px] tracking-wider ms-2  text-white">Female</label>
                    </div>



                  </div>
                </div>



                <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-white"

                    >
                      Height(cm)
                    </label>
                    <div className="relative ">
                      <span className="absolute left-4 top-4 text-gray-400">

                        <GiBodyHeight className='text-xl' />
                      </span>
                      <input
                        className="w-full text-[15px] tracking-wider rounded border border-surface-300 bg-surface-200 py-3 pl-11 pr-4  focus:ring-surface-500 focus:border-surface-300 text-white "
                        type="number"
                        
                        placeholder='Enter your height'
                        {...register('height')}
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-white"
                      htmlFor="phoneNumber"
                    >
                      Weight(kg)
                    </label>
                    <div className="relative ">
                      <span className="absolute left-4 top-4 text-gray-400">

                        <GiWeight className=' text-xl' />
                      </span>
                      <input
                        className="w-full text-[15px] tracking-wider rounded border border-surface-300 bg-surface-200 py-3 pl-11 pr-4  focus:ring-surface-500 focus:border-surface-300 text-white"
                        type="number"
                       
                        placeholder='Enter your weight'
                       
                        {...register('weight')}
                      />
                    </div>

                  </div>
                </div>


                <div className="mb-5">
                  <label
                    className="mb-3 block text-sm font-medium text-white"

                  >
                    Bio
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 text-gray-400">
                      <FiEdit className='text-lg' />
                    </span>

                    <textarea
                      className="w-full rounded border text-[15px] tracking-wider font-normal border-surface-300 bg-surface-200 py-3 pl-11 pr-4  focus:ring-surface-500 focus:border-surface-300 text-white "
                      
                      id="bio"
                      rows={6}
                      placeholder="Write your bio here"
                      {...register('bio')}
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    className="flex justify-center rounded border border-primary-500 py-2 px-6 font-medium hover:shadow-md text-white"
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex justify-center rounded  bg-primary-400 py-2 px-6 font-medium text-white hover:bg-opacity-90"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>


        {/* section2 */}
        <div className="col-span-5 xl:col-span-2">
          <div className="rounded-lg border border-surface-300 bg-surface-200 shadow-md ">
            <div className="border-b border-surface-300 py-4 px-7 ">
              <h3 className="font-medium text-white">
                Your Photo
              </h3>
            </div>
            <div className="p-7">
            <form onSubmit={handleSubmitPhoto(onSubmitPhoto)} encType="multipart/form-data">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full">
                    <img src={user} alt="User" />
                  </div>
                  <div>
                    <span className="mb-1.5 text-white">
                      Edit your photo
                    </span>
                    <span className="flex gap-2.5">
                      <button className="text-sm text-white hover:text-primary-600">
                        Delete
                      </button>
                      {/* <button className="text-sm text-white hover:text-primary-400">
                        Update
                      </button> */}
                    </span>
                  </div>
                </div>

                <div
                  id="FileUpload"
                  className="relative mb-5 block w-full cursor-pointer appearance-none rounded border border-dashed border-surface-300 py-4 px-4 bg-surface-200  sm:py-7"
                >
                  <input
                    type="file"
                    
                    className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    {...registerPhoto("profilePhoto")}
                  />
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border  bg-surface-200 border-surface-300">
                    <FiUpload className='text-primary-500' />
                    </span>
                    <p>
                      <span className="text-primary-500">Click here to upload</span>
                    </p>
                    <p className=" text-white mt-1.5"> PNG or JPG</p>
                    {/* <p>(max, 800 X 800px)</p> */}
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    className="flex justify-center rounded border border-primary-400 py-2 px-6 font-medium  hover:shadow-md text-white"
                    type="submit"
                  >
                    Cancel
                  </button>
                  <button
                    className="flex justify-center rounded bg-primary-500 py-2 px-6 font-medium text-gray-300 hover:bg-opacity-90"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Settings;