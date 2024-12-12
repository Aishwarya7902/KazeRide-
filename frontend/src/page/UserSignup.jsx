import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userDataContext } from '../context/userContext'
const UserSignup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();


    const [user, setUser] = useContext(userDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!firstName || !email || !password) {
            alert("All fields are required");
            return;
        }
        try {
           const newUser= {
                fullName: {
                  firstName: firstName,
                  lastName: lastName
                },
                email: email,
                password: password
              };
              

    

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
            if (response.status === 201) {
                const data = response.data;
                setUser(data.user);
                navigate('/home');
            }

            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setUserData('')
        } catch (error) {
            console.error(error);
            alert('Registration failed. Please try again.');
        }

    }


    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'></img>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className='text-lg font-medium mb-2'>What's your Name?</h3>
                    <div className='flex gap-4 mb-5'>
                        <input
                            type="text"
                            required
                            placeholder='First name'
                            className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}

                        />
                        <input
                            type="text"
                            placeholder='Last name'
                            className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}

                        />
                    </div>

                    <h3 className='text-lg font-medium mb-2'>What's your Email?</h3>

                    <input
                        type="email"
                        required
                        autoComplete="username"
                        placeholder='email@example.com'
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}

                    />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                    <input
                        type="password"
                        required
                        autoComplete="current-password"
                        placeholder='password'
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}

                    />
                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">Create account
                    </button>

                </form>
                <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></p>
            </div>

            <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
                    Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>
        </div>
    )
}

export default UserSignup