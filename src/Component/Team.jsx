import React from 'react'
import TeamItem from './TeamItem'

import Tamer from '../assets/images/tamer.jpg'
import Abdelrahman from '../assets/images/body.JPG'
import kero from '../assets/images/kero.jpg'
import Mahgoup from '../assets/images/mahgoub.jpg'
import fathy from '../assets/images/body.JPG'
import Hashad from '../assets/images/body.JPG'
import Zayed from '../assets/images/body.JPG'
import Saleh from '../assets/images/body.JPG'
import girls from '../assets/images/girls.jpg'

export default function Team() {

  let team = [ 
            { name:"Dr.Tamer Fetouh" , id:"Tamer" , bio:"Full Professor of Electrical Power Systems Minufiya University" , leader:false , imag:Tamer , phone:"01008669676" , email:"abdoo11122002@gmail.com" } , 
            { name:"Abdelrahman Ahmed Kamal" , id:"Abdelrahman" , leader:false , imag:Abdelrahman , phone:"01020723226" , email:"abdoo11122002@gmail.com" , link:"www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273"} , 
            { name:"Ahmed Fathy Eldesokey" , id:"Fathy" , leader:false , imag:fathy , phone:"01026564851" , email:"abdoo11122002@gmail.com" , link:"www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273"} , 
            { name:"Kerolos Mina Mikahail" , id:"Kerolos" , leader:false , imag:kero , phone:"01279545101", email:"kminamina42@gmail.com" , link:"linkedin.com/in/kerolos-mina-38a0b8233" } , 
            { name:"Mohamed Mahmoud Hashad" , id:"Hashad", leader:false , imag:Hashad , phone:"01015490590" , email:"abdoo11122002@gmail.com" , link:"www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273"} , 
            { name:"Mostafa Eid Zayed", id:"Zayed", leader:false , imag:Zayed , phone:"01203661040" , email:"abdoo11122002@gmail.com" , link:"www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273"} , 
            { name:"Mostafa Mohamed Mahgoup", id:"Mahgoup", leader:false , imag:Mahgoup , phone:"01027545079", email:"mostafamahgoup717@gmail.com " , link:"https://www.linkedin.com/in/mostafamahgoup"} , 
           { name:"Saleh Atef Elsotohy", id:"Saleh", leader:false , imag:Saleh , phone:"01283456707" , email:"abdoo11122002@gmail.com" ,  link:"www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273"} , 
           { name:"Manar Hosney Mohamed", id:"Manar" , leader:false , imag:girls, phone:"01207298849" , email:"abdoo11122002@gmail.com" ,link:"www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273" } , 
           { name:"Maruim Farid Elkhooly", id:"Maruim" , leader:false , imag:girls, phone:"01033933294" , email:"abdoo11122002@gmail.com" ,link:"www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273" } , 
           { name:"Menna Allah Mamdouh Sakr", id:"Menna" , leader:false , imag:girls, phone:"01098352975" , email:"abdoo11122002@gmail.com" ,link:"www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273" } , 
           { name:"Nawal Wageh Helal", id:"Nawal" , leader:false , imag:girls, phone:"01023677074" , email:"abdoo11122002@gmail.com" ,link:"www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273"},
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
