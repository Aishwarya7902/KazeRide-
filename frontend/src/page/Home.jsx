import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickUp, setPickUp] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef=useRef(null);


  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding:24
        
      })

      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }

    else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding:0
        
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  }, [panelOpen])

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=' h-screen absolute top-0 w-full  flex flex-col justify-end '>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute right-6 top-6 text-2xl opacity-0'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-16  w-1 top-[45%] left-10 bg-gray-900 rounded-full'></div>
            <input
              className='bg-[#eee] text-base px-12 py-2 rounded-lg w-full mt-5'
              type="text"
              placeholder='Enter a pick-up location'
              value={pickUp}
              onChange={(e) => {
                setPickUp(e.target.value)
              }}
              onClick={() => {
                setPanelOpen(true)
              }}
            />


            <input
              className='bg-[#eee] text-base px-12 py-2 rounded-lg w-full mt-3'
              type="text"
              placeholder='Enter your destination'
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}

              onClick={() => {
                setPanelOpen(true)
              }}
            />
          </form>
        </div>

        <div className=' bg-white h-0' ref={panelRef}>
                <LocationSearchPanel/>
        </div>
      </div>
    </div>


  )
}

export default Home