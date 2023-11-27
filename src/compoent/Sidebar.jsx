import React from 'react'
import { FiHome, FiBook, FiUsers, FiCheckSquare, FiZap, FiBriefcase, FiDollarSign, FiUser, FiBox } from "react-icons/fi";

export const Sidebar = () => {

    return (
        <div className='bg-indigo-100 pb-10  h-auto pt-20 sm:pt-0'>
            <div className='hidden sm:block text-center py-5 '>
                <img src="https://img.freepik.com/premium-vector/momo-mandu-dumplings-traditional-asian-food-vector-illustration-logo-design-template_626654-534.jpg?w=2000" alt="" className='h-20 w-20 rounded-full mx-auto' />
            </div>
            <div>
                <ul className='pl-10 sm:pl-5 mt-10 sm:mt-0'>
                    <li className='flex items-center text-gray-600 font-semibold text-md sm:text-lg hover:bg-orange-200 p-2 rounded-lg '> <FiHome className='text-2xl mr-5' />Home</li>
                    <li className='flex items-center text-gray-600 font-semibold text-md mt-3 text-sm sm:text-lg hover:bg-orange-200 p-1 rounded-lg '> <FiBook className='text-2xl mr-5' />Portfolio</li>
                    <li className='flex items-center text-gray-600 font-semibold text-md mt-3 text-sm sm:text-lg hover:bg-orange-200 p-1 rounded-lg '> <FiUser className='text-2xl mr-5' /> Advisor</li>
                    <li className='flex items-center text-gray-600 font-semibold text-md mt-3 text-sm sm:text-lg hover:bg-orange-200 p-1 rounded-lg'><FiZap className='text-2xl mr-5' />Saving</li>
                    <li className='flex items-center text-gray-600 font-semibold text-md mt-3 text-sm sm:text-lg hover:bg-orange-200 p-1 rounded-lg '> <FiCheckSquare className='text-2xl mr-5' />Varification</li>
                    <li className='flex items-center text-gray-600 font-semibold text-md mt-3 text-sm sm:text-lg hover:bg-orange-200 p-1 rounded-lg '> <FiHome className='text-2xl mr-5' />Maintenance</li>
                    <li className='flex items-center text-gray-600 font-semibold text-md mt-3 text-sm sm:text-lg hover:bg-orange-200 p-1 rounded-lg '> <FiBriefcase className='text-2xl mr-5' />Market Place</li>
                    <li className='flex items-center text-gray-600 font-semibold text-md mt-3 text-sm sm:text-lg hover:bg-orange-200 p-1 rounded-lg '> <FiDollarSign className='text-2xl mr-5' />Payment </li>
                    <li className='flex items-center text-gray-600 font-semibold text-md mt-3 text-sm sm:text-lg hover:bg-orange-200 p-1 rounded-lg '> <FiUsers className='text-2xl mr-5' />Users</li>
                    <li className='flex items-center text-gray-600 font-semibold text-md mt-3 text-sm sm:text-lg hover:bg-orange-200 p-1 rounded-lg '> <FiBox className='text-2xl mr-5' />Utility</li>
                </ul>

            </div>
        </div>
    )
}
