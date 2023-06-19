import React, { useState } from 'react'
import Hero from './img/hero.jpg'
import "../../src/App.css"
import 'react-toastify/dist/ReactToastify.css'
import Login from './Login';
import Register from './Register';


const Authentication = () => {

  const [isNew, setisNew] = useState(false)

  return (
    <div className='flex bg-[#E6E8EC] h-full'>


      <div className='container bg-white flex justify-center items-center h-full mx-[8%] my-10 rounded-xl lg:rounded-none p-1 lg:p-0'  >
        {
          isNew ? <Register isNew={isNew} setisNew={setisNew} />
            
          :<Login isNew={isNew} setisNew={setisNew} />
        }
        <div className=' modal-right lg:flex-[1.3] lg:overflow-y-hidden lg:flex hidden '>
          <img className='hero' src={Hero} alt="" />
        </div>
      </div>


    </div>

  )
}

export default Authentication
