import React from 'react'
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList
  } from "recharts";

export const VerticalChart = ({title,verChartdata}) => {
   

  return (
    <div className='shadow-inner'>
        <h1 className='text-center font-bold text-xl py-5 text-indigo-900'>{title}</h1>
        <div className=' w-50% sm:w-100% h-[300px] ' >
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
      layout="vertical"
      width={500}
      height={400}
      data={verChartdata}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="transparent" />
      <XAxis type="number"hide />
      <YAxis dataKey="name" type="category" scale="band" hide />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" barSize={20} fill="#413ea0"  label={{ position: 'insideBottomLeft', fill: '#fff' }} />
      <LabelList dataKey="pv" position="inside" fill="#fff" />
   
    </ComposedChart>
    </ResponsiveContainer>
    </div>
    </div>
   
  )
}
