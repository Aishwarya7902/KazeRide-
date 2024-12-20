import React from 'react'

const LookingForDriver = () => {
  return (
    
        <div>
            <h5 onClick={() => {
                props.setVehicleFound(false)
            }} className='p-1 text-center absolute top-0 w-[93%]'><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

            <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

            <div className='flex flex-col justify-between items-center gap-2'>

                <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
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
               
            </div>

        </div>
    
  )
}

export default LookingForDriver