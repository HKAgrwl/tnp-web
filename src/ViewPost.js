import React from 'react'
import MobileImage from './Components/MobileUser.png'

export default function ViewPost() {
  return (
    <div>
        <img src={MobileImage} alt=""  style={{position:'relative',marginLeft:'24vw',marginTop:'30px'}}/>
        <div className="PostText" style={{ margin:'20px 30px', height:'80vh',boxShadow:'-10px 2px 15px black',borderRadius:'15px'}}>

        </div>
    </div>
  )
}
