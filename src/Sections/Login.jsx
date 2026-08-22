import React, { useState } from 'react'
import Input from '../Components/Input'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'
const Login = ({ onclick, }) => {
    const navigate = useNavigate();
    const [user_name, setuser_name] = useState('');
    const [user_email, setuser_email] = useState('');
    const [user_password, setuser_password] = useState('');
    const [form_error, setform_error] = useState('');

    const handle_login_data = (e) => {
        e.preventDefault();
        if (user_password.length < 8) {
            setform_error('Password must be at least 8 characters.');
            return;
        }
        setform_error('');
        navigate('/after_login');
    }
    const input_style = "w-full bg-transparent border-b-2 border-gray-600 px-1 py-3 text-gray-200 placeholder:text-gray-500 focus:border-[#4ddb9e]"

    return (
        <>
            <section>   <main>
                <div className="w-full min-h-screen overflow-y-auto bgblur bg-cover flex items-center justify-center p-4 sm:p-6 fixed inset-0 z-50 bg-[#0c0c13ad]">
                    <div className='relative w-full max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto flex flex-col bg-gray-950 shadow-gray-600 shadow-2xl'>
                        <div className='absolute top-0 right-0 z-10'>
                            <button type='button' aria-label='Close registration' className='flex h-10 w-10 items-center justify-center rounded-bl-2xl bg-[#4ddb9e] text-2xl font-light text-black transition hover:bg-white' onClick={onclick} >
                                <span aria-hidden='true'>+</span>
                            </button>
                        </div>
                        <div className='flex flex-col gap-4 px-5 py-8 sm:px-10 sm:py-10'>
                            <div className=' flex_C'>
                                <span className='flex  items-center gap-2 text-[1.3rem] hover:text-[#4ddb9e] sm:text-[2rem] lg:text-[2.2rem] px-1 font-bold '>
                                    <img src={logo} className='h-[18px] sm:h-fit' alt="Bitin NFT" /></span>
                            </div>
                            <div className='pt-2 text-center'>
                                <h1 className='text-xl font-bold tracking-wide sm:text-2xl'>REGISTER NOW</h1>
                                <p className='mt-2 text-sm font-normal text-gray-400'>Create your account and enter the Bitin NFT universe.</p>
                            </div>
                            <div className='w-full py-3'>
                                <form className='flex w-full flex-col gap-5' onSubmit={handle_login_data}>
                                        <label className='flex flex-col gap-1 text-xs font-semibold uppercase tracking-wider text-gray-400' htmlFor='user_name'>
                                            Name <span className='font-normal normal-case tracking-normal text-gray-600'>Optional</span>
                                            <Input id="user_name" type="text" name="user_name" required={false} placeholder={'Your name'} className={`${input_style}`} value={user_name} onChange={(e) => setuser_name(e.target.value)} />
                                        </label>

                                        <label className='flex flex-col gap-1 text-xs font-semibold uppercase tracking-wider text-gray-400' htmlFor='user_email'>Email
                                        <Input id="user_email" type="email" name="email" placeholder={'you@example.com'} className={`${input_style}`}
                                            value={user_email} onChange={(e) => setuser_email(e.target.value)} />
                                        </label>

                                        <label className='flex flex-col gap-1 text-xs font-semibold uppercase tracking-wider text-gray-400' htmlFor='user_password'>Password
                                        <Input id="user_password" type="password" name="password" placeholder='8+ characters' className={`${input_style}`} value={user_password} onChange={(e) => setuser_password(e.target.value)} />
                                        </label>

                                        {form_error && <p role='alert' className='text-sm text-red-400'>{form_error}</p>}

                                        <button type='submit' className='mt-2 flex min-h-12 w-full items-center justify-center border border-[#4ddb9e] bg-[#4ddb9e] px-4 py-3 text-center text-xs font-bold text-black transition hover:bg-transparent hover:text-white hover:border-white'>
                                            REGISTER NOW
                                        </button>

                                        <div className='pt-1 text-center text-sm text-gray-400'>
                                            <p>Already have an account? <Link to='/login' className='text-[#4ddb9e] transition hover:text-white'>Sign in</Link></p>

                                        </div>

                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </section>
        </>
    )
}

export default Login