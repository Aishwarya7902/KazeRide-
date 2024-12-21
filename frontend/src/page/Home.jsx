import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickUp, setPickUp] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);
  const [vehicleFound,setVehicleFound]=useState(false);
  const VehicleFoundRef = useRef(null);
  const [waitingForDriverPanel,setWaitingForDriverpanel]=useState(false);
  const waitingForDriverPanelRef=useRef(null);

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


  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel]);


  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(VehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(VehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound]);


  useGSAP(function () {
    if (waitingForDriverPanel) {
      gsap.to(waitingForDriverPanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(waitingForDriverPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriverPanel]);

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

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-10 translate-y-full pt-12'>

        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />

      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-6 translate-y-full pt-12'>

        <ConfirmRide setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>

      <div ref={VehicleFoundRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-6 translate-y-full pt-12'>

        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={waitingForDriverPanelRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-6  pt-12 translate-y-full'>

        <WaitingForDriver setWaitingForDriverpanel={setWaitingForDriverpanel}/>
      </div>
    </div>


  )
}

export default Home