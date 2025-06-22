import React from 'react'
import {gsap} from "gsap";
import {ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/navbar';
import Hero from "./components/hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
      <div>
        <Navbar />
         <Hero />
          <div className='h-dvh bg-black'></div>
      </div>
  )
}

export default App
