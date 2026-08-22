import React, { useState } from 'react'
import Input from './Input'
import Btns from '../Components/Btns'


const Leaf_quection = ({ onclick }) => {
    // consst [quection_data, setquection_data] = useState("")

    return (
        <>
            <div className="w-full bgblur bg-cover h-[100vh] flex items-center justify-center mx-auto fixed bg-[#04040cd7] top-0 left-0 right-0 z-50">
                <div className='w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] flex flex-col  bg-gray-950 pb-10 shadow-gray-600 shadow-2xl '>
                    <div className=' font-bold text-[16px] relative w-full  text-end top-0 right-0'>
                        <i className='bg-[#4ddb9e] pl-3 pr-1 pb-2 cursor-pointer rounded-bl-[100%] ' onClick={onclick} >+</i>
                    </div>
                   <div className=' w-[60%] flex flex-col items-center mx-auto'>
                   <div className='sm:pt-8  text-center font-bold text-[1rem] '>
                        <h3>ASK QUECTION</h3>
                    </div>
                    <div className=' w-full'>
                        <h3 className='text-[#4ddb9e]'>Leaf a quection. </h3>
                        <textarea name="quection" className={` my-9 w-full h-[7rem] bg-transparent border-b-[2px]  border-gray-400 text-gary-200`} id="" ></textarea>
                    </div>
                    <div className='flex  justify-center w-[50%] '>
                        <Btns text={"LEAF NOW"} className={"flex justify-center py-2 pt-3 w-[80%] text-[12px] font-bold bg-[#4ddb9e] hover:bg-transparent hover:text-white text-black border-[1px] border-[#4ddb9e] hover:border-white"}
                            icon={""} onclick={onclick} />

                    </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Leaf_quection