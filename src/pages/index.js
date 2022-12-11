import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Milestones from '../components/Milestones'
import Milestones2 from '../components/Milestones2'
import Partners from '../components/Partners'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import TierSystem from '../components/TierSystem'
import Vision from '../components/Vision'
import CompletedMil from '../components/CompletedMil'
import InfoSection from '../components/InfoSection'
import Roadmapextra from '../components/Roadmapextra'
const Home = () => {
  return (
    <>
        <Navbar />
        {/* <Hero /> */}
        <InfoSection />
        <About />
        <Vision />
        <TierSystem />
        {/* <Roadmap /> */}
        <Roadmapextra />
        <CompletedMil />
        <Milestones />
        <Milestones2 />
        <Team />
        <Partners />
        <Footer />
    </>
  )
}

export default Home