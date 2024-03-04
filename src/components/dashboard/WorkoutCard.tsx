import React from 'react'
import img from "../../images/about.jpg"

type Props = {}

const WorkoutCard = (props: Props) => {
    return (
        <div>
           
                {/* <!-- CARD 1 --> */}
                <div className="rounded overflow-hidden shadow-md shadow-slate-700 flex flex-col bg-gray-800">
                    <div >
                        <img className="w-full"
                            src={img}
                            alt="Sunset in the mountains"/>
                        
                    </div>
                    <div className="px-6 py-4 mb-auto">
                        
                        <h3 className="mb-2 text-lg font-bold tracking-tight  text-white">Noteworthy technology acquisitions 2021</h3>
                       <p className='mb-3 font-normal  text-gray-400'>subcategory</p>
                    </div>
                   
                        
                </div>
            </div>
          
           

            )
}

            
export default WorkoutCard