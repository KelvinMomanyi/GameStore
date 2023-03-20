import React, {useState, useEffect,Component} from 'react'
import GTA from '../images/GTA.mp4'
import Videoplayer from './Videoplayer'
import MapImage from './MapImage';
import images from '../image.json'
import Five from '../images/five.jpg';
import Four from '../images/four.png';
import One from '../images/one.jpg';
import Three from '../images/three.jpg';
import Two from '../images/two.jpg';
import axios from 'axios'




class List extends Component{
  constructor(){
    super();

    this.state={
       images:[],
       index:0,
       scrollLeft: 0
    }

    this.audioRef=React.createRef();
    this.elementRef = React.createRef();
  }


 componentDidMount(){
   fetch('image.json')
    .then(response=>response.json)
    .then(data=>{
      this.setState({images:data})
    })
    
      
    setInterval(() => {
        this.setState((this.state.index + 1) % images.length);
      }, 3000);
     
      this.intervalId = setInterval(() => {
        this.setState(prevState => {
          /*scrollLeft: prevState.scrollLeft + 1*/
          let newScrollLeft = prevState.scrollLeft + 1;
        if (newScrollLeft > this.elementRef.current.scrollWidth - this.elementRef.current.clientWidth) {
          newScrollLeft = 0;
        }
        return {
          scrollLeft: newScrollLeft
        };
     
        });
      }, 50);
    }
 
 stopScrolling=()=> {
  clearInterval(this.intervalId);
}

componentDidUpdate() {
  this.elementRef.current.scrollLeft = this.state.scrollLeft;
}
 handleMouseOver=()=>{
   this.audioRef.current.play();
   this.stopScrolling();
 }

 handleMouseOut=()=>{
  this.audioRef.current.pause();
  this.audioRef.current.currentTime=0;
 }

  render(){
  return(
     
      <div className='list' ref={this.elementRef} style={{ overflowX: "scroll" }}>
        {images.length?
        
        (images.map((image)=> (
          < img className='img2' key={image.id} src={image.url} alt={image.name} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} />
       
        ))):(
          <div className='nothing'> Nothing</div>
        )}
            <audio ref={this.audioRef} src={'./sounds/beep.mp3'}/>
      </div>


  )
}
}



export default List;

/*function List() {
  const[isPlaying, setPlaying]=useState(false);
  
  const list=[1,2,3,4,5]
  /*const images=[Five,One,Three,Two,Four]*/


 /* const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')

       
       .then(res=>setImageUrl(res))
       
  });
  
  const playVideo=()=>{
     setPlaying(true);
  }

  return (
    <div className='list'>
      
        {imageUrl.length ?
        
        (imageUrl.map((image)=> {
          
          <div key={image.id}>{image.name}</div>
       
        })):(
          <div> Nothing</div>
        )
      }
  
      {/*list.map((image,index)=>(
        <div key={index} className='gamelist' onClick={playVideo}>       
        <img  className='img' key={index} src={images[image]} alt={image} />
       

       </div> 
      ))*/
      
       


       {/*<div className='gamelist' onClick={playVideo}>
       </div>
       <div className='gamelist' onClick={playVideo}>
       </div>
       <div className='gamelist' onClick={playVideo}>
       </div>
       <div className='gamelist' onClick={playVideo}>
       </div>*
      
    </div>
  )
}

export default List*/}