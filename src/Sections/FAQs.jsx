import React, { useState } from 'react';

const FAQs = () => {
  const [expandedItem, setExpandedItem] = useState(true);

  const toggleFAQ = (id) => {
    setExpandedItem((prevItem) => (prevItem === id ? true : id));
  };

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
      <main id='fcqs' className='w-full'>
        <section>
          <div>
            <div className="flex_c justify-center mx-auto py-20 w-full">
              <div className="flex flex-col items-center gap-10 justify-between w-[95%] sm:w-[80%] md:w-[60%]">
                <div className="text-center">
                  <div className="text-[16px] text-[#4ddb9e]">
                    <b>Questions & Answers</b>
                  </div>
                  <div className="head hover:text-white font-bold lg:text-[2rem]">
                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2 px-2 sm:px-5">
                  {FCQs_data.map((item) => (
                    <div    className="flex w-full flex-col gap-4 bg-[#3f3f3f2d] px-3 py-3 font-medium cursor-pointer sm:px-9 sm:py-4"
                      key={item.id} onClick={() => toggleFAQ(item.id)}
                    >
                      <div className="flex items-center justify-between gap-4 text-[12px] sm:text-[16px]" >
                        <div>{item.question}</div>
                        <div  className='
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

export default FAQs;
