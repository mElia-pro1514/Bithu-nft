import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import footer from '../assets/img/footer.png'
import Btns from '../Components/Btns'
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { GiSailboat } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
// import { IoIosFolderOpen } from "react-icons/io";



const Footer = () => {
    let footer_style = 'cursor-pointer hover:text-gray-300 hover:scale-125'
    const logo_link = [
        {
            id: 0,
            linkto: '/',
            tag: 'Bithu'
        }
    ]
    const footer_links = [
        {
            id: 0,
            LinkTo: '/',
            tag: 'Home'
        },
        {
            id: 1,
            LinkTo: '/about',
            tag: 'About Us'
        },
        {
            id: 2,
            LinkTo: '/roadmap',
            tag: 'Roadmap'
        },
        {
            id: 3,
            LinkTo: '/team',
            tag: 'Team'
        },
        {
            id: 4,
            LinkTo: '/faqs',
            tag: 'FAQs'
        },
        {
            id: 5,
            LinkTo: '/blogs',
            tag: 'Articals'
        }
    ]

    return (
        <>
            <section id='Footer' className='w-full '>
                <main className='w-full flex flex-col mx-auto justify-center items-center'>
                    <div className='flex  w-full bg-gray-900 flex-col items-center justify-center'>
                        <div className="w-[92%] px-0 py-12 sm:w-[80%] sm:px-4 sm:py-20 md:w-[90%] lg:w-[70%] flex flex-col items-center gap-10 justify-between mx-auto mt-3">
                            <div className=' w-full'>
                                <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <div className="">
                                            <div className="head hover:text-white font-bold lg:text-[1.8rem]">
                                                <h2>JOIN OUR COMMUNITY &</h2>
                                                <h2>GET EARLY ACCESS</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap justify-start items-center h-fit gap-3 sm:gap-5">
                                            <Btns text={"COLLECTIONS"}
                                                className={"btn_sky rounded-none text-[11px] sm:text-[12px] py-1 px-2 sm:px-4  sm:py-2 lg:py-[2px] lg:px-4 bg-[#4ddb9e] hover:bg-transparent hover:text-white text-black font-bold  flex_c"}
                                                icon={<GiSailboat />} icon_class={'text-[16px] sm:text-[20px]'} />

                                            <Btns text={"JOIN DISCOUNT"} className={"btn_gray rounded-none text-[11px] sm:text-[12px] bg-[#4149b1]  py-1 px-2 sm:px-4  sm:py-2 lg:py-[2px] lg:px-4 hover:text-white hover:border-[#4149b1] hover:bg-gray-950  flex_c"} icon={<FaDiscord />} icon_class={'text-[16px] sm:text-[20px]'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-950 w-[80%] px-4 py-12  sm:px-8 sm:py-20 flex flex-col items-center gap-10 justify-between  mt-3'>
                        <div className="flex w-full items-start flex-col gap-8 md:flex-row ">
                            <div className=' w-[100%] md:w-[30%] flex flex-col gap-5'>
                                <div className=' flex_C '>
                                    <div className='flex  items-center gap-2 text-[1.3rem] hover:text-[#4ddb9e] sm:text-[2rem] lg:text-[2.2rem] px-1 font-bold '>
                                        {logo_link.map((items) => {
                                            return (
                                                <>
                                                    <span key={items.id}>
                                                        <Link to={items.linkto}><img src={logo} className='h-[20px] sm:h-fit' alt="" /></Link>
                                                    </span>
                                                </>)
                                        })
                                        }</div>

                                </div>
                                <div className=' text-sm font-medium text-gray-400 pr-6'>
                                    <p>Butin is a great solution for lunch your NFT for miming. It use a dictionary 200 Latin words combine with a handfull. </p>
                                </div>
                            </div>
                            <div className="flex w-full md:w-[30%] mt-0 md:mt-0 items-start justify-between">
                                <div className='w-[45%] pr-3'>
                                    <div className=' pt-4'>
                                        <h4 className=' text-base font-bold '>SITEMAP</h4>
                                    </div>
                                    <div className=' text-sm font-medium text-gray-400 py-5'>
                                        {
                                            footer_links.map((items) => {
                                                return (
                                                    <div key={items.id} className=' pb-3'>
                                                        <Link to={items.LinkTo}  >{items.tag}</Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='w-[45%]'>
                                    <div className='pt-4'>
                                        <h4 className='text-sm font-bold'>COMPANY</h4>
                                    </div>
                                    <div className='text-base font-medium text-gray-400 py-5'>
                                        {/* {Compuny_Links.map((items) => {
                                return (
                                    <div className='pb-3'>
                                        <Link to={items.Link_to}>{items.tag}</Link>
                                    </div>
                                )
                            })} */}
                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-[40%] flex flex-col gap-8 items-start md:pl-8'>
                                <div className=' pt-4'>
                                    <h4 className='text-base font-bold'>SUBSCRIBE NEWSLETTER</h4>
                                </div>
                                <div className=' w-full'>
                                    <form action="" className=' py-3 w-full' >
                                        <div className='flex  justify-center w-full'>
                                            <input type="email"
                                                className=' w-full outline-none py-3 pl-2 border-t-[2px] border-l-[2px] border-b-[2px] border-gray-700 text-gray-300  text-[14px] bg-transparent font-medium' placeholder='Eamil Address' />
                                            <button type="submit"
                                                className=' border-none border-[2px]  px-4 text-2xl rounded-none border-[#4ddb9e] bg-[#4ddb9e] text-gray-950'>↗</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex  w-full bg-gray-900 flex-col items-center justify-center'>

                        <div className='bg-gray-900 w-[92%] sm:w-[80%] md:w-[90%] lg:w-[70%] py-4 flex flex-col gap-4 items-center px-4 text-center sm:flex-row sm:justify-between sm:text-left'>
                            <div className='text-sm text-gray-400 w-full sm:w-[65%] md:w-[50%]'>
                                <p>Copyrights @2024 Bithu,All rights reserved.</p>
                            </div>
                            <div className='flex items-end justify-center gap-4 w-full sm:w-[30%] md:w-[60%] overflow-x-hidden'>
                                <div className={`${footer_style}`}>
                                    <Link to={'https://www.fiverr.com'}><GiSailboat />
                                    </Link>                   </div>
                                <div className={`${footer_style}`}>
                                    <Link to={'https://www.fiverr.com'}> <FaTwitter />
                                    </Link>                    </div>
                                <div className={`${footer_style}`}>
                                    <Link to={'https://www.fiverr.com'}> <FaInstagram />
                                    </Link>                     </div>
                                <div className={`${footer_style}`}>
                                    <Link to={'https://www.fiverr.com'}> <FaLinkedinIn />
                                    </Link>                       </div>
                                <div className={`${footer_style}`}>
                                    <Link to={'https://www.fiverr.com'}> <FaTwitter />
                                    </Link>                   </div>
                                <div className={`${footer_style}`}>
                                    <Link to={'https://www.fiverr.com'}> <FaTelegramPlane /></Link>
                                </div>
                                <div className={`${footer_style}`}>
                                    <Link to={'https://www.fiverr.com'}> <FaFacebook />
                                    </Link>                    </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Footer