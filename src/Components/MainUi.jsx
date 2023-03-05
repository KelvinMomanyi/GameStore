import { useEffect, useState } from "react";
import React,{Component} from 'react'
import axios from 'axios'
import one from '../images/one.jpg'
import GTA from '../images/GTA.mp4'
import {MediaQuery} from "react-responsive"
import Games from './vidi.json'

// function MainUi () {
  
//     const [showVideo, setShowVideo] = useState(false);
//     const[currentIndex,setCurrentIndex]=useState(0)
//     const [images, setImages]=useState([]);
//     const [currentImage, setCurrentImage] = useState(0);
  

//     useEffect(() => {
//       const intervalId = setTimeout(() => {
//         setCurrentImage((currentImage + 1) % Games.length);
//       }, 3000); // Change image every 3 seconds
  
//       return () => clearInterval(intervalId);
//     }, []);
  
//     return (
//      <div className='mainUi' >
//          {
//           Games.map((image,index)=>{
//            return(
            
//               <img  
//               key={index}
//               src={image.url}
//               alt={image.url[currentImage]}
//               className="fitImage"
//               style={{ width: '100%', height: 'auto' }}
//               />
           
         

            
//           )})
//            }
  
//     </div>
//   )
//         }

// export default MainUi;


class MainUi extends Component{
     constructor(){
      super()
    this.state={
      index:0,
    }

     }

 componentDidMount(){
  const intervalId = setTimeout(() => {
    this.setState((this.state.index + 1) % Games.length);
   }, 3000); // Change image every 3 seconds
  
   return () => clearInterval(intervalId);

 }

 

 render(){
  const {index}= this.state
return(
 <div className="mainUi">
   {
    Games.map((image, intervalId)=>{
     return <img key={intervalId} src={image.img} alt={image.img} className="fitImage" style={{ width: '100%', height: 'auto' }}/>
      
    })
    

   }




 </div>
 
)
 }
}

export default MainUi;