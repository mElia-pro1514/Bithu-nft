import React from 'react';
import rod_map_img_1 from '../assets/img/NFT_img/l_nft_1.jpeg';
import rod_map_img_2 from '../assets/img/NFT_img/l_nft_2.jpeg';
import rod_map_img_5 from '../assets/img/NFT_img/l_nft_5.jpeg';
import rod_map_img_4 from '../assets/img/NFT_img/l_nft_4.jpeg';
import rod_map_img_3 from '../assets/img/NFT_img/l_nft_3.jpeg';

const L_Roadmap = () => {
  const roadmap_steps = [
    {
      id: 1,
      head: 'Launch The Website',
      persent: 10,
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusamus recusandae neque sapiente.',
      img: rod_map_img_1,
    },
    {
      id: 2,
      head: 'Givenway To Holders',
      persent: 20,
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusamus recusandae neque sapiente.',
      img: rod_map_img_2,
    },
    {
      id: 3,
      head: 'Pre-Sold Start',
      persent: 50,
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusamus recusandae neque sapiente.',
      img: rod_map_img_3,
    },
    {
      id: 4,
      head: 'Legendary Guest Artict Background',
      persent: 75,
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusamus recusandae neque sapiente.',
      img: rod_map_img_4,
    },
    {
      id: 5,
      head: 'Personalize Your NFT',
      persent: 100,
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusamus recusandae neque sapiente.',
      img: rod_map_img_5,
    },
  ];

  return (
    <section className="bg-gray-900">
      <main>
        <div className="flex items-start w-full md:w-3/4 lg:w-2/3 xl:w-1/2 px-4 flex-col gap-8 mx-auto py-5 pt-24 pb-14 mt-[7rem]">
          <div className="text-center w-full">
            <div className="text-[14px] md:text-[16px] font-bold text-[#4ddb9e]">
              <b>OUR GOALS</b>
            </div>
            <div className="head hover:text-white font-bold lg:text-[2rem] pt-4">
              <h2>ROADMAP</h2>
            </div>
          </div>
          <div className="w-full sm:w-[85%] md:w-[90%] flex items-center justify-center flex-col mx-auto lg:w-full">
            {roadmap_steps.map((item) => (
              <div
                className="flex items-center sm:flex-row flex-col-reverse w-full justify-between rounded-lg my-3 bg-[#aaaaaa1f] md:bg-gray-900 text-gray-400 mb-4 md:mb-0"
                key={item.id}
              >
                <div className="flex items-center flex-col md:flex-row justify-between px-4 md:px-6 py-6 md:rounded bg-[#aaaaaa1f] md:basis-[75%] lg:basis-[82%]">
                  <div className="w-full basis-[20%] bg-[#aaaaaa2f] text-center py-6 font-bold text-4xl rounded">
                    {item.persent}
                    <span className="text-[25px]">%</span>
                  </div>
                  <div className="w-full md:basis-[75%] pt-3 md:pt-0 h-full">
                    <h2 className="text-[18px] pb-3 font-bold text-gray-300">
                      {item.head}
                    </h2>
                    <div className="text-[12px] font-semibold">
                      <p>{item.para}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:h-[45vh] overflow-y-hidden h-[30vh] flex item-center justify-center m-auto md:h-full sm:w-[45rem] md:w-full md:basis-[20%] lg:basis-[16%] rounded">
                  <img src={item.img} className="w-fit md:rounded h-fit" alt="" />
                </div>
              </div>
            ))}
          </div>
        
        </div>
      </main>
    </section>
  );
};

export default L_Roadmap;