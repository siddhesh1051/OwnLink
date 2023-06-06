import React from 'react'
import { useSelector } from 'react-redux'
import Instagram from './icons/instagram.png'
import Facebook from './icons/facebook.png'
import { Avatar } from '@mui/material';
import SocialIcon from './SocialIcon'
import ScreenLink from './ScreenLink';

const Screen = () => {
  const social = useSelector(state => state.social)
  return (
    <div className='flex justify-start items-center w-full h-full flex-col gap-2 overflow-scroll no-scrollbar'>
      <div className='flex flex-col text-white gap-1 w-[88%]  p-3 py-6 mt-16 rounded-tl-[60px] rounded-tr-[60px] rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl  backdrop-blur-[10px]'>
        <div className='flex justify-center items-center'>

                <Avatar alt="Remy Sharp" src="https://api.multiavatar.com/kitty.svg" sx={{width:"80px",height:"80px"} } />
        </div>
                <h2 >@username</h2>
                <p className='mt-2'>bio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore velit nostrum ipsum. </p>
                
               
              </div>
      <div className='text-white w-[90%] min-h-[80px] overflow-x-scroll no-scrollbar  p-1 py-4 mt- rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl backdrop-blur-[10px]'>
        <div className='flex h-full w-full items-center mx-auto my-0 px-1'>

        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Facebook} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Facebook} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Facebook} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Facebook} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Facebook} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Facebook} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Facebook} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>
     
        </div>

               
              </div>

              <div className='flex items-center justify-start flex-col text-white gap-1 w-[100%] min-w-[80%] '>
                <ScreenLink/>
                <ScreenLink/>
                <ScreenLink/>
                <ScreenLink/>
                <ScreenLink/>
                <ScreenLink/>
                <ScreenLink/>
                <ScreenLink/>
              
               
              </div>

    </div>
  )
}

export default Screen
