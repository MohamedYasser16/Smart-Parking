import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Tamer from '../assets/images/tamer.jpg'
import Abdelrahman from '../assets/images/body.JPG'
import kero from '../assets/images/kero.jpg'
import Mahgoup from '../assets/images/mahgoub.jpg'
import fathy from '../assets/images/fathy.jpg'
import Hashad from '../assets/images/hashad.jpg'
import Zayed from '../assets/images/zayed.jpg'
import Saleh from '../assets/images/saleh.jpg'
import girls from '../assets/images/girls.jpg'

export default function MemberDetails() {
    let {id} = useParams()

   let team = [ 
            { name:"Dr.Tamer Fetouh" , id:"Tamer" , bio:"Full Professor of Electrical Power Systems Minufiya University" , leader:false , imag:Tamer , phone:"01008669676" , email:"tamer.attia@sh-eng.menofia.edu.eg" } , 
            { name:"Abdelrahman Ahmed Kamal" , id:"Abdelrahman" , leader:false , imag:Abdelrahman , phone:"01020723226" , email:"abdoo11122002@gmail.com" , link:"https://www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273"} , 
            { name:"Ahmed Fathy Eldesokey" , id:"Fathy" , leader:false , imag:fathy , phone:"01026564851" , email:"a.fathyeldsoky@gmail.com" , link:"https://www.linkedin.com/in/ahmed-e-4b8512288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} , 
            { name:"Kerolos Mina Mikahail" , id:"Kerolos" , leader:false , imag:kero , phone:"01279545101", email:"kminamina42@gmail.com" , link:"https://www.linkedin.com/in/kerolos-mina-38a0b8233" } , 
            { name:"Mohamed Mahmoud Hashad" , id:"Hashad", leader:false , imag:Hashad , phone:"01015490590" , email:"mohamedmmshaker@gmail.com" , link:"https://www.linkedin.com/in/mohamed-mm-hashad/"} , 
            { name:"Mostafa Eid Zayed", id:"Zayed", leader:false , imag:Zayed , phone:"01203661040" , email:"abdoo11122002@gmail.com" , link:"https://www.linkedin.com/in/abdelrahman-ahmed-kamal-064933273"} , 
            { name:"Mostafa Mohamed Mahgoup", id:"Mahgoup", leader:false , imag:Mahgoup , phone:"01027545079", email:"mostafamahgoup717@gmail.com " , link:"https://www.linkedin.com/in/mostafamahgoup"} , 
           { name:"Saleh Atef Elsotohy", id:"Saleh", leader:false , imag:Saleh , phone:"01283456707" , email:"salehelstohy@gmail.com" ,  link:"https://www.linkedin.com/in/salehelstohy/"} , 
           { name:"Manar Hosney Mohamed", id:"Manar" , leader:false , imag:girls, email:"manarhosney862@gmail.com" ,link:"https://www.linkedin.com/in/manar-hosny-b83686281"} , 
           { name:"Maruim Farid Elkhooly", id:"Maruim" , leader:false , imag:girls, email:"mariamfaried7@gmail.com" ,link:"https://www.linkedin.com/in/mariam-faried-93381b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " } , 
           { name:"Menna Allah Mamdouh Sakr", id:"Menna" , leader:false , imag:girls , email:"menasakr34@gmail.com" ,link:"https://www.linkedin.com/in/mena-sakr-31292028a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } , 
           { name:"Nawal Wageh Helal", id:"Nawal" , leader:false , imag:girls , email:"nawalhelal357@gmail.com " ,link:"https://www.linkedin.com/in/nawal-helal-02982728a"},
            ]


   let detail = team.filter( x => x.id == id )
   console.log(detail);
   
console.log(detail.name);

  return (
    <>
<div className='background'>


      <div className=' w-[85%] min-h-[85vh] m-auto my-8 flex flex-col justify-center items-center gap-y-1.5 gap-x-3 lg:flex-row '>
       <div className='w-[90%] lg:w-[25%]'>
         <img src={detail[0].imag} alt='member image'  className='w-[100%] rounded-xl' />
       </div>
       <div className="flex flex-col my-3 text-center lg:text-start lg:ms-4 ">

           <h2 className='text-pink-400 text-4xl capitalize p-1.5'>{detail[0]?.name}</h2>
           <p className='text-white  text-2xl mt-2 capitalize p-1.5'>{detail[0]?.bio}</p>

         {
          detail[0]?.email ?  <div className="flex justify-center lg:justify-start items-center gap-x-2 hover:cursor-pointer p-2.5">
             <span className='text-xl text-pink-400'><i class="fa-solid fa-envelope"></i></span> 
             <a href={`mailto:${detail[0]?.email}?subject=Hello&${detail[0]?.name.split( ).slice(0,1).join( )}=Hi`}> <p className='text-white text-xl '>{detail[0]?.email}  </p></a>
          
       </div> : ""
         }

         {
          detail[0].phone ? <div className="flex justify-center lg:justify-start items-center gap-x-2  hover:cursor-pointer p-2.5">
            <span className='text-xl text-pink-400'><i class="fa-solid fa-phone"></i></span> 
              <a href={`https://wa.me/2${detail[0]?.phone}`} target="_blank"> <p className='text-white text-xl capitalize'> {detail[0]?.phone}  </p></a>
          
         </div>  : ""
         }

        
        {
          detail[0].link || detail[0].face ? 
          
          <div className="flex justify-center capitalize bg-gray-800 lg:bg-transparent rounded-xl w-auto lg:justify-start items-center gap-x-2 p-2.5 ">
        {
          detail[0].face ?  <span className='text-white text-xl mx-2.5'>social media links</span> : <span className='text-white text-xl '>Linked In</span> 
        }

          {
            detail[0].link ?   <Link to={detail[0].link} className='text-white mx-1.5 hover:text-pink-400 text-xl' >
            <span className='text-2xl text-pink-400'><i class="fa-brands fa-linkedin"></i></span> 
         </Link>  : ""
          }  
         
         {
          detail[0].face ?   <Link to={detail[0].face} className='text-white hover:text-pink-400 text-xl hover' >
            <span className='text-2xl text-pink-400 '><i class="fa-brands fa-square-facebook"></i></span> 
         </Link>
         : ""
         }
        
       
         </div>
         : ""
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
