// import  { React } from 'react'
import Home from '../Sections/Home'
import About from '../Sections/About'
import Roadmap from '../Sections/Roadmap'
import Team from '../Sections/Team'
import FAQs from '../Sections/FAQs'
import Contect from '../Sections/Contect'


const Main = () => {


  return (
    <>


      <div className=' flex items-center justify-center mx-auto w-[100%]  '>
        <div className='w-full  flex flex-col items-center justify-center'>
          {/* section are render -------------------------msd--------------------------------*/}
          <Home />
          <About />
          <Roadmap />
          <Team />
          <FAQs />
          <Contect />
        </div>
      </div>



    </>
  )
}

export default Main