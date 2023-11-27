import { BarChart, Bar,LabelList, XAxis, YAxis, CartesianGrid, Tooltip,Rectangle, Legend, ResponsiveContainer } from 'recharts';


export const Chart = ({title, data}) => {
  
      
  return (
    <div className='shadow-inner'>
        <h1 className='text-center font-bold text-xl py-5 text-indigo-900'>{title}</h1>
        <div className=' w-50% sm:w-100% ' >
        <ResponsiveContainer  width="" height={300}>
      <BarChart width={100} height={35} data={data} margin={{ top: 30, right: 30, bottom: 5 }} >
        <Rectangle width="100%" height="100%" fill="transparent" />
        <CartesianGrid horizontal={true} vertical={false} stroke="gray" />
        <XAxis dataKey="name" fontSize={12 }  />
        <YAxis fontSize={12}/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="uv" fill="#2ECC71" barSize={20} barRadius={10}>
          <LabelList dataKey="uv" position="insideTop" angle="0" fontSize={12} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
    </div>
  )
}
