import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Btn from './Btn'
import { FaDiscord } from "react-icons/fa6";
import { IoIosFolderOpen } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { GiSailboat } from "react-icons/gi";
import { IoIosMenu } from "react-icons/io"
import logo from '../assets/img/logo.png'
import Login from '../Sections/Login';
import Connect from '../Sections/Connect';



const A_Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const headerRef = useRef(null);
    let navlinks = [
        {
            id: 0,
            LinkTo: '/',
            tag: 'HOME'
        },
        {
            id: 1,
            LinkTo: '/about',
            tag: 'ABOUT'
        },
        {
            id: 2,
            LinkTo: '/roadmap',
            tag: 'ROADMAP'
        },
        {
            id: 3,
            LinkTo: '/team',
            tag: 'TEAM'
        },
        {
            id: 4,
            LinkTo: '/faqs',
            tag: 'FAQs'
        }

    ];
    const logo_link = [
        {
            id: 0,
            linkto: '/',
            tag: 'Bithu'
        }
    ]

    const [toggle, settoggle] = useState(true);
    const [Login_toggle, setLogin_toggle] = useState(true);
    const login_togglehanddle = () => {
        setLogin_toggle(!Login_toggle)
    }
    const togglehanddle = () => {
        settoggle(!toggle)
    }
    const [connecttoggle, setconnecttoggle] = useState(false);
    const connect_control = () => {
        setconnecttoggle(!connecttoggle)
    }
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const updateNavbarHeight = () => {
            if (headerRef.current) setNavbarHeight(headerRef.current.offsetHeight);
        };

        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);
        return () => window.removeEventListener('resize', updateNavbarHeight);
    }, []);
    const a_l_style = 'p-3 hover:bg-[#ffffff1f] rounded-full '
    return (
        //    
        <>
            <div className='relative z-40'>
                {isScrolled && <div aria-hidden='true' style={{ height: navbarHeight }} />}
            <section className={`${isScrolled ? 'fixed inset-x-0 top-0' : 'relative'}`}>
                <header ref={headerRef} className={`relative ${isScrolled ? 'border-b border-white/15 !bg-black/45 shadow-lg shadow-black/20 backdrop-blur-lg' : 'border-b border-transparent !bg-transparent backdrop-blur-0'} transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500 ease-out`}>
                    {
                        connecttoggle ?
                            <Connect connect_control={connect_control} />
                            :
                            <div>

                            </div>
                    }
                    <nav className=' w-[100%] '>
                        <div className="mx-auto flex w-[calc(100%-2rem)] max-w-[1360px] items-center justify-between py-3 pt-5 sm:w-[90%] sm:py-4 lg:w-[88%]">
                            <div className=' flex_b items-center  md:w-[65%]'>
                                <div className=' flex_C'>
                                    <span className='flex  items-center gap-2 text-[1.3rem] hover:text-[#4ddb9e] sm:text-[2rem] lg:text-[2.2rem] px-1 font-bold '>
                                        {logo_link.map((items) => {
                                            return (

                                                <span key={items.id}>
                                                    <Link to={items.linkto}><img src={logo} className='h-[20px] sm:h-fit' alt="" /></Link>
                                                </span>
                                            )
                                        })
                                        }</span>
                                </div>
                                <div className='hidden          md:block'>
                                    <ul className=' flex flex-wrap font-semibold text-xs sm:text-sm items-center'>
                                        {
                                            navlinks.map((items) => {
                                                return (

                                                    <Link className=' px-2 mx-1 hover:text-[#4ddb9e]' to={items.LinkTo}  key={items.id} >{items.tag}</Link>

                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            </div>
                            <div className='flex items-center gap-2 sm:gap-5'>
                                <div className='flex gap-1 sm:gap-3'>

                                    <div className='flex items-center'>
                                        <div className='blo sm:hidden text-2xl'>
                                            {"›"}
                                        </div>
                                        <div className='no sm:flex gap-0 justify-center items-center ' id="hidded" >
                                            <div className={`${a_l_style}`}>< GiSailboat /></div>
                                            <div className={`${a_l_style}`}><FaTwitter /></div>
                                            <div className={`${a_l_style}`}><FaDiscord /></div>
                                        </div>
                                    </div>
                                    <div className='bg-[#ffffff1f] rounded-full sm:rounded-none'>
                                        <Btn text={"CONNECT"} className={"btn_sky  flex_c"} icon={<IoIosFolderOpen />} onclick={connect_control} /></div>
                                </div>

                                <div className='block md:hidden'>
                                    {toggle ?

                                        <button type='button' aria-label='Open navigation menu' aria-expanded='false' className='flex p-1 text-2xl' onClick={togglehanddle}>
                                            <span className=' font-bold text-2xl'><IoIosMenu /></span>
                                        </button>
                                        :

                                        <div className='absolute left-0 top-full w-full border-t border-white/10 bg-black/75 px-4 py-3 shadow-lg backdrop-blur-lg'>
                                            <div className='flex justify-end'>
                                                <button type='button' aria-label='Close navigation menu' className='p-1 text-2xl leading-none text-gray-300 transition hover:text-[#4ddb9e]' onClick={togglehanddle}>×</button>
                                            </div>
                                            <ul className='flex flex-col text-center font-semibold text-sm'>
                                                {
                                                    navlinks.map((items) => {
                                                        return (

                                                            <Link to={items.LinkTo} className='border-b border-white/5 px-2 py-3 hover:text-[#4ddb9e]' onClick={togglehanddle} key={items.id} >{items.tag}</Link>

                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div>
                        {
                            Login_toggle ?
                                <div>
                                    
                                </div>
                                :
                                <Login onclick={login_togglehanddle} />
                        }
                    </div>
                </header>
            </section>
            </div>

        </>
    )
}

export default A_Navbar