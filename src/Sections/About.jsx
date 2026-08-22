import  { useState } from 'react';
import AboutBox from '../Components/AboutBox';
import img_about from '../assets/img/about_page_img.png'
import about from '../assets/img/box_img/box1.jpeg'
import about2 from '../assets/img/box_img/box3.jpeg'
import about3 from '../assets/img/box_img/box2.jpeg'
import { IoIosCheckmark } from "react-icons/io"
// import { v4 as uuid } from 'uuid';

const About = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleClick = (id) => {
    setSelectedBox(id);
  };

  const aboutinfo = [
    {
      id: 1,
      head: " ABOUT US",
      para1: " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.",
      para2: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original a latin professor at Hampden-Sydney",
    },
  ];

  const about_box = [
    {
      id: 1,
      img: about2,
      head: "Gamming NFTs",
      para: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.",
      para_more:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed rem nobis, libero veniam tempore quisquam provident vel! Sunt animi dolor eos quidem porro ab quo accusamus architecto nulla veniam quia illum ex obcaecati perspiciatis, incidunt, nobis veritatis culpa hic libero necessitatibus beatae. Nulla quod labore maiores ea eveniet atque nesciunt nobis deserunt numquam accusamus molestiae laudantium, obcaecati sapiente nemo ullam molestias aliquid nihil esse exercitationem tenetur eos cum sequi! Autem unde consequatur alias! At eos similique quo asperiores earum necessitatibus commodi recusandae quas illum soluta quis repudiandae, ad aut sapiente voluptatem veritatis labore eveniet voluptate possietur sapiente omnis eius aut porro quibusdam esse!"
    },
    {
      id: 2,
      img: about,
      head: "Play to Earn",
      para: "Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original.",
      para_more:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed rem nobis, libero veniam tempore quisquam provident vel! Sunt animi dolor eos quidem porro ab quo accusamus architecto nulla veniam quia illum ex obcaecati perspiciatis, incidunt, nobis veritatis culpa hic libero necessitatibus beatae. Nulla quod labore maiores ea eveniet atque nesciunt nobis deserunt numquam accusamus molestiae laudantium, obcaecati sapiente nemo ullam molestias aliquid nihil esse exercitationem tenetur eos cum sequi! Autem unde consequatur alias! At eos similique quo asperiores earum necessitatibus commodi recusandae quas illum soluta quis repudiandae, ad aut sapiente voluptatem veritatis labore eveniet voluptate possietur sapiente omnis eius aut porro quibusdam esse!"
    },
    {
      id: 3,
      img: about3,
      head: "Metaverse Realty ",
      para: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.",
      para_more:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed rem nobis, libero veniam tempore quisquam provident vel! Sunt animi dolor eos quidem porro ab quo accusamus architecto nulla veniam quia illum ex obcaecati perspiciatis, incidunt, nobis veritatis culpa hic libero necessitatibus beatae. Nulla quod labore maiores ea eveniet atque nesciunt nobis deserunt numquam accusamus molestiae laudantium, obcaecati sapiente nemo ullam molestias aliquid nihil esse exercitationem tenetur eos cum sequi! Autem unde consequatur alias! At eos similique quo asperiores earum necessitatibus commodi recusandae quas illum soluta quis repudiandae, ad aut sapiente voluptatem veritatis labore eveniet voluptate possietur sapiente omnis eius aut porro quibusdam esse!"
    },
  ];

  return (
    
      <section id='ABOUT' className='w-full'>
        <main>
          <div className='flex w-full bg-gray-950 flex-col items-center justify-center'>
            <div className="w-[90%] lg:w-[70%] py-32 flex flex-col items-center gap-[80px] justify-between mx-auto">
              {selectedBox ? (
                <AboutBox
                  id={selectedBox}
                  onClose={() => setSelectedBox(null)
                  }
                  about_box ={about_box}
                />
              ) : (
                <div></div>
              )}
              <div className=''>
              
                <div className="flex gap-2 sm:gap-4 w-full flex-col md:flex-row items-center text-start">
                  <div className='basis-[45%] w-[95%] sm:w-[90%] md:w-full overflow-hidden'>
                    <div className='md:hidden text-[14px] sm:text-[16px] mb-4 sm:mb-9 font-bold text-[#4ddb9e]'>
                      <b>The Story </b>
                    </div>
                    <img src={img_about} className='hover:scale-110 w-full h-full object-cover' alt="ABOUT US" />
                  </div>
                  <div className='basis-[55%] w-[90%] sm:w-[80%] md:w-full'>
                    {aboutinfo.map((items) => (
                      <div className="flex gap-3 flex-col md:px-4 py-2" key={items.id}>
                        <div className='hidden md:block text-[18px] mb-5 font-bold text-[#4ddb9e]'>
                          <b className='flex items-center gap-1 font-bold'>
                            The Story
                            <span className='text-[30px]'>
                              <IoIosCheckmark />
                            </span>
                          </b>
                        </div>
                        <div className='head hover:text-white font-bold lg:text-[2rem]'>
                          <h2>{items.head} </h2>
                        </div>
                        <div className='text-[14px] md:text-[16px] font-semibold'>
                          <p> {items.para1} </p>
                        </div>
                        <div className='text-[14px] md:text-[16px] font-semibold'>
                          <p> {items.para2} </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className='flex items-center flex-col sm:grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 w-[100%] text-center'>
                  {about_box.map((items) => (
                     <div    className=" rounded-md w-[93%]  h-[35vh] lg:h-[30vh] sm:w-[100%] hover:cursor-pointer shadow-gray-600 flex flex-col gap-2 text-center md:text-start bg-gray-900 py-6 px-3 md:px-5 hover:bg-gray-950 border-gray-900 border-[2px]"
                      onClick={() => handleClick(items.id)}
                      key={items.id}
                    >
                      <div className="flex justify-center items-center flex-col gap-6 md:flex-row w-full">
                        <div className="rounded-full w-[20%]">
                          <img src={items.img} className="w-full rounded-full" alt="" />
                        </div>
                        <div className="w-[80%] md:w-[80%] text-[20px] font-bold">
                          {items.head}
                        </div>
                      </div>
                      <div className="font-normal text-[14px] md:text-[18px] text-center md:text-start pt-7">
                        {items.para}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </main>
        </section>
      
    );
  };


export default About;