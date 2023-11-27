import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Legend
  } from "recharts";

export const Linechart = ({title,lineChartdata}) => {
   
  return (
    <div className=' shadow-inner'>
    <h1 className='text-center font-bold text-xl py-5 text-indigo-900'>{title}</h1>
    <div className='w-full  sm:w-50%  h-[300px]  justify-center' >
    <ResponsiveContainer width="100%" height="100%">
  <LineChart
    data={lineChartdata}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <XAxis dataKey="name" fontSize={12} />
    <YAxis  fontSize={12}/>
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="uv" stroke="red" fontSize={12} />
    <Line type="monotone" dataKey="amt" stroke="#82ca9d" fontSize={12} />
  </LineChart>
</ResponsiveContainer>

</div>
</div>
  )
}
