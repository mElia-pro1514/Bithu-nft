import React from 'react'

import { IoIosCheckmark } from "react-icons/io"
import {IoIosGift } from "react-icons/io"

const Roadmap = () => {
    const roadmap = [
        {
            id: 1,
            phase: "PHASE 01",
            head: "25% Soldout",
            para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut perspiciatis doloremque autem voluptas iste omnis dicta magna"
        },
        {
            id: 2,
            phase: "PHASE 02",
            head: "50% Soldout",
            para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut perspiciatis doloremque autem voluptas iste omnis dicta magna"
        },
        {
            id: 3,
            phase: "PHASE 03",
            head: "Metaverse Launch",
            para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut perspiciatis doloremque autem voluptas iste omnis dicta magna"
        },
        {
            id: 6,
            phase: "PHASE 06",
            head: "90% Soldout",
            para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut perspiciatis doloremque autem voluptas iste omnis dicta magna"
        },
    ]
    return (
        <>
            <section id='roadmap'>
                <main>
                    <div className=' flex_b items-start w-[90%] sm:w-[85%] lg:w-[70%] flex-col gap-10 sm:gap-14  mx-auto py-5 pb-14 '>
                        <div>
                            <div className='  text-[14px] sm:text-[16px] font-bold text-[#4ddb9e]'>
                                <b className=' flex items-center gap-1'><span className=' text-[20px] sm:text-[25px]'><IoIosGift/></span>OUR GOALS </b>
                            </div>
                            <div className='head hover:text-white font-bold text-[1.3rem] sm:text-[1.5rem] lg:text-[2rem]'>
                                <h2>ROADMAP</h2>
                            </div>
                        </div>
                        <div>
                            <div className='flex_c grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4'>
                                {roadmap.map((items) => {
                                    return (
                                        <div className="rounded flex flex-col gap-2 py-2 sm:py-3 md:py-6 px-2 sm:px-3" key={items.id}>
                                           <div>
                                                <div className='  text-[13px] sm:text-[16px] font-bold text-[#4ddb9e] flex items-center gap-1'>
                                                    {items.phase} <span className=' text-[20px] sm:text-[25px]'><IoIosCheckmark/></span>
                                                </div>
                                                <div className=' text-[14px] md:text-[16px] font-bold '>
                                                    {items.head}
                                                </div>
                                           </div>
                                           <div className=' font-medium text-[12px] sm:text-[13px]'>
                                            {items.para}
                                           </div>
                                        </div>
                                    )
                                })

                                }
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Roadmap