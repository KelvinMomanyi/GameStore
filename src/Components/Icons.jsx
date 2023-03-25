import React,{useState, useEffect} from 'react'
import {IoLogoPlaystation , IoIosCloudDownload, IoIosCog,IoIosFingerPrint, IoIosLeaf } from 'react-icons/io'
import {FaOpencart} from 'react-icons/fa'
import {FaXbox} from 'react-icons/fa'
import {SiNintendoswitch} from 'react-icons/si'
import {MdComputer} from 'react-icons/md'
import {CiSettings} from 'react-icons/ci'
import {FiPower} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function Icons() {
 const navigate = useNavigate()
 const [itsCart, setCart]= useState(false)
 
 const handleCart=()=>{
   if(itsCart=== false){
    setCart(true)
   }else{
    setCart(false)
   }
 }

  return (
   <div className>
     <div className='play'></div>
     <div className='play2'>
       <ul><IoLogoPlaystation color='#ffff'    style={{ filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.9))" }} /></ul>
       <ul><FaXbox color='#107C10'    style={{ filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.9))" }} /></ul> 
       <ul> <SiNintendoswitch color='#E60012'    style={{ filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.9))" }} /></ul>
       <ul><MdComputer style={{ filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.9))" }} /></ul>
       <ul style={{paddingTop:'160px'}}><CiSettings    style={{ filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.9))" }} /></ul>   
       <ul style={{marginTop:'-30px', scale:"0.9", left:"4px", color:'#8B0000'}}><FiPower onClick={()=>navigate('/')}    style={{ filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))" }} /></ul> 
     </div>  
     <div className='shopcart'>
      <FaOpencart style={{marginTop:'7px', color:'aqua'}} onClick={handleCart}/>
     {itsCart && (<div className='cart'> Cart</div>)}
     
     </div>
     
      
   </div>

      
      
      
  )
}

export default Icons