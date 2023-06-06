import React from 'react'
import { useSelector } from 'react-redux'
import Instagram from './icons/instagram.png'
import { Avatar } from '@mui/material';
import SocialIcon from './SocialIcon'
import ScreenLink from './ScreenLink';

const Screen = () => {
  const social = useSelector(state => state.social)
  return (
    <div className='flex justify-start items-center w-full h-full flex-col gap-2'>
      <div className='flex flex-col text-white gap-1 w-[90%] p-3 py-6 mt-16 min-w-[80%] min-h-[150px]  rounded-tl-[60px] rounded-tr-[60px] rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl  backdrop-blur-[10px]'>
        <div className='flex justify-center items-center'>

                <Avatar alt="Remy Sharp" src="https://api.multiavatar.com/kitty.svg" sx={{width:"80px",height:"80px"} } />
        </div>
                <h2 >@username</h2>
                <p className='mt-2'>bio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore velit nostrum ipsum. </p>
                
               
              </div>
      <div className='flex flex-wrap text-white gap-1 w-[90%] p-3 py-6 mt-2 min-w-[80%] min-h-[30px] rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl backdrop-blur-[10px]'>
        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>
        <SocialIcon icon={Instagram} link={`https://www.instagram.com/ `}/>

               
              </div>

              <div className='flex items-center justify-start flex-col text-white gap-1 w-[10%] min-w-[80%] '>
                <ScreenLink />

               
              </div>

    </div>
  )
}

export default Screen
