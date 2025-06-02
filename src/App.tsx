import { useEffect } from 'react';
import './App.css'
import Cursor from './Components/Cursor';
import Gretting from './Sections/Gretting';
import ParticaleGenerator from './Test';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import About from './Sections/About';


function App() {
     gsap.registerPlugin(useGSAP)

  useGSAP(()=>{
     gsap.defaults({ease: "power2.inOut" })
     gsap.from(".particales_container",{opacity:0,duration:10})
     })
  return (
    <div className='h-screen w-screen overflow- relative  bg-background-dark '>
       <Cursor/>
       <div className='particales_container h-screen w-screen opacity-60 absolute top-0 left-0'>
          <ParticaleGenerator />
       </div>
       <div className='h-screen w-full  flex flex-col gap-4 justify-center items-center '>
              <Gretting />
       </div>
       
           
       
      
 
    </div>
  )
}

export default App
