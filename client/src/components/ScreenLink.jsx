import React, { useEffect, useState } from 'react'
import defaultBg from './img/defaultBg.jpg'
import "../../src/App.css"
import { STATUSES } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import Links from './Links'
import Skeleton from 'react-loading-skeleton'
import { motion } from 'framer-motion';
import axios from 'axios'
import { getUsername } from '../store/usernameSlice'

const ScreenLink = ({ link, title, linkImage, index }) => {
  const dispatch = useDispatch();
  const email = localStorage.getItem('email');
  const username = useSelector(state => state.username.username)
  const path = window.location.pathname;

  const getBg = (linkImage) => {
    if (linkImage === undefined || linkImage === "") return defaultBg;
    else return linkImage

  }

  const linkStatus = useSelector(state => state.link.status)

  

  useEffect(() => {
    dispatch(getUsername(email))
}, [])


const increaseLinkViews = async () => {
  try {
    const response = await axios.post(process.env.REACT_APP_API + `/increaseLinksViews/${username}`, {
      title: title, 
    })

    console.log(response.data);
    
  } catch (error) {
    console.error(error);
  }
}


const trackLinkClick = async () => {
  path === '/' ? console.log("Click not counted as you are on dashboard") : increaseLinkViews();
 
};


  return (
    <>
      {
        linkStatus === STATUSES.LOADING ? <Skeleton className='w-full h-full' /> :

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={`flex text-white mt-2 w-[87%] min-w-[80%] rounded-xl aspect-video relative cursor-pointer min-h-[150px] `}  >

            <div className='aspect-video relative '>
             
              <a href={link} target='_blank' className='place-self-center ' onClick={trackLinkClick}   >

                <img src={getBg(linkImage)} className='h-full w-full rounded-xl' />
                <div className="overlay-link" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 90%)" }}>
                  <p className='ml-4'>{title}</p>
                </div>
              </a>


            </div>
          </motion.div>
      }
    </>
  )
}

export default ScreenLink
