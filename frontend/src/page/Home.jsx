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
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24

      })

      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }

    else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0

      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen]);

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel]);

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className=' h-screen absolute top-0 w-full  flex flex-col justify-end '>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5
            ref={panelCloseRef} onClick={() => { setPanelOpen(false) }}
            className='absolute right-6 top-6 text-2xl opacity-0'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-16  w-1 top-[45%] left-10 bg-gray-900 rounded-full'>
            </div>
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
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-8 translate-y-full'>

        <i class="ri-arrow-down-wide-line"></i>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

        <div className='flex items-center justify-between w-full border-2 active:border-black rounded-xl p-3 mb-2 '>
          <img className='h-10' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
          <div className=' w-1/2 -ml-2'>
            <h4 className='text-base font-medium'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='text-sm font-medium'>2 mins away</h5>
            <p className='text-xs font-normal text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'> ₹193.20</h2>
        </div>

        <div className='flex items-center justify-between w-full border-2 active:border-black rounded-xl p-3 mb-2 '>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className=' w-1/2 -ml-2'>
            <h4 className='text-base font-medium'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='text-sm font-medium'>3 mins away</h5>
            <p className='text-xs font-normal text-gray-600'>Affordable motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'> ₹65.50</h2>
        </div>

        <div className='flex items-center justify-between w-full border-2 active:border-black rounded-xl p-3 mb-2 '>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className=' w-1/2 -ml-2 '>
            <h4 className='text-base font-medium'>UberAuto <span><i className="ri-user-fill"></i>2</span></h4>
            <h5 className='text-sm font-medium'>4 mins away</h5>
            <p className='text-xs font-normal text-gray-600'>Affordable auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'> ₹111.10</h2>
        </div>
      </div>
    </div>


  )
}

export default Home