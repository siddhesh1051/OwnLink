import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '@mui/material';
import SocialIcon from './SocialIcon'
import ScreenLink from './ScreenLink';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSocials, getSocialsFromUsername } from '../store/socialSlice';
import { getUsername } from '../store/usernameSlice';
import { getName, getNameFromUsername } from '../store/nameSlice'
import {  getBioFromUsername } from '../store/bioSlice'
import { getLinks, getLinksFromUsername } from '../store/linkSlice'
import { getEmailFromUsername } from '../store/emailSlice'
import axios from 'axios';

const Fullscreen = () => {
  const social = useSelector(state => state.social)
//   const username = useSelector(state => state.username)
  const name = useSelector(state => state.name)
  const bio = useSelector(state => state.bio)
  const link = useSelector(state => state.link)
  const emailFromUsername = useSelector(state => state.email?.email)
  const [profilePic, setProfilePic] = useState("")

  

  const {username} = useParams();
    // console.log(username);

  

  const dispatch = useDispatch();
  const email = localStorage.getItem('email');

  const socials = social.socials;
  const links = link.links;
  console.log(emailFromUsername);



  useEffect(() => {
    dispatch(getBioFromUsername(username))
    dispatch(getSocialsFromUsername(username))
    dispatch(getLinksFromUsername(username))
    dispatch(getEmailFromUsername(username))
    dispatch(getNameFromUsername(username))
    handleGetProfilePic(email)

  }, [])
 

  const handleGetProfilePic = async (email) => {
    // console.log(email)
    const { data } = await axios.get(process.env.REACT_APP_API + `/profilepic/${email}`)
    // console.log(data)
    setProfilePic(data.profilePic)

  }

  return (
    
    <div className='flex-1 bg-black '>

      {
        emailFromUsername?.length===0 || emailFromUsername===undefined ? 
        <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
	<h1 class=" text-9xl font-extrabold text-indigo-300 tracking-widest">404</h1>
	<div class="bg-[#9358f9] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button class="mt-5">
      <a
        class="relative inline-block text-sm font-medium text-[#9358f9] group active:text-[#9358f9] focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#9358f9] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
          <Link to="/routes/auth">Go Back</Link>
        </span>
      </a>
    </button>
</main>
        :<div className="iphone-x lg:scale-75   ">
    <div className='screen-bg flex justify-start items-center w-full h-full flex-col gap-2 overflow-scroll no-scrollbar lg:rounded-[40px]'>
      <div className='flex flex-col text-black gap-1 w-[88%]  p-3 py-6 mt-16 rounded-tl-[60px] rounded-tr-[60px] rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl  backdrop-blur-[10px]'>
        <div className='flex justify-center items-center'>
                <Avatar alt="Remy Sharp" src={profilePic} sx={{width:"90px",height:"90px"} } />
        </div>
                <h2 className='text-black'>{ `@${username}`}</h2>
                
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
               <div className='flex items-center justify-center flex-col text-white gap-1 w-[100%] min-w-[80%] '>
               
                <h1 className='text-center text-xl mt-2'>Links</h1>
                {
                  links?.length!==0 && links?.map((item) => (
                    

                    <ScreenLink link={item.link} title={item.title} linkImage={item.linkImage} />
                  
                  ))
                }
               
              </div>}

    </div>
    <i className='speaker '>Speaker</i>
  <b className='camera'>Camera</b>
  
  </div>

              }
</div>
  )
}

export default Fullscreen
