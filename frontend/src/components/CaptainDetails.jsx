import React,{useContext} from 'react'
import { captainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {
    const {captain}=useContext(captainDataContext);

    return (
        <div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://up.yimg.com/ib/th?id=OIP.59hYtOrco0EZe3thkO8j1AHaE7&pid=Api&rs=1&c=1&qlt=95&w=160&h=106" alt="" />
                    <h4 className='text-lg font-medium capitalize'>{captain.fullName.firstName + " "+captain.fullName.lastName}</h4>
                </div>

                <div>
                    <h4 className='text-xl font-semibold'>₹685.90</h4>
                    <p className='text-sm font-medium text-gray-600'>Earned</p>
                </div>
            </div>

            <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
                <div className='text-center'>
                    <i className=" text-3xl mb-3 font-thin ri-time-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours online</p>
                </div>
                <div className='text-center'>
                    <i className=" text-3xl mb-3 font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>80 Km</h5>
                    <p className='text-sm text-gray-600'>Total Distance Covered</p>
                </div>
                <div className='text-center'>
                    <i className=" text-3xl mb-3 font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>111</h5>
                    <p className='text-sm text-gray-600'>Reviews</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails