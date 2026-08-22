import { useState, useEffect, useRef } from 'react'
import Btns from '../Components/Btns'
import Navbar from '../Components/Navbar';
import img_home from '../assets/img/home_page_img.png'
import Nft_1 from '../assets/img/NFT_img/nft_1.jpeg'
import Nft_2 from '../assets/img/NFT_img/nft_2.jpeg'
import Nft_3 from '../assets/img/NFT_img/nft_3.jpeg'
import Nft_4 from '../assets/img/NFT_img/nft_4.jpeg'
import Nft_5 from '../assets/img/NFT_img/nft_5.png'
import how from '../assets/img/box_img/how.svg'
import rot from '../assets/img/rot.png'

import { TfiArrowTopRight } from 'react-icons/tfi'

import Mintnow from '../Components/Mintnow';

const nft_info = [
  {
    total: 5555,
    name: 'Total Items'
  },
  {
    total: 896,
    name: 'Total Owners'
  },
  {
    total: 0.55,
    name: 'Floor Price [ETH]'
  },
  {
    total: 25.5,
    suffix: 'K',
    name: 'Volume Traded [ETH]'
  },
];

const Home = () => {
  let sm_text = "text-[14px] md:text-[20px]"

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
      step: "Select Your Quantity"
    },
    {
      id: 3,
      step: "Confirm the Transaction"
    },
    {
      id: 4,
      step: "Receive Your NFTs"
    },
  ]
  const scrollRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(nft_info.map(() => 0));

  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(statsElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return undefined;

    const duration = 1400;
    const startTime = performance.now();
    const animationFrame = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setAnimatedStats(nft_info.map((item) => {
        if (typeof item.total !== 'number') return progress === 1 ? item.total : '0';
        return item.total % 1 === 0
          ? Math.floor(item.total * easedProgress).toLocaleString()
          : `${(item.total * easedProgress).toFixed(2)}${item.suffix || ''}`;
      }));

      if (progress < 1) requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);
    return () => cancelAnimationFrame(frame);
  }, [statsVisible]);

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
          <div className="flex widh flex-col gap-12 py-10 pt-8 md:flex-row md:items-center md:justify-between md:gap-10 md:py-16 md:pt-20">
            <div className='flex w-full flex-col gap-3 sm:gap-[1rem] md:w-[48%] md:gap-5'>
              <div className='head hidden text-[2rem] hover:text-white md:block md:text-[2.5rem] lg:text-[3.1rem]'>
                <h2>CRAZY META 🎯</h2>
                <h2>NFT COLLECTIONS </h2>
              </div>
              <div className='flex gap-4 px-1 pt-3 text-[1rem] font-bold sm:text-[1.1rem] md:py-4 lg:text-[1.8rem]'>
                <span className='flex gap-2'>1705<span>/</span>5555</span>
                <span>MINTED</span>

              </div>

              <div className='flex'>
                <div className='flex flex-wrap items-center gap-3 sm:gap-7'>
                  <Btns text={"MINT NOW"} className={"btn_sky rounded-none text-[12px]  py-2 px-3  sm:px-4 sm:py-3 lg:px-6 bg-[#4ddb9e] hover:bg-transparent hover:text-white text-black  flex_c"} icon={""} onclick={mintcontrol} />
                  <Btns text={"WHITELIST NOW"} className={"btn_gray rounded-none text-[12px]  py-2 px-3 sm:px-4  sm:py-3 lg:px-8  flex_c"} icon={""} />
                </div>
              </div>
              <div className={`sm:pt-4 font-semibold ${sm_text}`}>
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
            <div className='w-full md:w-[46%]'>
              <div className='pb-4 text-[1.2rem] font-bold text-white sm:text-[1.5rem] md:hidden'>
                <h2>CRAZY META 🎯</h2>
                <h2>NFT COLLECTIONS 💯</h2>
              </div>
              <div className='relative flex aspect-[0.9] items-center justify-center px-5 py-8 sm:px-12 sm:py-14 md:px-14'>
                <img src={img_home} alt='Bitin NFT collectible' className='herobg h-full w-full object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]' />



                <button type='button' aria-label='Mint is live' onClick={mintcontrol} className='absolute -left-2 -top-2 z-10 h-20 w-20 rounded-full bg-[#ffe000] text-black shadow-xl shadow-black/30 transition-transform hover:scale-105 sm:-left-7 sm:-top-7 sm:h-32 sm:w-32'>
                  <svg viewBox='0 0 160 160' className='mint-badge-text absolute inset-0 h-full w-full' aria-hidden='true'>
                    <defs>
                      <path id='mintBadgePath' d='M 80,80 m -53,0 a 53,53 0 1,1 106,0 a 53,53 0 1,1 -106,0' />
                    </defs>
                    <text className='fill-black text-[16px] uppercase tracking-[1px]'>
                      <textPath href='#mintBadgePath' startOffset='0%'>• MINT IS LIVE • MINT IS LIVE • MINT IS LIVE  </textPath>
                    </text>
                  </svg>
                  <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-3xl' aria-hidden='true'>
                    <TfiArrowTopRight />
                  </span>
                </button>
                
              </div>
            </div>
          </div>
        </div>
        {/*number section*/}
        <div className='w-full mt-10'>
        
          <div className=' flex flex-col gap-10 '>
            <div ref={statsRef}>
              <div className='w-full border-y border-white/[0.04] bg-[#0b1821]/90 py-8 sm:py-10'>
                <div className='mx-auto grid w-[90%] max-w-6xl grid-cols-2 gap-y-8 sm:w-[88%] md:grid-cols-4 md:gap-6'>
                  {nft_info.map((items, index) => {
                    return (
                      <div className='flex min-w-0 flex-col items-center justify-center text-center md:items-start md:text-left' key={index}>
                        <div className="min-h-10 px-1 text-3xl font-black leading-none tracking-tight text-white sm:text-4xl lg:text-[2.25rem]">
                          {animatedStats[index]}
                        </div>
                        <div className='mt-3 px-1 text-[11px] font-semibold text-gray-300 sm:text-[18px]'>
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
            <div className='w-full pb-10'>
              <div className='mx-auto flex w-[88%] max-w-6xl flex-col gap-5 md:w-[80%]'>
                <div className='flex items-center gap-3 md:text-[4rem] font-bold text-[#4ddb9e] md:text-base'>
                  EASY STEPS <span className='text-gray-600' aria-hidden='true'>
                    <img src={how} alt="" />
                  </span>
                </div>
                <div className='head hover:text-white font-bold lg:text-[2rem]'>
                  <h1>HOW TO MINT</h1>
                </div>
                <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-4 md:gap-5'>
                  {mint_steps.map((items, index) => {
                    const numberColors = ['#00d084', '#4659d9', '#d5c900', '#e0004f'];
                    return (
                      <div key={items.id} className='flex w-full items-center gap-5 text-left text-  font-[900] sm:gap-6 md:items-start md:gap-3 lg:text-lg'>
                        <span className='min-w-[3.5rem] text-7xl font-[900] leading-[0.9] text-transparent sm:text-8xl' style={{ WebkitTextStroke: `1px ${numberColors[index]}` }}>
                          {items.id}
                        </span>
                        <span className='max-w-[10rem] pt-3 text-xl font-[900] leading-relaxed text-white'>
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