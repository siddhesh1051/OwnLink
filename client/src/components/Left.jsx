import React from 'react'
import Mockup from './icons/mockup.png'
import Right from './Right'
import Home from './Home'
import '../../src/App.css'


const Left = () => {
  return (
    <div className='flex-1 flex justify-center items-center self-center justify-self-center'>
        
        <div class="iphone-x">
  <Right />
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
