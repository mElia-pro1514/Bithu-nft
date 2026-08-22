import React, { useState } from 'react'
import Input from '../Components/Input'
import Btns from '../Components/Btns'
import { Link, useSubmit } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { AiOutlineHome } from 'react-icons/ai'
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiAddCircleLine } from "react-icons/ri";
import Link_btn from '../Components/Link_btn'
const Login = ({ onclick, }) => {
    const [login_data, setlogin_data] = useState([]);
    const [user_name, setuser_name] = useState('');
    const [user_email, setuser_email] = useState('');
    const [user_password, setuser_password] = useState('');

    const handle_login_data = (e) => {
        e.preventDefault();
        setlogin_data({ user_name: user_name, user_email: user_email, user_password: user_password });
        setuser_name('');
        setuser_email('');
        setuser_password('')
    }
    let input_style = "w-full bg-transparent border-b-[2px]  border-gray-600 text-gary-500"

    return (
        <>
            <section>   <main>
                <div className="w-full bgblur bg-cover h-[100vh] flex items-center justify-center mx-auto fixed bg-[#0c0c13ad] top-0 left-0 right-0 z-50">
                    <div className='w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[28%] flex flex-col bg-gray-950 shadow-gray-600 shadow-2xl'>
                        <div className=' font-bold text-[17px] relative w-full  text-end top-0 right-0'>
                            <i className='bg-[#4ddb9e] pl-3 pr-1 pb-2 cursor-pointer rounded-bl-[100%] ' onClick={onclick} >+</i>
                        </div>
                        <div className='flex_c
      flex-col gap-4  px-4 py-4'>
                            <div className=' flex_C'>
                                <span className='flex  items-center gap-2 text-[1.3rem] hover:text-[#4ddb9e] sm:text-[2rem] lg:text-[2.2rem] px-1 font-bold '>
                                    <img src={logo} className='h-[18px] sm:h-fit' alt="" />Bithu</span>
                            </div>
                            <div className='sm:pt-4  text-center font-bold text-[1rem] '>
                                <h3>REGESTER IN..!</h3>
                            </div>
                            <div className=' w-full flex justify-center items-center py-3 pb-6 '>
                                <div className=' w-[95%] md:w-[85%] lg:w-[80%]  '>
                                    <form action="" className=' flex flex-col w-full gap-4' onSubmit={handle_login_data}>
                                        <Input type="text" name="user_name" placeholder={'Name (Option)'} className={`${input_style}`} value={user_name} onChange={(e) => setuser_name(e.target.value)} />

                                        <Input type="email" name="email" placeholder={'Email'} className={`${input_style}`}
                                            value={user_email} onChange={(e) => setuser_email(e.target.value)} />

                                        <Input type="Password" name="password" placeholder='Password' className={`${input_style}`} value={user_password} onChange={(e) => setuser_password(e.target.value)} />

                                        <Link_btn type={SubmitEvent} linkto={'/after_login'} text={"REGESETER NOW"} className={"mt-4 text-center flex items-center justify-center py-2 w-full text-[11px] font-bold bg-[#4ddb9e] hover:bg-transparent hover:text-white text-black border-[1px] border-[#4ddb9e] hover:border-white"} icon={""}
                                        />

                                        <div className=' text-sm pt-3'>
                                            <p>You have not any account yet?<br />
                                                <span className=' text-[#4ddb9e]'>Create Account</span></p>

                                        </div>

                                    </form>
                                </div>
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