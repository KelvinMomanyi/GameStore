import React from 'react'

function Profiles() {
  const profArray=[1,2,3,4]
  return (
    <div>
      {
        profArray.map((prof)=>(
           <div className='prof2' key={prof}  >mue</div>
        ))
      }
      
    </div>
  )
}

export default Profiles