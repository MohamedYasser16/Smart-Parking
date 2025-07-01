import React from 'react'
import { Link } from 'react-router-dom';

export default function TeamItem({info , index }) {

    let {name,bio,leader, imag , id } = info
    console.log(info);
  console.log(index+1);
  
    
  return (
    <>
  <div className="w-full">
    <Link to={`/team/${id}`} >
      <div className={`${ index == "Dr" ? "w-[100%] m-auto bg-blue-500/[0.25] hover:bg-blue-400/[0.4] hover:shadow-[20px_15px_40px_-6px]" : "bg-amber-100/[0.15] hover:bg-pink-100/[0.25] hover:shadow-[20px_15px_40px_-6px] " }  duration-300  shadow-fuchsia-300/[0.5] hover:cursor-pointer relative overflow-hidden flex flex-col md:flex-row items-center p-1.5 my-4 rounded-2xl lg:h-[250px] `}>
       <div className={` ${index != "Dr" ? "bg-cyan-400" : "" } absolute top-[0px] end-[-30px]  w-[90px] lg:w-[150px] lg:h-[60px] lg:end-[-53px] lg:top-[-2px] rotate-45`}>
       { index != "Dr" ? <p className='text-white text-3xl lg:text-5xl  '>{index+1}</p> :  "" }    
       </div>
        { imag ? <img className='w-[100%] rounded-xl sm:w-[25%] h-[100%]'  src={imag} alt="test" />: "" }
      
       <div className='flex flex-col justify-between md:items-start lg:gap-y-2.5 p-2.5'>
        <h2 className='text-pink-500 p-0.5 capitalize font-bold text-2xl lg:text-4xl'>{name}</h2>
        <p className=' bg-transparent h-0.5 opacity-0 md:opacity-100 md:h-auto lg:h-auto capitalize lg:text-3xl text-[20px]'>{bio}</p>
       </div>
    </div>
  </Link>
  </div>
    </>
  )
}
