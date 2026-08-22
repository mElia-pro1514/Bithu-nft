import React from 'react'
import Navbar from '../Components/Navbar'
import Roadmap from '../Sections/Roadmap'
import Contect from '../Sections/Contect'

const RoadmapPage = () => {
  return (
    <>
    <section>
        <main className=''>
            <Navbar/>
            <Roadmap/>
            <Contect/>
        </main>
    </section>
    </>
  )
}

export default RoadmapPage