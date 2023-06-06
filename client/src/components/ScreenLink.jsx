import React from 'react'
import landImg from './img/bg1.png'
import "../../src/App.css"

const ScreenLink = () => {
  return (
    <div className='flex text-white w-[87%] mt-4 min-w-[80%] min-h-[150px] rounded-xl aspect-video relative '>
      <img src={landImg} alt="" className='h-full w-full rounded-xl' />
      <div className="overlay-link" style={{background:"linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 90%)"}}>
        <p className='ml-4'>yujky</p>
        </div>
    </div>
  )
}

export default ScreenLink
