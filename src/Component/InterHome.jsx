import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function InterHome() {
  return (<>
      <div className=' w-[100vw] '> 
      
<div className="  flex flex-col items-center justify-center w-[100%] h-[90vh]">
  
  < div className="flex flex-col items-center justify-evenly text-center background absolute z-0 overflow-hidden w-[100%] ">




        <div className='z-1 flex flex-col items-center justify-between gap-y-6'>  



            <div>

<h1 className='text-pink-400 text-6xl font-[Playfair]'>
  <h3 className='h-[128px] text-pink-400 lg:h-auto text-6xl lg:text-7xl'> Smart Parking
  </h3>
    <h2 className='text-white lg:text-7xl text-7xl capitalize font-[Cedarville]'>graduation project </h2>
    <span className=' text-7xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ' >2025</span> 
</h1>
    </div>


      <div className=' my-5 w-[400px] flex justify-between items-center flex-col gap-y-3.5 lg:flex-row '>
    <Link className="bg-gray-700/[0.4] capitalize hover:bg-gray-500/[0.4] duration-500 p-3 rounded-lg text-[25px] text-xl text-pink-400 hover:text-white font-bold" to="/team">
      team member
    </Link>
     <Link className="capitalize hover:text-pink-500 hover:border-pink-400 duration-500 p-3 border-white border-2  rounded-lg text-[25px] text-xl text-white font-bold" to="/project">
      view project
    </Link>
   
</div>

    </div>

   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
  
  
{/* 
   <div className='flex flex-co lg:flex-row justify-around items-center w-[25%]  '>
  <button className=' rounded  w-[60px]'>team member</button>
  <button className='w-[60px]'>view project</button>
  
</div> */}
 

</div>



    
</div>
 

    </div>

  </>
  )
}
