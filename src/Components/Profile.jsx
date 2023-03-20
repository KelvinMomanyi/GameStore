import React from 'react'
import Prof from '../images/Prof.jpg'

function Profile() {
  return (
    <div className='prof'>
       <img src={Prof}  style={{width: '100%',
          height: '100%',
          objectFit: 'cover',borderRadius:30,}}   />

    </div>
  )
}

export default Profile