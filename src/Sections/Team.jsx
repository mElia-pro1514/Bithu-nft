import React from 'react'

import manager from '../assets/img/members/pro1.jpeg'
import ceo from '../assets/img/members/pro2.jpeg'
import mem from '../assets/img/members/pro3.jpeg'
import mem1 from '../assets/img/members/pro4.jpeg'
import mem2 from '../assets/img/members/pro5.jpeg'
import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'


const Team = () => {
    const team_mempers = [
        {
            id: 1,
            img: manager,
            name: "Muhammad Amir",
            degniaton: "CEO"
        },
        {
            id: 2,
            img: ceo,
            name: "Ali Kazim",
            degniaton: "Co-Founder"
        },
        {
            id: 3,
            img: mem,
            name: "Hussain Abbas",
            degniaton: "Web Developer"
        },
        {
            id: 4,
            img: mem1,
            name: "Asim Ali",
            degniaton: "Web Developer"
        },
        {
            id: 5,
            img: mem2,
            name: "Raza Khan",
            degniaton: "Web Developer"
        },
        {
            id: 6,
            img: manager,
            name: "Amir Ali",
            degniaton: "Web Developer"
        },
        {
            id: 7,
            img: ceo,
            name: "Amir Ali",
            degniaton: "Web Developer"
        },
        {
            id: 8,
            img: mem,
            name: "Amir Ali",
            degniaton: "Web Developer"
        },
    ]
    return (
        <>
            <section id='team' className='w-full'>
                <main className='w-full'>
                    <div className="w-full bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24 ">
                        <div className='flex_b items-start w-[92%] max-w-[1360px] flex-col gap-8 sm:gap-10 md:gap-12 mx-auto'>
                            <div>
                                <div className='  text-[12px] sm:text-[14px] md:text-[19px] text-[#4ddb9e]'>
                                    <b>TEAM MEMBERS</b>
                                </div>
                                <div className='head hover:text-white font-bold text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[2rem]'>
                                    <h2>MEET THE CREW</h2>
                                </div>
                            </div>
                            <div className='flex items-center justify-center mx-auto w-full'>
                                <div className='grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-7'>
                                    {team_mempers.map((items) => {
                                        return (
                                            <div className="group relative flex aspect-square min-h-[270px] flex-col items-center justify-between bg-[#172328] px-4 pb-8 pt-5 text-center shadow-md transition-all duration-300 hover:bg-[#1d2c32] hover:shadow-gray-950/60 sm:min-h-0 sm:pb-9 sm:pt-7" key={items.id}>
                                                <Link className='flex h-full w-full flex-col items-center justify-between' to={'/contectwithmembers'}>
                                                    <div className='flex h-[62%] w-full items-center justify-center overflow-hidden'>
                                                        <img src={items.img} className='h-full w-full object-contain transition-transform duration-500 group-hover:scale-105' alt={`${items.name} profile`} />
                                                    </div>
                                                    <div className='pt-4 sm:pt-5'>
                                                        <div className='text-sm font-bold text-white sm:text-base lg:text-lg'>
                                                            {items.name}
                                                        </div>
                                                        <div className='mt-1 text-xs font-medium text-gray-300 sm:text-sm'>
                                                            {items.degniaton}
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className='absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 gap-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100'>
                                                    <a href='https://www.linkedin.com' target='_blank' rel='noreferrer' aria-label={`${items.name} on LinkedIn`} className='flex h-8 w-10 items-center justify-center bg-[#071116] text-white transition hover:bg-[#4ddb9e] hover:text-black'>
                                                        <FaLinkedinIn />
                                                    </a>
                                                    <a href='https://twitter.com' target='_blank' rel='noreferrer' aria-label={`${items.name} on Twitter`} className='flex h-8 w-10 items-center justify-center bg-[#071116] text-white transition hover:bg-[#4ddb9e] hover:text-black'>
                                                        <FaTwitter />
                                                    </a>
                                                    <a href='https://www.instagram.com' target='_blank' rel='noreferrer' aria-label={`${items.name} on Instagram`} className='flex h-8 w-10 items-center justify-center bg-[#071116] text-white transition hover:bg-[#4ddb9e] hover:text-black'>
                                                        <FaInstagram />
                                                    </a>
                                                </div>
                                            </div>

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