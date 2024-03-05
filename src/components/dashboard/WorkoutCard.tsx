import React from 'react'
import { Link } from 'react-router-dom';


type Props = {
    id:string;
    imageSrc: string;
    title: string;
};

const WorkoutCard = ({ id , imageSrc, title }: Props) => {
    return (
        <div>
<Link to={`${id}`}>
            <div className=" rounded overflow-hidden shadow-md shadow-slate-700 flex flex-col bg-gray-800">
                <div className='overflow-hidden h-48'>
                    <img
                        className="w-full h-full object-fit"
                        src={imageSrc}
                        alt="Workout"
                    />
                </div>
                <div className="px-6 py-4 mb-auto">

                    <h3 className="mb-2 text-xl font-semibold tracking-tight  text-white text-center overflow-hidden overflow-ellipsis whitespace-nowrap">{title}</h3>

                    {/* <p className='mb-3 font-normal  text-gray-400'>subcategory</p> */}
                </div>


            </div>
            </Link >
        </div>



    )
}


export default WorkoutCard