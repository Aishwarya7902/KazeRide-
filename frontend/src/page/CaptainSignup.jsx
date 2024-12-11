import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const CaptainSignup = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [captainData,setCaptainData]=useState({});
    
    const submitHandler = (e) =>{
        e.preventDefault();
        setCaptainData({
            fullName:{
                firstName,
                lastName
            },
            email,
            password
        })
        
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('')
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className="w-16 mb-10" src="https://www.svgrepo.com/show/505031/uber-driver.svg" />
                <form onSubmit={(e)=>{
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
                            onChange={(e)=>{
                                setFirstName(e.target.value)
                            }}
                        />

                        <input
                            type="text"
                            placeholder='Last name'
                            className='bg-[#eeeeee] w-1/2 px-4 py-2 border text-lg placeholder:text-base'
                            value={lastName}
                            onChange={(e)=>{
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
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                        type="text"
                        required
                        placeholder='password'
                        className='bg-[#eeeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base mb-6'
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />
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