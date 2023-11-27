import React from 'react'

export const TicketSummary = () => {
  return (
    <div className='px-10 bg-gray-100 shadow-inner rounded-md'>
          <h1 className='pt-5 font-bold text-xl'>Tickets Summary</h1>
        <div className='grid grid-cols-2 sm:grid-cols-4 my-5  py-5 gap-5'>
          
<div className="box">
    <h2 className='text-md font-bold text-indigo-500'> Closed Tickets</h2>
<p className="font-bold text-green-700 text-xl">22</p>
</div>

<div className="box">
    <h2 className='text-md font-bold text-indigo-500'> Open Tickets</h2>
<p className="font-bold text-blue-700 text-xl">22</p>
</div>

<div className="box">
    <h2 className='text-md font-bold text-indigo-500'> on-Hold Tickets</h2>
<p className="font-bold text-violet-700 text-xl">22</p>
</div>

<div className="box">
    <h2 className='text-md font-bold text-indigo-500'>Cancelled Tickets</h2>
<p className="font-bold text-orange-500 text-xl">22</p>
</div>
</div>
 
    </div>
  )
}
