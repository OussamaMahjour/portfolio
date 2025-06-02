import gsap from 'gsap'

const Cursor:React.FC = ()=>{


    document.addEventListener('mousemove', function(event) {
       let x = event.clientX;
       let y = event.clientY;
       gsap.set("#cursor",{left:x,top:y})
     });


    return <div 
    id='cursor' 
    className='
    aspect-square 
    absolute 
    left-0 
    top-0 
    z-1
    w-50 rounded-full 
    transform 
    -translate-y-1/2 
    -translate-x-1/2  
    bg-radial from-[#333333] to-transparent from-0% to-70%
    '></div>
   
}


export default Cursor;