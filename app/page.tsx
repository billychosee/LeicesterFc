import Navbar from '@/Components/Navbar'
import React from 'react'
import PersonalInfo from '@/Components/PersonalInfo'
import LandingPage from '@/Components/LandingPage'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      {/* <PersonalInfo name="Billy" surname='Chosee' age={20} /> */}
      <LandingPage />
    </div>
  )
}

export default Homepage