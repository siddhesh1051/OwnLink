import React from 'react'
import instagram from './icons/instagram.png'
import facebook from './icons/facebook.png'
import snapchat from './icons/snapchat.png'
import twitter from './icons/twitter.png'
import youtube from './icons/youtube.png'
import web from './icons/web.png'
import behance from './icons/behance.png'
import linkedin from './icons/linkedin.png'
import gmail from './icons/gmail.png'
import reddit from './icons/reddit.png'
import twitch from './icons/twitch.png'
import telegram from './icons/telegram.png'
import pinterest from './icons/pinterest.png'
import { STATUSES } from '../store/store'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { motion } from 'framer-motion';


const SocialIcon = ({icon,link,index}) => {
  const getIcon = (name) => {
    // console.log("inside geticon", name)
    if(name==='instagram') return instagram;
    if(name==='facebook') return facebook;
    if(name==='youtube') return youtube;
    if(name==='snapchat') return snapchat;
    if(name==='twitter') return twitter;
    if(name==='web') return web;
    if(name==='behance') return behance;
    if(name==='linkedin') return linkedin;
    if(name==='gmail') return gmail;
    if(name==='reddit') return reddit;
    if(name==='twitch') return twitch;
    if(name==='telegram') return telegram;
    if(name==='pinterest') return pinterest;

    
    
  }

  const socialStatus = useSelector(state => state.social.status)

  

  
  return (


    <>

{    
    socialStatus === STATUSES.LOADING ?

            <Skeleton circle={true} height={40} width={40} style={{marginLeft:'6px'}} />
            :

     <motion.div 
     initial={{ y: 20, opacity: 0 }}
     transition={{
       delay: index*0.2,
       duration: 0.3
     }}
     whileInView={{ y: 0, opacity: 1 }}
     viewport={{once:true}}
     className='ml-3 bg-gray-300 bg-opacity-80 shadow-3xl backdrop-blur-[10px] p-2 rounded-full flex-shrink-0'> 
            <a href={link} target='_blank'>
              <img src={getIcon(icon)} alt="" className='' />
            </a>
        </motion.div>
}
    </>
  )
}

export default SocialIcon
