import { useState, useEffect, useRef } from 'react'
import Btns from '../Components/Btns'
import Navbar from '../Components/Navbar';
import img_home from '../assets/img/home_page_img.png'
import Nft_1 from '../assets/img/NFT_img/nft_1.jpeg'
import Nft_2 from '../assets/img/NFT_img/nft_2.jpeg'
import Nft_3 from '../assets/img/NFT_img/nft_3.jpeg'
import Nft_4 from '../assets/img/NFT_img/nft_4.jpeg'
import Nft_5 from '../assets/img/NFT_img/nft_5.png'

import Mintnow from '../Components/Mintnow';


const Home = () => {
  let sm_text = "text-[12px] md:text-[16px]"
  const nft_info = [
    {
      total: 5559,
      name: "Total Items"
    },
    {
      total: 89,
      name: "Total Owners"
    },
    {
      total: 0.53,
      name: "Friver Price [CTI-4]"
    },
    {
      total: "22.5k",
      name: "Volume Tripped"
    },
  ]

  const nft_img = [
    {
      id: 1,
      img: Nft_1,
      name: ""
    },
    {
      id: 2,
      img: Nft_2,
      name: ""
    },
    {
      id: 3,
      img: Nft_3,
      name: ""
    },
    {
      id: 4,
      img: Nft_4,
      name: ""
    },
    {
      id: 5,
      img: Nft_5,
      name: ""
    },
    {
      id: 6,
      img: Nft_2,
      name: ""
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
  const scrollRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prev => {
        if (scrollRef.current) {
          const itemWidth = scrollRef.current.children[0]?.offsetWidth || 0;
          const gap = 16; // gap-4 is 1rem = 16px
          const setWidth = (itemWidth + gap) * nft_img.length;
          const newTranslate = prev - 1; // speed
          if (Math.abs(newTranslate) >= setWidth) {
            return 0;
          }
          return newTranslate;
        }
        return prev - 1;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [nft_img.length]);

  const [minttoggle, setminttoggle] = useState(false);
  const mintcontrol = ()=>{
    setminttoggle(!minttoggle)
  };


  return (
    <>
      <main id="HOME" >
      <section className='w-full bg' >
        <div>
          <div>
            {
              minttoggle ?
              <div>

                <Mintnow onclick={mintcontrol} />
              </div>
              :
            <div></div>
            }
          </div>
          <Navbar />
        </div>

        {/* //Connect */}
           

        <div>
          <div className="flex_b flex-col-reverse md:flex-row py-3 pt-6 widh mt-2  md:mt-16">
            <div className=' flex flex-col gap-3 sm:gap-[1rem] md:gap-5'>
              <div className='head hidden md:block hover:text-white text-[1.2rem] md:text-[1.8rem] lg:text-[2.1rem]'>
                <h2>CRAZY META 🎯</h2>
                <h2>NFT COLLECTIONS </h2>
              </div>
              <div className='pt-3 md:py-4 flex gap-4 text-[1rem] sm:text-[1.1rem] lg:text-[1.8rem] px-1 font-bold '>
                <span className='flex gap-2'>32<span>/</span>4044</span>
                <span>MINTED</span>

              </div>

              <div className='flex'>
                <div className=' flex_c gap-4 sm:gap-7'>
                  <Btns text={"MINT NOW"} className={"btn_sky rounded-none text-[12px]  py-2 px-3  sm:px-4 sm:py-3 lg:px-6 bg-[#4ddb9e] hover:bg-transparent hover:text-white text-black  flex_c"} icon={""} onclick={mintcontrol} />
                  <Btns text={"WHITELIST NOW"} className={"btn_gray rounded-none text-[12px]  py-2 px-3 sm:px-4  sm:py-3 lg:px-8  flex_c"} icon={""} />
                </div>
              </div>
              <div className={`sm:pt-4 font-bold ${sm_text}`}>
                <div>
                  <p>MAX 2 NFTS PER WALLET .PRICE 0.09ETH + GAS</p>
                </div>
                <div>
                  <p>MINT IS LIVE <span className=' text-yellow-400'>UNTIL 24 APR 04:00H</span></p>
                </div>
                <div>
                  <p>PRESALE : SOLDOUT</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='text-[1.2rem] sm:text-[2rem] font-bold pb-4 md:hidden text-white'>
                <h2>CRAZY META 🎯</h2>
                 {/* <br /> */}
                <h2>NFT COLLECTIONS 💯</h2>
              </div>
              <div className=' bg-[#fffbfb14] backdrop-blur-lg py-5 flex items-center  justify-center w-full'>
                <img src={img_home} alt="" className=' shadow-[#eeeeee8b]   sm:w-[80%] shadow-2xl
                 md:w-[90%] w-[85%]' />
              </div>
            </div>
          </div>
        </div>
        
        <div className=' w-full mt-10'>
        
          <div className=' flex flex-col gap-10 '>
            <div>
              <div className=' w-full bg-gray-900 py-10 '>
                <div className=' w-[90%] sm:w-[65%] flex items-center justify-between mx-auto'>
                  {nft_info.map((items, index) => {
                    return (
                      <div className='flex items-center justify-center flex-col' key={index}>
                        <div className="  text-[14px] sm:text-[1.5rem] lg:text-[1.8rem] px-2 font-bold">
                          {items.total}
                        </div>
                        <div className='text-[10px] font-semibold'>
                          {items.name}
                        </div>
                      </div>
                    )
                  })

                  }
                </div>
              </div>

              {/* //NFT IMAGES */}
              <div className='px-2 sm:px-10 w-[100%] overflow-x-hidden'>
                <div ref={scrollRef} className=' flex items-center justify-center gap-2 sm:gap-4' style={{ transform: `translateX(${translateX}px)` }}>
                  {[...nft_img, ...nft_img, ...nft_img, ...nft_img].map((items, index) => {
                    return (
                      <div className=' w-[45%] sm:w-[30%] md:w-[22%] lg:w-[15%] h-[10rem] sm:h-[13rem] rounded mt-5 overflow-hidden flex-shrink-0 ' key={`${items.id}-${index}`}>
                        <img src={items.img} className=' hover:scale-110 rounded h-full w-full object-cover' alt="nft images" />
                      </div> 
                    )
                  })

                  }
                </div>
              </div>
            </div>
            <div className=' w-full'>
              <div className='w-[80%] flex flex-col gap-3  justify-between mx-auto'>
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
        </div>
      </section>
      </main>
    </>
  )
}

export default Home