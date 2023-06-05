import React from 'react'
import Right from './Right'
import Screen from './Screen'
import '../../src/App.css'


const Left = () => {
  return (
    <div className='flex-1'>
        
        <div className="iphone-x scale-75 ">
  <Screen />
  <i className='speaker'>Speaker</i>
  <b className='camera'>Camera</b>
  {/* <s>10:24</s> */}
  
  <span className='actionbtn'>Left action button</span>
  <span className='actionbtn'>Right action button</span>
</div>
   




    </div>
  )
}

export default Left
