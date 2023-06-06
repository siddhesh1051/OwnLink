import React from 'react'
import landImg from './img/landImg.jpeg'
const ScreenLink = () => {
  return (
    <div className='flex text-white w-[90%] mt-2 min-w-[80%] min-h-[150px] rounded-xl '>
      <img src={landImg} alt="" className=' object-cover h-full w-full' />
    </div>
  )
}

export default ScreenLink
