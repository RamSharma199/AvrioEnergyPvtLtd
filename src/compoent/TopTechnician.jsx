import React from 'react'
import { topTechnician } from '../data'

export const TopTechnician = ({title}) => {
  return (
    <div className=' shadow-inner'>
    <h1 className='text-center font-bold text-xl pt-4 text-indigo-900'>{title}</h1>
    <div className=' w-50% sm:w-100%  flex flex-col justify-center px-5 ' >
  {
topTechnician.map((item, index)=>{
    return(
        <div className='flex justify-between  items-center shadow-inner  mt-2 p-2 w-full bg-indigo-100 rounded-md '>
        <div className='flex items-center'><img src={item.profile} alt="" className='w-10 h-10 rounded-full mr-5 border-2 border-indigo-200' /> 
        <h1 className='font-bold text-sm'>{item.name}</h1></div>
        <div> <p className='font-semibold text-xs'>{item.ticktsStatus}</p></div>
       </div>
    )
})
  }
</div>
</div>
  )
}
