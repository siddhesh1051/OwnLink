import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '@mui/material';
import SocialIcon from './SocialIcon'
import ScreenLink from './ScreenLink';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSocials, getSocialsFromUsername } from '../store/socialSlice';
import { getName, getNameFromUsername } from '../store/nameSlice'
import { getBioFromUsername } from '../store/bioSlice'
import { getLinks, getLinksFromUsername } from '../store/linkSlice'
import { getEmailFromUsername } from '../store/emailSlice'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { STATUSES } from '../store/store';
import { motion } from 'framer-motion';
import { ReactGA } from 'react-ga4';


const Fullscreen = () => {
  const social = useSelector(state => state.social)
  //   const username = useSelector(state => state.username)
  const name = useSelector(state => state.name)
  const bio = useSelector(state => state.bio)
  const link = useSelector(state => state.link)
  const emailFromUsername = useSelector(state => state.email?.email)
  const bgVar = useSelector(state => state.bg?.bg)
  const usernameStatus = useSelector(state => state.username.status)
  const bioStatus = useSelector(state => state.bio.status)

  const linkStatus = useSelector(state => state.link.status)
  // console.log(status)

  const [profileStatus, setProfileStatus] = useState(STATUSES.IDLE)


  const [profilePic, setProfilePic] = useState("")
  const [bg, setBg] = useState("")




  const { username } = useParams();
  // console.log(username);



  const dispatch = useDispatch();
  const email = localStorage.getItem('email');

  const socials = social.socials;
  const links = link.links;
  // console.log(emailFromUsername);



  useEffect(() => {
    dispatch(getBioFromUsername(username))
    dispatch(getSocialsFromUsername(username))
    dispatch(getLinksFromUsername(username))
    dispatch(getEmailFromUsername(username))
    dispatch(getNameFromUsername(username))
    handleGetProfilePicfromusername(username)
    handleGetBgfromusername(username)
    ReactGA.pageview(document.location.pathname);


  }, [bg, bgVar])


  const handleGetProfilePicfromusername = async (username) => {
    // console.log(email)
    setProfileStatus(STATUSES.LOADING)
    const { data } = await axios.get(process.env.REACT_APP_API + `/profilepicfromusername/${username}`)
    // console.log(data)
    setProfileStatus(STATUSES.IDLE)
    setProfilePic(data.profilePic)

  }
  const handleGetBgfromusername = async (username) => {
    // console.log(email)
    const { data } = await axios.get(process.env.REACT_APP_API + `/bgfromusername/${username}`)
    // console.log(data)
    setBg(data.bg)

  }
  const isBg = bg?.includes("http")
  console.log(isBg)

  var bgStyle = {

    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
  };
  var gradStyle = {

    backgroundImage: `${bg}`,
    backgroundSize: 'cover',
  };

  return (

    <div className='flex-1 bg-black '>

      {
        emailFromUsername?.length === 0 || emailFromUsername === undefined ?
          <motion.main
            initial={{ y: 20, opacity: 0, scale: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.3
            }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
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
          </motion.main>
          : <div className="iphone-x lg:scale-75   ">
            <div className={` 'screen-bg flex justify-start items-center w-full h-full flex-col gap-2 overflow-scroll no-scrollbar lg:rounded-[40px] '`} style={isBg ? bgStyle : gradStyle}>
              <div className='flex flex-col text-white gap-1 w-[88%]  p-3 py-6 mt-16 rounded-tl-[60px] rounded-tr-[60px] rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl  backdrop-blur-[10px]'>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.3
                  }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className='flex justify-center items-center'>
                  {profileStatus === STATUSES.LOADING ? <Skeleton circle={true} height={90} width={90} /> :
                    <Avatar alt="Remy Sharp" src={profilePic} sx={{ width: "90px", height: "90px" }} />
                  }
                </motion.div>
                {
                  usernameStatus === STATUSES.LOADING ? <Skeleton width={200} height={20} /> :


                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.3
                      }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className='text-white'>{`@${username}`}</motion.h2>
                }

                {bioStatus === STATUSES.LOADING ? <Skeleton height={20} count={2} /> :
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.3
                    }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className='mt-2'>{bio.bio ? `${bio.bio}` : null} </motion.p>
                }



              </div>



              <motion.div
                initial={{ y: 20, opacity: 0 }}
                transition={{
                  delay: 1,
                  duration: 0.3
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='text-white w-[90%] min-h-[80px] overflow-x-scroll no-scrollbar whitespace-nowrap p-1 py-4 mt- rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl backdrop-blur-[10px]'>
                <motion.div className='flex h-full w-full items-center justify-start mx-auto my-0 px-1'>
                  {
                    socials?.length !== 0 && socials?.map((item, index) => (

                      <SocialIcon icon={item.type} link={item.link} index={index} />
                    ))
                  }
                </motion.div>
              </motion.div>

              {
                links?.length !== 0 &&
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.3
                  }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className='flex items-center justify-center flex-col text-white gap-1 w-[100%] min-w-[80%] '>

                  <h1 className='text-center text-xl mt-2'>Links</h1>
                  {
                    links?.length !== 0 && links?.map((item, index) => (

                      linkStatus === STATUSES.LOADING ? <Skeleton width={310} height={180} borderRadius={10} style={{ marginBottom: '10px' }} />

                        : <ScreenLink link={item.link} title={item.title} linkImage={item?.linkImage} index={index} />

                    ))
                  }

                </motion.div>}



            </div>
            <i className='speaker '>Speaker</i>
            <b className='camera'>Camera</b>

          </div>

      }
    </div>
  )
}

export default Fullscreen
