// import React from 'react'
import art_1 from '../assets/img/members/art_1.jpeg'
import art_2 from '../assets/img/members/art_2.jpeg'

const L_About = () => {
    const aboutinfo = [
        {
            id: 1,
            head: " ABOUT US",
            para1: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni labore sapiente minima tenetur nisi earum quae eaque doloremque facere! Hic nulla nam eius blanditiis tempora officia quis accusamus dolorem maiores!  Lorem ipsum dolor sitinima ,",
            para2: "piente minima tenetur nisi earum quae eaque doloremque facere! Hic nulla nam eius blanditiis tempora officia quis accusamus dolorem maiores!  Lorem ipsum dolor sitminima tenetur nisi earum quae eaque doloremque facere! Hic nulla nam eius blanditiis tempora officia quis accusamus,",
        }
    ];
    let about_members = [
        {
            id: 1,
            img: art_1,
         
            Name: 'Berivan Trane ',
            profiction: 'Artist'
        },
        {
            id: 2,
            img: art_2,
            Name: 'Laye Rose ',
            profiction: 'Co-Artist'
        },
    ]
    const mint_steps = [
        {
            id: 1,
            step: "Connect Your Wallet"
        },
        {
            id: 2,
            step: "Sellect Your Quantity"
        },
        {
            id: 3,
            step: "Confrim Your Tranaction"
        },
        {
            id: 4,
            step: "Receive Your Best NFTs"
        },
    ]
    return (
        <>
            <section id="About">
                <main>
                    <div className='flex  w-full bg-gray-950 flex-col items-center justify-center'>
                        <div className="w-[90%] sm:w-[80%] md:w-[90%] lg:w-[70%] py-32 flex  items-center gap-[80px]  justify-between mx-auto mt-3">
                            <div className="flex gap-1 w-full flex-col md:flex-row items-center text-start">
                                <div className=" w-[100%] px-2 flex gap-3 flex-col md:px-4 py-2">
                                    {aboutinfo.map((items) => {
                                        return (

                                            <div className="flex gap-2 flex-col pr-5 py-2" key={items.id} >
                                                <div className='text-[16px] mb-1 font-bold  text-[#4ddb9e]'>
                                                    <b className=' flex items-center gap-1  text-[14px] md:text-[16px] font-bold'>The Story </b>
                                                </div>
                                                <div className='head hover:text-white font-bold lg:text-[2rem]'>
                                                    <h2>{items.head} </h2>
                                                </div>
                                                <div className=' text-[14px] md:text-[16px] font-normal text-gray-400'>
                                                    <p>
                                                        {items.para1}
                                                    </p>

                                                </div>
                                                <div className='text-[14px] md:text-[16px] font-normal text-gray-400'>

                                                    <p>
                                                        {
                                                            items.para2
                                                        }
                                                    </p>
                                                </div>
                                            </div>

                                        )
                                    })

                                    }
                                </div>
                                <div className=' w-[100%] sm:w-[80%] md:w-full'>
                                    <div className="flex items-center justify-evenly gap-3 font-semibold ">
                                        {
                                            about_members.map((items) => {
                                                return (

                                                    <div className=' bg-gray-900 shadow w-[45%]  hover:shadow-[#ffffff4c] p-3 cursor-pointer flex flex-col gap-1' key={items.id}>
                                                        <div>
                                                            <img src={items.img} alt="" className=' w-full' />
                                                        </div>
                                                        <div className=' text-[12px] sm:text-[16px]'>{items.Name} <span className=' text-[11px]'>✅</span></div>
                                                        <div className=' text-[11px] sm:text-[12px] text-gray-400'>{items.profiction}</div>
                                                    </div>

                                                )
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' w-full mb-3'>
                            <div className='w-[90%] pl-3 lg:w-[70%] flex flex-col gap-3  justify-between mx-auto'>
                                <div className=' text-[14px] md:text-[16px] font-bold text-[#4ddb9e]'>EASY STEPS</div>
                                <div className='head hover:text-white font-bold lg:text-[2rem]'>
                                    <h1>📎HOW TO MINT</h1>
                                </div>
                                <div className=' grid grid-rows-2 grid-cols-2 md:grid-rows-1  md:grid-cols-4'>
                                    {mint_steps.map((items) => {
                                        return (
                                            <div key={items.id} className='  text-center sm:text-start flex md:gap-1 items-center w-[90%] text-[16px] font-bold flex-col md:flex-row'>
                                                <span className=' text-3xl md:text-6xl text-[#4ddb9e]'>
                                                    {items.id}
                                                </span>
                                                <span className='md:px-0  lg:px-5 xl:px-7'>
                                                    {items.step}
                                                </span>
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

export default L_About