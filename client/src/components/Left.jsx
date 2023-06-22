import React, { useState , useRef, forwardRef} from 'react'
import Screen from './Screen'
import '../../src/App.css'
import { BiLinkExternal } from 'react-icons/bi'
import { LuCopy, LuCheck, LuLogOut, LuArrowDown } from 'react-icons/lu'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const Left = ({handleCustomize,update},ref) => {

  const [clicked, setclicked] = useState(false)
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("userData");
    toast.success("Logged out Successfully");
    navigate("/routes/auth");
  };


  const username = localStorage.getItem("username")
  const profileLink = `http://localhost:3000/${username}`
  return (
    <div className='flex-1 flex flex-col  justify-start p-2'>
      <div className='flex lg:justify-between lg:flex-row flex-col items-center gap-2 lg:gap-0  '>

        <button className='px-4 py-2 ml-3mt-2 bg-violet-600 text-white rounded-lg hover:bg-red-700 active:scale-95 duration-300 text-lg' onClick={logOut}>Logout <LuLogOut className='inline lg:text-xl text-lg ml-1 text-white' /></button>
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
              <a href={`http://localhost:3000/${username}`} target="_blank" className=' text-violet-400 underline underline-offset-4' rel="noopener noreferrer">   {" " + `${profileLink}` + " "} <BiLinkExternal className='inline place-self-center underline underline-offset-4 lg:text-xl text-lg' />  </a>
            }
        </div>

      <div className='lg:hidden flex justify-center items-center bg-[#3c3c44] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-full w-48 h-12 mt-2 active:scale-95 duration-200' onClick={handleCustomize}  >
        Customize <LuArrowDown className='inline ml-2 text-lg'/>
      </div>
            </div>

      <div className="iphone-x scale-75" ref={ref}>
        <Screen update={update} />
        <i className='speaker'>Speaker</i>
        <b className='camera'>Camera</b>


      </div>





    </div>
  )
}

export default forwardRef(Left)
