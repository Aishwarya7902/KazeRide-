import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setRidePopUpPanel(false)
            }} className='p-1 text-center absolute top-0 w-[93%]'><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://tse2.mm.bing.net/th?id=OIP.vK7oBGZ8oZgaK4lWEWd-bwHaJO&pid=Api&P=0&h=220" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullName.firstName + " " + props.ride?.user.fullName.lastName}</h2>
                </div>
                <h5 className='text-lg font-medium'>2.2 Km</h5>
            </div>

            <div className='flex flex-col justify-between items-center gap-2'>


                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className=" text-lg ri-map-pin-fill"></i>
                        <div >
                            <h3 className='font-medium text-lg'>562/11-A</h3>
                            <p className='text-sm  text-gray-600 -mt-1'>{props.ride?.pickup}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className=" text-lg ri-map-pin-2-fill"></i>
                        <div >
                            <h3 className='font-medium text-lg'>562/11-A</h3>
                            <p className='text-sm  text-gray-600 -mt-1'>{props.ride?.destination}</p>
                        </div>
                    </div>


                    <div className='flex items-center gap-5 p-3 '>
                        <i className="ri-cash-line"></i>
                        <div >
                            <h3 className='font-medium text-lg'>₹{props.ride?.fare}</h3>
                            <p className='text-sm  text-gray-600 -mt-1'>Cash </p>
                        </div>
                    </div>

                </div>
                <div className='flex items-center justify-between w-full mt-5'>



                    <button onClick={() => {
                        props.setConfirmRidePopUpPanel(true)
                        props.confirmRide()
                    }} className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-xl '>Accept</button>

                    <button onClick={() => {
                        props.setRidePopUpPanel(false)
                    }} className=' bg-gray-200 text-gray-700 font-semibold p-3 px-10 rounded-xl '>Ignore</button>

                </div>
            </div>
        </div>
    )
}

export default RidePopUp