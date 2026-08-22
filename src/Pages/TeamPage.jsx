import React from 'react'
import Navbar from '../Components/Navbar'
import Team from '../Sections/Team'
import Contect from '../Sections/Contect'

const TeamPage = () => {
  return (
    <>
    <section>
        <main>
            <Navbar back={' bg-gray-900'}/>
            <Team/>
            <Contect/>
        </main>
    </section>
    </>
  )
}

export default TeamPage