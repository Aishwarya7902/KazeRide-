import React from 'react'

const WaitingForDriver = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setWaitingForDriverPanel(false)
            }} className='p-1 text-center absolute top-0 w-[93%]'><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

            <div className='flex items-center justify-between'>
                <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />

                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Raj Singhania</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH06 AD 9601</h4>
                    <p className='text-sm text-gray-600'>Swift Dzire</p>
                </div>
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

            </div>

        </div>

    )
}

export default WaitingForDriver