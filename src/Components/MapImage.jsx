import React from 'react'
import Five from '../images/five.jpg';
import Four from '../images/five.jpg';
import One from '../images/five.jpg';
import Three from '../images/five.jpg';
import Two from '../images/five.jpg';

function MapImage() {
    const images=[Five,One,Three,Two,Four]
  return (
    <div> 
        
   {images.map((img, index)=> (
        <img  className='img' key={index} src={images[img]} alt={img} />
    ))}
    </div>
  )
}

export default MapImage