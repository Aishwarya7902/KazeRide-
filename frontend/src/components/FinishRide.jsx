import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setFinishRidePanel(false)
            }} className='p-1 text-center absolute top-0 w-[93%]'><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

            <h3 className='text-2xl font-semibold mb-5'>Finish this Ride!</h3>
            <div className='flex items-center justify-between mt-4 p-4 border-2 border-yellow-400 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://tse2.mm.bing.net/th?id=OIP.vK7oBGZ8oZgaK4lWEWd-bwHaJO&pid=Api&P=0&h=220" alt="" />
                    <h2 className='text-lg font-medium'>Anjali Srivastava</h2>
                </div>
                <h5 className='text-lg font-medium'>2.2 Km</h5>
            </div>

            <div className='flex flex-col justify-between items-center gap-2'>


                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className=" text-lg ri-map-pin-fill"></i>
                        <div >
                            <h3 className='font-medium text-lg'>562/11-A</h3>
                            <p className='text-sm  text-gray-600 -mt-1'>Kaikondrahalli, Bengaluru, Karnataka</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className=" text-lg ri-map-pin-2-fill"></i>
                        <div >
                            <h3 className='font-medium text-lg'>562/11-A</h3>
                            <p className='text-sm  text-gray-600 -mt-1'>Kaikondrahalli, Bengaluru, Karnataka</p>
                        </div>
                    </div>


                    <div className='flex items-center gap-5 p-3 '>
                        <i className="ri-cash-line"></i>
                        <div >
                            <h3 className='font-medium text-lg'>₹193.20</h3>
                            <p className='text-sm  text-gray-600 -mt-1'>Cash Cash</p>
                        </div>
                    </div>

                </div>
                <div className='mt-6 w-full'>



                    <Link to='/captain-home' className='w-full flex justify-center bg-green-600 text-white font-semibold p-3 rounded-xl mt-5 text-lg'>Finish Ride</Link>

                    <p className='text-red-500 text-sm mt-6'>Click on finish ride button if you have completed the payment</p>

                </div>
            </div>
        </div>
    )
}

export default FinishRide