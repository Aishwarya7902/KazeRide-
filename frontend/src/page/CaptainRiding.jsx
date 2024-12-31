import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {
    const [finishRidePanel,setFinishRidePanel]=useState(false);
    const finishRidePanelRef=useRef(null);

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        }
        else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [finishRidePanel]);
 
    return (
        <div className='h-screen relative'>



            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captain-home' className='h-10 w-10  bg-white rounded-full flex items-center justify-center '>
                    <i className=" text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>


            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>

            <div onClick={()=>{
                setFinishRidePanel(true)
            }} className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative'>
                <h5 onClick={() => {

                }} className='p-1 text-center absolute top-0 w-[95%]'><i className=" text-3xl ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>4 KM away</h4>
                <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg '>Complete Ride</button>
            </div>

            <div ref={finishRidePanelRef} className='fixed h-screen w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10  pt-12'>
                <FinishRide setFinishRidePanel={setFinishRidePanel}/>
            </div>

        </div>
    )
}

export default CaptainRiding