import React from 'react'
import { FaCalendar, FaClock, FaRegClock, FaShoppingBag, FaSignOutAlt } from 'react-icons/fa'
import Body2 from './Body2'

const Body = () => {
  return (
      <div className='bg-[#c0c0c0]'>
    <div className="p-6 flex space-x-10 ">
        
        <div className="w-4/12  bg-[#18181b] rounded-md shadow-md p-6 text-xl">

          <div className="flex items-center">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
              className="w-25 h-25 rounded-md"
            />
            <div className="ml-4 ">
              <h2 className="text-gray-200 font-bold">MARIMUTHU G</h2>
              <p className="text-gray-400">7376242CB136</p>
              <p className="text-gray-400">SEMESTER - I</p>
              <p className="text-purple-400 font-bold">CONTINUING</p>
            </div>
         </div>

          <p className="text-gray-300">B.Tech. - COMPUTER SCIENCE AND</p>
          <p className="text-gray-300">BUSINESS SYSTEMS</p>

          <p className="text-gray-400 mt-2">
            <span className="font-bold text-white">Mentor:</span> SATHIYA B (CS11088)
          </p>
          <p className="text-gray-400">
            <span className="font-bold text-white">Special Lab:</span> Not Assigned
          </p>
          <p className="text-gray-400">
            <span className="font-bold text-white">Boarding:</span> -
          </p>
          <p className="text-gray-400 mt-2">
            <span className="font-bold text-white"> Warden:</span>Mr.DIVAKAR R 
          </p>
        </div>

        <div className=" bg-[#18181b] p-6 rounded-md shadow-md text-white w-4/12 text-xl ">
          <h3 className="text-lg font-bold mb-4">Attendance Overview</h3>
          <div className="space-y-3">

            <div className="flex items-center space-x-4">
            <FaClock />
              <p>Total Days: <span className="font-bold">8</span></p>
            </div>

            <div className="flex items-center space-x-4">
                <FaCalendar />
              <p>Present Days: <span className="font-bold">4</span></p>
            </div>

            <div className="flex items-center space-x-4">
                <FaSignOutAlt />
              <p>Leave: <span className="font-bold">4</span></p>
            </div>

            <div className="flex items-center space-x-4">
                <FaShoppingBag />
              <p>On Duty: <span className="font-bold">0</span></p>
            </div>

            <div className="flex items-center space-x-4">
                <FaRegClock />
              <p>Percentage: <span className="font-bold">50%</span></p>
            </div>

            <div className="flex items-center space-x-4">
                <FaRegClock />
              <p>Today ( FN | AN ): <span className="font-bold">PR | PR</span></p>
            </div>


          </div>
        </div>

        <div className="bg-[#18181b] p-6 rounded-lg shadow-md text-white font-bold w-4/12 ">
          <h3 className="text-lg mb-4">Semester Grade Point Average (SGPA)</h3>
          <ul className="text-gray-300 text-xl">
            <li className='my-3'>5</li>
            <li className='my-3'>4</li>
            <li className='my-3'>3</li>
            <li className='my-3'>2</li>
            <li className='my-3'>1</li>
            <li className='my-3'>0</li>
          </ul>
        </div>

    </div>
    <Body2 />
    </div>
  )
}

export default Body
