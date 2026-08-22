import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Btn from './Btn'
import { FaDiscord } from "react-icons/fa6";
import { IoIosFolderOpen } from "react-icons/io";
import { IoIosMenu } from "react-icons/io"
import logo from '../assets/img/logo.png'
import Login from '../Sections/Login';
import Connect from '../Sections/Connect';


const Navbar = ({ back }) => {
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
      tag: ''
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

  return (
    <>
      <section>
        <header className={`${back}`}>
          {
            connecttoggle ?
              <Connect connect_control={connect_control} />
              :
              <div>

              </div>
          }
          <nav className={`w-[100%]`}>
            <div className=" flex_b  py-3 pt-6 widh">
              <div className=' flex_b items-center  md:w-[65%]'>
                <div className=' flex_C'>
                  <span className='flex  items-center gap-2 text-[1.3rem] hover:text-[#4ddb9e] sm:text-[2rem] lg:text-[2.2rem] px-1 font-bold '>
                    <img src={logo} className='h-[20px] sm:h-fit' alt="" />{logo_link.map((items) => {
                      return (
                        <React.Fragment key={items.id}>
                          <span>
                            <Link to={items.linkto}>{items.tag}</Link>
                          </span>
                        </React.Fragment>)
                    })
                    }</span>
                </div>
                <div className='hidden
                 md:block'>
                  <ul className=' flex flex-wrap font-semibold text-xs sm:text-sm items-center'>
                    {
                      navlinks.map((items) => {
                        return (

                          <Link key={items.id} className=' px-2 mx-1 hover:text-[#4ddb9e]' to={items.LinkTo}  >{items.tag}</Link>

                        )
                      })
                    }
                  </ul>
                </div>

              </div>
              <div className=' flex_c gap-5'>
                <div className='flex gap-3'>

                  <div>
                    <Btn text={"JOIN"} className={"btn_gray flex_c"} icon={<FaDiscord />} onclick={login_togglehanddle} />
                  </div>
                  <div className='bg-[#ffffff1f] rounded-full sm:rounded-none'>
                    <Btn text={"CONNECT"} className={"btn_sky  flex_c"} icon={<IoIosFolderOpen />} onclick={connect_control} /></div>
                </div>

                <div className=' block md:hidden'>
                  {toggle ?

                    <div onClick={togglehanddle}>
                      <span className=' font-bold text-2xl'><IoIosMenu /></span>
                    </div>
                    :

                    <div className=''>
                      <ul className=' flex  flex-col absolute top-0 py-9 left-0  text-center w-full  font-semibold text-sm'>
                        {
                          navlinks.map((items) => {
                            return (
                              <>

                                <Link key={items.id} to={items.LinkTo} className='py-3 sm:py-0 px-2 mx-1 hover:text-[#4ddb9e]' onClick={togglehanddle} >{items.tag}</Link>

                              </>
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

    </>
  )
}

export default Navbar;