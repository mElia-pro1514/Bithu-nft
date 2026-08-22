import React, { useState } from 'react';
import Leaf_quection from '../Components/Leaf_quection';

const L_FCQs = () => {
  const [expandedItem, setExpandedItem] = useState(true);

  const toggleFAQ = (id) => {
    setExpandedItem((prevItem) => (prevItem === id ? true : id));
  };
  const [ask_Q, setask_Q] = useState(false);
  const ask_quection =()=>{
    setask_Q(!ask_Q)
  }

  const FCQs_data = [

    {
      id: 1,
      question: "What is MINFT ?",
      answar: "Lorem ipsum  dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. L dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. L dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi illum ad!"
    },
    {
      id: 2,
      question: "How we can bay and invest NFTs ?",
      answar: "Lorem ipsum  dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. L dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. L dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi illum ad!"
    },
    {
      id: 3,
      question: "Why we should choose MINFT ?",
      answar: "Lorem ipsum  dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. L dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. L dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi illum ad!"
    },
    {
      id: 4,
      question: "Where we can bay and sell NFTs ?",
      answar: "Lorem ipsum  dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. L dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. L dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi illum ad!"
    },
    {
      id: 5,
      question: "How seure is this token ?",
      answar: "Lorem ipsum  dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. L dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. L dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi illum ad!"
    },
    {
      id: 6,
      question: "What is constract address ?",
      answar: "Lorem ipsum  dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. L dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. L dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis unde adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi illum ad!"
    },
  ]
  return (
    <>
      <main id='fcqs'>
        <section>
          {
            ask_Q ?
            <Leaf_quection onclick={ask_quection}/>
            :
          <div>
            
          </div>
          }
          <div>
            <div className="flex_c justify-center mx-auto py-20 w-full">
              <div className="flex items-start flex-col md:flex-row  gap-10 justify-between w-[100%] md:w-[90%] lg:w-[70%] px-4">
                <div className=" basis-[40%] w-full px-2 sm:px-5 md:px-0 flex flex-col h-[20rem] justify-between">
                 <div>
                 <div className="text-[16px] text-[#4ddb9e] pb-5">
                    <b>Questions & Answers</b>
                  </div>
                  <div className="head hover:text-white font-bold lg:text-[2rem]">
                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                  </div>
                 </div>
                 <div className=' text-[14px] font-semibold pt-5'>
                  <div >
                    <h3>Don't get your answer?</h3>
                  </div>
                  <div>
                    <h3>Feel free to leave a message, <span className='text-[#4ddb9e] cursor-pointer' onClick={ask_quection}>Ask Here !</span> </h3>
                  </div>
                 </div>
                </div>
                <div className="w-full flex flex-col gap-2 px-0 sm:px-5 basis-[55%]">
                  {FCQs_data.map((item) => (
                    <div className="flex flex-col gap-4 bg-[#ededed0e] py-[14px] px-3 sm:px-9 font-medium cursor-pointer"
                      key={item.id} onClick={() => toggleFAQ(item.id)}
                    >
                      <div className="text-[13px] sm:text-[16px] flex justify-between  " >
                        <div>{item.question}</div>
                        <div className='
                         cursor-pointer'>
                          {expandedItem === item.id ? '-' : '+'}
                        </div>
                      </div>

                      {expandedItem === item.id && (
                        <>
                          <hr />
                          <div className="pt-2 text-[12px] md:text-[14px]">
                            <p>
                              <span className="text-[#4ddb9e] font-bold pr-4">: :</span>
                              {item.answar}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default L_FCQs;
