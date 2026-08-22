// import React from 'react'
import A_Navbar from '../Components/A_Navbar'
import Hero from '../Sections/Hero'
import L_About from '../Sections/L_About'
import L_Roadmap from '../Sections/L_Roadmap'
import L_Team from '../Sections/L_Team'
import L_FCQs from '../Sections/L_FCQs'
import Blog from '../Sections/Blog'
import Footer from '../Sections/Footer'

const L_Main = () => {
  return (
  <>
  <section id=''>
    <main>

      <Hero/>  
      <L_About/>
      <L_Roadmap/>    
      <L_FCQs/>
      <Blog/>
      <Footer/>

    </main>
  </section>
  </>
  )
}

export default L_Main