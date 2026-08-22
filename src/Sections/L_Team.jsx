import React from 'react'

import manager from '../assets/img/members/pro1.jpeg'
import ceo from '../assets/img/members/pro2.jpeg'
import mem from '../assets/img/members/pro3.jpeg'
import mem1 from '../assets/img/members/pro4.jpeg'
import mem2 from '../assets/img/members/pro5.jpeg'
import { Link } from 'react-router-dom'


const L_Team = () => {
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
            <section id='team'>
                <main>
                    <div className="w-full bg-gray-950 py-20 ">
                        <div className=' flex_b items-start w-[90%] md:w-[90%] lg:w-[70%] flex-col gap-14  mx-auto  '>
                            <div className=' w-full text-center py-5'>
                                <div className='  text-[16px] text-[#4ddb9e]'>
                                    <b>TEAM MEMBERS</b>
                                </div>
                                <div className='head pt-3 hover:text-white font-bold lg:text-[2rem]'>
                                    <h2>MEET THE CREW</h2>
                                </div>
                            </div>
                            <div className=' flex items-center justify-center mx-auto w-full'>
                                <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  w-[95%] md:w-[95%] '>
                                    {team_mempers.map((items) => {
                                        return (
                                            <Link className=" rounded  mb-2 bg-[#5e5c5c36] hover:shadow-gray-700 h-[20vh] cursor-pointer shadow-md flex justify-center items-center sm:h-fit flex-col py-2 px-6 text-center" key={items.id} to={'/contectwithmembers'}>
                                                <div className=' flex items-center justify-center w-full '>

                                                    <b className=' w-[100%] text-[3em] md:text-[4em] lg:text-[5em]'>{items.img}</b>

                                                </div>
                                                <div className='pt-3 md:pt-5'>
                                                    <div className='  text-[11px] md:text-[16px] font-bold '>
                                                        {items.name}
                                                    </div>
                                                    <div className=' text-[#757575b9] font-medium text-[10px] md:text-[12px]'>
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

export default L_Team