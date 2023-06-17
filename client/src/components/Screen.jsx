import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '@mui/material';
import SocialIcon from './SocialIcon'
import ScreenLink from './ScreenLink';
import { useEffect } from 'react';
import { getSocials } from '../store/socialSlice';
import { getUsername } from '../store/usernameSlice';
import { getName } from '../store/nameSlice'
import { getBio } from '../store/bioSlice'
import { getLinks } from '../store/linkSlice'

const Screen = () => { 
  const social = useSelector(state => state.social)
  const username = useSelector(state => state.username)
  const name = useSelector(state => state.name)
  const bio = useSelector(state => state.bio)
  const link = useSelector(state => state.link)


  

  const dispatch = useDispatch();
  const email = localStorage.getItem('email');

  const socials = social.socials;
  const links = link.links;
  // console.log(socials);



  useEffect(() => {
    dispatch(getUsername(email)) 
    dispatch(getSocials(email))
    dispatch(getName(email))
    dispatch(getBio(email))
    dispatch(getLinks(email))
  }, [])
 

  

  return (
    <div className='screen-bg flex justify-start items-center w-full h-full flex-col gap-2 overflow-scroll no-scrollbar rounded-[40px]'>
      <div className='flex flex-col text-white gap-1 w-[88%]  p-3 py-6 mt-16 rounded-tl-[60px] rounded-tr-[60px] rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl  backdrop-blur-[10px]'>
        <div className='flex justify-center items-center'>
                <Avatar alt="Remy Sharp" src="https://api.multiavatar.com/kitty.svg" sx={{width:"80px",height:"80px"} } />
        </div>
                <h2 >{username.username?`@${username.username}`:null}</h2>
                
                <p className='mt-2'>{bio.bio?`${bio.bio}`:null} </p>
                
               
              </div>
      <div className='text-white w-[90%] min-h-[80px] overflow-x-scroll no-scrollbar  p-1 py-4 mt- rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl backdrop-blur-[10px]'>
      {
      socials?.length!==0 && 
      <div className='flex h-full w-full items-center justify-end mx-auto my-0 px-1'>

        {
          socials?.length!==0 && socials?.map((item) => (
            <SocialIcon icon={item.type} link={item.link}/>
          ))

        }

     
        </div>}

               
              </div>

              {
               links?.length!==0 &&
               <div className='flex items-center justify-start flex-col text-white gap-1 w-[100%] min-w-[80%] '>
               
                <h1 className='text-center text-xl mt-2'>Links</h1>
                {
                  links?.length!==0 && links?.map((item) => (
                    

                    <ScreenLink link={item.link} title={item.title} />
                  
                  ))
                }
               
              </div>}

    </div>
  )
}

export default Screen
