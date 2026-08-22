import React from 'react'
import A_Navbar from '../Components/A_Navbar'
import Blog from '../Sections/Blog'
import Blog_1 from '../assets/img/blog/Blog_1.jpeg'
import Blog_2 from '../assets/img/blog/Blog_2.jpeg'
import Blog_3 from '../assets/img/blog/Blog_3.jpeg'
import Blog_4 from '../assets/img/blog/Blog_4.jpeg'
import Blog_5 from '../assets/img/blog/Blog_5.jpeg'
import Blog_6 from '../assets/img/blog/Blog_6.jpeg'
import Blog_7 from '../assets/img/blog/Blog_7.jpeg'
import Blog_8 from '../assets/img/blog/Blog_8.jpeg'
import { Link } from 'react-router-dom'
import { FaFacebookMessenger } from 'react-icons/fa'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import Footer from '../Sections/Footer'

const BlogPage = () => {
    const Bloog_content = [
        {
            id: 1,
            img: Blog_1,
            Related: "NFT",
            Heading: "How to Create Your 1st Crypto NFTs",
            Date: "24 FEB 2023",
            Description: "Onthe ohter hand we have to create th NFTs to sell.And to stay in bussiness and to corrprate with others."
        },
        {
            id: 2,
            img: Blog_2,
            Related: "GAMMING",
            Heading: "The New World is All About Metaverse",
            Date: "14 June 2023",
            Description: "Onthe ohter hand we have to create th NFTs to sell.And to stay in bussiness and to corrprate with others."
        },
        {
            id: 3,
            img: Blog_3,
            Related: "METAVERSE",
            Heading: "It's Greate Chance to Invest in NFTs",
            Date: "24 FEB 2023",
            Description: "Onthe ohter hand we have to create th NFTs to sell.And to stay in bussiness and to corrprate with others."
        },
        {
            id: 4,
            img: Blog_4,
            Related: "METAVERSE",
            Heading: "It's Greate Chance to Invest in NFTs",
            Date: "24 FEB 2023",
            Description: "Onthe ohter hand we have to create th NFTs to sell.And to stay in bussiness and to corrprate with others."
        },
        {
            id: 5,
            img: Blog_5,
            Related: "METAVERSE",
            Heading: "It's Greate Chance to Invest in NFTs",
            Date: "24 FEB 2023",
            Description: "Onthe ohter hand we have to create th NFTs to sell.And to stay in bussiness and to corrprate with others."
        },
        {
            id: 6,
            img: Blog_6,
            Related: "METAVERSE",
            Heading: "It's Greate Chance to Invest in NFTs",
            Date: "24 FEB 2023",
            Description: "Onthe ohter hand we have to create th NFTs to sell.And to stay in bussiness and to corrprate with others."
        },
        {
            id: 7,
            img: Blog_7,
            Related: "METAVERSE",
            Heading: "It's Greate Chance to Invest in NFTs",
            Date: "24 FEB 2023",
            Description: "Onthe ohter hand we have to create th NFTs to sell.And to stay in bussiness and to corrprate with others."
        },
        {
            id: 8,
            img: Blog_8,
            Related: "METAVERSE",
            Heading: "It's Greate Chance to Invest in NFTs",
            Date: "24 FEB 2023",
            Description: "Onthe ohter hand we have to create th NFTs to sell.And to stay in bussiness and to corrprate with others."
        },

        {
            id: 9,
            img: Blog_3,
            Related: "METAVERSE",
            Heading: "It's Greate Chance to Invest in NFTs",
            Date: "24 FEB 2023",
            Description: "Onthe ohter hand we have to create th NFTs to sell.And to stay in bussiness and to corrprate with others."
        },




    ]
    return (
        <>
            <section>
                <main>
                    <div>
                        <A_Navbar />
                        <div>
                            <div className='flex  w-full bg-gray-950 flex-col items-center justify-center'>
                                <div className="w-[90%] px-10 sm:w-[80%] md:w-[90%] lg:w-[70%] py-20 flex  items-center gap-[80px]  justify-between mx-auto mt-3">
                                    <div className='flex flex-col gap-10  justify-center'>
                                        <div>
                                            <div className='text-[16px] mb-1 font-bold  text-[#4ddb9e]'>
                                                <b className=' flex items-center gap-1  text-[14px] md:text-[16px] font-bold'>BLOG POST </b>
                                            </div>
                                            <div className='head hover:text-white font-bold lg:text-[2rem]'>
                                                <h3>LATEST ARTICLES</h3>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 '>
                                            {
                                                Bloog_content.map((items) => {
                                                    return (
                                                        <div className='flex flex-col  cursor-default mb-2 gap-3 items-start justify-between w-full bg-gray-900'>
                                                            <div className=' w-full'>
                                                                <img src={items.img} alt="" className=' w-full' />
                                                            </div>
                                                            <div className=' flex flex-col gap-2 px-4 pb-4'>
                                                                <div className="flex text-[14px] font-semibold gap-2  items-center">
                                                                    <div className='text-[#4ddb9e]'>{items.Related}</div> .
                                                                    <div>{items.Date}</div>
                                                                </div>
                                                                <div className=' text-[18px] font-bold'> <h3>{items.Heading}</h3></div>
                                                                <div className=' text-[14px] font-medium text-gray-400'>
                                                                    <p> {items.Description}</p>
                                                                </div>
                                                                <div className='flex justify-between items-center pr-2 text-[14px] font-semibold'>
                                                                    <div>
                                                                        <Link to={''} className=' cursor-pointer hover:text-[#4ddb9e]' >READ MORE</Link>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 cursor-pointer hover:text-[#4ddb9e]'>
                                                                        <span><FaFacebookMessenger /></span> 3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </main>
            </section>
        </>
    )
}

export default BlogPage