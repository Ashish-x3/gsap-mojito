import React from 'react'
import {gsap} from "gsap";
import {ScrollTrigger, SplitText} from 'gsap/all';
import Navbar from './components/navbar';
import Hero from "./components/hero.jsx";
import Cocktails from "./components/Cocktails.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Cocktails/>
        </div>
    )
}

export default App
