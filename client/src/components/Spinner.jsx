import React from 'react'
import SpinnerSvg from './img/Spinner.svg'
const Spinner = () => {
  return (
    <div>
        <img src={SpinnerSvg} className='inline h-[22px] w-[22px]' alt="" />
        <p className='inline ml-3'>Please Wait !</p>
      
    </div>
  )
}

export default Spinner
