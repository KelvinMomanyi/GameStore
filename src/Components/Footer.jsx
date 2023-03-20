import React from 'react'

function Footer() {
  const arr=[1,2,3,4,5]
  return (
    <div>
     {
        arr.map((index)=>{
        return <div key={index} className='foot'></div>
        })
     }   
    </div>
  )
}

export default Footer