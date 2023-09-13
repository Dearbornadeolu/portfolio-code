import Image from 'next/image'
import Nav from './components/Nav'
import Link from 'next/link'
import Hero from './components/Hero'
import About from './components/About'
import Slider from './components/Slider'
import Recent from './components/Recent'
import Testimonial from './components/Testimonial'
import ReachMe from './components/ReachMe'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero/>
      <About/>
      <Slider/>
      <Recent/>
     <Testimonial/>
      <ReachMe/>
      <Nav/>
    </>
  )
}
