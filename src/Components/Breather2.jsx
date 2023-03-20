import React from 'react'

function Breather() {
  const boxes=[1,2,3]
  return (
    <div>
    {boxes.map((box, index)=>{
      return(
        <div  key={box} className='breather2' style={{marginLeft:(index + 1) * Math.random(boxes) + 'px' }}></div>
      )
      
    })}



       {/*<div className='breather2'></div>
       <div className='breather2'></div>
       <div className='breather2'></div>  
       <div className='breather2'></div>
       <div className='breather2'></div>
       <div className='breather2'></div>  
       <div className='breather2'></div>
       <div className='breather2'></div>
  <div className='breather2'></div>  */}
    </div>
  )
}

export default Breather