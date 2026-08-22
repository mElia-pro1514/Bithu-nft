// import React from 'react';
import {FaArrowAltCircleRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const AboutBox = ({ id, onClose, about_box }) => {
    const boxInfo = about_box.find((item) => (item.id) === id);

    return (
        <div
            className="w-full bg-blur bg-cover h-[100vh] flex items-center justify-center mx-auto fixed bg-[#000000c6] top-0 left-0 right-0 z-50" id={id}
        >
            <div className="w-[95%] sm:w-[85%] md:w-[60%] lg:w-[50%] xl:w-[45%] flex flex-col bg-gray-950 shadow-gray-600 shadow-2xl">
                <div className="font-bold text-[17px] relative w-full text-end top-0 right-0">
                    <i
                        className="bg-[#4ddb9e] pl-3 pr-1 pb-2 cursor-pointer rounded-bl-[100%]"
                        onClick={onClose}
                    >
                        +
                    </i>
                </div>
                <div className="px-4 md:px-8 lg:px-12 py-6 md:py-9">
                    <div className="flex justify-center items-center flex-col w-full text-center gap-2 mb-5">
                        <div className="rounded-full w-[15%]">
                            <img src={boxInfo.img} className="w-full rounded-full" alt="" />
                        </div>
                        <div className="w-[80%] md:w-[80%] text-[18px] font-bold">
                            {boxInfo.head}
                        </div>
                    </div>
                    <div className="font-normal text-[12px] md:text-[14px]">
                        {boxInfo.para_more}
                    </div>
                    <div className=' w-full mx-auto flex items-center justify-center mt-10'>
                        <div>
                            <Link to={'/about'} className=' text-[14px] font-semibold hover:text-[#4ddb9e] flex items-center justify-center gap-3  border-[2px]  border-gray-950 hover:border-[#4ddb9e]  py-2 rounded-sm px-7'>
                                <div>SEE MORE</div> <div className=' pt-[2px]'><FaArrowAltCircleRight /></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;