import { useEffect, useState } from "react";
import React from 'react'
// import axios from 'axios'
// import one from '../images/one.jpg'
// import GTA from '../images/GTA.mp4'
// import {MediaQuery} from "react-responsive"
// import Games from './vidi.json'
// import ReactPlayer from "react-player";
import api from "../API/api";

function MainUi () {
  
    // const [showVideo, setShowVideo] = useState(false);
    const[currentIndex,setCurrentIndex]=useState(0)
    const [games, setGames]=useState([]);
    // const [currentImage, setCurrentImage] = useState(0);
  

    useEffect(() => {
      const fetchData= async()=>{
        const result= await api.get(`https://api.twitch.tv/helix/games/top?${currentIndex}`)

        let dataArray= result.data.data
         dataArray.map(game=>{
           let newURL =game.box_art_url.replace('{width}','1280').replace('{height}','720');
           game.box_art_url=newURL
        })
        setGames(result.data.data)
        console.log(result.data.data)
        

        // setInterval(() => {
        //   setCurrentIndex((currentIndex + 1) % dataArray.length);     
        // }, 3000);
 
            
      }
      fetchData();
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % games.length);
      }, 300000);
      return () => clearInterval(interval);  
 
    },[currentIndex, games.length]);
  
    return (
     <div className='mainUi' >

         
         {games.map(game=>(
          
            <img key={games.igdb_id}src={game.box_art_url}  className="fitImage" alt="$"/>
          
         ))
         
         
         
         /* {
          Games.map((image,index)=>{
           return(
            
              <img  
              key={index}
              src={image.url}
              alt={image.url[currentImage]}
            
              style={{ width: '100%', height: 'auto' }}
              />
           
         

            
          )})
           } */}
  
    </div>
  )
        }

export default MainUi;


// class MainUi extends Component{
//      constructor(){
//       super()
//     this.state={
//       index:0,
//     }

//      }

//  componentDidMount(){
//   const intervalId = setTimeout(() => {
//     this.setState((this.state.index + 1) % Games.length);
//    }, 3000); // Change image every 3 seconds
  
//    return () => clearInterval(intervalId);

//  }
 
 

//  render(){
//   const {index}= this.state
// return(
//  <div className="mainUi">
//    ({
//     Games.map((image, intervalId)=>{
//      return <img
//       key={intervalId} 
//       src={image.img} 
//       alt={image.img}
//        className="fitImage" 
//        style={{ width: '100%', height: '100%' }}/>
      
//     })
    

//    })
//    ({
//     Games.map(()=>{
//       return <ReactPlayer
//         source={{uri:''}}
//         playing={true}
//         controls={true}
//         volume={0.5}
//         width='100%'
//         height='100%'
//       />
//     })

//    })




//  </div>
 
// )
//  }
// }

// export default MainUi;