import React, { useState } from 'react'
import Btns from '../Components/Btns'
import Navbar from '../Components/Navbar';
// import img_home from '../assets/img/home_page_img.jpeg'
import img_hero from '../assets/img/L_home.jpeg'
import A_Navbar from '../Components/A_Navbar'
import l_nft from '../assets/img/NFT_img/l_nft_1.jpeg'
import l_nft_2 from '../assets/img/NFT_img/l_nft_2.jpeg'
import l_nft_5 from '../assets/img/NFT_img/l_nft_5.jpeg'
import l_nft_6 from '../assets/img/NFT_img/l_nft_6.jpeg'
import l_nft_4 from '../assets/img/NFT_img/l_nft_4.jpeg'
import l_nft_3 from '../assets/img/NFT_img/l_nft_3.jpeg'
import Mintnow from '../Components/Mintnow';
import CountdownTimer from './CountdownTimer';


const Hero = () => {
  let sm_text = "text-[14px] "

  let nft_images = [
    {
        id:1,
        img:l_nft,
    },
    {
        id:2,
        img:l_nft_2,
    },
     {
        id:3,
        img:l_nft_3,
    }, {
        id:4,
        img:l_nft_4,
    }, {
        id:5,
        img:l_nft_5,
    }, {
        id:6,
        img:l_nft_6,
    },
]

  const [minttoggle, setminttoggle] = useState(false);
  const mintcontrol = () => {
    setminttoggle(!minttoggle)
  };
  const States = 'Soldout'
  // ETH PRICE IN Coins
  const [ETH_price, setETH_price] = useState(2000);
  const Quantity_coins = 9000;
  const total_coins = `/   ${Quantity_coins}`;
  // NFT price in ETh
  // const [NFT_price, setNFT_price] = useState(0.15);
  const NFT_price = 0.15;

  const [total_Remaining, settotal_Remaining] = useState(0);
  const [total_nft_numbers, setnft_num] = useState(0);
  const total_price = NFT_price * total_nft_numbers;

  const increase_num = () => {
    if (Quantity_coins === 0) {
      return;
    }
    setnft_num(total_nft_numbers + 1)

    let spends = Quantity_coins - total_spend;
    settotal_Remaining(spends)

  }

  const Price_NFT = ETH_price * NFT_price;
  const total_spend = (total_nft_numbers + 1) * Price_NFT;

  const reduce_num = () => {
    if (total_nft_numbers != 0) {
      setnft_num(total_nft_numbers - 1)
      let de_spends = total_Remaining + Price_NFT;
      settotal_Remaining(de_spends)
    }
    else if (total_Remaining == Quantity_coins) {
      settotal_Remaining(0)
    }
    else {
      setnft_num(total_nft_numbers)
    }
  }
  

  return (
    <>
      <section id='Hero' className='bg'>
        <main>
          <div>
            {
              minttoggle ?
              <Mintnow onclick={mintcontrol} />

              :
              <div></div>
            }
            <div>
              <A_Navbar />
            </div>
            <div className="flex_b flex-col-reverse md:flex-row-reverse py-3 pt-6 widh mt-2  md:mt-16">
              <div className=' flex flex-col gap-3 sm:gap-[12px] md:gap-4 mt-4 md:mt-0 w-[95%] sm:w-[75%] md:w-[40%]'>
                <div>
                  <p className=' font-bold'> WHITESLT : <span className=' text-[#d54468]'>SOLDOUT</span></p>
                </div>
                <div className='head hidden md:block hover:text-white text-[1.2rem] md:text-[1.8rem] lg:text-[2.1rem]'>
                  <h2>MINT IS LIVE NOW ! </h2>
                </div>
                <div className='pt-3 md:py-4 text-[12px] sm:text-sm  px-1 font-bold '>
                  <p className=' py-2'>PUBLIC MINT END IN </p>
                  <div>
                   <CountdownTimer/>
                  </div>
                  {/* TIME .... */}
                </div>

                <div className='flex w-full'>
                  <div className=' flex_c gap-2 sm:gap-4 md:gap-7 w-full'>

                    <div className='flex  justify-center '>
                      <div className=' py-3 md:py-2 px-3 cursor-pointer bg-gray-800'><i onClick={reduce_num}>-</i></div>
                      <div className='w-[3rem] justify-center flex  border-[1px] border-gray-800 '>
                        <p className='py-2'>{total_nft_numbers}</p>
                      </div>
                      <div className='py-3 md:py-2 px-3 cursor-pointer bg-gray-800' ><i onClick={increase_num}>+</i></div>
                    </div>

                    <Btns text={"MINT NOW"} className={"btn_sky r ounded-none text-[12px]  py-2 px-3  sm:px-8 sm:py-3 lg:px-6 bg-[#4ddb9e] hover:bg-transparent hover:text-white text-black  flex_c"} icon={""} onclick={mintcontrol} />
                  </div>
                </div>
                <div className={`sm:pt-4 font-semibold ${sm_text}`}>
                  
                  <div>
                    <p>PUBLIC MINT  0.09ETH + GAS</p>
                  </div>

                  <div>
                    <p>FLOOR PRICE 2.08 ETH</p>
                  </div>
                </div>
              </div>
              <div className=' w-[95%] sm:w-[85%] md:w-[50%]'>
                <div className='text-[1.5rem] font-bold pb-4 md:hidden text-white'>
                  <h2>MINT IS LIVE NOW ! </h2>
                </div>
                <div className=' bg-[#ffffff0e] py-4 px-2 flex items-center  justify-center w-full'>
                  <img src={img_hero} alt="" className=' sm:w-[90%] shadow-gray-500 shadow-2xl
                 md:w-[100%] w-[85%]' />
                </div>
              </div>
            </div>
              <style>
                {`
                  @keyframes heroMarquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .hero-marquee {
                    animation: heroMarquee 28s linear infinite;
                  }
                `}
              </style>
              <div className='px-2 sm:px-10 w-[100%] overflow-x-hidden'>
                <div className='flex hero-marquee gap-2 sm:gap-4'>
                  {[...nft_images, ...nft_images].map((items, index) => {
                    return (
                      <div className='min-w-[14rem] sm:min-w-[12rem] md:min-w-[14rem] lg:min-w-[16rem] h-[8rem] sm:h-[12rem] rounded mt-[2rem] sm:mt-[4rem] overflow-hidden flex-shrink-0' key={`${items.id}-${index}`}>
                        <img src={items.img} className='hover:scale-110 rounded h-full w-full object-cover' alt="nft images" />
                      </div>
                    )
                  })}
                </div>
              </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Hero