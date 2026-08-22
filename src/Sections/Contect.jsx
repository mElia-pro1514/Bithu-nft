import React, { useState } from 'react'
import Btns from '../Components/Btns'
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { GiSailboat } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosFolderOpen } from "react-icons/io";
import contect from '../assets/img/footer_img.png'
import { Link } from 'react-router-dom'
import Btn from '../Components/Btn'
import logo from '../assets/img/logo.png'


const Contect = ({className, icon, text, onclick, type}) => {

    let navlinks = ["HOME", "ABOUT", "ROADMAP", "TEAM", "FCQs"];
    
    const [toggle, settoggle] = useState(true);
    const togglehanddle = () => {
        settoggle(!toggle)
    }

    const Socil_links = [
        {
            id: 1,
            Link: 'https://www.fiverr.com/',
            Icons: GiSailboat,
        },
        {
            id: 2,
            Link: 'https://www.fiverr.com/',
            Icons: FaTwitter,
        },
        {
            id: 3,
            Link: 'https://www.fiverr.com/',
            Icons: FaLinkedinIn,
        },
        {
            id: 4,
            Link: 'https://www.fiverr.com/',
            Icons: FaFacebook,
        },
        {
            id: 5,
            Link: 'https://www.fiverr.com/',
            Icons: FaTwitter,
        },
        {
            id: 6,
            Link: 'https://www.fiverr.com/',
            Icons: FaTelegramPlane,
        }, {
            id: 7,
            Link: 'https://www.fiverr.com/',
            Icons: FaTwitter,
        },
    ]
    return (
        <>
            <main id='contect' className='w-full'>
                <section>
                    <div className="w-full ">
                        <div className=' w-full pt-5'>
                            <div className="flex_b flex-col  gap-8 w-[90%] sm:w-[70%] md:w-[50%] mx-auto">

                                <div className="text-center">
                                    <div className="head hover:text-white font-bold lg:text-[2rem]">
                                        <h2>JOIN OUR COMMUNITY &</h2>
                                        <h2>GET EARLY ACCESS</h2>
                                    </div>
                                </div>
                                <div className=' text-3xl md:text-5xl'>
                                🤙
                                </div>
                                <div>
                                    <div className="flex flex-col gap-10">
                            <div className="flex justify-center items-center h-fit gap-4 sm:gap-9">
                                            <Btns text={"WHITELIST NOW"}
                                                className={"btn_sky rounded-none text-[12px] sm:text-[14px] py-1 px-2 sm:px-4  sm:py-3 lg:py-1 lg:px-4 bg-[#4ddb9e] hover:bg-transparent hover:text-white text-black font-bold  flex_c"}
                                                icon={<IoIosFolderOpen/>} />

                                            <Btns text={"JOIN DISCOUNT"} className={"btn_gray rounded-none text-[12px] sm:text-[14px] bg-[#4149b1]  py-1 px-2 sm:px-4  sm:py-3 lg:py-1 lg:px-4 hover:text-white hover:border-[#4149b1] hover:bg-gray-950  flex_c"} icon={<FaDiscord />} />
                                        </div>
                                        <div>
                                            <div>
                                                <div className="flex items-center justify-center gap-4 scroll-smooth w-full overflow-hidden">
                                                    <div className="btn_links_footer">
                                                        < GiSailboat />
                                                    </div>
                                                    <div className="btn_links_footer">
                                                        < FaTwitter />
                                                    </div>
                                                    <div className="btn_links_footer">
                                                        < FaFacebook />
                                                    </div>
                                                    <div className="btn_links_footer">
                                                        <FaInstagram />
                                                    </div>
                                                    <div className="btn_links_footer">
                                                        < FaLinkedinIn />
                                                    </div>
                                                    <div className="btn_links_footer">
                                                        < FaTelegramPlane />
                                                    </div>
                                                    <div className="btn_links_footer">
                                                        <FaDiscord />
                                                    </div>
                                                    <div className="btn_links_footer">
                                                        < IoIosFolderOpen />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex_b flex-col  gap-16 w-[90%] sm:w-[70%] md:w-[50%] mx-auto mt-2">
                                <img src={contect} alt="" className='w-full rounded-3xl' />

                            </div>
                        </div>
                        <nav className=' w-[100%] bg-[#3f3f3f2d] left-0 right-0'>
                            <div className=" flex_b items-center py-1 pt-2 widh ">
                                <div className=' '>
                                    <div className=' flex_C'>
                                        <span className='flex 
                                         items-center  text-[1rem] hover:text-[#4ddb9e] sm:text-[1.5rem] lg:text-[2rem] px-1 font-bold '>
                                            <img src={logo} className='h-[20px] sm:h-fit' alt="" /></span>
                                    </div>

                                </div>
                                    <div className=' text-[12px] text-end'>
                                        <p className=' flex items-center gap-2'> <b className=' text-[20px]'>©</b> Copyright 2024 By M Elia</p>
                                    </div>


                               
                            </div>
                        </nav>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Contect