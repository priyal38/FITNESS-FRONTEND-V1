import React from 'react';
import { useForm , useFieldArray} from 'react-hook-form';

type Props = {};


interface Address {
    street: string;
    city: string;
  }

interface FormInput {
    firstname: string;
    lastname: string;
    email: string;
    contactno: string;
    gender: string;
    hobby: string[];
    country: string;
    state: string;
    password: string;
    confirmPass:string;
    addresses:Address[];
}

const TestForm = (props: Props) => {
    const { register, handleSubmit, formState: { errors }, watch , control } = useForm<FormInput>({   defaultValues: {
        addresses: [{ street: '', city: '' }]
      }
    });
    const { fields, remove, append } = useFieldArray({
        control,
        name: "addresses"
      });
    const onSubmit = (data: FormInput) => {
        console.log(data);
    };



    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="firstname" className="block text-gray-700 text-sm font-bold mb-2">FirstName:</label>
                    <input
                        type="text"
                        id="firstname"
                        placeholder="Enter first name"
                        {...register("firstname", { required: "First name required" })}
                        
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span className="text-red-500 text-xs italic">{errors.firstname && errors.firstname.message}</span>
                </div>
                <div className="mb-4">
                    <label htmlFor="lastname" className="block text-gray-700 text-sm font-bold mb-2">LastName:</label>
                    <input
                        type="text"
                        id="lastname"
                        placeholder="Enter last name"
                        {...register("lastname", { required: "Last name required" })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span className="text-red-500 text-xs italic">{errors.lastname && errors.lastname.message}</span>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email address"
                        {...register("email", {
                            required: "Email required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Invalid email address"
                            }
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span className="text-red-500 text-xs italic">{errors.email && errors.email.message}</span>
                </div>
                <div className="mb-4">
                    <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">ContactNo:</label>
                    <input
                        type="tel"
                        id="contact"
                        placeholder="Enter contact number"
                        {...register("contactno", {
                            required: "Contact number required",
                            pattern: {
                                value: /^\d{1,10}$/,
                                message: "Invalid phone number"
                            }
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span className="text-red-500 text-xs italic">{errors.contactno && errors.contactno.message}</span>
                </div>





                
          {fields.map((field, index) => (
            <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Addresses {index+1}</label>
            <div key={field.id} className="flex mb-2">
              <input
                type="text"
                {...register(`addresses.${index}.street` , {required:"please enter street"} ) }
                defaultValue={field.street}
                placeholder="Street"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <span className="text-red-500 text-xs italic">{errors.addresses?.[index]?.street?.message}</span>
              <input
                type="text"
                {...register(`addresses.${index}.city`,{required:"please add city"} )}
                defaultValue={field.street}
                placeholder="City"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
              />
              <span className="text-red-500 text-xs italic">{errors.addresses?.[index]?.city?.message}</span>
              {index !== 0 && <button type="button" className='mt-2 py-2 ml-2 px-2 bg-red-400 text-white font-bold rounded' onClick={() => remove(index)}>Remove </button>}
            </div>
            </div>

          ))}
          <button type="button" onClick={() => append({ street: "", city: "" })} className="mt-2 py-1 px-2 bg-green-500 text-white font-bold rounded">Add Address</button>
       


















                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
                    <div>
                        <label htmlFor="male" className="mr-2">
                            <input
                                type="radio"
                                id="male"
                                value="Male"
                                {...register("gender", { required: "please select gender" })}
                            />
                            Male
                        </label>
                        <label htmlFor="female">
                            <input
                                type="radio"
                                id="female"
                                value="Female"
                                {...register("gender")}
                            />
                            Female
                        </label>
                    </div>
                    <span className="text-red-500 text-xs italic">{errors.gender && errors.gender.message}</span>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Hobbies:</label>
                    <div>
                        <label htmlFor="reading" className="mr-2">
                            <input
                                type="checkbox"
                                id="reading"
                                value="Reading"
                                {...register("hobby", { required: "Select at least one hobby" })}
                            /> Reading
                        </label>
                        <label htmlFor="dancing" className="mr-2">
                            <input
                                type="checkbox"
                                id="dancing"
                                value="Dancing"
                                {...register("hobby")}
                            />
                            Dancing
                        </label>
                        <label htmlFor="sports">
                            <input
                                type="checkbox"
                                id="sports"
                                value="Sports"
                                {...register("hobby")}
                            />
                            Sports
                        </label>
                    </div>
                    <span className="text-red-500 text-xs italic">{errors.hobby && errors.hobby.message}</span>
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country:</label>
                    <select
                        {...register("country", { required: "please select country" })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select country</option>
                        <option value="USA">USA</option>
                        <option value="India">India</option>
                    </select>
                    <span className="text-red-500 text-xs italic">{errors.country && errors.country.message}</span>
                </div>
                <div className="mb-4">
                    <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State:</label>
                    <select
                        {...register("state", { required: "please select state" })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select state</option>
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                    </select>
                    <span className="text-red-500 text-xs italic">{errors.state && errors.state.message}</span>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password required", minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters"
                            } ,  pattern: {
                                value:  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                                message: "Password must contain one uppercase letter , one number , one special character."
                            }
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span className="text-red-500 text-xs italic">{errors.password && errors.password.message}</span>
                </div>


                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
                    <input
                        type="password"
                        {...register("confirmPass", {
                            required: "Password required", validate: (value) =>
                                value === watch("password") || "Passwords do not match"
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span className="text-red-500 text-xs italic">{errors.confirmPass && errors.confirmPass.message}</span>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TestForm;