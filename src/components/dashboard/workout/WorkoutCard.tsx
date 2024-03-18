import React from 'react'
import { Link } from 'react-router-dom';
import { WorkoutData } from '../../../pages/user/workout/Workout';


type Props = {
  data:WorkoutData
};

const WorkoutCard = ({data }: Props) => {
    return (
        <div>
<Link to={`${data._id}`}>
            <div className=" rounded overflow-hidden shadow-inner shadow-slate-400 flex flex-col bg-surface-200">
                <div className='overflow-hidden h-48'>
                    <img
                        className="w-full h-full object-fit"
                        src={`http://localhost:5000/${data.thumbnail}`}
                        alt="Workout"
                    />
                </div>
                <div className="px-4 py-2 mb-auto">

                    <h3 className="mb-2 text-xl font-normal  text-white text-center overflow-hidden overflow-ellipsis whitespace-nowrap">{data.title}</h3>

                    {/* <p className='mb-3 font-normal  text-gray-400'>subcategory</p> */}
                </div>


            </div>
            </Link >
        </div>



    )
}


export default WorkoutCard