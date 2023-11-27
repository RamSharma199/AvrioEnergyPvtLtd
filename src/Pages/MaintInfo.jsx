import React from 'react'
import { Chart } from '../compoent/Chart'
import { barChartdata, pieChartdata, verChartdata, lineChartdata } from "../../src/data"
import { Piechart } from '../compoent/Piechart'
import { TopTechnician } from '../compoent/TopTechnician'
import { Linechart } from '../compoent/Linechart'
import { VerticalChart } from '../compoent/VerticalChart'
import { TicketSummary } from '../compoent/TicketSummary'


export const MaintInfo = () => {
  return (
    <div className='bg-gray-100  pt-40 sm:p-5'>

      <div className='bg-[#ffffff] p-5'>
        <h1 className='text-indigo-900 text-xl font-bold py-5'>Overview</h1>
        <div className='w-full h-32'>
          <TicketSummary />
        </div>
        <h1 className='text-indigo-900 text-2xl font-bold p-2 mt-28'>Maintenance</h1>

        <div className='block sm:grid grid-cols-2 w-full gap-2 h-auto bg-[#ffffff] rounded-lg '>
          <Linechart title={"Tickets Overtime"} lineChartdata={lineChartdata} />
          <Chart title={"Monthly consumption"} data={barChartdata} />
        </div>

        <div className='block sm:grid grid-cols-2 w-full gap-2 h-auto bg-[#ffffff] rounded-lg mt-5'>
          <VerticalChart title={"Ticket category unit"} verChartdata={verChartdata} />
          <Chart title={"Maintenance cost overtime"} data={barChartdata} />

        </div>

        <div className='block sm:grid grid-cols-2 w-full gap-2 h-auto bg-[#ffffff] rounded-lg mt-5'>
          <Piechart title={"Tickts status"} pieChartdata={pieChartdata} />
          <TopTechnician title={"Top 5 Technician"} />
        </div>

      </div>
    </div>
  )
}
