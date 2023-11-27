import React from 'react'
import { PieChart, Pie, Cell,} from "recharts";

export const Piechart = ({title, pieChartdata}) => {
    
  
      const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className=' shadow-inner'>
        <h1 className='text-center font-bold text-xl py-5 text-indigo-900'>{title}</h1>
        <div className=' w-50% sm:w-100%  flex justify-center' >
        <PieChart width={800} height={400} >
      <Pie
        data={pieChartdata}
        fontSize={20}fontWeight="bold"
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        labelLine={false}
        label={(entry) => entry.value}>
        {pieChartdata.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
  
    </PieChart>
    </div>
    </div>
  )
}
