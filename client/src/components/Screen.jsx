import React, { useState } from 'react'
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
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { STATUSES } from '../store/store';

const Screen = ({update}) => {
  const social = useSelector(state => state.social)
  const username = useSelector(state => state.username)
  const name = useSelector(state => state.name)
  const bio = useSelector(state => state.bio)
  const link = useSelector(state => state.link)
  const bgVar = useSelector(state => state.bg.bg)
  const usernameStatus = useSelector(state => state.username.status)
  const bioStatus = useSelector(state => state.bio.status)
  const linkStatus = useSelector(state => state.link.status)
  // console.log(status)

  const [profileStatus, setProfileStatus] = useState(STATUSES.IDLE)  


  const [profilePic, setProfilePic] = useState("")
  const [bg, setBg] = useState("")

  // console.log(bgVar)
  // console.log(bg)




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



    handleGetBg(email)
    handleGetProfilePic(email);
  },[bg,bgVar,profilePic,update ] )


  const handleGetBg = async (email) => {
    // console.log(email)
    const { data } = await axios.get(process.env.REACT_APP_API + `/bg/${email}`)
    // console.log(data)
    setBg(data.bg)

  }
  const handleGetProfilePic = async (email) => {
    // console.log(email)
    setProfileStatus(STATUSES.LOADING)
    const { data } = await axios.get(process.env.REACT_APP_API + `/profilepic/${email}`)
    // console.log(data)
    setProfileStatus(STATUSES.IDLE)
    setProfilePic(data.profilePic)

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
    <div className='screen-bg flex justify-start items-center w-full h-full flex-col gap-2 overflow-scroll no-scrollbar rounded-[40px] jus ' style={isBg ? bgStyle : gradStyle}>
      <div className='flex flex-col text-white gap-1 w-[88%]  p-3 py-6 mt-16 rounded-tl-[60px] rounded-tr-[60px] rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl  backdrop-blur-[10px]'>
        <div className='flex justify-center items-center'>{profileStatus === STATUSES.LOADING ? <Skeleton circle={true} height={90} width={90} /> : 
          <Avatar alt="Remy Sharp" src={profilePic} sx={{ width: "90px", height: "90px" }} />
  }
        </div>{
          usernameStatus === STATUSES.LOADING ? <Skeleton width={200} height={20} /> : 
        <h2  >{username.username ? `@${username.username}` : null }</h2>}
        {bioStatus === STATUSES.LOADING ? <Skeleton  height={20} count={2} /> : 
        <p className='mt-2'>{bio.bio ? `${bio.bio}` : null} </p>}


      </div>
      <div className='text-white w-[90%] min-h-[80px] overflow-x-scroll no-scrollbar  p-1 py-4 mt- rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl backdrop-blur-[10px]'>
        <div className='flex h-full w-full items-center justify-start mx-auto my-0 px-1'>
          {
            socials?.length !== 0 && socials?.map((item) => (
              
              <SocialIcon icon={item.type} link={item.link} />
            ))
          }
        </div>
      </div>

{/* <div className='text-white w-[90%] min-h-[80px] overflow-x-auto p-1 py-4 mt- rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl backdrop-blur-[10px]'>
        {socials?.length !== 0 ? (
          <div className='flex h-full flex-nowrap items-center justify-start mx-auto my-0 px-1' onClick={updateSocials}>
            {socials.map((item, index) => (
              <SocialIcon key={index} icon={item.type} link={item.link} />
            ))}
          </div>
        ) : (
          <p>Loading social icons...</p>
        )}
      </div> */}

      {
        links?.length !== 0 &&
        <div className='flex items-center justify-start flex-col text-white gap-1 w-[100%] min-w-[80%] '>

          <h1 className='text-center text-xl mt-2'>Links</h1>
          {
            links?.length !== 0 && links?.map((item) => (

              linkStatus===STATUSES.LOADING ?<Skeleton width={310} height={180} borderRadius={10} style={{marginBottom:'10px'}}/>

              :<ScreenLink link={item.link} title={item.title} linkImage={item?.linkImage} />

            ))
          }

        </div>}

    </div>
  )
}

export default Screen
