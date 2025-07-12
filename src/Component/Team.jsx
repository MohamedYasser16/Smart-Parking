import React from 'react'
import TeamItem from './TeamItem'

import Tamer from '../assets/images/tamer.jpg'
import Abdelrahman from '../assets/images/body.JPG'
import kero from '../assets/images/kero.jpg'
import Mahgoup from '../assets/images/mahgoub.jpg'
import fathy from '../assets/images/fathy.jpg'
import Hashad from '../assets/images/hashad.jpg'
import Zayed from '../assets/images/zayed.jpg'
import Saleh from '../assets/images/saleh.jpg'
import girls from '../assets/images/girls.jpg'

export default function Team() {

  let team = [ 
             { name:"Dr.Tamer Fetouh" , id:"Tamer" , bio:"Full Professor of Electrical Power Systems Minufiya University" , leader:false , imag:Tamer , phone:"01008669676" , email:"tamer.attia@sh-eng.menofia.edu.eg" } , 
             { name:"Abdelrahman Ahmed Kamal" , id:"Abdelrahman" , leader:false , imag:Abdelrahman , phone:"01020723226" , email:"abdoo11122002@gmail.com" , link:"https://www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273"} , 
             { name:"Ahmed Fathy Eldesokey" , id:"Fathy" , leader:false , imag:fathy , phone:"01026564851" , email:"a.fathyeldsoky@gmail.com" , link:"https://www.linkedin.com/in/ahmed-e-4b8512288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} , 
             { name:"Kerolos Mina Mikahail" , id:"Kerolos" , leader:false , imag:kero , phone:"01279545101", email:"kminamina42@gmail.com" , link:"https://www.linkedin.com/in/kerolos-mina-38a0b8233" } , 
             { name:"Mohamed Mahmoud Hashad" , id:"Hashad", leader:false , imag:Abdelrahman , phone:"01015490590" , email:"mohamedmmshaker@gmail.com" , link:"https://www.linkedin.com/in/mohamed-mm-hashad/"} , 
             { name:"Mostafa Eid Zayed", id:"Zayed", leader:false , imag:Zayed , phone:"01203661040" , email:"abdoo11122002@gmail.com" , link:"https://www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273"} , 
             { name:"Mostafa Mohamed Mahgoup", id:"Mahgoup", leader:false , imag:Mahgoup , phone:"01027545079", email:"mostafamahgoup717@gmail.com " , link:"https://www.linkedin.com/in/mostafamahgoup"} , 
            { name:"Saleh Atef Elsotohy", id:"Saleh", leader:false , imag:Saleh , phone:"01283456707" , email:"salehelstohy@gmail.com" ,  link:"https://www.linkedin.com/in/salehelstohy/"} , 
            { name:"Manar Hosney Mohamed", id:"Manar" , leader:false , imag:girls, email:"manarhosney862@gmail.com" ,link:"https://www.linkedin.com/in/manar-hosny-b83686281"} , 
            { name:"Maruim Farid Elkhooly", id:"Maruim" , leader:false , imag:girls, email:"mariamfaried7@gmail.com" ,link:"https://www.linkedin.com/in/mariam-faried-93381b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " } , 
            { name:"Menna Allah Mamdouh Sakr", id:"Menna" , leader:false , imag:girls , email:"menasakr34@gmail.com" ,link:"https://www.linkedin.com/in/mena-sakr-31292028a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } , 
            { name:"Nawal Wageh Helal", id:"Nawal" , leader:false , imag:girls , email:"nawalhelal357@gmail.com " ,link:"https://www.linkedin.com/in/nawal-helal-02982728a"},
             ]
        
    

  return (
    <>
     <div className="flex flex-col items-center  text-center background absolute z-0 overflow-hidden w-[100%] h-[100vh] ">
  <div className='text-white  w-[90%] m-auto' >

    <div className='w-[98%] flex flex-col items-center m-auto '>
      <p className=' text-3xl text-center lg:text-start lg:text-5xl my-4'>this project done Under the supervision of </p>
       <TeamItem info={team[0]} index="Dr" /> 
    </div>
    
    <h2 className='text-center lg:text-start mt-5 text-3xl lg:text-4xl font-bold capitalize mx-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text '>Our team members</h2>
  
  <div className='p-3 w-[95%] flex flex-col items-center m-auto'>
     {
    team.filter( (i, index) => index > 0 ).map( (i, index) =>  <TeamItem info={i} index={index} /> )
   }
  </div>
   
  </div>


   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>

     </div>
    </>
  )
}
