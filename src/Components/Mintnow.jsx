import React, { useState } from 'react'
import Nft4 from '../assets/img/home_page_img.png'
import Btns from './Btns';


const Mintnow = ({ onclick, }) => {
    const States = 'Soldout'
    // ETH PRICE IN Coins
    const [ETH_price, setETH_price] = useState(18053.4);
    const Quantity_coins = 9999;
    const total_coins = `/   ${Quantity_coins}`; // "here / is for ui rending"
    // NFT price in ETh
    // const [NFT_price, setNFT_price] = useState(0.15);
    const NFT_price = 0.15;

    const [total_Remaining, settotal_Remaining] = useState(0);
    const [total_nft_numbers, setnft_num] = useState(0);
    const total_price = NFT_price * total_nft_numbers;

    
    const in_nft_num = () => {
        if (Quantity_coins != 0 & total_spend > 0) {
            setnft_num(total_nft_numbers + 1)
            settotal_Remaining(Math.round(spends))
        } else {
            console.log("not enough coins");
        }
        
    }
    
    const Price_NFT = ETH_price * NFT_price;
    const total_spend = (total_nft_numbers + 1) * Price_NFT;
    let spends = Quantity_coins - total_spend;


    const de_nft_num = () => {
        if (total_nft_numbers != 0) {
            setnft_num(total_nft_numbers - 1)
            let de_spends = total_Remaining + Price_NFT;
            settotal_Remaining(Math.round(de_spends))
        }
        else if (total_Remaining == Quantity_coins) {
            settotal_Remaining(0)
        }
        else {
            setnft_num(total_nft_numbers)
        }
    }

    const minit_info = [
        {
            id: 1,
            title: 'Remaining',
            detail: total_Remaining,
            total: total_coins
        },
        {
            id: 2,
            title: 'Price',
            detail: NFT_price,
            total: "ETH"
        }
    ]
    return (
        <>
            <section>
                <main className=''>
                    <div className="w-full bgblur bg-cover h-[100vh] flex items-center justify-center mx-auto fixed bg-[#04040cd7] top-0 left-0 right-0 z-50">
                        <div className='w-[95%] sm:w-[80%] md:w-[50%] lg:w-[35%] xl:w-[25%] flex flex-col  bg-gray-950 shadow-gray-600 shadow-2xl '>
                            <div className=' font-bold text-[16px] relative w-full  text-end top-0 right-0'>
                                <i className='bg-[#4ddb9e] pl-3 pr-1 pb-2 cursor-pointer rounded-bl-[100%] ' onClick={onclick} >+</i>
                            </div>
                            <div className='flex_c flex-col gap-4  px-4 py-4'>
                                <div className='sm:pt-4  text-center font-bold text-[1rem] '>
                                    <h3>COLLECT YOUR NFT</h3>
                                    <h3>BEFORE END</h3>
                                </div>
                                <div className=' w-[40%]'>
                                    <div>
                                        <img src={Nft4} alt="" />
                                    </div>
                                </div>
                                <div className=' w-full flex items-center justify-center pt-5 text-[12px]'>
                                    <div className="flex flex-col w-[80%]">
                                        <div>
                                            {
                                                minit_info.map((items) => {
                                                    return (
                                                        <div className="flex_b border-b-[1px] border-gray-800 font-semibold " key={items.id}>
                                                            <div className=' py-2'>
                                                                <p>{items.title}</p>
                                                            </div>
                                                            <div>
                                                                <p><span>{items.detail} </span> <span>{items.total}</span></p>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="flex  w-full border-b-[1px] border-gray-800 font-semibold">
                                            <div className=' basis-[30%] py-2 '>
                                                <p className=''>Quantity</p>
                                            </div>
                                            <div className='flex basis-[40%] justify-center '>
                                                <div className='py-2 cursor-pointer'><i onClick={de_nft_num}>-</i></div>
                                                <div className='w-[3rem] justify-center flex mx-2 border-r-[1px] border-gray-800 border-l-[1px]'>
                                                    <p className='py-2'>{total_nft_numbers}</p>
                                                </div>
                                                <div className='py-2 cursor-pointer' ><i onClick={in_nft_num}>+</i></div>
                                            </div>
                                            <div className='basis-[30%] flex justify-end py-2 '>
                                                <p className='flex items-center  justify-end w-full gap-1'><div className=' text-end overflow-x-hidden w-[30px]'>{parseFloat(total_price)}</div> <span>ETH</span></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='  w-full flex  justify-center '>
                                    <Btns text={"MINT NOW"} className={"flex justify-center py-2 pt-3 w-[80%] text-[12px] font-bold bg-[#4ddb9e] hover:bg-transparent hover:text-white text-black border-[1px] border-[#4ddb9e] hover:border-white"} icon={""} onclick={onclick} />

                                </div>
                                <div className=' text-[10px] font-medium'>
                                    <div>
                                        <p>Presale & Whitelist : <span>{States}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </main>
            </section>
        </>
    )
}

export default Mintnow