import React from 'react'

function Breather() {
  const boxes=[1,2,3,]
  return (
    <div>
       { 
        boxes.map((box,index)=>{
          return(

            <div key={box} className='breather'  style={{marginLeft: (index + 1) * Math.random(boxes) + 'px'}}></div>

          )
        
        })
       
      }
      {/*<div className='breather'></div>
       <div className='breather'></div>
       <div className='breather'></div>  
       <div className='breather'></div>
       <div className='breather'></div>
       <div className='breather'></div>  
       <div className='breather'></div>
       <div className='breather'></div>
      <div className='breather'></div>  */}
      
    </div>
    
  )
}

export default Breather