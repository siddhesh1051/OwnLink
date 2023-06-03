import React, { useState } from 'react'
import Hero from './img/hero.jpg'
import "../../src/App.css"
import 'react-toastify/dist/ReactToastify.css'
import Login from './Login';
import Register from './Register';


const Authentication = () => {

  const [isNew, setisNew] = useState(false)

  return (
    <div className='flex w-screen h-screen bg-[#eef2f5]'>


      <div className='container bg-white flex justify-start items-center mx-32 my-10 rounded-xl '  >
        {
          isNew ? <Register isNew={isNew} setisNew={setisNew} />
            
          :<Login isNew={isNew} setisNew={setisNew} />
        }
        <div className='modal-right flex-[0.9] overflow-y-hidden'>
          <img className='hero rounded-tr-xl rounded-br-xl' src={Hero} alt="" />
        </div>
      </div>


    </div>

  )
}

export default Authentication
