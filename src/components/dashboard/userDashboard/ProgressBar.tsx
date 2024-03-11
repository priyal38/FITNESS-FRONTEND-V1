import React from 'react'
import { Line, Circle } from 'rc-progress';

type Props = {}

const ProgressBar = (props: Props) => {
  return (
    <>
    <div className='flex flex-col gap-5'>

         <Line percent={10} strokeWidth={2} strokeColor="#ff39FE" className='w-full '/>
         <Line percent={10} strokeWidth={2} strokeColor="#D3D3D3" />
         <Line percent={30} strokeWidth={2} strokeColor="#D3D3D3" />
         <Line percent={10} strokeWidth={2} strokeColor="#D3D3D3" />
    </div>
    </>
  )
}

export default ProgressBar