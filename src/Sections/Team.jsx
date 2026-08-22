import React from 'react'

import manager from '../assets/img/members/pro1.jpeg'
import ceo from '../assets/img/members/pro2.jpeg'
import mem from '../assets/img/members/pro3.jpeg'
import mem1 from '../assets/img/members/pro4.jpeg'
import mem2 from '../assets/img/members/pro5.jpeg'
import { Link } from 'react-router-dom'


const Team = () => {
    const team_mempers = [
        {
            id: 1,
            img: "🤵",
            name: "Muhammad Amir",
            degniaton: "CEO"
        },
        {
            id: 2,
            img: "👨‍⚕️",
            name: "Ali Kazim",
            degniaton: "Co-Founder"
        },
        {
            id: 3,
            img: "👨‍🎤",
            name: "Hussain Abbas",
            degniaton: "Web Developer"
        },
        {
            id: 4,
            img: "🤵",
            name: "Asim Ali",
            degniaton: "Web Developer"
        },
        {
            id: 5,
            img: "👩‍💼",
            name: "Raza Khan",
            degniaton: "Web Developer"
        },
        {
            id: 6,
            img: "👩‍🔬",
            name: "Amir Ali",
            degniaton: "Web Developer"
        },
        {
            id: 7,
            img: "👨‍💼",
            name: "Amir Ali",
            degniaton: "Web Developer"
        },
        {
            id: 8,
            img: "🙎🏾‍♀️",
            name: "Amir Ali",
            degniaton: "Web Developer"
        },
    ]
    return (
        <>
            <section id='team' className='w-full'>
                <main className='w-full'>
                    <div className="w-full bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20 ">
                        <div className=' flex_b items-start w-[95%] sm:w-[90%] md:w-[90%] lg:w-[70%] flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-14  mx-auto  '>
                            <div>
                                <div className='  text-[12px] sm:text-[14px] md:text-[16px] text-[#4ddb9e]'>
                                    <b>TEAM MEMBERS</b>
                                </div>
                                <div className='head hover:text-white font-bold text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[2rem]'>
                                    <h2>MEET THE CREW</h2>
                                </div>
                            </div>
                            <div className=' flex items-center justify-center mx-auto w-full'>
                                <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-[100%] '>
                                    {team_mempers.map((items) => {
                                        return (
                                            <Link className=" rounded mb-1 sm:mb-2  bg-[#3f3f3f2d] hover:shadow-gray-700 h-auto min-h-[14vh] sm:min-h-[16vh] md:min-h-[18vh] cursor-pointer shadow-md flex justify-center items-center flex-col py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 text-center transition-all duration-300 hover:scale-105" key={items.id} to={'/contectwithmembers'}>
                                                <div className=' flex items-center justify-center w-full flex-1'>

                                                    <b className=' w-[100%] text-[4em] sm:text-[5em] xl:text-[5em]'>{items.img}</b>

                                                </div>
                                                <div className='pt-1 sm:pt-2 md:pt-3'>
                                                    <div className='  text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-bold '>
                                                        {items.name}
                                                    </div>
                                                    <div className=' text-[#757575b9] font-medium text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px]'>
                                                        {items.degniaton}
                                                    </div>
                                                </div>
                                                <div>
                                                    
                                                </div>
                                            </Link>

                                        )
                                    })

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Team