import React from 'react'
import SearchBar from '../../components/dashboard/SearchBar'
import WorkoutCard from '../../components/dashboard/WorkoutCard'

type Props = {}

const Workout = (props: Props) => {
  return (
    <div>
      <SearchBar/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-4 ml-2">

      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
     

      </div>
    </div>
  )
}

export default Workout