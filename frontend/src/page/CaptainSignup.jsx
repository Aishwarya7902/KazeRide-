import React, { createContext, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { captainDataContext } from '../context/CaptainContext';

import axios from 'axios';
const CaptainSignup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const [captainData, setCaptainData] = useState({});
    const {captain, setCaptain} = useContext(captainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newCaptain = {
            fullName: {
                firstName,
                lastName
            },
            email,
            password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain)
        if (response.status === 201) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('')
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
    }
    return (
        <div className='py-5 px-5 h-screen flex flex-col justify-between'>
            <div>
                <img className="w-16 mb-3" src="https://www.svgrepo.com/show/505031/uber-driver.svg" />
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} >
                    <h3 className='text-lg font-medium mb-2'>What's your Name?</h3>
                    <div className='flex gap-4 mb-5'>
                        <input
                            type="text"
                            required
                            placeholder='First name'
                            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                        />

                        <input
                            type="text"
                            placeholder='Last name'
                            className='bg-[#eeeeee] w-1/2 px-4 py-2 border text-lg placeholder:text-base'
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                        />
                    </div>

                    <h3 className='text-lg font-medium mb-2'>What's your Email?</h3>
                    <input
                        type="email"
                        placeholder='email@example.com'
                        required
                        className='bg-[#eeeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base mb-6'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                        type="password"
                        required
                        placeholder='password'
                        className='bg-[#eeeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base mb-6'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />

                    <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                    <div className='flex gap-4 mb-7'>
                        <input
                            type='text'
                            placeholder='Vehicle Color'
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            value={vehicleColor}
                            onChange={(e)=>{
                                setVehicleColor(e.target.value)
                            }}
                        />
                        <input
                            type='text'
                            placeholder='Vehicle Plate'
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            value={vehiclePlate}
                            onChange={(e)=>{
                                setVehiclePlate(e.target.value)
                            }}
                        />
                    </div>

                    <div className='flex gap-4 mb-7'>
                        <input
                            type='number'
                            placeholder='Vehicle Capacity'
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            value={vehicleCapacity}
                            onChange={(e)=>{
                                setVehicleCapacity(e.target.value)
                            }}
                        />
                        <select
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            value={vehicleType}
                            onChange={(e) => {
                                setVehicleType(e.target.value)
                            }}
                        >
                            <option value="" disabled>Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="moto">Moto</option>
                        </select>
                    </div>


                    <button className='bg-[#111] text-white font-semibold rounded mb-3 px-4 py-2 text-lg placeholder:text-base w-full'>Create account</button>
                </form>
                <p className='text-center'>Already have an account?<Link to='/captain-login' className='text-blue-600'>Login</Link></p>
            </div>

            <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the
                    <span className='underline'>Google Privacy Policy</span>and
                    <span className='underline'>Terms of Service apply</span>

                </p>
            </div>
        </div>
    )
}

export default CaptainSignup