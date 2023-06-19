import React, { useState } from 'react'
import Right from './Right'
import Screen from './Screen'
import '../../src/App.css'
import { BiLinkExternal } from 'react-icons/bi'
import { LuCopy, LuCheck, LuLogOut } from 'react-icons/lu'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const Left = () => {

  const [clicked, setclicked] = useState(false)
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("userData");
    navigate("/routes/auth");
    toast.success("Logged out Successfully");
  };


  const username = localStorage.getItem("username")
  const profileLink = `http://localhost:3000/${username}`
  return (
    <div className='flex-1 flex flex-col  justify-start p-2'>
      <div className='flex justify-between items-center  '>

        <button className='px-4 py-2 ml-3 mt-2 bg-red-500 text-white rounded-lg hover:bg-red-700 active:scale-95 duration-300' onClick={logOut}>Logout <LuLogOut className='inline text-xl ml-1 text-white' /></button>
        <div className='mt-2 mr-1'>

          {clicked ? <LuCheck className='inline text-2xl mr-3 text-violet-400 duration-300   ' /> :

            username!==null && <LuCopy className='inline text-2xl mr-3 text-violet-400 underline cursor-pointer duration-300 ' onClick={() => {
              navigator.clipboard.writeText(profileLink); setclicked(true);
              toast.success("Ownlink Copied to clipboard");
              setTimeout(() => {
                setclicked(false)
              }
                , 2500);

            }} />
          }
          {
              username !== null && 
              <a href={`http://localhost:3000/${username}`} target="_blank" className=' text-violet-400 underline underline-offset-4' rel="noopener noreferrer">   {" " + `${profileLink}` + " "} <BiLinkExternal className='inline place-self-center underline underline-offset-4 text-xl' />  </a>
          }
        </div>
      </div>

      <div className="iphone-x scale-75 ">
        <Screen />
        <i className='speaker'>Speaker</i>
        <b className='camera'>Camera</b>


      </div>





    </div>
  )
}

export default Left
