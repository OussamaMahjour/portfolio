import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import { useGSAP } from '@gsap/react';


const Gretting = ()=>{



    gsap.registerPlugin(useGSAP)
    gsap.registerPlugin(DrawSVGPlugin)
    useGSAP(()=>{
        gsap.defaults({ease: "power2.inOut" })
        gsap.timeline().fromTo("#m-path", { drawSVG: "0%" }, { drawSVG: "100%", duration: 2,})
        .fromTo(".container-name",{translateY:-gsap.getProperty(".container-name","height")/2},{translateY:0,duration:1})
        .from(".firstname",{x:20+Number(gsap.getProperty(".firstname","width")),duration:1})
        .from(".lastname",{x:-20-Number(gsap.getProperty(".lastname","width")),duration:1},"<")
        .from(".container-line",{width:0,duration:1},"<")
        .fromTo(".hi",{translateY:gsap.getProperty(".hi","height")},{translateY:0,duration:1},"<")
        .fromTo(".im",{translateY:-gsap.getProperty(".im","height")},{translateY:0,duration:1},"<")
  })
  
    return <div className='w-2/3 flex flex-col gap-4 justify-center items-center  z-100'>
              <div className='container-hi text-white text-7xl font-bold overflow-hidden '>
                      <h1 className='hi font-Inter'>Hi ,there!</h1>
              </div>
              <div className='border-b container-line  border-white w-full h-1'></div>
              <div className='container-name   font-Inter  font-medium  rounded  h-20 flex items-center w-fit'>
                     <div className='text-white overflow-hidden flex pr-5 justify-center items-center text-7xl '>
                          <h1 className='im '>I'm</h1>
                      </div>
                      <div className='text-[#80aad4] overflow-hidden flex pr-5 justify-center items-center text-7xl '>
                          <h1 className='firstname ' >Oussama</h1>
                      </div>
                      <div className='  overflow-hidden'>
                        <svg viewBox="0 0 100 100" className="aspect-square  w-15  stroke-[#80aad4] fill-none" id="letter-m">
                          <path id="m-path" d="M10 90 L10 10 L50 70 L90 10 L90 90" strokeWidth="11" />
                        </svg>

                      </div>
                      <div className=' text-special-text-dark py-2 overflow-hidden flex pl-1 items-center h-fit justify-center text-7xl '>
                          <h1 className='lastname font-Inter'>ahjour</h1>
                      </div>
              </div>
       </div>
}



export default Gretting;